import portfoliopic from "../assets/projects/portfoliopic.png";
import blogpic from "../assets/projects/blogpic.png";
import splitbee from "../assets/projects/splitbee.png";
import geoNUS from "../assets/projects/geoNUS.png";
import klinix from "../assets/projects/klinix.png";

export const EXPERIENCES = [
  {
    year: "Aug'25 - Nov'25",
    role: "Data Engineer Intern",
    company: "Singapore Land Authority",
    description: `- Worked on projects for GeoSpatial Survey and Data Department.`,
    technologies: ["QGIS", "Python", "PostgreSQL"],
  },
  {
    year: "Aug'25 - Nov'25",
    role: "Undergraduate Teaching Assistant - CS2103T Software Engineering",
    company: "NUS Computing",
    description: `- Taught necessary conceptual and analytical tools for software engineering.\n- Facilitated weekly tutorial sessions and evaluation of the students' assignments.`,
    technologies: ["UML Diagrams", "Software Testing", "Software Development Life Cycle"],
  },
  {
    year: "Oct'24 - Apr'25",
    role: "Software Developer Volunteer",
    company: "BETTER.SG",
    description: `- Worked on projects for social good.`,
    technologies: ["React.js", "Firebase", "Project Management"],
  },
  {
    year: "Aug'24 - Dec'24",
    role: "Undergraduate Teaching Assistant - CS1101S Programming Methodology",
    company: "NUS Computing",
    description: `- Taught programming concepts in Java.\n- Facilitated weekly tutorial sessions and evaluation of the students' assignments.`,
    technologies: ["Java", "Object-Oriented Programming", "Teaching"],
  },
  {
    year: "Jan'23 - Jul'23",
    role: "E-Commerce Data Analyst",
    company: "DNDTS",
    description: `- Handled live customer service and automated pricing of products through Back Market for an e-commerce start up.\n- Created dashboards to keep track of inventory levels and workers’ KPI .`,
    technologies: ["Customer Relationship Management", "Problem Solving"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: portfoliopic,
    description:
      "A personal portfolio showcasing my experience, technical skills, and web development projects.",
    technologies: ["Vite", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Blog Website",
    image: blogpic,
    description:
      "A blog portfolio recording my experience, notes, and reflections.",
    technologies: ["Vue.js", "Tailwind CSS"],
  },
  {
    title: "SplitBee",
    image: splitbee,
    description:
      "A bill-splitting application that allows users to split bills among friends.",
    technologies: ["Flutter", "Firebase", "Figma"],
    link: "https://drive.google.com/drive/u/0/folders/1bJLXAkLW5_3ajXyUZlFoLAbaCECaCdTh"
  },
  {
    title: "GeoNUS",
    image: geoNUS,
    description:
      "An adaptation of GeoGuesser for NUS made during Hack&Roll 2025.\nMade use of crowdsourced photos instead of StreetView so that users can submit unique photos and contribute to the game.",
    technologies: ["Next.js", "PostgreSQL", "Google Maps API", "Vercel Blob Storage"],
    link: "https://geo-nus.vercel.app/"
  },
  {
    title: "Klinix",
    image: klinix,
    description:
      "A desktop app targeted towards general practitioners.\nKlinix helps them to quickly access and keep track of patient records, appointments, and medicine needs.",
    technologies: ["JavaFX", "JUnit", "Jackson"],
    link: "https://ay2425s2-cs2103t-t09-2.github.io/tp/index.html"
  }
];
