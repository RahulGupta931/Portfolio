import React from 'react';
import { GraduationCap, Calendar, MapPin, Target, Phone } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm a dedicated MCA student at Lovely Professional University with a passion for creating 
              intelligent applications that solve real-world problems. My journey in technology began with 
              a curiosity about how things work, which evolved into a deep love for programming and 
              artificial intelligence.
            </p>
            
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              With strong foundations in Python, ReactJS, and Machine Learning, I enjoy building 
              full-stack applications that combine beautiful user interfaces with powerful backend 
              intelligence. I'm particularly excited about the potential of AI to transform how we 
              interact with technology.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <Target className="text-blue-600" size={20} />
              <span className={`font-semibold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Career Goals: Python Development, ReactJS, Agentic AI, Machine Learning
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="text-green-600" size={20} />
              <span className={`font-semibold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                +91 9310121875
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-lg ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600' 
                : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-100'
            }`}>
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-600 mr-3" size={24} />
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className={`font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    Master of Computer Applications (MCA)
                  </p>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Lovely Professional University
                  </p>
                  <div className="flex items-center space-x-4 text-sm mt-1">
                    <div className="flex items-center">
                      <Calendar className="mr-1" size={16} />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                        2024 - 2026
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-1" size={16} />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                        Punjab, India
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-300 dark:border-gray-600 pt-3">
                  <p className={`font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    Bachelor of Computer Applications (BCA)
                  </p>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Sunder Deep College Of Management & Technology (CCSU)
                  </p>
                  <div className="flex items-center text-sm mt-1">
                    <Calendar className="mr-1" size={16} />
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      2021 - 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-lg ${
              darkMode 
                ? 'bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20' 
                : 'bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100'
            }`}>
              <h3 className={`text-lg font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                What drives me?
              </h3>
              <p className={`text-sm leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                The intersection of creativity and logic in programming fascinates me. I believe 
                technology should be accessible, beautiful, and meaningful. Every project I work 
                on is an opportunity to learn something new and create something valuable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;