import { stat } from "fs";

export const projects = [
  {
    title: "Portfolio Website",
    description: "Welcome to my portfolio website, where you can explore my projects, skills, and experiences. Here, you'll find a showcase of the work I'm most proud of, details about my professional background, and insights into the technologies and tools I specialize in.",
    links: [
    {
      name: "Tijmenk.com",
      type: "preview",
      url: "https://tijmenk.com"
    },
    {
      name: "Tijmenk.nl",
      type: "preview",
      url: "https://tijmenk.nl/"
    }
    ],
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    year: 2024,
    status: "In Progress",
    role: "Developer"
  },
  {
    title: "Dummy Freak",
    description: "This is a website to create and manage custom dummy api's. It's a tool for developers to quickly create a dummy api for testing purposes. The website is built with React, TypeScript, and TailwindCSS.",
    links: [
    {
      name: "Dummy Freak",
      type: "preview",
      url: "https://dummyfreak.tijmenk.nl",
    },
    ],
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    year: 2024,
    status: "In Progress",
    role: "Developer"
  },
];


export const githubUsername = "SnepCnep";