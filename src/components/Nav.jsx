import logo from "../assets/logo.png";
import { CiInstagram } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

      <div className="container nav-container">
        <nav>
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
          <a href="https://www.instagram.com/m4rcos_fg/">
            <span>
              <CiInstagram />
            </span>
          </a>
          <a href="https://github.com/Mrck0s">
            <span>
              <IoLogoGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/msfurcogaitan/">
            <span>
              <CiLinkedin />
            </span>
          </a>
        </div>
        </nav>
        <button className="menu-btn" onClick={handleIsMenuOpen}>
          <IoMenu />
        </button>
        {isMenuOpen && (
          <div className="nav-mobile">
            <div className="sections-links-mobile">
              <a href="#about" onClick={handleIsMenuOpen}>About</a>
              <a href="#experience" onClick={handleIsMenuOpen}>Experience</a>
              <a href="#projects" onClick={handleIsMenuOpen}>Projects</a>
              <a href="#contact" onClick={handleIsMenuOpen}>Contact</a>
            </div>
            <div className="socials-mobile">
              <a href="https://www.instagram.com/m4rcos_fg/">
                <span>
                  <CiInstagram />
                </span>
              </a>
              <a href="https://github.com/Mrck0s">
                <span>
                  <IoLogoGithub />
                </span>
              </a>
              <a href="https://www.linkedin.com/in/msfurcogaitan/">
                <span>
                  <CiLinkedin />
                </span>
              </a>
            </div>
            <a href="#" className="logo-mobile" onClick={handleIsMenuOpen}>
              <img src={logo} alt="logo" className="logo-img" />
            </a>
            <button className="menu-btn" onClick={handleIsMenuOpen}>
              <IoIosArrowUp />
            </button>
          </div>
        )}
      </div>
  );
};
