import React from "react";
import "./Hero.css";
import portrait from "../../assets/images/portrait.png";
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
              <span>
                <Typewriter
                  words={[
                    "Frontend Development.",
                    "Creating Responsive Designs.",
                    "Building Interactive UIs.",
                    "Crafting User-Friendly Experiences.",
                    "Developing with React.",
                    "Implementing Modern CSS Techniques.",
                    "Bringing Designs to Life.",
                    "Improving Accessibility.",
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
            <p>
              My mission: to provide you with tailor-made web solutions that not
              only captivate your visitors but also boost your online presence.
              By collaborating with me, you are choosing a partner dedicated to
              transforming your ideas into stimulating and engaging web
              experiences.
            </p>
          </div>
          <div className="hero-img">
            <img src={portrait} alt="" />
          </div>
        </div>
        <div className="hero-stack">
          <h5>Tech stack</h5>
          <div className="stack-icons">
            <div className="tech-icon">
              <img src={logoHTML} alt="" />
              <p>HTML5</p>
            </div>
            <div className="tech-icon">
              <img src={logoCSS} alt="" />
              <p>CSS3</p>
            </div>
            <div className="tech-icon">
              <img src={logoJS} alt="" />
              <p>JavaScript</p>
            </div>
            <div className="tech-icon">
              <img src={logoTS} alt="" />
              <p>TypeScript</p>
            </div>
            <div className="tech-icon">
              <img src={logoReact} alt="" />
              <p>React</p>
            </div>
            <div className="tech-icon">
              <img src={logoRouter} alt="" />
              <p>React Router</p>
            </div>
            <div className="tech-icon">
              <img src={logoRedux} alt="" />
              <p>React Router</p>
            </div>
            <div className="tech-icon">
              <img src={logoTW} alt="" />
              <p>TailwindCSS</p>
            </div>
            <div className="tech-icon">
              <img src={logoElectron} alt="" />
              <p>Electron</p>
            </div>
            <div className="tech-icon">
              <img src={logoGit} alt="" />
              <p>Git</p>
            </div>
            <div className="tech-icon">
              <img src={logoNPM} alt="" />
              <p>NPM</p>
            </div>
            <div className="tech-icon">
              <img src={logoPhp} alt="" />
              <p>PHP</p>
            </div>
            <div className="tech-icon">
              <img src={logoNode} alt="" />
              <p>NodeJS</p>
            </div>
            <div className="tech-icon">
              <img src={logoMySQL} alt="" />
              <p>MySQL</p>
            </div>
            <div className="tech-icon">
              <img src={Insomnia} alt="" />
              <p>Insomnia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
