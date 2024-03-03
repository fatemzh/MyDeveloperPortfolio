export const SKILLS = [
    {
        title: "Frontend",
        iconUrl: require("../assets/images/frontend.png"),
        skills:[
            {skill: "HTML5", percentage: "80%"},
            {skill: "CSS3 (Sass/SCSS)", percentage: "100%"},
            {skill: "JavaScript (ES6)", percentage: "70%"},
            {skill: "ReactJS", percentage: "60%"},
        ],
    },
    {
        title: "Backend",
        iconUrl: require("../assets/images/backend.png"),
        skills:[
            {skill: "NodeJS", percentage: "60%"},
            {skill: "Php", percentage: "80%"},
            {skill: "MySQL", percentage: "60%"},
        ],
    },
    {
        title: "Tools",
        iconUrl: require("../assets/images/tools.png"),
        skills:[
            {skill: "Git & Github", percentage: "85%"},
            {skill: "VS Code", percentage: "90%"},
            {skill: "NPM", percentage: "70%"},
            {skill: "Responsive Design", percentage: "80%"},
        ],
    },
    {
        title: "Soft Skills",
        iconUrl: require("../assets/images/softSkill.png"),
        skills:[
            {skill: "Problem-solving", percentage: "90%"},
            {skill: "Time Management", percentage: "85%"},
            {skill: "Attention to Detail", percentage: "90%"},
        ]
    }
];

export const WORK_EXPERIENCE = [
    {
        title:"Senior Frontend Developer at Google",
        date:"January 2012 - Present",
        responsabilities : [
            "Led a team of frontend developers to create a new user interface for the company's flagship product.",
            "Implemented advanced CSS and JavaScript animations and transitions to enhance the overall user experience.",
            "Collaborated with UI/UX designers to translate wireframes into high-fidelity prototypes, ensuring a seamless user journey.",
            "Introduced and intergrated vue.js into the company's existing codebase, resulting in a significant boost in development speed and code maintainability."
        ],
    },
    {
        title:"Frontend Developer at Facebook",
        date:"January 2010 - January 2012",
        responsabilities : [
            "Developed and maintained the frontend of multiple Facebook products, including the News Feed, Messenger, and Groups.",
            "Implemented responsive design principles to ensure optimal user experience across different devices and screen sizes.",
            "Collaborated with backend developers to ensure data integrity and seamless integration of new features.",
            "Participated in code reviews and provided constructive feedback to other developers."
        ]
    },
    {
        title:"Frontend intern at Web studio",
        date:"January 2009 - January 2010",
        responsabilities : [
            "Developed and maintained a variety of web applications, including a photo gallery, an e-commerce store, and a social networking platform.",
            "Collaborated with backend developers to ensure data integrity and seamless integration of new features.",
            "Participated in code reviews and provided constructive feedback to other developers.",
        ]
    }
]