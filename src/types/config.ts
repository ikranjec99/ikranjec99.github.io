export type AboutPageContent = {
  about: {
    description: string;
    image_l: {
      url: string;
      alt: string;
    };
    image_r: {
      url: string;
      alt: string;
    };
  };
  connect: {
    description: string;
    links: SocialLink[];
  };
  seo: SEOInfo;
  subtitle: string;
  work: {
    description: string;
    items: ResumeItem[];
  };
};

export type BlogPageContent = {
  seo: SEOInfo;
  subtitle: string;
};

export type Details = {
  email: string;
  github: string;
  linkedIn: string;
  fullName: string;
};

export type HomePageContent = {
  description: string;
  links: {
    title: string;
    url: string;
    external?: boolean;
  }[];
  role: string;
  seo: SEOInfo;
  socialLinks: SocialLink[];
};

export type Identity = {
  email: string;
  logo: string;
  name: string;
};

export type NavBarLink = {
  external?: boolean;
  title: string;
  url: string;
};

export type Project = {
  description: string;
  image: string;
  title: string;
  url: string;
  year: string;
};

export type ProjectPageContent = {
  projects: Project[];
  seo: SEOInfo;
  subtitle: string;
};

export type ResumeItem = {
  company: {
    image: string;
    name: string;
    url: string;
  };
  date: string;
  title: string;
};

export type SocialLink = {
  external?: boolean;
  icon: string;
  title: string;
  url: string;
};

export type SEOInfo = {
  description: string;
  image: string;
  title: string;
};