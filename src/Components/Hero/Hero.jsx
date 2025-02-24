import React, { useEffect, useState } from "react";
import heroImage from "./ahmdo.png";
import heroImage2 from "./image.png";
import "./Hero.css";
import Button from "../Buttons/Button";

const Hero = () => {
  const slides = [
    {
      id: 1,
      text: (
        <>
          <h1>
            Hello!
            <br />
            <span className="orange"> I'm Ahmed Sa'id </span> <br /> A Web
            Developer.
          </h1>
        </>
      ),
      image: heroImage,
    },
    {
      id: 2,
      text: (
        <>
          <h1>
            <br />
            <span className="orange"> A Frontend Developer</span>
            <br /> Based in Nigeria
          </h1>
        </>
      ),
      image: heroImage2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <div className="hero-carousel">
      {/* Left side - Text Changing */}
      <div className="left-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-text-slide ${
              index === currentIndex ? "active" : "inactive"
            }`}
          >
            {slide.text}
          </div>
        ))}
        <Button /> {/* Optional button */}
      </div>

      {/* Right side - Image Changing */}
      <div className="right-carousel">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            className={`carousel-image ${
              index === currentIndex ? "active" : "inactive"
            }`}
            src={slide.image}
            alt="Hero Slide"
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
