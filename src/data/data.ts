import {
  CodeBracketIcon,
  SparklesIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

import portfolioImg1 from "/portfolio/1.png";
import portfolioImg2 from "/portfolio/2.png";
import portfolioImg3 from "/portfolio/3.png";

export interface NavbarInterface {
  name: string;
  href: string;
}
export const navbar: NavbarInterface[] = [
  { name: "home", href: "#hero" },
  { name: "skills", href: "#skills" },
  { name: "portfolio", href: "#portfolio" },
  { name: "education & experience", href: "#timeline" },
];

export interface navigationInterface {
  solutions: {
    name: string;
    href: string;
  }[];
  support: {
    name: string;
    href: string;
    info?: string;
  }[];
  socials: {
    name: string;
    href: string;
    info?: string;
  }[];
}

export interface skillsListInterface {
  id: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  content: string;
}
export const SkillsList: skillsListInterface[] = [
  {
    id: 1,
    icon: CodeBracketIcon,
    title: "Programming Languages",
    content: "C/C++, JavaScript",
  },
  {
    id: 2,
    icon: SparklesIcon,
    title: "Web Technologies",
    content: "HTML, CSS, ReactJS, NodeJS, ExpressJS, Tailwind CSS",
  },
  {
    id: 3,
    icon: WrenchScrewdriverIcon,
    title: "Developer Tools",
    content: "Git, GitHub, VS Code, Vercel, Postman",
  },
  {
    id: 4,
    icon: CircleStackIcon,
    title: "Database Management Tools",
    content: "MongoDB, MySQL",
  },
  {
    id: 5,
    icon: PencilIcon,
    title: "Technical Skills",
    content:
      "Data Structures and Algorithms, Object-Oriented Programming, Competitive Programming",
  },
];

export interface PortfolioInterface {
  id: number;
  image: string;
  title: string;
  stack: string;
  liveLink?: string;
  githubLink?: string;
  description: string;
}

export const Portfoio: PortfolioInterface[] = [
  {
    id: 1,
    image: portfolioImg1,
    title: "Chatting App",
    stack: "Full Stack Project",
    liveLink: "https://chat-app-git-main-arpannema1234s-projects.vercel.app/",
    githubLink: "https://github.com/arpannema1234/chat-app",
    description:
      "A robust real-time chat application that supports instant messaging, user authentication, and secure communication.",
  },
  {
    id: 2,
    image: portfolioImg2,
    title: "Blogging Site",
    stack: "Full Stack Project",
    liveLink:
      "https://blogging-site-git-main-arpannema1234s-projects.vercel.app",
    githubLink: "https://github.com/arpannema1234/blogging-site",
    description:
      "A full-featured blogging platform enabling CRUD operations and enhancing user interaction.",
  },
  {
    id: 3,
    image: portfolioImg3,
    title: "Project Manager",
    stack: "Full Stack Project",
    liveLink:
      "https://project-manager-git-main-arpannema1234s-projects.vercel.app",
    githubLink: "https://github.com/arpannema1234/project-manager",
    description:
      "A comprehensive project management tool, optimizing workflows and enhancing team productivity.",
  },
];
