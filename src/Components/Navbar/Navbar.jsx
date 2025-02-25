import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeItem, setActiveItem] = useState("home"); // Default to 'home'
  const [menuOpen, setMenuOpen] = useState(false); // Toggle menu

  const handleClick = (itemName) => {
    setActiveItem(itemName); // Update active item
    setMenuOpen(false); // Close menu on click
  };

  return (
    <header className="header">
      <h1>Ahmdev</h1>

      {/* Hamburger Button */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Menu */}
      <nav className={`navigation ${menuOpen ? "open" : ""}`}>
        <ul>
          <li
            onClick={() => handleClick("home")}
            className={activeItem === "home" ? "Active" : ""}
          >
            <a href="#home">Home</a>
          </li>
          <li
            onClick={() => handleClick("about")}
            className={activeItem === "about" ? "Active" : ""}
          >
            <a href="#about">About</a>
          </li>
          <li
            onClick={() => handleClick("resume")}
            className={activeItem === "resume" ? "Active" : ""}
          >
            <a href="#resume">Resume</a>
          </li>
          <li
            onClick={() => handleClick("services")}
            className={activeItem === "services" ? "Active" : ""}
          >
            <a href="#services">Services</a>
          </li>
          <li
            onClick={() => handleClick("skills")}
            className={activeItem === "skills" ? "Active" : ""}
          >
            <a href="#skill">Skills</a>
          </li>
          <li
            onClick={() => handleClick("projects")}
            className={activeItem === "projects" ? "Active" : ""}
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            onClick={() => handleClick("contacts")}
            className={activeItem === "contacts" ? "Active" : ""}
          >
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
