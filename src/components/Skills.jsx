import React from 'react';

const skills = {
  '💻 Programming Languages': ['Python', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript', 'Java', 'C++'],
  
  '⚛️ Frontend Development': ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Framer Motion', 'Redux', 'Vue.js'],
  
  '🖥️ Backend Development': ['Node.js', 'Express', 'Django', 'FastAPI', 'Flask', 'GraphQL', 'REST APIs'],
  
  '🤖 AI & Machine Learning': ['Ollama', 'OpenAI API', 'LangChain', 'TensorFlow', 'PyTorch', 'NLP', 'Llama'],
  
  '📊 Data & Analytics': ['Python Data Science', 'Pandas', 'NumPy', 'Data Visualization', 'Backtesting', 'Forex Trading'],
  
  '🏦 Trading & Finance': ['Forex Trading', 'Technical Analysis', 'Algorithmic Trading', 'Signal Generation', 'Risk Management', 'Market Analysis'],
  
  '⚙️ DevOps & Linux': ['Linux Mint', 'Ubuntu', 'Docker', 'Git', 'GitHub Actions', 'CI/CD', 'AWS', 'Nginx'],
  
  '🛠️ Tools & Technologies': ['VS Code', 'Jupyter', 'Postman', 'Figma', 'GitHub', 'Linux Terminal', 'Ollama']
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          My Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Technologies, languages, and tools I work with to build amazing applications and systems.
        </p>
        
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="mb-10">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4 text-center">
              {category}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skillList.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition cursor-default shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
