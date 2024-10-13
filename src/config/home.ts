import { identity, socialLinks } from './shared'
import type { HomePageContent } from "../types/config";

// Home (/)
export const homePageContent: HomePageContent = {
    seo: {
        title: "Ivan Kranjec | Portfolio",
        description:
            "Full time software engineer from Croatia who loves building cool things using code.",
        image: identity.logo,
    },
    role: "Software Engineer",
    description:
        "Full time software engineer from Croatia who loves building cool things using code.",
    socialLinks: socialLinks,
    links: [
        {
            title: "My Projects",
            url: "/projects",
        },
        {
            title: "About Me",
            url: "/about",
        },
    ],
};