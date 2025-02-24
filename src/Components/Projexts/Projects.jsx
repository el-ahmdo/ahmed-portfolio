import React from "react";
import "./Projects.css";
import Ecommerce from "../Assets/commerce.png";
import Game from "../Assets/PlatformerGame.png";
import Dictionary from "../Assets/DictionaryApp2.png";
import Stopwatch from "../Assets/StopwatchApp.png";
import kursi from "../Assets/Kursi.png";
import todo from "../Assets/TodoMain.png";

const projectsData = [
  { name: "E-Commerce", img: Ecommerce, span: "span-1", description: "  " },
  { name: "Platformer Game", img: Game, span: "span-2", description: "  " }, // Spans 2 columns
  { name: "Dictionary App", img: Dictionary, span: "span-2", description: " " }, // Spans 2 columns
  { name: "Stopwatch App", img: Stopwatch, span: "", description: " " },
  { name: "Kursi App", img: kursi, span: "span-2", description: "   " }, // Spans 2 columns
  { name: "Todo App", img: todo, span: "", description: "" },
];

const Projects = () => {
  return (
    <section id="projects" className="Project-section-con">
      <div className="backGround-text-con">
        <p className="back-text">Projects</p>
        <p className="front-text">Projects</p>
      </div>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className={`grid-item ${project.span}`}>
            <img src={project.img} alt={project.name} className="imageFit" />
            <div className="hover-banner">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="download_resume_button">Download Cv</div>
    </section>
  );
};

export default Projects;
