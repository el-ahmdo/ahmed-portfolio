import React from "react";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div className="port-container">
      <div className="backGround-text-con">
        <p className="back-text">Portfolio</p>
        <p className="front-text">Portfolio</p>
      </div>
      <div className="Alx">
        <h2>
          For ALX Pitch Project Video:
          <a
            href="https://www.youtube.com/watch?v=tQW4JEnuKJQ&feature=youtu.be"
            target="_blank">
            Click here to watch
          </a>
        </h2>

        <h2>
          For ALX slide deck project Video:
          <a
            href="https://https://docs.google.com/presentation/d/1jLMCvOdF8azIPM7Fy9MZ0GvN4UOvxXvfwKhwHNXDSKQ/edit?usp=sharing.youtube.com/watch?v=tQW4JEnuKJQ&feature=youtu.be"
            target="_blank">
            Click here to watch
          </a>
        </h2>
      </div>
      <div className="pitch">
        <div className="backGround-text-con">
          <p className="back-text">Elevator Pitch</p>
          <p className="front-text">ElevatorPitch</p>
        </div>
        <iframe
          class="video-center"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sYMb6Hshzuc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Portfolio;
