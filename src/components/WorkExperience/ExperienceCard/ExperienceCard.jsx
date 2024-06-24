import './ExperienceCard.css';

const ExperienceCard = ({details}) => {
    return (
      <div className='work-experience-card'>
        <div className='work-header'>
          <h6>{details.title}</h6>
          <div className='work-technologies'>
            {details.technologies.map((tech, index)=>{
              return <img key={index} src={tech.logo} alt={tech.name} style={{ width: '30px', height: '30px' }}/>})}
          </div>
          <a href={details.githubLink}>
            <img src={details.iconUrl} alt="icône de Github" />
          </a>
        </div>
        <div className='work-duration'>{details.date}</div>
        <ul>
          {details.responsabilities.map((item) =>(
              <li key={item}>{item}</li>
          ))}
        </ul>
        {
          details.pageLink && 
          <p>Visiter la page ➡️ <a href={details.pageLink}>💻</a></p>
        }
        <img src={details.preview} alt="screenshot of the project" id="preview"/>
      </div>
    )
  }

export default ExperienceCard;
