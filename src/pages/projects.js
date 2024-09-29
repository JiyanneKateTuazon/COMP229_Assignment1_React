// src/pages/Projects.js

/**
 * File name: Navigation.css
 * Student's Name: Jiyanne Kate Tuazon
 * Student ID: 301320584
 * Date: 09/27/24
 */

import React from 'react';
import './Projects.css';

import image1 from '../assets/assignment1.jpg';
import image2 from '../assets/watsons.jpg';
import image3 from '../assets/tclogo.jpg';

const projects = [
  {
    title: "Multiplication Table",
    description: "Learning and exploring Multiplication Table in your own way!",
    image: image1,
    link: "http://studentweb.cencol.ca/jtuazon8/COMP125/Assignment%201/assignment1.html" // Corrected path
  },
  {
    title: "Watson's Philippines Campaign",
    description: "Promoting new products and other beauty merchandise!",
    image: image2,
    link: "https://www.watsons.com.ph/?utm_source=google&utm_medium=sem_cpc&utm_campaign=2024-AO&gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54VKETOIQGlddpyjLSkfodnzapNFrcZ3nAnyTD10-tFFDDxy-8hVxDRoC_FMQAvD_BwE" // Corrected path
  },
  {
    title: "City Government of Tanauan",
    description: "Website of City Government of Tanauan",
    image: image3,
    link: "https://tanauancity.gov.ph/" // Corrected path
  }
];


const Projects = () => (
  <div className="projects">
    <h1>My Projects</h1>
    <div className="project-list">
      {projects.map((project, index) => (
        <div className="project-item" key={index}>
          <img src={project.image} alt={project.title} className="project-image" />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div></div>
          <a href={project.link} className="btn">View Project</a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;

