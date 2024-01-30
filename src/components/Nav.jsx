import logo from "../assets/logo.png"
import { CiInstagram } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";


export const Nav = () => {
    return (
        <nav>
            <div className="container nav-container">
                <a href="#" className="logo">
                    <img src={logo} alt="logo" className="logo-img" />
                </a>
                <div className="sections-links">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="socials">
                    <a href="#"><span><CiInstagram/></span></a>
                    <a href="#"><span><IoLogoGithub/></span></a>
                    <a href="#"><span><CiLinkedin/></span></a>
                </div>
            </div>
        </nav>
    )
}