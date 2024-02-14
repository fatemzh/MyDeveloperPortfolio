import React from 'react'
import './Hero.css'
import portrait from "../../assets/images/portrait.png"
import logoJS from "../../assets/images/jslogo.png"
import logoReact from "../../assets/images/react.png"

const Hero = () => {
  return (
    <>
      <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experiences that inspire</h2>
            <p>
                Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions
            </p>
        </div>
        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src={logoReact} alt="" />
                </div>
                <img src={portrait} alt="" />
            </div>
            <div>
                <div className='tech-icon'>
                    <img src={logoJS} alt="" />
                </div>
                <div className='tech-icon'>
                    <img src={logoJS} alt="" />
                </div>
                <div className='tech-icon'>
                    <img src={logoJS} alt="" />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero
