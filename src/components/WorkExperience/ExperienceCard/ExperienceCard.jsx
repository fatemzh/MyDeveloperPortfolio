import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ({details}) => {

  return (
    <div className='work-experience-card'>
      <div className='work-header'>
          <h6>{details.title}</h6>
          <a href={details.githubLink}>
            <img src={details.iconUrl} alt="" style={{ width: '40px', height: '40px', margin:'6px'}}/>
          </a>
        </div>
      <div className='work-container'>
          <div className='work-leftside'>
          <div className='work-duration'>{details.date}</div>
          <ul>
            {details.responsabilities.map((item) =>(
                <li key={item}>{item}</li>
            ))}
          </ul>
          <div className='work-technologies'>
              {details.technologies.map((tech, index)=>{
                return <img key={index} src={tech.logo} alt={tech.name} style={{ width: '40px', height: '40px'}}/>})}
          </div>
        </div>
        <div className='projectImg'>
            <img src={details.projectImg} alt=""/>
        </div>
      </div>
    </div>
  )}

export default ExperienceCard
