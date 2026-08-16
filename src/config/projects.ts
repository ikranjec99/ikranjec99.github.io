import { identity } from './shared'
import type { ProjectPageContent } from "../types/config";

// Project data used by the Work page
export const projectsPageContent: ProjectPageContent = {
    seo: {
        title: "Projects | Ivan Kranjec",
        description: "Selected engineering projects with the problem, approach, stack, and result behind each build.",
        image: identity.logo,
    },
    subtitle: "Selected projects framed as engineering decisions: what problem they solve, how they were approached, and what they make possible.",
    projects: [
        {
            title: "Echo",
            description: "A local-first browser extension for intercepting, transforming, and experimenting with HTTP requests.",
            problem: "Developers often need to alter browser traffic while debugging, but many tools add a proxy, a remote service, or a workflow outside the browser.",
            approach: "Compile typed rules into Manifest V3 APIs, keep state in local browser storage, and isolate browser-specific behavior behind tested adapters.",
            impact: "Provides block, redirect, query, header, CSS, JavaScript, and delay rules without accounts, analytics, or a backend.",
            stack: ["TypeScript", "React", "WXT", "Manifest V3"],
            image: "/projects/echo/cover.svg",
            year: "2026",
            url: "https://github.com/ikranjec99/echo"
        },
        {
            title: "OBDeleven Log Parser",
            description: "A CLI parser for turning exported automotive diagnostic logs into structured, reusable data.",
            problem: "OBDeleven exports useful diagnostic data as text, but the file is structured for humans rather than repeatable analysis.",
            approach: "Model the log as nested sections, parse ECU modules and faults deliberately, and keep the parser easier to evolve than a single fragile regex.",
            impact: "Turns exported car diagnostics into structured data that can be compared, searched, and reused in follow-up tooling.",
            stack: [".NET", "CLI", "Parsing"],
            image: "/projects/obdeleven-log-parser/log-parser-cli.webp",
            year: "2026",
            url: "https://github.com/ikranjec99/obdeleven-log-parser"
        },
        {
            title: "QR Code Generator API",
            description: "A small .NET 8 API for generating configurable QR codes for WiFi and other common payloads.",
            problem: "Sharing WiFi and common QR payloads should not require manual generator websites or repeated one-off work.",
            approach: "Expose QR generation through a small .NET API with configurable payload types and pixel density.",
            impact: "Creates printable, reusable QR codes through a predictable API instead of ad hoc manual generation.",
            stack: [".NET 8", "API", "QRCoder"],
            image: "/projects/qr-code-generator/qr-code.webp",
            year: "2025",
            url: "https://github.com/ikranjec99/qr-code-generator",
        },
        {
            title: "LLaMA .NET Chat Client",
            description: "A .NET 8 experiment that wraps a local Ollama model behind Microsoft.Extensions.AI abstractions.",
            problem: ".NET applications need a clean way to talk to local language models without hard-wiring the app to one provider.",
            approach: "Use Microsoft.Extensions.AI abstractions with Ollama to keep the chat client replaceable and the application logic simple.",
            impact: "Shows how local AI experiments can be built with familiar .NET patterns and swapped providers later.",
            stack: [".NET 8", "Ollama", "LLM"],
            image: "/projects/llama-core/llama.webp",
            year: "2025",
            url: "https://github.com/ikranjec99/llama-core/tree/master"
        }
    ],
};
