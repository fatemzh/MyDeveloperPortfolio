import React from "react";
import Spline from "@splinetool/react-spline";
import "./Hero.css";
import logoHTML from "../../assets/images/html5.png";
import logoCSS from "../../assets/images/css3.png";
import logoJS from "../../assets/images/jslogo.png";
import logoTS from "../../assets/images/ts.png";
import logoReact from "../../assets/images/react.png";
import logoRedux from "../../assets/images/redux.png";
import logoRouter from "../../assets/images/router.png";
import logoTW from "../../assets/images/tailwindCSS.png";
import logoGit from "../../assets/images/git-logo.png";
import logoPhp from "../../assets/images/php.png";
import logoNPM from "../../assets/images/npm.png";
import logoNode from "../../assets/images/nodejs.png";
import logoElectron from "../../assets/images/electron.png";
import logoMySQL from "../../assets/images/mysql.png";
import Insomnia from "../../assets/images/insomnia.png";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="hero-all">
      <section className="hero" id="Hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Hi, I’m <span>Abid Fatima and I'm dedicated to</span>
            </h1>
            <h2>
              <span className="typewriter-container">
                <Typewriter
                  words={[
                    "Frontend Development.",
                    "Crafting Responsive Designs.",
                    "Building Interactive UIs.",
                    "Developing with Passion.",
                    "Bringing Designs to Life.",
                    "Improving Web Accessibility.",
                    "Creating Dynamic Interfaces.",
                    "Innovating in Web Design.",
                    "Enhancing User Interactions.",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <br />
            <a href="/resume.pdf" download className="download-button">
              My Resume
            </a>
          </div>
          <div className="hero-img">
            <Spline scene="https://prod.spline.design/5Pih7kjNCz9E2MQs/scene.splinecode" />
          </div>
        </div>
        <div className="hero-stack">
          <h5>Tech stack</h5>
          <div className="stack-icons">
            {[
              { src: logoHTML, alt: "HTML5 logo", name: "HTML5" },
              { src: logoCSS, alt: "CSS3 logo", name: "CSS3" },
              { src: logoJS, alt: "JavaScript logo", name: "JavaScript" },
              { src: logoTS, alt: "TypeScript logo", name: "TypeScript" },
              { src: logoReact, alt: "React logo", name: "React" },
              {
                src: logoRouter,
                alt: "React Router logo",
                name: "React Router",
              },
              { src: logoRedux, alt: "Redux logo", name: "Redux" },
              { src: logoTW, alt: "TailwindCSS logo", name: "TailwindCSS" },
              { src: logoElectron, alt: "Electron logo", name: "Electron" },
              { src: logoGit, alt: "Git logo", name: "Git" },
              { src: logoNPM, alt: "NPM logo", name: "NPM" },
              { src: logoPhp, alt: "PHP logo", name: "PHP" },
              { src: logoNode, alt: "NodeJS logo", name: "NodeJS" },
              { src: logoMySQL, alt: "MySQL logo", name: "MySQL" },
              { src: Insomnia, alt: "Insomnia logo", name: "Insomnia" },
            ].map((tech, index) => (
              <div className="tech-icon" key={index}>
                <img src={tech.src} alt={tech.alt} />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
