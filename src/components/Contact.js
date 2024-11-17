import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';  // Importing icons

const Contact = () => (
  <section id="contact">
    <h2>Contact</h2>
    <p>Let's connect & grow together!</p>

    {/* Contact icons */}
    <div className="social-links">
      <a href="https://www.linkedin.com/in/pranavi-n-42021b23b/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="https://github.com/pranavinn" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="mailto:pranavinagarapu03@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope size={30} />
      </a>
    </div>
  </section>
);

export default Contact;
