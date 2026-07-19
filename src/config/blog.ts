import { identity } from './shared'
import type { BlogPageContent } from "../types/config";

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
    seo: {
        title: "Blog | Ivan Kranjec",
        description: "Writing on software engineering and technical decision-making.",
        image: identity.logo,
    },
    subtitle: "Notes on building software with practical tradeoffs: .NET, infrastructure, tooling, static sites, and experiments that sharpen engineering judgment.",
};
