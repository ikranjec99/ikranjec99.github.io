import { identity, socialLinks } from './shared'
import type { AboutPageContent } from '../types/config';

// About (/about)
export const aboutPageContent: AboutPageContent = {
    about: {
        description: `I'm Ivan Kranjec, a full time software engineer from Croatia who loves building cool things using code.<br/><br/>
        I enjoy working across the full stack, whether it's developing responsive user interfaces with React or architecting robust backend systems using .NET Core. 
        <br/><br/>
        My goal is to always deliver clean, maintainable code and create products that provide real value to users.`,
        image_l: {
            alt: "Left Picture",
            url: "/demo-1.jpg",
        },
        image_r: {
            alt: "Right Picture",
            url: "/demo-1.jpg",
        },
    },
    seo: {
        title: "About | Ivan Kranjec",
        description:
            "Full time software engineer from Croatia who loves building cool things using code.",
        image: identity.logo,
    },
    subtitle: "Some information about myself",
    work: {
        description: `I've worked with a variety of technologies and tools to build cool things.`,
        items: [
            {
                title: "Software Engineer",
                company: {
                    name: "Infobip",
                    image: "/logo.webp",
                    url: "https://github.com/ikranjec99",
                },
                date: "October 2023 - Present",
            },
            {
                title: "Junior Software Engineer",
                company: {
                    name: "Infobip",
                    image: "/logo.webp",
                    url: "https://github.com/ikranjec99",
                },
                date: "September 2022 - October 2023",
            },
            {
                title: "Junior Software Engineer",
                company: {
                    name: "Combis",
                    image: "/logo.webp",
                    url: "https://www.combis.hr/",
                },
                date: "October 2021 - September 2022",
            },
            {
                title: "Junior Software Engineer Intern",
                company: {
                    name: "Combis",
                    image: "/logo.webp",
                    url: "https://www.combis.hr/",
                },
                date: "August 2020 - October 2021",
            },
        ],
    },
    connect: {
        description: `Feel free to connect with me on any of the following platforms.`,
        links: socialLinks,
    },
};