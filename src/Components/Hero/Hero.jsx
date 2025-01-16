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
            <span className="orange"> A Frontend developer</span>
            <br /> based in negria{" "}
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
    }, 4000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <div className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel_slide ${
            index === currentIndex ? "active" : "inactive"
          }`}
        >
          <div className="carousel_text">
            {slide.text}
            <Button />
          </div>
          <div className="carousel_image">
            <img className="imageSize" src={slide.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
