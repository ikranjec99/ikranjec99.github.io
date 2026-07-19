export type AboutPageContent = {
  about: {
    description: string;
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
  github: string;
  linkedIn: string;
  fullName: string;
};

export type HomePageContent = {
  currently: {
    description: string;
    title: string;
  }[];
  description: string;
  focusAreas: {
    description: string;
    title: string;
  }[];
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
  logo: string;
  name: string;
};

export type NavBarLink = {
  external?: boolean;
  title: string;
  url: string;
};

export type Project = {
  approach: string;
  description: string;
  impact: string;
  image: string;
  problem: string;
  stack: string[];
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
  summary?: string;
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
