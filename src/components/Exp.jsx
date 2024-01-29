import { Card } from "./cards/Card";
import finnegans from "../assets/finnegans.jpg"

export const Exp = () => {
    const finExp="During my time at Finnegans, I had the opportunity to take part in a unique work simulation. In this challenge, I closely collaborated with a group of unfamiliar developers to build a backoffice from scratch. This experience taught me the importance of communication and effective collaboration, as well as the ability to learn and adapt quickly to new situations.";
  return (
    <section className="exp">
      <div className="container exp-container">
        <h2>This is some of my work experience</h2>
        <div className="cards-container">
            <Card img={finnegans} name="Finnegans" time="3 months" desc={finExp} />
            <Card img={finnegans} name="Finnegans" time="3 months" desc={finExp} />
            <Card img={finnegans} name="Finnegans" time="3 months" desc={finExp} />
        </div>
      </div>
    </section>
  );
};
