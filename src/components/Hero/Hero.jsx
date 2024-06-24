import React from 'react'
import './Hero.css'
import portrait from "../../assets/images/portrait.png"
import logoHTML from "../../assets/images/html5.png"
import logoCSS from "../../assets/images/css3.png"
import logoJS from "../../assets/images/jslogo.png"
import logoTS from "../../assets/images/ts.png"
import logoReact from "../../assets/images/react.png"
import logoTW from "../../assets/images/tailwindCSS.png"
import logoGit from "../../assets/images/git-logo.png"
import logoGithub from "../../assets/images/github.png"
import logoPhp from "../../assets/images/php.png"
import logoNPM from "../../assets/images/npm.png"
import logoNode from "../../assets/images/nodejs.png"
import logoElectron from "../../assets/images/electron.png"
import logoMySQL from "../../assets/images/mysql.png"
import Insomnia from "../../assets/images/insomnia.png"

const Hero = () => {
  return (
    <>
      <section className='hero' id="Hero">
        <div className='hero-container'>
            <div className='hero-content'>
                <h2>Abid Fatima Développeuse Frontend</h2>
                <br />
                <p>
                    Ma mission : vous offrir des solutions web sur-mesure qui non seulement captivent vos visiteurs mais boostent également votre présence en ligne. En collaborant avec moi, vous choisissez un partenaire dédié à transformer vos idées en expériences web stimulantes et engageantes.
                </p>
            </div>
            <div className='hero-img'>
                    <img src={portrait} alt="" />
            </div>
        </div>
        <div className='hero-stack'>
            <h5>Tech stack</h5>
            <div className='stack-icons'>
                <div className='tech-icon'>
                    <img src={logoHTML} alt="" />
                    <p>HTML5</p>
                </div>
                <div className='tech-icon'>
                    <img src={logoCSS} alt="" />
                    <p>CSS3</p>
                </div>                
                <div className='tech-icon'>
                    <img src={logoJS} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className='tech-icon'>
                    <img src={logoTS} alt="" />
                    <p>TypeScript</p>
                </div>
                <div className='tech-icon'>
                    <img src={logoReact} alt="" />
                    <p>React</p>
                </div>
                <div className='tech-icon'>
                    <img src={logoTW} alt="" />
                    <p>TailwindCSS</p>
                </div>
                <div className='tech-icon'>
                    <img src={logoElectron} alt="" />
                    <p>Electron</p>
                </div>
                <div className='tech-icon'>
                    <img src={logoGit} alt="" />
                    <p>Git</p>
                </div>
                <div className='tech-icon'>
                    <img src={logoGithub} alt="" />
                    <p>Github</p>
                </div>
                <div className='tech-icon'>
                    <img src={logoNPM} alt="" />
                    <p>NPM</p>
                </div>
                <div className='tech-icon'>
                    <img src={logoPhp} alt="" />
                    <p>PHP</p>
                </div>
                <div className='tech-icon'>
                    <img src={logoNode} alt="" />
                    <p>NodeJS</p>
                </div>
                <div className='tech-icon'>
                    <img src={logoMySQL} alt="" />
                    <p>MySQL</p>
                </div>               
                <div className='tech-icon'>
                    <img src={Insomnia} alt="" />
                    <p>Insomnia</p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero
