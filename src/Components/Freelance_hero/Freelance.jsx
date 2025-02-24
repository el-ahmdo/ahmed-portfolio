import React from "react";
import "./Freelance.css";
import HeroImage from "../Assets/freelance hero images/IMG_0747.jpg";
const Freelance = () => {
  const stats = [
    {
      number: 10,
      name: "Awards",
    },
    {
      number: 10,
      name: "Projects",
    },
    {
      number: 10,
      name: "Happy customers",
    },
    {
      number: 10,
      name: "Cups Of Coffee",
    },
  ];
  return (
    <section className="freelance_hero_section">
      <div className="hero">
        {/* Background Image */}
        <img src={HeroImage} alt="Hero Background" className="imageFit-hero" />

        {/* Content Container */}
        <div className="hero-content">
          <h2>
            I'm <span className="yellow"> Available</span> for <br />
            <span className="yellow"> Freelancing </span>
          </h2>
          <button className="hero-btn">Hire Me</button>
        </div>
      </div>
      <div className="freelance-stats">
        {stats.map((stat) => (
          <div className="stat">
            <div className="stat_content">
              <p>{stat.number}</p>

              <h2>{stat.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Freelance;
