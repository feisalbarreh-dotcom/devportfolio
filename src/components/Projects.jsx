import React from 'react';

const projects = [
  {
    title: 'FEiOS AI Operating System',
    description: 'An AI-powered development assistant built from scratch on Linux Mint. Features project management, code generation, Git integration, and persistent memory.',
    tech: ['Python', 'Ollama', 'React', 'Linux'],
    github: 'https://github.com/feisalbarreh-dotcom/feios',
    demo: '#'
  },
  {
    title: 'AI Development Portfolio',
    description: 'Modern developer portfolio built with React and Tailwind CSS. Features dark mode, responsive design, and interactive components.',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'Framer Motion'],
    github: 'https://github.com/feisalbarreh-dotcom/devportfolio',
    demo: 'https://feisalbarreh-dotcom.github.io/devportfolio'
  },
  {
    title: 'FeiBot Trading Bot',
    description: 'An AI-powered trading bot for forex and cryptocurrency markets. Features market analysis, strategy backtesting, and signal generation.',
    tech: ['Python', 'AI', 'Data Analysis', 'Financial Markets'],
    github: '#',
    demo: '#'
  },
  {
    title: 'AI Research & Documentation Skill',
    description: 'A research module that performs web searches, scrapes documentation, summarizes findings, and generates reports.',
    tech: ['Python', 'Web Scraping', 'AI', 'Natural Language'],
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          My Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Click on the buttons below to explore each project's code or live demo.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition ${project.github === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={project.github === '#' ? (e) => e.preventDefault() : undefined}
                  >
                    📦 GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition ${project.demo === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={project.demo === '#' ? (e) => e.preventDefault() : undefined}
                  >
                    🚀 Live Demo
                  </a>
                </div>
                {project.github === '#' && (
                  <p className="text-xs text-gray-400 mt-2">Coming soon</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
