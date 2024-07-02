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
    title: "Outils",
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
      { skill: "Résolution de problèmes", percentage: "90%" },
      { skill: "Travail d'équipe", percentage: "90%" },
      { skill: "Gestion du temps", percentage: "90%" },
      { skill: "Empathie et compréhension utilisateur", percentage: "90%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Runéo Desk",
    iconUrl: require("../assets/images/github.png"),
    date: "Mars 2024 - Juin 2024",
    responsabilities: [
      "Développement de fonctionnalités CRUD pour gérer les employés dans la base de données, les constituer en groupes et organiser les horaires des groupes via une API REST.",
      "Développement de composants dynamiques et animés, incluant des fonctionnalités de drag-and-drop pour une manipulation intuitive des éléments.",
      "Conception et implémentation de modals et d'autres fonctionnalités visuelles avancées pour améliorer l'expérience utilisateur."
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
    date: "Novembre 2023 - Février 2024",
    responsabilities: [
      "Développement d'une application de gestion de tâches personnalisable, offrant des fonctionnalités de drag-and-drop pour une organisation intuitive des tâches.",
      "Conception légère et performante, optimisée pour une utilisation sur des dispositifs à capacité de stockage limitée comme un SSD d'étudiant.",
      "Mise en place d'une interface utilisateur épurée et facile à utiliser, permettant une gestion efficace des projets personnels et académiques.",
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
    pageLink: "",
    preview: require("../assets/apps-screens/kbd.png"),
  },
  {
    title: "Portfolio pour développeur",
    iconUrl: require("../assets/images/github.png"),
    date: "Février 2024",
    responsabilities: [
      "Conception d'une interface utilisateur fluide, réactive et adaptée à tous les appareils, offrant une expérience de navigation optimale.",
      "Intégration d'une galerie de projets dynamique avec des animations subtiles pour mettre en valeur les travaux réalisés.",
      "Mise en place d'un formulaire de prise de contact facilitant la communication directe avec les visiteurs.",
    ],
    technologies: [
      { logo: logoReact, name: "React" },
      { logo: logoTW, name: "TailwindCSS" },
      { logo: logoFigma, name: "Figma" },
      { logo: logoVite, name: "Vite" },
    ],
    githubLink: "https://github.com/fatemzh/my-react-portfolio/tree/main",
    pageLink: "",
    preview: require("../assets/apps-screens/dvpportfolio.png"),
  },
  {
    title: "Application Share With Me pour les férus de Lecture",
    date: "Novembre 2023 - Décembre 2023",
    iconUrl: require("../assets/images/github.png"),
    responsabilities: [
      "Création d'une plateforme communautaire pour la publication et l'évaluation de livres, avec des espaces dédiés pour les critiques.",
      "Implémentation d'un système de gestion des utilisateurs avec authentification, permettant une administration sécurisée du contenu et un accès personnalisé.",
      "Intégration d'une base de données pour le stockage et la récupération efficace des informations sur les livres, auteurs et utilisateurs.",
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
    title: "Application Pokemon API REST",
    date: "Octobre 2023",
    iconUrl: require("../assets/images/github.png"),
    responsabilities: [
      "Développement d'une API RESTful pour la consultation d'informations sur les Pokémon, utilisant Node.js et Express pour une performance optimale.",
      "Mise en œuvre de endpoints API bien structurés pour une récupération facile et rapide des données Pokémon, facilitant l'intégration avec d'autres applications.",
      "Sécurisation de l'API avec une authentification par token pour assurer une interface fiable et sécurisée.",
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
    title: "Portfolio pour consultant",
    date: "September 2023",
    iconUrl: require("../assets/images/github.png"),
    responsabilities: [
      "Développement d'une plateforme personnalisée pour présenter ses services de consultation, avec une mise en page épurée et professionnelle.",
      "Création d'un système de gestion de contenu permettant une mise à jour facile des œuvres et des articles, facilitant la maintenance du site.",
      "Implémentation de composants réactifs et responsive pour une expérience utilisateur cohérente sur mobiles et ordinateurs.",
    ],
    technologies: [
      { logo: logoReact, name: "React" },
      { logo: logoTW, name: "TailwindCSS" },
      { logo: logoVite, name: "Vite" },
      { logo: logoFigma, name: "Figma" },
    ],
    githubLink: "https://github.com/fatemzh/sunil-portfolio",
    pageLink: "",
    preview: require("../assets/apps-screens/consultat.png"),
  },
  {
    title: "Jeu Pac-Man en mode console",
    date: "Mars 2023 - Mai 2023",
    iconUrl: require("../assets/images/github.png"),
    responsabilities: [
      "Adaptation du classique Pac-Man en C# pour console, offrant une expérience de jeu simplifiée tout en respectant l'esprit et les défis du jeu original dans un environnement minimaliste.",
      "Gestion des fonctionnalités clés du jeu, y compris les mouvements des personnages et le système de scoring.",
      "Fourniture d'une version exécutable du jeu, facilitant le partage et l'accès au jeu pour les passionnés de rétro-gaming, sans prérequis d'installation de logiciels supplémentaires.",
    ],
    technologies: [{ logo: logoC }, { logo: logoFigma, name: "Figma" }],
    githubLink: "https://github.com/cyberkathleen/pacman-made-simple",
    pageLink: "",
    preview: require("../assets/apps-screens/pacman.png"),
  },
  {
    title: "Site pour les Portes Ouvertes 2022 de l'ETML",
    date: "Septembre 2022 - Novembre 2022",
    iconUrl: require("../assets/images/github.png"),
    responsabilities: [
      "Développement de sections dédiées aux débouchés professionnels offerts par la formation en informatique, fournissant des explications claires pour inspirer les futurs apprentis.",
      "Mise en place d'un formulaire de contact responsive pour permettre aux visiteurs de poser des questions ou de demander des informations supplémentaires, assurant une interaction facile sur n'importe quel appareil.",
      "Intégration d'infographies pour illustrer les parcours d'études en informatique, les compétences acquises et les conditions d'admissibilité.",
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
