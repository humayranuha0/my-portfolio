import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error submitting form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    backgroundColor: "#fff0f3",
    color: "#2d3436",
    border: "1px solid rgba(255, 107, 129, 0.2)",
    outline: "none",
  };

  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container text-center mb-5">
        <span
          className="text-uppercase tracking-wider small fw-bold d-block mb-2"
          style={{ color: "#ff4757", letterSpacing: "2px" }}
        >
          GET IN TOUCH
        </span>

        <h2 className="display-5 fw-bold text-dark mb-3">
          CONTACT <span style={{ color: "#ff4757" }}>ME</span>
        </h2>

        <div
          className="mx-auto rounded-pill mb-3"
          style={{ width: "60px", height: "4px", backgroundColor: "#ff4757" }}
        ></div>

        <p className="text-muted fs-6 mx-auto" style={{ maxWidth: "550px" }}>
          Ready to start a project or just want to connect? Send a message
          below.
        </p>
      </div>

      <div className="container" style={{ maxWidth: "1000px" }}>
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5">
            <div className="cute-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between bg-white">
              <div>
                <h3 className="fw-bold text-dark mb-3">
                  Let's build something <br />
                  <span style={{ color: "#ff4757" }}>great together</span>
                </h3>
                <p className="text-muted small mb-4">
                  Have a project in mind or just want to say hi? My inbox is
                  always open — I try to reply within a day.
                </p>

                <div
                  className="p-3 rounded-4 d-flex align-items-center gap-3 mb-3"
                  style={{ backgroundColor: "#fff0f3" }}
                >
                  <div
                    className="rounded-circle bg-white d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px", color: "#ff4757" }}
                  >
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <span
                      className="d-block text-uppercase text-muted"
                      style={{ fontSize: "0.75rem", fontWeight: "700" }}
                    >
                      EMAIL
                    </span>
                    <a
                      href="mailto:humayranuha0@gmail.com"
                      className="fw-bold text-dark text-decoration-none small"
                    >
                      humayranuha0@gmail.com
                    </a>
                  </div>
                </div>

                <div
                  className="p-3 rounded-4 d-flex align-items-center gap-3 mb-4"
                  style={{ backgroundColor: "#fff0f3" }}
                >
                  <div
                    className="rounded-circle bg-white d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px", color: "#ff4757" }}
                  >
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <span
                      className="d-block text-uppercase text-muted"
                      style={{ fontSize: "0.75rem", fontWeight: "700" }}
                    >
                      LOCATION
                    </span>
                    <span className="fw-bold text-dark small">
                      Dhaka, Bangladesh
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <span
                  className="d-block text-uppercase text-muted mb-2"
                  style={{ fontSize: "0.75rem", fontWeight: "700" }}
                >
                  CONNECT WITH ME
                </span>
                <div className="d-flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/nuha-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-circle d-flex align-items-center justify-content-center text-decoration-none"
                    style={{
                      width: "42px",
                      height: "42px",
                      backgroundColor: "#fff0f3",
                      color: "#ff4757",
                      fontSize: "1.2rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="https://github.com/humayranuha0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-circle d-flex align-items-center justify-content-center text-decoration-none"
                    style={{
                      width: "42px",
                      height: "42px",
                      backgroundColor: "#fff0f3",
                      color: "#ff4757",
                      fontSize: "1.2rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.facebook.com/humayra.nuha.987/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-circle d-flex align-items-center justify-content-center text-decoration-none"
                    style={{
                      width: "42px",
                      height: "42px",
                      backgroundColor: "#fff0f3",
                      color: "#ff4757",
                      fontSize: "1.2rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="cute-card p-4 p-md-5 bg-white h-100">
              <form
                onSubmit={handleSubmit}
                style={{ backgroundColor: "#ffffff", borderRadius: "16px" }}
              >
                <div className="mb-3">
                  <label className="form-label small fw-bold text-dark mb-1">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control py-2 rounded-3"
                    style={inputStyle}
                    placeholder="Name *"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold text-dark mb-1">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control py-2 rounded-3"
                    style={inputStyle}
                    placeholder="Email *"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold text-dark mb-1">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control py-2 rounded-3"
                    style={inputStyle}
                    placeholder="Subject *"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label small fw-bold text-dark mb-1">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    className="form-control py-2 rounded-3"
                    style={inputStyle}
                    placeholder="Your message *"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn w-100 py-3 fw-bold d-flex align-items-center justify-content-center text-white"
                  style={{
                    backgroundColor: "#ff4757",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 15px rgba(255, 71, 87, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  <FaPaperPlane className="ms-2" />
                </button>
              </form>

              {result && (
                <p className="text-center mt-3 fw-semibold text-danger mb-0">
                  {result}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
