# Ivan Kranjec Portfolio

A personal portfolio and technical blog built with Astro, TypeScript, and Tailwind CSS.

[![Live Site](https://img.shields.io/badge/live-ikranjec99.github.io-2563eb?style=for-the-badge&logo=githubpages&logoColor=white)](https://ikranjec99.github.io/)
[![Astro](https://img.shields.io/badge/Astro-6.2.1-ff5d01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Last Commit](https://img.shields.io/github/last-commit/ikranjec99/ikranjec99.github.io?style=for-the-badge&logo=github)](https://github.com/ikranjec99/ikranjec99.github.io/commits)

[View the live site](https://ikranjec99.github.io/)

## Overview

This repository contains the source code for my personal portfolio website. It is designed to present my work, background, and technical writing in a clean, focused, and professional way.

The site highlights selected projects, shares software engineering notes through blog posts, and provides a simple place for people to learn more about me and get in touch.

## Features

- Responsive portfolio experience for desktop and mobile
- Project showcase with images, descriptions, years, and repository links
- Markdown-based blog posts with reading-time support
- Centralized content configuration for home, about, projects, blog, and shared site data
- SEO metadata for the main pages
- Custom styling with Tailwind CSS and global CSS
- Static build output suitable for GitHub Pages

## Tech Stack

- [Astro](https://astro.build/) for the site framework
- [TypeScript](https://www.typescriptlang.org/) for typed configuration and components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [astro-icon](https://github.com/natemoo-re/astro-icon) with Material Design Icons
- Markdown content for blog posts
- GitHub Pages for hosting

## Project Structure

```text
.
├── public/                 # Static assets, images, fonts, and favicon
├── src/
│   ├── components/         # Reusable Astro components
│   ├── config/             # Site content and page configuration
│   ├── content/posts/      # Blog posts written in Markdown
│   ├── layouts/            # Shared page layout
│   ├── pages/              # Astro routes
│   ├── styles/             # Global styles
│   └── types/              # Shared TypeScript types
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Scripts and dependencies
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/ikranjec99/ikranjec99.github.io.git
cd ikranjec99.github.io
```

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the site for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Content Updates

Most portfolio content is managed through configuration files in `src/config`.

- Home page content: `src/config/home.ts`
- About page content: `src/config/about.ts`
- Project entries: `src/config/projects.ts`
- Blog page metadata: `src/config/blog.ts`
- Shared identity, navigation, and social links: `src/config/shared.ts`

Blog posts live in `src/content/posts` and are written in Markdown.

## Featured Projects

The portfolio currently includes selected work such as:

- OBDeleven log parser
- QR code generator API in .NET 8
- LLaMA integration in .NET 8

Each project entry includes a short description, image, year, and external link.

## Deployment

The site is deployed to GitHub Pages and is available at:

[https://ikranjec99.github.io/](https://ikranjec99.github.io/)

Production builds are generated with:

```bash
npm run build
```

## Author

Ivan Kranjec  
Software Engineer from Croatia

- [GitHub](https://github.com/ikranjec99)
- [LinkedIn](https://www.linkedin.com/in/ikranjec99)
- [Portfolio](https://ikranjec99.github.io/)