import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Ivan Kranjec",
  logo: "/logo.webp",
  email: "ivan.kranjec95@gmail.com",
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
    url: "https://github.com/ikranjec99",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/ivan-kranjec-96352a1b7",
    icon: "mdi:linkedin",
    external: true
  },
  {
    title: "Mail",
    url: "mailto:ivan.kranjec95@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Ivan Kranjec | Portfolio",
    description:
      "Full time software engineer from Croatia who loves building cool things using code.",
    image: identity.logo,
  },
  role: "Software Engineer",
  description:
    "Full time software engineer from Croatia who loves building cool things using code.",
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

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Ivan Kranjec",
    description:
      "Full time software engineer from Croatia who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Ivan Kranjec, a full time software engineer from Croatia who loves building cool things using code.
<br/><br/>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque placeat est architecto tempora voluptatem sit suscipit aspernatur? <br/><br/>
Facere quibusdam reiciendis, distinctio sunt praesentium error accusantium consectetur nemo vero officia itaque.`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things.`, // Markdown is supported
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
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`,
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Ivan Kranjec",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/ikranjec99",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/ikranjec99",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/ikranjec99",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Ivan Kranjec",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
