import { identity, socialLinks } from './shared'
import type { HomePageContent } from "../types/config";

// Home (/)
export const homePageContent: HomePageContent = {
    seo: {
        title: "Ivan Kranjec | Portfolio",
        description:
            "Software engineer writing about .NET, React, infrastructure, developer tooling, and practical engineering tradeoffs.",
        image: identity.logo,
    },
    role: "Software Engineer · Product-minded engineering with .NET and React",
    description:
        "I build software by connecting product context, business constraints, and engineering tradeoffs. This site is where I document projects, technical notes, and decisions worth remembering.",
    focusAreas: [
        {
            title: "Product thinking",
            description: "Understanding the user problem, the workflow around it, and what a useful first version should actually solve.",
        },
        {
            title: "Business context",
            description: "Keeping implementation decisions connected to delivery, adoption, maintainability, and the value behind the work.",
        },
        {
            title: "Engineering judgment",
            description: "Choosing clear boundaries, practical abstractions, and technical tradeoffs that remain understandable after release.",
        },
    ],
    currently: [
        {
            title: "Technical writing archive",
            description: "Turning personal projects into written decisions instead of only finished screenshots.",
        },
        {
            title: "Homelab infrastructure",
            description: "Building a small self-hosted environment to practice Linux, networking, DNS, deployment, and service operations.",
        },
        {
            title: "Developer tooling",
            description: "Exploring small utilities, parsers, and APIs that make repeated technical work easier to reason about.",
        },
    ],
    socialLinks: socialLinks,
    links: [
        {
            title: "Selected Work",
            url: "/work",
        },
        {
            title: "About Me",
            url: "/about",
        },
    ],
};
