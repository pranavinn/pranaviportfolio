// Education.js
import React from 'react';
import './Education.css';

function Education() {
  const educationDetails = [
    {
      degree: 'Bachelor of Science in Informational Technology',
      institution: 'Chaitanya Bharathi institute of Technology',
      year: '2021-2025'
    },
    {
      degree: 'Intermediate',
      institution: 'Narayana Junior College',
      year: '2019-2021'
    },
    {
      degree: 'High Scool',
      institution: 'Narayana High School',
      year: '2019'
    },
    // Add more education details as needed
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <ul className="education-list">
        {educationDetails.map((edu, index) => (
          <li key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p>{edu.institution} - {edu.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
