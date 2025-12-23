import React from 'react';

const ProjectSkeleton = () => {
  return (
    <div className="project-card skeleton">
      <div className="skeleton-title"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text short"></div>
      <div className="skeleton-tech-stack">
        <div className="skeleton-badge"></div>
        <div className="skeleton-badge"></div>
        <div className="skeleton-badge"></div>
      </div>
      <div className="skeleton-links">
        <div className="skeleton-btn"></div>
        <div className="skeleton-btn text"></div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;