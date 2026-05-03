import { identity, socialLinks } from './shared'
import type { AboutPageContent } from '../types/config';

// About (/about)
export const aboutPageContent: AboutPageContent = {
    about: {
        description: `I'm a full-stack software engineer with a focus on building reliable, well-crafted web applications.<br/>I work primarily with React on the frontend and .NET Core on the backend, and I care a lot about the details — architecture decisions, code quality, and the user experience at the end of it all.
<br/>On this blog, I write about what I'm working on, engineering challenges worth sharing, and topics I find myself thinking about deeply.`,
        image_l: {
            alt: "Left Picture",
            url: "/demo-1.webp",
        },
        image_r: {
            alt: "Right Picture",
            url: "/demo-2.webp",
        },
    },
    seo: {
        title: "About | Ivan Kranjec",
        description:
            "Full time software engineer from Croatia who loves building cool things using code.",
        image: identity.logo,
    },
    subtitle: "",
    work: {
        description: `I work across the full stack, choosing tools that fit the problem rather than just the trend.`,
        items: [
            {
                title: "Software Engineer",
                company: {
                    name: "Infobip",
                    image: "/avatar.webp",
                    url: "https://github.com/ikranjec99",
                },
                date: "October 2023 - Present",
            },
            {
                title: "Junior Software Engineer",
                company: {
                    name: "Infobip",
                    image: "/avatar.webp",
                    url: "https://github.com/ikranjec99",
                },
                date: "September 2022 - October 2023",
            },
            {
                title: "Junior Software Engineer",
                company: {
                    name: "Combis",
                    image: "/avatar.webp",
                    url: "https://www.combis.hr/",
                },
                date: "October 2021 - September 2022",
            },
            {
                title: "Junior Software Engineer Intern",
                company: {
                    name: "Combis",
                    image: "/avatar.webp",
                    url: "https://www.combis.hr/",
                },
                date: "August 2020 - October 2021",
            },
        ],
    },
    connect: {
        description: `Let's connect:`,
        links: socialLinks,
    },
};