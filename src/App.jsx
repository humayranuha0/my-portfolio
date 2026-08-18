import React from "react";

import Navbar from "./Navber";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skill";
import Education from "./Education";
import Projects from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
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
