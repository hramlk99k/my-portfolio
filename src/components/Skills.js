import React from 'react';

const Skills = () => {
  const skills = [
    { category: "Frontend", items: ["React", "React 19","JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS","Framer motion","Web Audio API"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "REST APIs"] },
    { category: "Tools", items: ["Git", "GitHub", "Vercel","Render", "Vite","Postman", "Agile/Scrum","MongoDB Atlas","MongoDB compass","Visual Studio Code"] }
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Technical Expertise</h2>
      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-category">
            <h3>{skillGroup.category}</h3>
            <div className="skill-list">
              {skillGroup.items.map((item, i) => (
                <span key={i} className="skill-item">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;