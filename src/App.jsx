import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Resume from "./Components/Resume/resume";
import Services from "./Components/services/Services";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projexts/Projects";
import Freelance from "./Components/Freelance_hero/Freelance";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Components/Portfolio/Portfolio";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Projects />
      <Freelance />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
