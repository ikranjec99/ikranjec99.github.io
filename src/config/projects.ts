import { identity } from './shared'
import type { ProjectPageContent } from "../types/config";

// Project data used by the Work page
export const projectsPageContent: ProjectPageContent = {
    seo: {
        title: "Work | Ivan Kranjec",
        description: "Selected projects and the engineering decisions behind them.",
        image: identity.logo,
    },
    projects: [
        {
            articleId: "echo-browser-request-interceptor",
            title: "Echo",
            description: "A local-first browser extension for intercepting, transforming, and experimenting with HTTP requests.",
            focus: "Browser tooling · local-first architecture · Manifest V3",
            stack: ["TypeScript", "React", "WXT", "Manifest V3"],
            image: "/projects/echo/cover.svg",
            year: "2026",
            url: "https://github.com/ikranjec99/echo"
        },
        {
            articleId: "obdeleven-log-parser",
            title: "OBDeleven Log Parser",
            description: "A CLI parser for turning exported automotive diagnostic logs into structured, reusable data.",
            focus: "Developer tooling · parsing · data modeling",
            stack: [".NET", "CLI", "Parsing"],
            image: "/projects/obdeleven-log-parser/log-parser-cli.webp",
            year: "2026",
            url: "https://github.com/ikranjec99/obdeleven-log-parser"
        },
        {
            articleId: "qr-code-generator",
            title: "QR Code Generator API",
            description: "A small .NET 8 API for generating configurable QR codes for WiFi and other common payloads.",
            focus: "API design · configuration · practical automation",
            stack: [".NET 8", "API", "QRCoder"],
            image: "/projects/qr-code-generator/qr-code.webp",
            year: "2025",
            url: "https://github.com/ikranjec99/qr-code-generator",
        },
        {
            articleId: "llama-core",
            title: "LLaMA .NET Chat Client",
            description: "A .NET 8 experiment that wraps a local Ollama model behind Microsoft.Extensions.AI abstractions.",
            focus: ".NET abstractions · local tooling · replaceable dependencies",
            stack: [".NET 8", "Ollama", "LLM"],
            image: "/projects/llama-core/llama.webp",
            year: "2025",
            url: "https://github.com/ikranjec99/llama-core/tree/master"
        }
    ],
};
