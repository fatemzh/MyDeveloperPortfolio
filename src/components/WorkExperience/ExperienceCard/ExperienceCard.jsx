import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  return (
    <div className="work-experience-card">
      <div className="work-header">
        <h6>{details.title}</h6>
        <div className="work-technologies">
          {details.technologies.map((tech, index) => {
            return tech.logo ? (
              <img
                key={index}
                src={tech.logo}
                alt={tech.name}
                style={{ width: "30px", height: "30px" }}
              />
            ) : null;
          })}
          {details.githubLink && (
          <a href={details.githubLink}>
            <img src={details.iconUrl} alt="icône de Github" />
          </a>
        )}
        </div>
      </div>
      <div className="work-duration">{details.date}</div>
      <ul>
        {details.responsabilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {details.pageLink && (
        <p>
          <a href={details.pageLink} className="pageLink">Visiter la page ➡️ 💻</a>
        </p>
      )}
      {details.preview && (
        <img
          src={details.preview}
          alt="screenshot of the project"
          id="preview"
        />
      )}
    </div>
  );
};

export default ExperienceCard;
