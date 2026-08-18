import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white py-3 border-bottom border-danger border-opacity-10 shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3 text-dark" href="#home">
          Nuha<span className="pink-accent">.</span>
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto text-center gap-2">
  <li className="nav-item">
    <a className="nav-link" href="#home">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#about">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#skills">Skills</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#projects">Projects</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#contact">Contact</a>
  </li>
</ul>

          <div className="text-center mt-3 mt-lg-0">
          <a href="#contact" className="btn btn-hire">
  Hire Me
</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
