// Experience.jsx
import React from 'react';
import { FaBriefcase, FaCode, FaChartLine } from 'react-icons/fa';
import './ExperienceTimeline.css'; // Separate CSS file

export default function Experience() {
  const experiences = [
      {
      year: "May 2025 - Present",
      role: "Associate Software Developer",
      company: "Ithena Technologies",
      description: "",
      icon: <FaCode />,
      tags: ["Javascript", "Go", "Thingsboard"]
    },
    {
      year: "Oct 2024 - April 2025",
      role: "Software Developer Intern",
      company: "Ithena Technologies",
      description: "",
      icon: <FaCode />,
      tags: ["Javascript", "Go", "Thingsboard"]
    },
    {
      year: "Jun 2024 - August 2024",
      role: "React Intern",
      company: "Celebal Technologies",
      description: "",
      icon: <FaCode />,
      tags: ["React", "TailwindCSS", "Kanban"]
    },
  ];

  return (
    <div className="experience-timeline">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="experience-icon">{exp.icon}</div>
          <div className="experience-content">
            <div className="experience-year">{exp.year}</div>
            <h3 className="experience-role">{exp.role}</h3>
            <h4 className="experience-company">{exp.company}</h4>
            <p className="experience-description">{exp.description}</p>
            <div className="experience-tags">
              {exp.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}