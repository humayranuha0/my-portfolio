import React from "react";

import Navbar from "./Navber";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skill";
import Education from "./Education";
import Projects from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
