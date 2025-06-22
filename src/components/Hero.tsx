import React from 'react';
import { Github, Linkedin, Download, Code, Brain, Rocket } from 'lucide-react';
import { downloadResume } from '../utils/resumeGenerator';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const handleDownloadResume = () => {
    downloadResume();
  };

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 ${
          darkMode ? 'bg-blue-500' : 'bg-blue-300'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 ${
          darkMode ? 'bg-purple-500' : 'bg-purple-300'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Floating icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className={`p-3 rounded-full animate-bounce ${
              darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
            }`} style={{ animationDelay: '0s' }}>
              <Code size={24} />
            </div>
            <div className={`p-3 rounded-full animate-bounce ${
              darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
            }`} style={{ animationDelay: '0.2s' }}>
              <Brain size={24} />
            </div>
            <div className={`p-3 rounded-full animate-bounce ${
              darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'
            }`} style={{ animationDelay: '0.4s' }}>
              <Rocket size={24} />
            </div>
          </div>

          <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Rahul Gupta
            </span>
          </h1>

          <p className={`text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            AI & Full-Stack Developer
          </p>

          <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Passionate MCA student crafting intelligent applications with Python, ReactJS, and Machine Learning. 
            Transforming ideas into innovative solutions that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </button>
            
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/rahul-gupta24/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg ${
                  darkMode 
                    ? 'bg-gray-800 text-blue-400 hover:bg-gray-700' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/RahulGupta931"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;