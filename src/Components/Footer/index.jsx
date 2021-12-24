import React from "react";
import "./Footer.css";
import githubIcon from "../../images/social/github-original.svg";
import linkedinIcon from "../../images/social/linkedin-original.svg";

const Footer = () => {
  return (
    <footer>
      desenvolvido por Lucas A. Santos
      <a
        target="_blank"
        href="https://github.com/lucasquearis"
        rel="noreferrer"
      >
        <img width="20px" alt="github" src={githubIcon} />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/lucasquearis"
        rel="noreferrer"
      >
        <img width="20px" alt="linkedin" src={linkedinIcon} />
      </a>
    </footer>
  );
};

export default Footer;
