import { identity, socialLinks } from './shared'
import type { HomePageContent } from "../types/config";

// Home (/)
export const homePageContent: HomePageContent = {
    seo: {
        title: "Ivan Kranjec | Portfolio",
        description:
            "Software engineer from Croatia with a passion for building scalable applications and solving real-world problems through code.",
        image: identity.logo,
    },
    role: "Software Engineer",
    description:
        "Software engineer from Croatia with a passion for building scalable applications and solving real-world problems through code.",
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