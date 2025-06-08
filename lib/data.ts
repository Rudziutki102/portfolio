import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import dashboardIMG from '@/public/dashboard.png'
import discordIMG from '@/public/discord.png'
import placeHolder from '@/public/placeholder.webp'
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
    title: "NDA Project",
    description:
      "Contributed to the development and implementation of multiple features, including the user registration process, bet placement flow, and payment integration using Next.js, TypeScript, Redux. ",
    tags: ["React", "Next.js", "Tailwind",'ReactQuery'],
    imageUrl: placeHolder,
  },
  {
    title: "NDA Project",
    description:
      "Designed and executed comprehensive Cypress test cases to ensure functionality and reliability across these platforms",
    tags: ["React", "TypeScript",'ReactQuery','Cypress'],
    imageUrl: placeHolder,
  },
  {
    title: "Attendance bot (Discord.js)",
    description:
      "I have developed a Discord bot using discord.js and Express. The bot is capable of tracking all user group entries and uploads the data to a MongoDB database using Mongoose.",
    tags: ["Node.js", "Express.js",'MongoDB','Mongoose'],
    imageUrl: discordIMG,
  },
  {
    title: "Attendance bot dashboard",
    description:
      "I have created a dashboard that displays information sent from the bot using Server Sent Events, with addition to a chart.js graph based on attendance of users in my discord channel.",
    tags: ["React.js", "Node.js",'MongoDB','Chart.js','Shadcn',"Server Sent Events"],
    imageUrl: dashboardIMG,
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
  'Mongoose',
  'Python',
  'Express.js',
  'Node.js',
  'Discord.js',
  'Cypress',
  'Zustand',
  'Recoil',
  "Git",
  "AI",
  "Tailwind",
  "Styled Components",
  "Redux",
  "ReactQuery",
  "Sanity",
  "Framer Motion",
] as const;