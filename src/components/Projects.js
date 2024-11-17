import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: 'Placement Portal',
    description: 'A seamless job connection hub, built with MERN stack, to help students land their dream jobs in no time! 🚀💼',
    image: 'project1.jpeg',
    githubLink: 'https://github.com/pranavinn/placement_portal',
    deployedLink: ''
  },
  {
    id: 2,
    name: 'Internshaala Automation Tool',
    description: 'Automate your internship applications on Internshaala with this nifty Node.js & Puppeteer tool! 📈🖥️',
    image: 'project2.jpg',
    githubLink: 'https://github.com/pranavinn/Internshala_Automation_Tool',
    deployedLink: ''
  },
  {
    id: 3,
    name: 'Dad Jokes',
    description: 'Get your daily dose of hilarious, kitten-filled dad jokes with this fun React app! 😂🐱',
    image: 'Project3.jpeg',
    githubLink: 'https://github.com/pranavinn/dad-jokes',
    deployedLink: 'https://amazing-kitten-248f62.netlify.app/' 
  },
  {
    id: 4,
    name: 'Path Finding Visualization',
    description: 'Watch pathfinding algorithms come to life with this fun and interactive visualization! 🧭🔍',
    image: 'project4.jpeg',
    githubLink: 'https://github.com/pranavinn/Path-Finding-Visualization',
    deployedLink: 'https://pathvisualizationofgraphs.netlify.app/' 
  },
  {
    id: 5,
    name: 'Community Food Redistribution',
    description: 'Fighting food waste by redistributing excess food to those in need. It’s a hunger-fighting mission! 🍽️💪',
    image: 'project5.jpeg',
    githubLink: 'https://github.com/pranavinn/Community_Food_Redistribution',
    deployedLink: '' 
  },
  {
    id: 6,
    name: 'Text Compression',
    description: 'Explore the real-world magic of Huffman Coding with this DSA-powered text compression tool! 🔒💾',
    image: 'project6.jpeg',
    githubLink: 'https://github.com/pranavinn/Text-Compresser-Huffman-Coding-',
    deployedLink: 'https://huffmancoding.netlify.app/' 
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img src={require(`../assets/${project.image}`)} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-button">
              View on GitHub
            </a>
            {project.deployedLink && (
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="github-button">
                View Deployed Website
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
