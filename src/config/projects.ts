import { identity } from './shared'
import type { ProjectPageContent } from "../types/config";

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
    seo: {
        title: "Projects | Ivan Kranjec",
        description: "Check out what I've been working on.",
        image: identity.logo,
    },
    subtitle: "Check out what I've been working on.",
    projects: [
        {
            title: "I Got a Check Engine Light. So I Wrote a OBDeleven Log Parser.",
            description: "I got a check engine light. So I decided to create a powerful log parser for OBDeleven, designed to extract and analyze data from automotive logs with ease.",
            image: "/projects/obdeleven-log-parser/log.webp",
            year: "2026",
            url: "https://github.com/ikranjec99/obdeleven-log-parser"
        },
        {
            title: "QR code generator API in .NET 8",
            description: "Learn how to generate QR codes seamlessly using .NET 8 and the QRCoder library. Simple, fast, and efficient!",
            image: "/projects/qr-code-generator/qr-code.webp",
            year: "2025",
            url: "https://github.com/ikranjec99/qr-code-generator",
        },
        {
            title: "LLaMA in .NET 8",
            description: "Learn how to leverage Meta’s LLaMA LLM for intelligent, context-aware AI interactions in .NET 8.",
            image: "/projects/llama-core/llama.webp",
            year: "2025",
            url: "https://github.com/ikranjec99/llama-core/tree/master"
        }
    ],
};