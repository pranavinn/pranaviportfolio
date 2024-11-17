import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: 'Placement Portal',
    description: 'Our Placement Portal, built with the MERN stack (MongoDB, Express.js, React, Node.js), connects students with job opportunities effortlessly...',
    image: 'project1.jpeg',
    githubLink: 'https://github.com/pranavinn/placement_portal',
    deployedLink: ''
  },
  {
    id: 2,
    name: 'Internshaala Automation Tool',
    description: 'Built with Node.js (Puppeteer), JavaScript, and Express.js, this tool automates internship applications on Internshaala...',
    image: 'project2.jpg',
    githubLink: 'https://github.com/pranavinn/Internshala_Automation_Tool',
    deployedLink: ''
  },
  {
    id: 3, // Ensure the `id` is unique
    name: 'Dad Jokes',
    description: 'The amazing kitten-filled Dad Jokes website, built with JavaScript, React Js, and CSS...',
    image: 'Project3.jpeg',
    githubLink: 'https://github.com/pranavinn/dad-jokes',
    deployedLink: 'https://amazing-kitten-248f62.netlify.app/' // Add your deployed link here
  },
  {
    id: 4, // Ensure the `id` is unique
    name: 'Path Finding Visualization',
    description: 'A simple informative visualization build using HTML,CSS,JavaScript for visualization of algorithms for students.',
    image: 'project4.jpeg',
    githubLink: 'https://github.com/pranavinn/Path-Finding-Visualization',
    deployedLink: 'https://pathvisualizationofgraphs.netlify.app/' // Add your deployed link here
  },
  {
    id: 5, // Ensure the `id` is unique
    name: 'Community Food Redistribution',
    description: 'The basic concept of this project Food Waste Management is to collect the excess/leftover food from donors such as hotels, restaurants, marriage halls, etc and distribute to the needy people.Made with PHP,HTML,CSS,JavaScript.s',
    image: 'project5.jpeg',
    githubLink: 'https://github.com/pranavinn/Community_Food_Redistribution',
    deployedLink: '' // Add your deployed link here
  },
  {
    id: 5, // Ensure the `id` is unique
    name: 'Text Compression',
    description: 'A DSA project,that lets us know the real life usage of Huffman Coding',
    image: 'project6.jpeg',
    githubLink: 'https://github.com/pranavinn/Text-Compresser-Huffman-Coding-',
    deployedLink: 'https://huffmancoding.netlify.app/' // Add your deployed link here
  },
  // Add more projects as needed
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
            {/* Conditionally render the 'View Website' button only for Dad Jokes project */}
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
