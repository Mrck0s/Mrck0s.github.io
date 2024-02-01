import { CiInstagram } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { CgMail } from "react-icons/cg";

export const Contact = () => {
  const email = "msfurcogaitan@gmail.com";
  return (
    <section className="contact" id="contact">
      <div className="container contact-container">
        <h3>Contact with me!</h3>
        <div className="mail">
          <span>
            <CgMail />
          </span>
          <span>{email}</span>
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
      </div>
    </section>
  );
};
