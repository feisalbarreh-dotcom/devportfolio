import React from 'react';

const projects = [
  {
    title: 'FEiOS AI Operating System',
    description: 'A complete AI-powered development assistant built from scratch on Linux Mint. Features project management, task tracking, code generation, Git integration, terminal execution, and persistent memory. The orchestrator uses deterministic Python with LLM generation for coding, research, and automation.',
    tech: ['Python', 'Ollama', 'React', 'Linux', 'Git', 'AI']
  },
  {
    title: 'AI Development Portfolio',
    description: 'This very portfolio! A modern developer portfolio built with React and Tailwind CSS, featuring dark mode, responsive design, and interactive components. Deployed and managed through the FEiOS system.',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'FEiOS']
  },
  {
    title: 'FeiBot Trading Bot (In Progress)',
    description: 'An AI-powered trading bot for forex and cryptocurrency markets. Features market analysis, strategy backtesting, signal generation, and automated execution. Built as a module within the FEiOS ecosystem.',
    tech: ['Python', 'AI', 'APIs', 'Data Analysis', 'Financial Markets']
  },
  {
    title: 'Project Management & Memory System',
    description: 'A sophisticated project memory system that gives FEiOS long-term memory about your projects. Features state persistence, history logging, task tracking, blocker management, and project-local knowledge bases (.feios directories).',
    tech: ['Python', 'JSON', 'File System', 'Vector Search', 'SQLite']
  },
  {
    title: 'Code Generation & Analysis Engine',
    description: 'An AI-powered code generation system integrated into FEiOS. Generates React components from natural language specifications, analyzes existing code, and provides improvement suggestions. Includes safe file management and Git integration.',
    tech: ['React', 'Python', 'LLM', 'Ollama', 'File System']
  },
  {
    title: 'AI Research & Documentation Skill',
    description: 'A research module that performs web searches, scrapes documentation, summarizes findings, and generates reports. All integrated into the FEiOS ecosystem.',
    tech: ['Python', 'Web Scraping', 'AI', 'Natural Language', 'Research']
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
          From AI operating systems to full-stack applications. Here's what I've built with my skills.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
