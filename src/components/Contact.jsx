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
          <a href="#">
            <span>
              <CiInstagram />
            </span>
          </a>
          <a href="#">
            <span>
              <IoLogoGithub />
            </span>
          </a>
          <a href="#">
            <span>
              <CiLinkedin />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
