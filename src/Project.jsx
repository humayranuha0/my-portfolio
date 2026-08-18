import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      tag: "FULL-STACK WEB APPLICATION",
      title: "Healthcare Management",
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQEchzq8Zbl9sQ/profile-treasury-image-shrink_480_480/B56aARzKjgKEAU-/0/1787005020638?e=1787677200&v=beta&t=kDttaRlYJJo2Dz1pn6l4mawdy8VNFJrn7lr0afi7rCg", // তোমার স্ক্রিনশটের ইমেজ লিংক
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
      id: 2,
      tag: "FULL-STACK WEB APPLICATION",
      title: "Flower Shop",
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQHNQ1z5O_B5Lw/profile-treasury-image-shrink_480_480/B56Z.atwR0JoAU-/0/1785007113578?e=1787677200&v=beta&t=gV2jb8rhMxjH0VmYTGsjBUDpgcBUjT0DbtqMf7BOuio", // তোমার স্ক্রিনশটের ইমেজ লিংক
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
      <div className="container text-center mb-5">
        <h2 className="display-5 fw-bold text-dark mb-2">
          FEATURED <span style={{ color: "#ff4757" }}>PROJECTS</span>
        </h2>
        <div
          className="mx-auto rounded-pill"
          style={{ width: "50px", height: "4px", backgroundColor: "#ff4757" }}
        ></div>
      </div>

      <div className="container" style={{ maxWidth: "1140px" }}>
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 d-flex">
              <div
                className="cute-card p-4 bg-white rounded-4 w-100 d-flex flex-column justify-content-between"
                style={{
                  border: "1px solid #ffeaa7",
                  boxShadow: "0 10px 30px rgba(255, 71, 87, 0.05)",
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span
                      className="fw-bold tracking-wider"
                      style={{
                        color: "#ff4757",
                        fontSize: "0.75rem",
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
                        style={{ color: "#ff4757", fontSize: "1.1rem" }}
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#ff4757", fontSize: "1rem" }}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>

                  <div
                    className="overflow-hidden rounded-3 mb-3"
                    style={{ border: "1px solid #fff0f3" }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid w-100 object-fit-cover"
                      style={{ maxHeight: "200px" }}
                    />
                  </div>

                  <h3 className="fw-bold text-dark mb-2 fs-4">
                    {project.title}
                  </h3>
                  <p className="text-muted small mb-4 lh-base">
                    {project.description}
                  </p>
                </div>

                <div
                  className="pt-3 border-top"
                  style={{ borderColor: "#fff0f3" }}
                >
                  <div className="d-flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="badge fw-normal px-2 py-1 rounded-2"
                        style={{
                          backgroundColor: "#fff0f3",
                          color: "#ff4757",
                          fontSize: "0.75rem",
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
