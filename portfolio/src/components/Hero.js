import React from "react";
import "../CSS/HeroSection.css";
import doctorImg from "../images/hero.webp"; 

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="subheading">Dr. Mrudula Salwatkar</p>
          <h1>BPTH<br />Physiotheripst</h1>
          <p className="description">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum debitis itaque dignissimos atque cum provident? Possimus voluptate eum, eos eius quae consequuntur necessitatibus ratione tenetur facere nulla amet accusantium illo?
          </p>
          <div className="hero-buttons">
            <button className="yellow-btn">Learn About Me</button>
            <button className="white-btn">Contact Me</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={doctorImg} alt="Doctor" />
        </div>
      </div>

      <div className="hero-footer">
        <div className="footer-left">
          <img src={doctorImg} alt="Small Doctor" />
          <div>
            <h3>Hello, I’m Mrudula</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sed laboriosam debitis accusantium blanditiis, id nemo nesciunt iusto ipsum. Quibusdam quidem dolore aspernatur quaerat provident saepe libero sequi deleniti veniam.
            </p>
          </div>
        </div>
        <div className="footer-buttons">
          <button className="send-btn">Send Message</button>
          <a href="/cv.pdf" className="download-btn" download>Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
