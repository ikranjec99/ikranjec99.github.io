---
title: "Building My Blog with Astro and GitHub Pages"
pubDate: 2026-05-17 #Y-M-D
description: "How this personal blog uses Astro for a fast static website, GitHub Pages for free hosting, and GitHub Actions for deployment."
author: "Ivan Kranjec"
tags: ["Astro", "Static sites", "CI/CD"]
image: { url: "/blogs/blog-github-pages/cover.svg", alt: "Blog GitHub Pages deployment cover" }
---

# Why I wanted a personal site

A personal site is one of those projects that looks simple from the outside, but it quietly says a lot about how you work. For me, it is mostly a blog with room for projects, experiments, contact links, and the small technical decisions that shape my own corner of the web.

For this site, I wanted something lightweight and easy to maintain. I did not need a database, an admin dashboard, or a server running somewhere just to show pages that mostly change when I push code. That made a static website the right fit.

# Why Astro works well for static blogs

Astro is a great choice for static blogs because it is built around shipping less JavaScript by default. Most personal websites do not need a big client-side application. They need fast pages, clean content, reusable components, and a build process that turns everything into static files.

That fits this site nicely. It can have pages like home, about, projects, and blog posts, while still keeping the output simple. Astro builds the project into a `dist` folder containing static HTML, CSS, JavaScript, images, and other assets.

<img src="/blogs/blog-github-pages/astro-content.svg" alt="Markdown content and Astro components building into static HTML">

For a blog-first personal site, that has a few nice advantages:

- pages load quickly
- hosting is simple
- content can live next to the code
- components keep the design consistent
- the final output can be deployed almost anywhere

The blog posts on this site are written as Markdown files, which also keeps the writing flow natural. Instead of managing posts through a CMS, I can create a new file, add frontmatter, write the article, and let Astro generate the page.

# GitHub Pages as a free public home

GitHub Pages is a very practical hosting option for this kind of project. Since the repository is named like a user site, GitHub provides the public URL:

```text
https://ikranjec99.github.io
```

That is a good free domain for a developer blog and portfolio. It is easy to share, connected directly to the GitHub account, and does not require paying for a separate hosting provider just to publish a static site.

For a personal site, this is more than enough. The site is public, fast, and always tied to the source code. When I improve the design, add a project, or publish a new blog post, the deployment can happen from the same repository where the change was made.

# Deployment with GitHub Actions

The deployment is handled by a GitHub Actions workflow in `.github/workflows/deploy.yml`.

The workflow runs when changes are pushed to the `master` branch, and it can also be started manually from the GitHub Actions tab with `workflow_dispatch`.

<img src="/blogs/blog-github-pages/github-actions-deploy.svg" alt="GitHub Actions deployment flow from push to Pages artifact">

The build job does the usual static site work:

```yaml
- name: Checkout your repository using git
  uses: actions/checkout@v6

- name: Setup Node.js
  uses: actions/setup-node@v6
  with:
    node-version: 24
    cache: npm

- name: Install dependencies
  run: npm ci

- name: Build site
  run: npm run build

- name: Upload GitHub Pages artifact
  uses: actions/upload-pages-artifact@v5
  with:
    path: ./dist
```

After the build is done, the deploy job publishes the uploaded artifact to GitHub Pages:

```yaml
- name: Deploy to GitHub Pages
  id: deployment
  uses: actions/deploy-pages@v5
```

I like this setup because the deployment process is visible and repeatable. There is no manual copying of files, no separate FTP step, and no need to remember a special command on my machine. If the build passes in GitHub Actions, the `dist` output is uploaded and deployed.

# The full flow

The nice part is that writing and publishing stay in the same workflow. I can treat the website like any other code project: make a change locally, check that it builds, and push it when it is ready.

1. Write a blog post or update one of the site pages.
2. Push the change to the `master` branch.
3. GitHub Actions starts the deployment workflow automatically.
4. `npm ci` installs the exact dependencies from `package-lock.json`.
5. `npm run build` checks the project and builds the Astro site.
6. The generated `dist` folder is uploaded as a GitHub Pages artifact.
7. GitHub Pages publishes the new version at `ikranjec99.github.io`.

<img src="/blogs/blog-github-pages/pages-publish.svg" alt="GitHub Pages publishing the static site artifact">

That flow is what makes the setup comfortable. The blog content lives close to the code, the build is repeatable, and publishing does not require a separate hosting dashboard. Astro creates the static output, GitHub Actions moves it through the deployment pipeline, and GitHub Pages serves the final site.

# Final thoughts

This blog does not need complicated infrastructure to be useful. It needs to be easy to update, quick to load, and simple enough that publishing new work does not become a project of its own.

Astro, GitHub Pages, and GitHub Actions are a strong combination for that. The result is a static website that lives in GitHub, deploys automatically, and is available publicly at [ikranjec99.github.io](https://ikranjec99.github.io).
