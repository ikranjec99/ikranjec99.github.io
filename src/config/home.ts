import { identity } from './shared'
import type { HomePageContent } from "../types/config";

// Home (/)
export const homePageContent: HomePageContent = {
    seo: {
        title: "Ivan Kranjec | Portfolio",
        description:
            "Software engineer writing about .NET, React, infrastructure, developer tooling, and practical engineering tradeoffs.",
        image: identity.logo,
    },
    role: "I build thoughtful product software with .NET and React.",
    description:
        "Mostly full-stack work, small developer tools, and notes about the decisions behind them. I care about clear interfaces, maintainable systems, and shipping useful things.",
    links: [
        {
            title: "Selected Work",
            url: "/work",
        },
        {
            title: "Read the Blog",
            url: "/blog",
        },
    ],
};
