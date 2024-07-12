import logoHTML from "../assets/images/html5.png";
import logoCSS from "../assets/images/css3.png";
import logoJS from "../assets/images/jslogo.png";
import logoTS from "../assets/images/ts.png";
import logoReact from "../assets/images/react.png";
import logoTW from "../assets/images/tailwindCSS.png";
import logoPhp from "../assets/images/php.png";
import logoNode from "../assets/images/nodejs.png";
import logoFigma from "../assets/images/figma.png";
import logoMySQL from "../assets/images/mysql.png";
import Insomnia from "../assets/images/insomnia.png";
import logoElectron from "../assets/images/electron.png";
import logoVite from "../assets/images/vite.png";
import logoC from "../assets/images/c_-removebg-preview.png";

export const SKILLS = [
  {
    title: "Frontend",
    iconUrl: require("../assets/images/frontend.png"),
    skills: [
      { skill: "HTML5", percentage: "90%" },
      { skill: "CSS3/TailwindCSS", percentage: "80%" },
      { skill: "JavaScript/TypeScript", percentage: "70%" },
      { skill: "ReactJS", percentage: "70%" },
    ],
  },
  {
    title: "Backend",
    iconUrl: require("../assets/images/backend.png"),
    skills: [
      { skill: "NodeJS", percentage: "60%" },
      { skill: "Php", percentage: "80%" },
      { skill: "MySQL", percentage: "80%" },
      { skill: "Insomnia", percentage: "70%" },
    ],
  },
  {
    title: "Tools",
    iconUrl: require("../assets/images/tools.png"),
    skills: [
      { skill: "Git & Github", percentage: "90%" },
      { skill: "IceScrum", percentage: "90%" },
      { skill: "NPM", percentage: "70%" },
      { skill: "Figma", percentage: "80%" },
    ],
  },
  {
    title: "Soft Skills",
    iconUrl: require("../assets/images/softSkill.png"),
    skills: [
      { skill: "Problem Solving", percentage: "90%" },
      { skill: "Teamwork", percentage: "90%" },
      { skill: "Time Management", percentage: "90%" },
      { skill: "Empathy and User Understanding", percentage: "90%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Runéo Desk",
    iconUrl: require("../assets/images/github.png"),
    date: "March 2024 - June 2024",
    responsabilities: [
      "Developed CRUD functionalities to manage employees in the database, group them, and organize group schedules via a REST API.",
      "Developed dynamic and animated components, including drag-and-drop features for intuitive element manipulation.",
      "Designed and implemented modals and other advanced visual features to enhance user experience.",
    ],
    technologies: [
      { logo: logoReact, name: "React" },
      { logo: logoTW, name: "TailwindCSS" },
      { logo: logoTS, name: "TypeScript" },
      { logo: logoFigma, name: "Figma" },
      { logo: logoVite, name: "Vite" },
    ],
    githubLink: "https://github.com/fatemzh/",
    pageLink: "",
    preview: require("../assets/apps-screens/fyord.png"),
  },
  {
    title: "My Kanban Board",
    iconUrl: require("../assets/images/github.png"),
    date: "November 2023 - February 2024",
    responsabilities: [
      "Developed a customizable task management application, offering drag-and-drop features for intuitive task organization.",
      "Designed a lightweight and performant application, optimized for use on devices with limited storage capacity such as a student's SSD.",
      "Implemented a clean and user-friendly interface, allowing efficient management of personal and academic projects.",
    ],
    technologies: [
      { logo: logoReact, name: "React" },
      { logo: logoTW, name: "TailwindCSS" },
      { logo: logoTS, name: "TypeScript" },
      { logo: logoElectron, name: "Electron" },
      { logo: logoFigma, name: "Figma" },
      { logo: logoVite, name: "Vite" },
    ],
    githubLink: "https://github.com/fatemzh/kanbanboard-electron",
    pageLink: "https://colorful-kanban.netlify.app",
    preview: require("../assets/apps-screens/kbd.png"),
  },
  {
    title: "Developer Portfolio",
    iconUrl: require("../assets/images/github.png"),
    date: "February 2024",
    responsabilities: [
      "Designed a smooth, responsive user interface suitable for all devices, providing an optimal browsing experience.",
      "Integrated a dynamic project gallery with subtle animations to showcase completed works.",
      "Implemented a contact form to facilitate direct communication with visitors.",
    ],
    technologies: [
      { logo: logoReact, name: "React" },
      { logo: logoTW, name: "TailwindCSS" },
      { logo: logoFigma, name: "Figma" },
      { logo: logoVite, name: "Vite" },
    ],
    githubLink: "https://github.com/fatemzh/my-react-portfolio/tree/main",
    pageLink: "",
    preview: require("../assets/apps-screens/portfolio.png"),
  },
  {
    title: "Share With Me App for Book Lovers",
    date: "November 2023 - December 2023",
    iconUrl: require("../assets/images/github.png"),
    responsabilities: [
      "Created a community platform for publishing and reviewing books, with dedicated spaces for critiques.",
      "Implemented a user management system with authentication, allowing secure content administration and personalized access.",
      "Integrated a database for efficient storage and retrieval of information on books, authors, and users.",
    ],
    technologies: [
      { logo: logoHTML, name: "HTML5" },
      { logo: logoCSS, name: "CSS3" },
      { logo: logoPhp, name: "PHP" },
      { logo: logoMySQL, name: "MySQL" },
      { logo: logoFigma, name: "Figma" },
    ],
    githubLink: "https://github.com/fatemzh/Book-blog",
    pageLink: "",
    preview: require("../assets/apps-screens/book.png"),
  },
  {
    title: "Pokemon REST API Application",
    date: "October 2023",
    iconUrl: require("../assets/images/github.png"),
    responsabilities: [
      "Developed a RESTful API to query Pokémon information using Node.js and Express for optimal performance.",
      "Implemented well-structured API endpoints for easy and fast retrieval of Pokémon data, facilitating integration with other applications.",
      "Secured the API with token-based authentication to ensure a reliable and secure interface.",
    ],
    technologies: [
      { logo: logoNode, name: "Node.js" },
      { logo: logoJS, name: "JavaScript" },
      { logo: Insomnia, name: "Insomnia" },
    ],
    githubLink: "https://github.com/fatemzh/NODE-POKEMON-API",
    pageLink: "",
    preview: "",
  },
  {
    title: "Consultant Portfolio",
    date: "September 2023",
    iconUrl: require("../assets/images/github.png"),
    responsabilities: [
      "Developed a personalized platform to showcase consulting services with a clean and professional layout.",
      "Created a content management system for easy updating of works and articles, facilitating site maintenance.",
      "Implemented reactive and responsive components for a consistent user experience on mobile and desktop devices.",
    ],
    technologies: [
      { logo: logoReact, name: "React" },
      { logo: logoTW, name: "TailwindCSS" },
      { logo: logoVite, name: "Vite" },
      { logo: logoFigma, name: "Figma" },
    ],
    githubLink: "https://github.com/fatemzh/sunil-portfolio",
    pageLink: "https://consultant-template.netlify.app",
    preview: require("../assets/apps-screens/consultat.png"),
  },
  {
    title: "Pac-Man Console Game",
    date: "March 2023 - May 2023",
    iconUrl: require("../assets/images/github.png"),
    responsabilities: [
      "Adapted the classic Pac-Man game in C# for console, offering a simplified gaming experience while maintaining the spirit and challenges of the original game in a minimalist environment.",
      "Managed key game functionalities, including character movements and the scoring system.",
      "Provided an executable version of the game, facilitating sharing and access to the game for retro-gaming enthusiasts without requiring additional software installations.",
    ],
    technologies: [{ logo: logoC }, { logo: logoFigma, name: "Figma" }],
    githubLink: "https://github.com/cyberkathleen/pacman-made-simple",
    pageLink: "",
    preview: require("../assets/apps-screens/pacman.png"),
  },
  {
    title: "Website for ETML Open Days 2022",
    date: "September 2022 - November 2022",
    iconUrl: require("../assets/images/github.png"),
    responsabilities: [
      "Developed sections dedicated to the professional opportunities offered by IT training, providing clear explanations to inspire future apprentices.",
      "Implemented a responsive contact form to allow visitors to ask questions or request additional information, ensuring easy interaction on any device.",
      "Integrated infographics to illustrate IT study paths, acquired skills, and admission requirements.",
    ],
    technologies: [
      { logo: logoHTML, name: "HTML5" },
      { logo: logoTW, name: "TailwindCSS" },
      { logo: logoJS, name: "JavaScript" },
      { logo: logoPhp, name: "PHP" },
      { logo: logoFigma, name: "Figma" },
    ],
    githubLink: "https://github.com/fatemzh/PO-ETML",
    pageLink: "https://fatemzh.github.io/PO-ETML/",
    preview: require("../assets/apps-screens/po.png"),
  },
];
