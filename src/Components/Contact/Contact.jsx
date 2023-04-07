import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsTwitter, BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { ThemeContext } from "../../Context/theme";

export const Contact = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  return (
    <>
      <div className={`${themename} section`}>
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactcontainer" data-aos="fade-right">
          <a
            href="https://www.linkedin.com/in/ritika-gupta01/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/Ritika11294"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          <a
            href="https://twitter.com/RitikaG00319288"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="twitter"/>
          </a>
          {/* <a href="tel:+919927648210" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
            
          </a> */}
        </div>
        <div>
          <div id={`  ${themename} `} id = "mine"><p>Email:ritikagupta11294@gmail.com</p></div>
          <div id={`${themename} `} id = "mine1"><p>Phone:+918755472112</p></div>
        </div>
      </div>
    </>
  );
};
