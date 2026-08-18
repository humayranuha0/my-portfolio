import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section py-4">
      <div className="container" style={{ maxWidth: "1140px" }}>
        <div className="row g-4 align-items-center mb-3">
          <div className="col-md-5 text-center text-md-start">
            <h3 className="fw-bold text-accent mb-1 fs-3">
              Nuha<span className="text-accent">.</span>
            </h3>
            <p className="text-muted small mb-0 footer-tagline">
              Passionate Web Developer focused on building clean, user-friendly,
              and responsive web applications.
            </p>
          </div>

          <div className="col-md-4 text-center">
            <div className="d-flex justify-content-center gap-2 gap-md-3">
              <a href="#about" className="footer-link">
                About
              </a>
              <a href="#skills" className="footer-link">
                Skills
              </a>
              <a href="#projects" className="footer-link">
                Projects
              </a>
              <a href="#contact" className="footer-link">
                Contact
              </a>
            </div>
          </div>

          <div className="col-md-3 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-2">
              <a
                href="https://github.com/humayranuha0"
                target="_blank"
                rel="noopener noreferrer"
                className="aesthetic-icon"
              >
                <FaGithub size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/nuha-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="aesthetic-icon"
              >
                <FaLinkedin size={15} />
              </a>
              <a
                href="https://www.facebook.com/humayra.nuha.987/"
                target="_blank"
                rel="noopener noreferrer"
                className="aesthetic-icon"
              >
                <FaFacebook size={15} />
              </a>
              <a href="humayranuha0@gmail.com" className="aesthetic-icon">
                <FaEnvelope size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-top pt-3 text-center border-light-subtle">
          <p className="text-muted small mb-0 footer-copy">
            © 2026 Nuha. Built with <FaHeart className="heart-icon" /> using
            React & Bootstrap.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
