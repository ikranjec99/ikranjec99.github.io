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
            title: "QR code generator API in .NET 8",
            description: "Learn how to generate QR codes seamlessly using .NET 8 and the QRCoder library. Simple, fast, and efficient! 🧑🏻‍💻🚀",
            image: "/projects/qr-code-generator/qr-code.png",
            year: "2025",
            url: "https://github.com/ikranjec99/qr-code-generator",
        }
    ],
};