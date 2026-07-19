import { identity, socialLinks } from './shared'
import type { AboutPageContent } from '../types/config';

// About (/about)
export const aboutPageContent: AboutPageContent = {
    about: {
        description: `I'm a software engineer working mostly with React and .NET.<br/>I like building clear, maintainable systems and understanding the product context behind the code.
<br/>Here I write about projects, technical decisions, and lessons worth keeping around.`,
    },
    seo: {
        title: "About | Ivan Kranjec",
        description:
            "Software engineer from Croatia focused on .NET, React, infrastructure learning, and pragmatic engineering tradeoffs.",
        image: identity.logo,
    },
    subtitle: "I build product software with clear technical choices and a practical understanding of the business behind them.",
    work: {
        description: `I work across the stack, connecting product needs with technical execution and keeping systems clear enough to evolve over time.`,
        items: [
            {
                title: "Software Engineer",
                summary: "Building .NET and React product features, background workflows, and internal tools while growing technical and business understanding in my area.",
                company: {
                    name: "Infobip",
                    image: "/profile-picture.webp",
                    url: "https://github.com/ikranjec99",
                },
                date: "October 2023 - Present",
            },
            {
                title: "Junior Software Engineer",
                summary: "Worked on portal flows, customer experience improvements, and compliance-driven UI/backend changes in a production team.",
                company: {
                    name: "Infobip",
                    image: "/profile-picture.webp",
                    url: "https://github.com/ikranjec99",
                },
                date: "September 2022 - October 2023",
            },
            {
                title: "Junior Software Engineer",
                summary: "Built and improved web applications for aviation and smart-city projects, including reports, dashboards, and notifications.",
                company: {
                    name: "Combis",
                    image: "/profile-picture.webp",
                    url: "https://www.combis.hr/",
                },
                date: "October 2021 - September 2022",
            },
            {
                title: "Junior Software Engineer Intern",
                summary: "Learned practical .NET, frontend, and Docker workflows while helping with UI updates, report downloads, and backend integration.",
                company: {
                    name: "Combis",
                    image: "/profile-picture.webp",
                    url: "https://www.combis.hr/",
                },
                date: "August 2020 - October 2021",
            },
        ],
    },
    connect: {
        description: `Find me where I share code, notes, and professional updates.`,
        links: socialLinks,
    },
};
