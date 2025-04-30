// Skills.jsx
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      title: "Backend",
      skills: [
     
        { name: "Python", level: 80 },
           {name:"Go",level:75},
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "DevOps",
      skills: [
        { name: "AWS", level: 70 },
        { name: "Docker", level: 65 },
        { name: "CI/CD", level: 75 }
      ]
    }
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">Technical Skills</h2>
      
      <div className="skills-categories">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-card">
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;