import type {
    Details,
    Identity,
    NavBarLink,
    SocialLink,
} from "../types/config";

const details: Details = {
    email: 'ivan.kranjec95@gmail.com',
    fullName: "Ivan Kranjec",
    linkedIn: 'https://www.linkedin.com/in/ikranjec99',
    github: 'https://github.com/ikranjec99',
};

export const identity: Identity = {
    name: details.fullName,
    logo: "/logo.webp",
    email: details.email,
};

export const navBarLinks: NavBarLink[] = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "About",
        url: "/about",
    },
    {
        title: "Projects",
        url: "/projects",
    },
    {
        title: "Blog",
        url: "/blog",
    },
];

export const socialLinks: SocialLink[] = [
    {
        title: "GitHub",
        url: details.github,
        icon: "mdi:github",
        external: true,
    },
    {
        title: "LinkedIn",
        url: details.linkedIn,
        icon: "mdi:linkedin",
        external: true
    },
    {
        title: "Mail",
        url: `mailto:${details.email}`,
        icon: "mdi:email",
    },
];
