import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <h3>Hira Malik</h3>
        <p>Full-Stack Developer | Open to opportunities in Sweden</p>
        
        <div className="footer-socials">
          <a 
            href="https://www.linkedin.com/in/hira-malik-98458033b/" 
            target="_blank" 
            rel="noreferrer" 
            className="social-btn linkedin"
          >
            <span className="icon">in</span> LinkedIn
          </a>
          
          <a 
            href="https://github.com/hramlk99k" 
            target="_blank" 
            rel="noreferrer" 
            className="social-btn github"
          >
            <span className="icon">GH</span> GitHub
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Designed & Built by Hira</p>
          <p className="tech-tag">Built with React & CSS3</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;