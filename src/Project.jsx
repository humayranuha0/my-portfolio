import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      tag: "FULL-STACK WEB APPLICATION",
      title: "Perfume Shop",
      image: "./project1.jpg",
      description:
        "A luxury full-stack e-commerce web app for browsing, ordering, and managing perfumes, built with secure authentication, order tracking, and an admin management system.",
      techStack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      liveLink: "https://perfume-eight-lake.vercel.app/",
      githubLink: "https://github.com/humayranuha0/Perfume",
    },
    {
      id: 2,
      tag: "FULL-STACK WEB APPLICATION",
      title: "Healthcare Management",
      image: "./project2.jpg",
      description:
        "A comprehensive healthcare portal designed to manage doctor appointments, patient medical records, and administrative workflows seamlessly. Built with a robust full-stack architecture ensuring fast performance and data security.",
      techStack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      liveLink: "https://healthcare-management-t6jk.vercel.app/",
      githubLink: "https://github.com/humayranuha0/healthcare-management",
    },

    {
      id: 3,
      tag: "FULL-STACK WEB APPLICATION",
      title: "Flower Shop",
      image: "./project3.jpg",
      description:
        "A feature-rich e-commerce platform built for online flower ordering, complete with product categories, interactive cart management, dynamic animations, and responsive backend API integration.",
      techStack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      liveLink:
        "https://6a63718a90a1d9b4d8ab549a--luxury-sprite-b99011.netlify.app/",
      githubLink: "https://github.com/humayranuha0/flower-shop",
    },
  ];

  return (
    <section
      id="projects"
      className="py-5"
      style={{ backgroundColor: "#fff0f3" }}
    >
      
      <div
        className="container text-center mb-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="display-5 fw-bold text-dark mb-2">
          FEATURED <span style={{ color: "#ff4757" }}>PROJECTS</span>
        </h2>
        <div
          className="mx-auto rounded-pill mb-3"
          style={{ width: "60px", height: "4px", backgroundColor: "#ff4757" }}
        ></div>
        <p className="text-muted fs-6">
          A showcase of full-stack projects I've built with precision and
          passion.
        </p>
      </div>

      
      <div className="container" style={{ maxWidth: "1320px" }}>
        <div className="row g-4 justify-content-center">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="col-12 col-md-6 col-lg-4 d-flex"
              data-aos="fade-up"
              data-aos-delay={index * 150} 
              data-aos-duration="1000"
            >
              <div
                className="cute-card p-4 bg-white rounded-4 w-100 d-flex flex-column justify-content-between shadow-sm border project-card"
                style={{
                  borderColor: "#ffeaa7",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
              >
                <div>
          
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span
                      className="fw-bold tracking-wider"
                      style={{
                        color: "#ff4757",
                        fontSize: "0.7rem",
                        letterSpacing: "1px",
                      }}
                    >
                      {project.tag}
                    </span>

                    <div className="d-flex gap-3 align-items-center">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-icon-link"
                        style={{ color: "#ff4757", fontSize: "1.1rem" }}
                        title="GitHub Repository"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-icon-link"
                        style={{ color: "#ff4757", fontSize: "1rem" }}
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>

                  <div
                    className="overflow-hidden rounded-3 mb-3 border position-relative image-container"
                    style={{ borderColor: "#fff0f3" }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid w-100 object-fit-cover project-img"
                      style={{
                        height: "180px",
                        transition: "transform 0.5s ease",
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/600x350?text=Project+Preview";
                      }}
                    />
                  </div>

                 
                  <h3 className="fw-bold text-dark mb-2 fs-5">
                    {project.title}
                  </h3>
                  <p
                    className="text-muted small mb-4 lh-base"
                    style={{ minHeight: "70px", fontSize: "0.85rem" }}
                  >
                    {project.description}
                  </p>
                </div>

               
                <div
                  className="pt-3 border-top"
                  style={{ borderColor: "#fff0f3" }}
                >
                  <div className="d-flex flex-wrap gap-1">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="badge fw-normal px-2 py-1 rounded-2 tech-badge"
                        style={{
                          backgroundColor: "#fff0f3",
                          color: "#ff4757",
                          fontSize: "0.7rem",
                          transition:
                            "background-color 0.2s ease, color 0.2s ease",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
