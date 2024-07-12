import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/fatima-abid-91b200196/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="footer-icon" />
          </a>
          <a
            href="https://github.com/fatemzh"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="footer-icon" />
          </a>
          <a href="mailto:abidfatem@gmail.com" aria-label="Email">
            <FaEnvelope className="footer-icon" />
          </a>
        </div>
        <p>© 2024 Developed by Abid Fatima</p>
      </div>
    </footer>
  );
};

export default Footer;
