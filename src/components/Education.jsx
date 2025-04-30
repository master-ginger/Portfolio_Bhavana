// Education.jsx
import React from 'react';
import './Timeline.css'; // We'll create this CSS file

export default function Education() {
  const education = [
    { year: "2025", degree: "Bachelors in Computer Engineering", uni: "Zeal College of Engineering and Research" },
    { year: "2021", degree: "Higher Secondary Education", uni: "RCF Junior College" },
    {year: "2019", degree: "Secondary Education", uni: "K.E.S English Medium School" }
  ];

  return (
    <div className="timeline-container">
      {education.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>{item.degree}</h3>
            <p className="university">{item.uni}</p>
            <span className="year">{item.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
}