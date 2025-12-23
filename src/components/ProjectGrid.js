import React, { useState, useEffect } from 'react';
import { projectData } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectSkeleton from './ProjectSkeleton';

const ProjectGrid = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network fetch delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="project-section">
      <h2 className="section-title">My Projects</h2>
      <div className="project-grid">
        {isLoading 
          ? // Show 6 skeletons while loading
            [1, 2, 3, 4, 5, 6].map((n) => <ProjectSkeleton key={n} />)
          : // Show real data
            projectData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
        }
      </div>
    </section>
  );
};

export default ProjectGrid;