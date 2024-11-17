// Certifications.js
import React from 'react';
import './Certifications.css';

function Certifications() {
  const certifications = [
    { name: 'Java Programming', organization: 'Infosys', year: 2024 },
    { name: 'Big Data Analytics', organization: 'CouInfosysrsera', year: 2023 },
    { name: 'Cyber Security', organization: 'Google', year: 2023 },
    { name: 'Microsoft Azure Fundamentals', organization: 'Infosys', year: 2024 },

    // Add more certifications as needed
  ];

  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <ul className="certifications-list">
        {certifications.map((cert, index) => (
          <li key={index} className="certification-item">
            <h3>{cert.name}</h3>
            <p>{cert.organization} - {cert.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;
