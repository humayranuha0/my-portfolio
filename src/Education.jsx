import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-5 bg-white overflow-hidden">
      {/* Section Header */}
      <div
        className="container text-center mb-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="text-uppercase tracking-wider small pink-accent fw-bold">
          MY ACADEMICS
        </span>
        <h2 className="display-5 fw-bold text-dark mt-1">EDUCATION</h2>
        <div className="pink-divider"></div>
      </div>

      {/* Education Card */}
      <div className="container d-flex justify-content-center">
        <div
          className="cute-card p-4 p-md-5 bg-white w-100 d-flex align-items-center gap-4 shadow-sm"
          style={{ maxWidth: "900px" }}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          {/* Graduation Cap Icon Circle */}
          <div
            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
            style={{
              width: "70px",
              height: "70px",
              backgroundColor: "#fff0f3",
              color: "#ff4757",
              fontSize: "1.8rem",
            }}
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <FaGraduationCap />
          </div>

          {/* Details */}
          <div className="flex-grow-1">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
              <h3 className="fw-bold text-dark mb-0 fs-3">
                Computer Science & Engineering (CSE)
              </h3>

              <span
                className="badge rounded-pill fw-semibold px-3 py-2"
                style={{
                  backgroundColor: "#fff0f3",
                  color: "#ff4757",
                  fontSize: "0.85rem",
                }}
              >
                Ongoing
              </span>
            </div>

            <p
              className="fw-semibold mb-2"
              style={{ color: "#ff4757", fontSize: "1.05rem" }}
            >
              B.Sc in Computer Science & Engineering
            </p>

            <p className="text-muted mb-0 small">
              Focusing on computer fundamentals, programming concepts, data
              structures, algorithms, and full-stack web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
