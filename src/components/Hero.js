import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Hira Malik. I build products that matter.</h1>
        <p className="hero-subtitle">
         Full-Stack Developer | UX Researcher | IEEE Published Author. I turn complex data and research into seamless web experiences.
        </p>
        
        <a 
          href="/CV_Final_Updated.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cv-button"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;