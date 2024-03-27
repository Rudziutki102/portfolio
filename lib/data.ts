import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import forbetImg from '@/public/forbet.png'
import lottoImg from '@/public/lotto.png'
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "IAI",
    location: "Szczecin, PL",
    description:
      "From intern to junior frontend developer, this role has provided me with opportunities to expand my expertise within the e-commerce industry",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "SBBETTING SOFTWARE",
    location: "Szczecin,PL",
    description:
      "I am presently engaged in serving clients within the gambling sector, with a predominant focus on the African and Polish markets",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
  {
    title: "Your company name goes here",
    location: "unknown",
    description:
      "All I need is constant progress in my career, does your company fit my expectations?",
    icon: React.createElement(FaReact),
    date: "Future",
  },
] as const;

export const projectsData = [
  {
    title: "Forbet",
    description:
      "I worked on this project during my time at the company as a front-end developer, handling the frontend layer as well as user verification through bank accounts.",
    tags: ["React", "Next.js", "Tailwind",'ReactQuery'],
    imageUrl: forbetImg,
  },
  {
    title: "PremierLotoBet",
    description:
      "This project was an opportunity for me to practice skills related to automated testing using the Cypress technology.",
    tags: ["React", "TypeScript",'ReactQuery','Cypress'],
    imageUrl: lottoImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  'NPM',
  "Git",
  "Tailwind",
  "Styled Components",
  "Redux",
  "ReactQuery",
  "Sanity",
  "Framer Motion",
] as const;