import React from 'react';
import './Skills.css';

const skillsData = {
  Languages: ['Python', 'C++', 'Java', 'JavaScript'],
  'Academic Excellence': ['Object-oriented design', 'Operating systems','Computre Networks', 'Algorithms', 'Data structures', 'Complexity analysis'],
  'Technical Expertise': ['Software Development', 'Web Development', 'Machine Learning', 'Application Integration', 'Analytical Thinking', 'AR/VR'],
  Database: ['MySQL', 'MongoDB'],
  'Soft Skills': ['Excellent communication (Written & Verbal)', 'Quick Learner', 'Collaboration skills', 'Team player', 'Problem Solving']
};

const Skills = () => (
  <section id="skills">
    <h2 style={{
      fontSize: '3rem', // Increase font size
      fontWeight: 'bold', // Make it bold
      textAlign: 'center', // Center align it
      letterSpacing: '1px', // Add a bit of spacing between letters
      marginBottom: '2rem' // Add space below the heading
    }}>
      Skills
    </h2>
    <div>
      {Object.keys(skillsData).map((category, index) => (
        <div key={index} style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h3>{category}</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {skillsData[category].map((skill, skillIndex) => (
              <li key={skillIndex} style={{ padding: '0.5rem 0' }}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
