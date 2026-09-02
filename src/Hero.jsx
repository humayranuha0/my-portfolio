import React, { useState, useEffect } from "react";
import AOS from "aos";
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
            <span
              className="text-uppercase tracking-wider small fw-bold pink-accent pt-5 d-block mb-2"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              HI, I'M
            </span>

            <h1
              className="display-3 fw-bold text-dark mb-0 lh-1"
              style={{ minHeight: "1.1em" }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {displayedFirst}
            </h1>

            <h1
              className="display-3 fw-bold pink-accent mb-3"
              style={{ minHeight: "1.1em" }}
              data-aos="fade-up"
              data-aos-delay="250"
            >
              {displayedLast}
              <span className="typing-cursor">|</span>
            </h1>

            <h5
              className="fw-semibold text-secondary mb-4"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              Full Stack Developer <span className="pink-accent">•</span> React
              & Node.js Specialist
            </h5>

            <p
              className="lead text-muted mb-4"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              Crafting dynamic, responsive <strong>Frontend UIs</strong> and
              building scalable, reliable <strong>Backend Systems</strong> to
              deliver seamless full-stack web applications.
            </p>

            <div
              className="d-flex flex-wrap gap-3 align-items-center"
              data-aos="fade-up"
              data-aos-delay="550"
            >
              <a
                href="Humayra_Cv.pdf"
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

          <div
            className="col-lg-5 text-center d-flex justify-content-center"
            data-aos="zoom-out-up"
            data-aos-delay="300"
            data-aos-duration="1400"
          >
            <div
              className="hero-avatar-wrapper rounded-circle overflow-hidden d-flex justify-content-center align-items-center shadow-lg position-relative"
              style={{
                width: "340px",
                height: "340px",
                boxShadow: "0 20px 40px rgba(255, 71, 87, 0.15)",
              }}
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
