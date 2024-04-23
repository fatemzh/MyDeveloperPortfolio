import React, {useState} from 'react'
import './Skills.css'
import {SKILLS} from "../../utils/data.js"
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillInfoCard.jsx'

const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])
    const handleSelectSkill = (data) =>{
        setSelectedSkill(data);
    };

  return (
    <section className='skills-container' id='Skills'>
      <h5>Hard Skills et Soft Skills</h5>
      <div className='skills-content'>
        <div className='skills'>
            {SKILLS.map((item)=>(
                <SkillCard
                key={item.title}
                iconUrl={item.iconUrl}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={()=> {
                    handleSelectSkill(item);
                }}
                />
            ))}
        </div>
        <div className='skills-info'>
            <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
            />
        </div>
      </div>
    </section>
  )
}

export default Skills
