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
            title: "Project 1",
            description: "Project 1 Description",
            image: "/demo-2.jpg",
            year: "2024",
            url: "https://github.com/ikranjec99",
        },
        {
            title: "Project 1",
            description: "Project 1 Description",
            image: "/demo-2.jpg",
            year: "2024",
            url: "https://github.com/ikranjec99",
        },
        {
            title: "Project 1",
            description: "Project 1 Description",
            image: "/demo-2.jpg",
            year: "2024",
            url: "https://github.com/ikranjec99",
        },
    ],
};