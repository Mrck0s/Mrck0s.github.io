import { aboutData } from "../data/data"


export const About = () => {
    return (
        <section className="about" id="about">
            {
                aboutData.map(({infoText, link, linkText, aboutText, ilustration, id}) => {
                    return(
                        <div className="container about-container" key={id}>
                            <div>
                            <h3>{infoText} <a href={link}>{linkText}</a> </h3>
                            <p>{aboutText}</p>
                            </div>
                            <img src={ilustration} alt="ilustration" />
                        </div>
                    )
                })
            }
        </section>

    )
}