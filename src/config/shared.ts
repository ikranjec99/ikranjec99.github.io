import type {
    Details,
    Identity,
    NavBarLink,
    SocialLink,
} from "../types/config";

const details: Details = {
    fullName: "Ivan Kranjec",
    linkedIn: 'https://www.linkedin.com/in/ikranjec99',
    github: 'https://github.com/ikranjec99',
};

export const identity: Identity = {
    name: details.fullName,
    logo: "/profile-picture.webp"
};

export const navBarLinks: NavBarLink[] = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Work",
        url: "/work",
    },
    {
        title: "Writing",
        url: "/blog",
    },
    {
        title: "About",
        url: "/about",
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
    }
];
