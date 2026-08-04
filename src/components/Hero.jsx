import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-yellow-300">Feisal Abdinoor Aden</span>
        </h2>
        <p className="text-xl md:text-2xl mb-2 opacity-90">
          Full-Stack Developer & AI Enthusiast
        </p>
        <p className="text-lg md:text-xl mb-1 opacity-80">
          Forex Trader | Linux Expert | Automation Specialist
        </p>
        <p className="text-md md:text-lg mb-8 opacity-70">
          Building AI-powered systems, trading algorithms, and full-stack applications
        </p>
        <div className="space-x-4">
          <a href="#contact" className="inline-block px-8 py-3 bg-white text-gray-800 rounded-full font-semibold hover:shadow-lg transition transform hover:-translate-y-1">
            Hire Me
          </a>
          <a href="#projects" className="inline-block px-8 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition transform hover:-translate-y-1">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
