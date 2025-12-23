import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
      <div className="flip-card-inner">
        
        {/* --- FRONT SIDE --- */}
        <div className="flip-card-front">
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          
          <div className="tech-stack">
            {project.tech.map((t, index) => (
              <span key={index} className="tech-badge">{t}</span>
            ))}
          </div>

          <button className="details-toggle" onClick={() => setIsFlipped(true)}>
            ↓ Read Project Story
          </button>

          <div className="card-links">
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="cv-button small">Live Demo</a>
            <a href={project.github} target="_blank" rel="noreferrer" className="github-link">GitHub</a>
          </div>
        </div>

        {/* --- BACK SIDE --- */}
        <div className="flip-card-back">
          <h3>Project Deep Dive</h3>
          <div className="deep-dive-text">
            <p><strong>The Problem:</strong> {project.problem}</p>
            <p><strong>Solution:</strong> {project.solution}</p>
            <p><strong>Challenges:</strong> {project.challenges}</p>
          </div>

          {project.demoUser && (
            <div className="demo-creds">
              <strong>Login:</strong> {project.demoUser} | <strong>Pass:</strong> {project.demoPass}
            </div>
          )}

          <button className="details-toggle back-btn" onClick={() => setIsFlipped(false)}>
            ↑ Back to Project
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;