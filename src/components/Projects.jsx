import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Project A', description: 'This is a description of Project A.', technologies: ['React', 'JavaScript'] },
    { title: 'Project B', description: 'This is a description of Project B.', technologies: ['Vue.js', 'HTML'] },
    { title: 'Project C', description: 'This is a description of Project C.', technologies: ['Angular', 'TypeScript'] }
  ];

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <ul>
            {project.technologies.map(tech => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;