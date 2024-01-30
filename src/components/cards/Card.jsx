import './Cards.css'

export const Card = ({ img, name, desc, time, repo, web, customLink, customLinkText, tech}) => {
  return (
  <div className="card">
    <img src={img} alt={name}/>
    <h3>{name}</h3>
    <div className="project-skills-container">
    {
      tech && (
        tech.map((skill) => {
          return <img className="project-skill" key={skill.id} src={skill.img} alt={skill.name}/>;
        })
      )
    }
    </div>
    <p className='time'>{time}</p>
    <p className='desc'>{desc}</p>
    <div className="links-container">
    {
      repo && <a href={repo}>View code</a> 
    }
    {
      web !== "" && <a href={web}>Visit page</a>
    }
    {
      customLink && <a href={customLink}>{customLinkText}</a>
    }
    </div>
  </div>
  );
};
