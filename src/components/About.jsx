import { aboutData } from "../data/data"

export const About = () => {
    return (
        <section>
            {
                aboutData.map(({infoText, link, linkText, aboutText}) => {
                    return(
                        <div className="container about-container">
                            <h3>{infoText} <a href={link}>{linkText}</a> </h3>
                            <div>
                                <p>{aboutText}</p>
                            </div>
                        </div>
                    )
                })
            }
        </section>

    )
}