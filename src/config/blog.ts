import { identity } from './shared'
import type { BlogPageContent } from "../types/config";

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
    seo: {
        title: "Blog | Ivan Kranjec",
        description: "Writing on software engineering and technical decision-making.",
        image: identity.logo,
    },
    subtitle: "Technical notes, project write-ups, and the occasional lesson I want to remember.",
};
