import React, { useState } from 'react';
import flower from "/src/assets/flower.jpg";


function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const projects = [
    {
      title: "Flower E-commerce Platform",
      description: "A clean, responsive web application built with HTML, CSS, JavaScript, and animated layouts.",
     image:flower,
      repo: "https://github.com/humayranuha0/flower-shop",
      demo: "https://6a63718a90a1d9b4d8ab549a--luxury-sprite-b99011.netlify.app/"


    }
    
  ];
  
  return (
    <div className="portfolio-container">
     
      <nav className="navbar">
        <div className="logo">Nuha<span>&lt;/&gt;</span></div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>


      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight-text">Humayra Nuha</span></h1>
          <h2>Full Stack Developer</h2>
          <p>Crafting modern, responsive, and user-friendly web applications with passion and precision.</p>
          <div className="hero-btn-group">
            <a href="/public/resume.pdf" download="/public/resume.pdf" className="btn btn-primary">Download Resume 📥</a>
           <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">
  View CV 👁️
</a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="glow-circle"></div>
          <img src="https://img.magnific.com/premium-psd/3d-cartoon-woman-business-suit-portrait_1216555-972.jpg?semt=ais_hybrid&w=740&q=80" alt="Nuha" className="profile-img" />
        </div>
      </section>

      <section id="about" className="about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-img-container">
            <div className="glow-circle-purple"></div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSccBUYE6QP0edWnPdSVfFNJ1fomb6K4FS5HVwzg5KCww&s=10" alt="Nuha About" className="about-img" />
          </div>
          <div className="about-text">
            <h3>I'm Humayra Nuha</h3>
            <p>Computer Science & Engineering student passionate about web technologies. I build scalable, beautiful web solutions using React, JavaScript, HTML, CSS, and Bootstrap.</p>
            <div className="services-list">
              <div className="service-card">🌐 Web Application Development</div>
              <div className="service-card">📱 Responsive UI/UX Design</div>
              <div className="service-card">🧩 Problem Solving & Clean Code</div>
            </div>
          </div>
        </div>
      </section>

    
      <section id="skills" className="skills-section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap', 'C Programming', 'Node.js','Express.js','MongoDB','Git & GitHub'].map((skill, index) => (
            <div key={index} className="skill-card">
              <span>{skill}</span>
              <div className="skill-dots">
                <span className="dot active"></span>
                <span className="dot active"></span>
                <span className="dot active"></span>
                <span className="dot active"></span>
                <span className="dot"></span>
              </div>
            </div>
          ))}
        </div>
      </section>

   
      <section id="projects" className="projects-section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card">
              <div className="project-preview"></div>
              <img src={proj.image} className="project-img" alt="" />
              <h4>{proj.title}</h4>
              <p>{proj.description}</p>
              <div className="card-buttons">
                <a href={proj.repo} target="_blank" 
        rel="noopener noreferrer"
         className="btn-small btn-outline">Repository</a>
                <a href={proj.demo} target="_blank" 
        rel="noopener noreferrer"
         className="btn-small btn-gradient">Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>

  <section id="contact" className="contact-section">
  <h2 className="section-title">Contact</h2>
  <form 
    action="https://api.web3forms.com/submit" 
    method="POST" 
    className="contact-form"
  >

    <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} />

    <div className="input-group">
      <label>Name</label>
      <input type="text" name="name" placeholder="Your Name" required />
    </div>

    <div className="input-group">
      <label>Email</label>
      <input type="email" name="email" placeholder="Your Email" required />
    </div>

    <div className="input-group">
      <label>Message</label>
      <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
    </div>

    <button type="submit" className="btn btn-primary submit-btn">
      Send Message 📩
    </button>
  </form>
</section>
      <footer className="footer">
        <div className="footer-logo">Nuha<span>&lt;/&gt;</span></div>
        <p>© All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;