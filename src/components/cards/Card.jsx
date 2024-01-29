import './Cards.css'

export const Card = ({ img, name, desc, time, repo, web}) => {
  return (
  <div className="card">
    <img src={img} alt={name}/>
    <h3>{name}</h3>
    <p className='time'>{time}</p>
    <p className='desc'>{desc}</p>
    <div className="links-container">
    {
      repo && <a href={repo}>View code</a> 
    }
    {
      web && <a href={web}>Visit page</a>
    }
    </div>
  </div>
  );
};
