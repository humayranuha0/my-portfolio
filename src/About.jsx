import React from "react";
import AOS from "aos";

const About = () => {
  return (
    <section id="about" className="py-5 bg-white overflow-hidden">
      <div
        className="container text-center mb-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="text-uppercase tracking-wider small pink-accent fw-bold">
          GET TO KNOW ME
        </span>
        <h2 className="display-5 fw-bold text-dark mt-1">
          ABOUT <span className="pink-accent">ME</span>
        </h2>
        <div className="pink-divider"></div>
      </div>

      <div className="container" style={{ maxWidth: "900px" }}>
        <div
          className="cute-card p-4 p-md-5 bg-white rounded-4 shadow-sm"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          <h3 className="fw-bold mb-3 text-dark">
            Crafting full-stack web experiences with{" "}
            <span className="pink-accent">purpose & precision</span>
          </h3>
          <p className="text-muted fs-6 lh-lg mb-4">
            Hello! I'm Humayra Nuha, a passionate Full Stack Web Developer. I
            specialize in building complete web applications — from designing
            responsive frontend interfaces with React & Bootstrap to developing
            scalable backend APIs with Node.js, Express, and MongoDB. I enjoy
            solving complex logic and creating seamless digital solutions.
          </p>

          <div className="row g-4 pt-3">
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div
                className="p-3 rounded-4 h-100"
                style={{ backgroundColor: "#fff0f3" }}
              >
                <h6 className="pink-accent fw-bold mb-1">
                  Frontend Development
                </h6>
                <p className="text-muted small mb-0">
                  Designing interactive UI with React, Bootstrap, and CSS.
                </p>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay="550"
              data-aos-duration="1000"
            >
              <div
                className="p-3 rounded-4 h-100"
                style={{ backgroundColor: "#fff0f3" }}
              >
                <h6 className="pink-accent fw-bold mb-1">Backend & APIs</h6>
                <p className="text-muted small mb-0">
                  Building secure RESTful APIs with Node.js and Express.js.
                </p>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="1000"
            >
              <div
                className="p-3 rounded-4 h-100"
                style={{ backgroundColor: "#fff0f3" }}
              >
                <h6 className="pink-accent fw-bold mb-1">
                  Database Management
                </h6>
                <p className="text-muted small mb-0">
                  Managing dynamic data efficiently with MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
