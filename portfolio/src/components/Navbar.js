import React, { useState } from "react";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#services" onClick={toggleMenu}>Services</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
        <a href="/resume.pdf" className="resume-btn mobile" onClick={toggleMenu} download>
          Resume
        </a>
      </div>

      <a href="https://drive.google.com/file/d/11NTqhzbaojcQoARZDp7bAm12vs3WKcAV/view?usp=drive_link" className="resume-btn desktop" download>
        Resume
      </a>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
