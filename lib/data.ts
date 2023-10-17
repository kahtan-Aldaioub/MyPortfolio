import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Chesschain from "@/public/chesschain.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "start stading computer engeniring",
    location: "Syria, Lattakia",
    description:
      "I am still studing at tishreen univercity",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "start home learning web dev",
    location: "Syria, Lattakia",
    description:
      "I start learning as a ReactJs front-end developer for about 2 years and reacntly start working with NextJs. I also upskilled to the full stack.",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "chessChain",
    description:
      "I started  a full-stack  project called chesschain its a chess learning acadimy completly free using a free resourses from youtube",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: Chesschain,
    link:"https://chesschain.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "NestJs",
  "PostgreSQL",
  "Framer Motion",
] as const;
