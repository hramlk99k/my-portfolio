import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Hira Malik</h1>
        <p className="hero-subtitle">
          Full-Stack Developer specializing in Frontend Engineering. I build robust, logic-heavy interfaces with React and architect scalable backends with Node.js. My focus is on turning complex business requirements into high-performance digital solutions.
        </p>
        
        <a 
          href="/Hira_Malik_CV.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cv-button"
        >
          View Europass CV
        </a>
      </div>
    </section>
  );
};

export default Hero;