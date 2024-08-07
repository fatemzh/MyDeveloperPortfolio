import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {
  return(
    <>
      <Navbar/>
      <div className='container'>
        <Hero/>
        <Skills/>
        <WorkExperience/>
        <Contact/> 
      </div>
      <Footer/>
    </>
  )
}
export default App;