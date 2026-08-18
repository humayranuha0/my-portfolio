import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiC } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 style={{ color: "#E34F26" }} /> },
    { name: "CSS3", icon: <FaCss3Alt style={{ color: "#1572B6" }} /> },
    { name: "Bootstrap", icon: <FaBootstrap style={{ color: "#7952B3" }} /> },
    { name: "JavaScript", icon: <FaJs style={{ color: "#F7DF1E" }} /> },
    { name: "React.js", icon: <FaReact style={{ color: "#61DAFB" }} /> },
    { name: "Node.js", icon: <FaNodeJs style={{ color: "#339933" }} /> },
    { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} /> },
    { name: "Express.js", icon: <SiExpress style={{ color: "#2d3436" }} /> },
    { name: "Git", icon: <FaGitAlt style={{ color: "#F05032" }} /> },
    { name: "C Language", icon: <SiC style={{ color: "#A8B9CC" }} /> },
  ];

  const doubledSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-5 bg-soft-pink">
      <div className="container text-center mb-5">
        <span className="text-uppercase tracking-wider small pink-accent fw-bold">
          My Expertise
        </span>
        <h2 className="display-5 fw-bold text-dark mt-1">
          SKILLS & <span className="pink-accent">TECHNOLOGIES</span>
        </h2>
        <div className="pink-divider"></div>
      </div>

      <div className="skills-marquee-container">
        <div className="skills-marquee-track">
          {doubledSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
