import React from 'react';
import './About.css';
import profilePhoto from '../assets/your-photo.jpg'; // Ensure the path is correct
import resume from '../assets/myresume.pdf'; // Path to your resume file

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 style={{
            color: '#f2fad8',
            fontSize: '3rem',
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            fontWeight: 'bold',
            textAlign: 'center',
            letterSpacing: '1px'
          }}>
            About Me
          </h2>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            fontFamily: '"Roboto", sans-serif',
            textAlign: 'center'
          }}>
            I'm an
            <p><span className="typing-effect">Innovative Software Developer</span></p>
            with a deep interest in creating impactful solutions. I love exploring new technologies and honing my skills every day.
          </p>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            fontSize: '1.1rem',
            fontFamily: '"Roboto", sans-serif',
            lineHeight: '1.8'
          }}>
            <li>Loves participating in Hackathons.Won the <strong>CBIT Hacktober Fest-A National Level Hackathon 2023💻</strong>.</li>
            <li>I'm also a <strong>guitarist</strong> 😄🎸.</li>

          </ul>
        </div>
        <div className="about-content">
          <div className="about-photo">
            <img src={profilePhoto} alt="Profile" style={{ width: '200px', borderRadius: '50%' }} />
          </div>
          <div className="about-details">
            <h3 style={{
              fontSize: '2rem',
              fontFamily: 'Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            fontWeight: 'bold'
            }}>Experience</h3>
            <ul style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              fontFamily: '"Roboto", sans-serif',
              letterSpacing:'1px'
            }}>
              <li>
                <strong>Data Science Internship </strong> - Exposys Lab (Oct 2024 - Present)
                <p>Predicting the profits made by different startups and comparing and finding the accuracy.</p>
              </li>
              <li>
                <strong>Data Analyst Intern</strong> - Codegnan (July 2023 - Sept 2023)
                <p>Prediction of Movie scores.</p>
              </li>
              <li>
                <strong>Web Developer Intern</strong> - EdSpread (July 2022 - Sept 2022)
                <p>Creating a website to manage online books delivery system for a library.</p>
              </li>
            </ul>
            {/* Download Resume Button */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <a 
                href={resume} 
                download="myresume.pdf" 
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: '#fff',
                  backgroundColor: '#4CAF50',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
              >
                Download My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
