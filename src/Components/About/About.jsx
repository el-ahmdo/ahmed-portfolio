import React, { useState } from "react";
import "./About.css";
import ahmdo from "./ahmdo.png";

const About = () => {
  return (
    <div className="About">
      <div className="About-Me-Container">
        <div className="Left-Side">
          <img src={ahmdo} alt="" />
        </div>
        <div className="right-Side">
          <div class="container">
            <p class="background-text">about</p>
            <p class="foreground-text">about me</p>
          </div>
          <div className="qoute">
            <p>
              I'm a passionate frontend developer with a love for creating
              engaging and user-friendly web experiences. I enjoy turning ideas
              into visually appealing and functional designs. Constantly
              learning and improving, I strive to deliver clean, efficient, and
              innovative code.
            </p>
          </div>
          {/* details sections */}
          <div className="details">
            <div className="details-row">
              <h2> Name:</h2>
              <span>
                {" "}
                <h2>Ahmed Aliyu Said</h2>{" "}
              </span>
            </div>
            <div className="details-row">
              <h2> Date of Birth:</h2>
              <span>
                {" "}
                <h2>July 11, 2006</h2>{" "}
              </span>
            </div>
            <div className="details-row">
              <h2> Adress:</h2>
              <span>
                {" "}
                <h2>Abuja</h2>{" "}
              </span>
            </div>
            <div className="details-row">
              <h2> Zipcode:</h2>
              <span>
                {" "}
                <h2>900001</h2>{" "}
              </span>
            </div>
            <div className="details-row">
              <h2> Email:</h2>
              <span>
                {" "}
                <h2>Aliyua875@gmail.com</h2>{" "}
              </span>
            </div>
            <div className="details-row">
              <h2> Phone:</h2>
              <span>
                {" "}
                <h2>+2348107640571</h2>{" "}
              </span>
            </div>
          </div>

          {/* projects section */}
          <div className="projects">
            <p>
              <span>20</span> Projects complete
            </p>
          </div>

          {/* download cv button */}
          <div>
            <button className="button">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
