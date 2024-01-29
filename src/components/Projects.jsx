import { Card } from "./cards/Card";
import { projects, skills } from "../data/data";
import ghPreview from "../assets/gh-preview.png"

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container projects-container" >
        <h2>Some of my Projects</h2>
        <div className="cards-container">
          {projects.map((project) => {
            return (
              <Card
                key={project.id}
                img={project.preview}
                name={project.name}
                desc={project.desc}
                repo={project.repo}
                web={project.web}
              />
            );
          })}
          <Card img={ghPreview} name="More Projects" web="https://github.com/Mrck0s?tab=repositories"/>
        </div>
      </div>
    </section>
  );
};
