import React, { useState } from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ details }) => {
    const [showEnlargedImage, setShowEnlargedImage] = useState(false);

    const toggleImage = () => {
        setShowEnlargedImage(!showEnlargedImage); // Toggles the modal view
    };

    return (
        <div className='work-experience-card' onClick={(e) => e.stopPropagation()}>
            <div className='work-header'>
                <h6>{details.title}</h6>
                <a href={details.githubLink}>
                    <img src={details.iconUrl} alt="" style={{ width: '40px', height: '40px', margin: '6px'}}/>
                </a>
            </div>
            <div className='work-container'>
                <div className='work-leftside'>
                    <div className='work-duration'>{details.date}</div>
                    <ul>
                        {details.responsabilities.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <div className='work-technologies'>
                        {details.technologies.map((tech, index) => (
                            <img key={index} src={tech.logo} alt={tech.name} style={{ width: '40px', height: '40px'}} />
                        ))}
                    </div>
                </div>
                <div className='projectImg' onClick={toggleImage}>
                    <img src={details.projectImg} alt="" style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }} />
                </div>
            {showEnlargedImage && (
                <div className="image-modal-overlay" onClick={toggleImage}>
                    <img src={details.projectImg} alt="" className="enlarged-image" />
                </div>
            )}
            </div>
        </div>
    );
}

export default ExperienceCard;
