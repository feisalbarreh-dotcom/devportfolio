import React from 'react';

const skills = {
  '💻 Programming Languages': ['Python', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript'],
  '⚛️ Frontend Development': ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  '🖥️ Backend Development': ['Node.js', 'Express', 'Django', 'FastAPI'],
  '🤖 AI & Machine Learning': ['Ollama', 'OpenAI API', 'LangChain', 'TensorFlow'],
  '📊 Trading & Finance': ['Forex Trading', 'Technical Analysis', 'Algorithmic Trading'],
  '⚙️ DevOps & Linux': ['Linux Mint', 'Docker', 'Git', 'GitHub Actions']
};

// When clicked, search for the skill on Google or link to relevant page
const getSkillLink = (skill) => {
  const encoded = encodeURIComponent(skill);
  return `https://www.google.com/search?q=${encoded}`;
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          My Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Click on any skill to learn more about it. Each badge is clickable!
        </p>
        
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="mb-10">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4 text-center">
              {category}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skillList.map((skill, index) => (
                <a 
                  key={index}
                  href={getSkillLink(skill)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition cursor-pointer shadow-sm"
                >
                  {skill}
                </a>
              ))}
            </div>
          </div>
        ))}
        
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
          💡 Click on any skill to learn more about it
        </p>
      </div>
    </section>
  );
};

export default Skills;
