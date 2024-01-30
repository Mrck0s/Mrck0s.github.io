import { useState } from "react";
import { headerData, skills } from "../data/data";
import { TypedText } from "../ui/TypedText";

export const Header = () => {
  return (
    <header className="header" id="home">
      {headerData.map(({ perfilImg, intro, name, profession, id }) => {
        return (
          <div className="container header-container" key={id}>
            <div className="perfil-img">
              <img src={perfilImg} alt="Marcos furco" />
            </div>
            <div className="header-r">
              <div className="intro">
                <TypedText text={intro} name={name} />
              </div>
              <h5 className="prof">{profession}</h5>
            </div>
            <div className="header-skills-container">
              {
                skills.map((skill) => {
                  return <img className="header-skill" key={skill.id} src={skill.img} alt={skill.name}/>;
                })
              }
            </div>
          </div>
        );
      })}
    </header>
  );
};
