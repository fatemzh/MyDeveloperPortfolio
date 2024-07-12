import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  return (
    <div className="work-experience-card">
      <div className="work-header">
        <h6>{details.title}</h6>
        <div className="work-technologies">
          {details.technologies &&
            details.technologies.map((tech, index) => {
              return tech.logo ? (
                <img
                  key={index}
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  width="30"
                  height="30"
                />
              ) : null;
            })}
          {details.githubLink && (
            <a href={details.githubLink} aria-label="GitHub repository">
              <img src={details.iconUrl} alt="GitHub icon" />
            </a>
          )}
        </div>
      </div>
      <div className="work-duration">{details.date}</div>
      <ul>
        {details.responsabilities &&
          details.responsabilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
      {details.pageLink && (
        <p>
          <a href={details.pageLink} className="pageLink">
            Demonstration ➡️ 💻
          </a>
        </p>
      )}
      {details.preview && (
        <img
          src={details.preview}
          alt="Screenshot of the project"
          id="preview"
        />
      )}
    </div>
  );
};

export default ExperienceCard;
