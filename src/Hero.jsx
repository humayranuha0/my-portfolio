import React, { useState, useEffect } from "react";

const Hero = () => {
  const firstName = "HUMAYRA";
  const lastName = "NUHA";

  const [displayedFirst, setDisplayedFirst] = useState("");
  const [displayedLast, setDisplayedLast] = useState("");

  const [isResumeHovered, setIsResumeHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  useEffect(() => {
    let firstIndex = 0;
    let lastIndex = 0;

    const timer = setInterval(() => {
      if (firstIndex < firstName.length) {
        setDisplayedFirst(firstName.slice(0, firstIndex + 1));
        firstIndex++;
      } else if (lastIndex < lastName.length) {
        setDisplayedLast(lastName.slice(0, lastIndex + 1));
        lastIndex++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const resumeBtnStyle = {
    backgroundColor: isResumeHovered ? "#e84118" : "#ff4757",
    color: "#ffffff",
    border: "none",
    borderRadius: "30px",
    padding: "10px 24px",
    fontWeight: "700",
    textDecoration: "none",
    display: "inline-block",
    boxShadow: isResumeHovered
      ? "0 8px 25px rgba(255, 71, 87, 0.5)"
      : "0 4px 15px rgba(255, 71, 87, 0.3)",
    transform: isResumeHovered ? "translateY(-3px)" : "translateY(0)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const contactBtnStyle = {
    backgroundColor: isContactHovered ? "#ff4757" : "transparent",
    color: isContactHovered ? "#ffffff" : "#ff4757",
    border: "2px solid #ff4757",
    borderRadius: "30px",
    padding: "8px 22px",
    fontWeight: "700",
    textDecoration: "none",
    display: "inline-block",
    transform: isContactHovered ? "translateY(-3px)" : "translateY(0)",
    boxShadow: isContactHovered ? "0 8px 25px rgba(255, 71, 87, 0.3)" : "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  return (
    <section
      id="home"
      className="min-vh-100 d-flex align-items-center bg-soft-pink py-5 overflow-hidden"
    >
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-7">
            <span className="text-uppercase tracking-wider small fw-bold pink-accent d-block mb-2">
              HI, I'M
            </span>

            <h1
              className="display-3 fw-bold text-dark mb-0 lh-1"
              style={{ minHeight: "1.1em" }}
            >
              {displayedFirst}
            </h1>
            <h1
              className="display-3 fw-bold pink-accent mb-3"
              style={{ minHeight: "1.1em" }}
            >
              {displayedLast}
              <span className="typing-cursor">|</span>
            </h1>

            <h5 className="fw-semibold text-secondary mb-4">
              Full Stack Developer <span className="pink-accent">•</span> React
              & Node.js Specialist
            </h5>

            <p className="lead text-muted mb-4">
              Crafting dynamic, responsive <strong>Frontend UIs</strong> and
              building scalable, reliable <strong>Backend Systems</strong> to
              deliver seamless full-stack web applications.
            </p>

            <div className="d-flex flex-wrap gap-3 align-items-center">
              <a
                href="Nuha CV.pdf"
                download="Nuha_CV.pdf"
                style={resumeBtnStyle}
                onMouseEnter={() => setIsResumeHovered(true)}
                onMouseLeave={() => setIsResumeHovered(false)}
              >
                Download Resume
              </a>

              <a
                href="#contact"
                style={contactBtnStyle}
                onMouseEnter={() => setIsContactHovered(true)}
                onMouseLeave={() => setIsContactHovered(false)}
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="col-lg-5 text-center d-flex justify-content-center">
            <div
              className="hero-avatar-wrapper rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
              style={{ width: "340px", height: "340px" }}
            >
              <img
                src="/profile.jpg"
                alt="Nuha"
                className="img-fluid w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
