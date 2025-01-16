import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeItem, setActiveItem] = useState(""); // Track the active item's name

  const handleClick = (itemName) => {
    setActiveItem(itemName); // Update the active item
  };

  return (
    <div>
      <header className="header">
        <h1>Ahmdev</h1>
        <div className="navigation">
          <ul>
            <li
              onClick={() => handleClick("home")}
              className={activeItem === "home" ? "Active" : ""}
            >
              Home
            </li>
            <li
              onClick={() => handleClick("about")}
              className={activeItem === "about" ? "Active" : ""}
            >
              About
            </li>
            <li
              onClick={() => handleClick("resume")}
              className={activeItem === "resume" ? "Active" : ""}
            >
              Resume
            </li>
            <li
              onClick={() => handleClick("services")}
              className={activeItem === "services" ? "Active" : ""}
            >
              Services
            </li>
            <li
              onClick={() => handleClick("skills")}
              className={activeItem === "skills" ? "Active" : ""}
            >
              Skills
            </li>
            <li
              onClick={() => handleClick("projects")}
              className={activeItem === "projects" ? "Active" : ""}
            >
              Projects
            </li>
            <li
              onClick={() => handleClick("contacts")}
              className={activeItem === "contacts" ? "Active" : ""}
            >
              Contacts
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
