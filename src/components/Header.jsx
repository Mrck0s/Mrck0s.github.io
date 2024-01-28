import { headerData } from "../data/data"


export const Header = () => {
    return (
        <header>
                {
                    headerData.map(({perfilImg, intro, name, profession}) => {
                        return (
                            <div className="container header-container">
                                <div className="perfil-img">
                                    <img src={perfilImg} alt="Marcos furco" />
                                </div>
                                <div className="header-r">
                                    <div className="intro">
                                        <h1>{intro} <span>{name}</span> </h1>
                                    </div>
                                    <h5 className="prof">{profession}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            
        </header>

    )
}