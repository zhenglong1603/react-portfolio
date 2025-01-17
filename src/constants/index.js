import portfoliopic from "../assets/projects/portfoliopic.png";
import blogpic from "../assets/projects/blogpic.png";
import splitbee from "../assets/projects/splitbee.png";
import blank from "../assets/blank.jpg";

export const EXPERIENCES = [
  {
    year: "Oct'24 - Present",
    role: "Software Developer Volunteer",
    company: "BETTER.SG",
    description: `Working on a web application to facilitate message verification.`,
    technologies: ["ReactJS", "Firebase", "Pandas", "Project Management"],
  },
  {
    year: "Aug'24 - Dec'24",
    role: "Undergraduate Teaching Assistant - CS1101S Programming Methodology",
    company: "NUS Computing",
    description: `Taught programming concepts in Java. Facilitated weekly tutorial sessions and evaluation of the students' assignments.`,
    technologies: ["Java", "Object-Oriented Programming", "Algorithms", "Teaching"],
  },
  {
    year: "Jan'23 - Jul'23",
    role: "E-Commerce Data Analyst",
    company: "DNDTS",
    description: `Handled live customer service and automated pricing of products through Back Market for an e-commerce start up. Created dashboards to keep track of inventory levels and workers’ KPI .`,
    technologies: ["Customer Relationship Management", "Problem Solving"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: portfoliopic,
    description:
      "A personal portfolio showcasing my experience, technical skills, and web development projects.",
    technologies: ["ReactJS", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Blog Website",
    image: blogpic,
    description:
      "A blog portfolio recording my experience, notes, and reflections.",
    technologies: ["VueJS", "Tailwind CSS"],
  },
  {
    title: "SplitBee",
    image: splitbee,
    description:
      "A bill-splitting application that allows users to split bills among friends.",
    technologies: ["Flutter", "Firebase", "Figma"],
  },
  {
    title: "GeoNUS",
    image: blank,
    description:
      "WIP",
    technologies: ["Flutter", "Firebase", "Figma"],
  }
];
