import { identity } from './shared'
import type { BlogPageContent } from "../types/config";

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
    seo: {
        title: "Blog | Ivan Kranjec",
        description: "Thoughts, stories and ideas.",
        image: identity.logo,
    },
    subtitle: "Thoughts, stories and ideas.",
};
