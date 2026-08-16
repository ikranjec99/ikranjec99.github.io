---
title: "Building Echo: A Local-First Browser Request Interceptor"
pubDate: 2026-08-16 #Y-M-D
description: "How I built a Manifest V3 extension that blocks, redirects, and transforms browser requests without a proxy, account, or backend."
author: "Ivan Kranjec"
tags: ["TypeScript", "React", "Browser Extensions", "Manifest V3"]
image: { url: "/projects/echo/cover.svg", alt: "A request flowing through the Echo browser extension" }
---

# The debugging tool I wanted inside the browser

Today I started Echo, a browser extension for intercepting HTTP requests locally. The initial need was simple: while developing a web application, I wanted to block or redirect a request without configuring a proxy or sending browser traffic through a remote service.

That simple requirement quickly became a useful design constraint. Echo should be local-first, explicit about what the browser can and cannot do, and structured like a real engineering tool rather than a collection of event handlers.

By the end of the first development session, Echo could create, edit, enable, disable, and duplicate rules; pause interception globally; import and export rules; and apply several kinds of transformations. More importantly, the rule engine, storage, and synchronization paths were independently testable.

## What Echo can intercept

Echo currently supports:

- blocking and redirecting matching requests
- adding, replacing, or removing URL query parameters
- setting and removing supported request and response headers
- injecting local CSS into explicitly matched pages
- running local JavaScript in an isolated user-script world
- experimentally delaying page-originated `fetch` and `XMLHttpRequest` calls

Rules use Chrome URL-filter patterns and can be toggled independently. A global switch pauses all interception without rewriting the enabled state of every rule.

The extension runs on Chrome, Brave, and other Chromium browsers. There is no backend, account, analytics service, or cloud synchronization. Rules stay in `browser.storage.local`.

## The architecture: the popup is not the runtime

A browser-extension popup disappears as soon as it closes, so it cannot own long-lived interception state. Echo separates the short-lived interface from the background runtime:

```text
React popup
→ Zustand store
→ browser.storage.local
→ background service worker
→ rule compiler
→ declarativeNetRequest
```

The popup edits domain rules. Storage persists them. The service worker listens for changes, compiles enabled rules, and synchronizes the result with the browser's dynamic rule set.

This boundary also improves testing. The compiler is a pure function, while storage and browser APIs are injected behind small interfaces. Most behavior can be verified without launching a browser.

## Compiling domain rules into browser rules

Echo keeps its own stable UUIDs, but Manifest V3 dynamic rules require positive numeric IDs. The compiler deterministically maps application rules to browser rules and converts each action into the appropriate `declarativeNetRequest` shape.

Synchronizing is intentionally done as one replacement operation: read the stored rules and installed rules, remove Echo's previous dynamic IDs, then add the newly compiled set with a single `updateDynamicRules` call. Synchronization requests are queued so storage events cannot race one another.

That distinction matters. The data model describes what the user wants; the compiler describes what this browser API supports today.

## Not every feature belongs to declarativeNetRequest

Manifest V3 does not provide one universal interception mechanism, so Echo uses different browser primitives for different rule types.

CSS rules are applied by a content script using isolated, Echo-owned `<style>` elements. Storage changes replace those elements immediately, which makes disabling a rule predictable.

JavaScript rules use the browser's `userScripts` API and run in the isolated `USER_SCRIPT` world. Scripts are registered with a restrictive configuration, require the browser's explicit **Allow User Scripts** setting, and are documented with a dedicated threat model.

Request delay is more constrained. A packaged main-world bridge wraps page calls to `fetch` and `XMLHttpRequest`, then applies the longest matching delay. It cannot delay navigations, declarative resources, service-worker traffic, or requests that bypass those page APIs. Calling this “experimental request delay” is more accurate than pretending it is network throttling.

## Privacy is an architectural property

Echo requests broad host access because a general-purpose interceptor must be able to match arbitrary sites. That permission deserves a narrow implementation and a clear explanation.

Echo does not upload rules or traffic. It does not inspect request bodies, response bodies, cookies, authorization headers, or browsing history. The supported actions are driven by rules the user explicitly creates, and all state stays in the browser profile.

Local-first is not just product copy here. Removing the server, identity system, telemetry pipeline, and remote rule store removes entire categories of data handling from the design.

## Building backup and duplication early

Rule tools become frustrating when configuration is disposable. Echo can export its rules as JSON and import them again with runtime validation. Imported records are normalized before entering storage, and malformed data is rejected rather than trusted because it came from a file.

Duplication is a smaller feature, but it improves the workflow when several rules share a URL pattern. The duplicate receives a new identity and timestamps, while retaining the configuration the user wants to adjust.

Both features have dedicated unit tests. They are not UI-only conveniences; they operate on the same domain model as the rest of the extension.

## The first-day result

The project moved from an initial scaffold to a working preview with a typed rule model, reactive interface, persistent storage, background synchronization, CI, documentation, and tests covering the core transformations.

The biggest lesson was that browser APIs reward honest boundaries. Some operations are clean declarative rules. Some require content scripts or user scripts. Some are possible only for a subset of page traffic. A useful developer tool should expose those differences instead of hiding them behind an overly broad promise.

Echo is still an early preview. Next steps include deeper manual cross-browser testing, stronger import conflict handling, accessibility review, and deciding which experimental capabilities deserve to become stable. The foundation, though, is in place: local by default, explicit about permissions, and designed so its rule engine can grow without becoming tangled with the popup.

[View Echo on GitHub](https://github.com/ikranjec99/echo)
