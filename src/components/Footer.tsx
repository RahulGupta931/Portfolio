import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 ${
      darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Rahul Gupta
            </div>
            <p className={`text-sm leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              AI & Full-Stack Developer passionate about creating intelligent applications 
              that solve real-world problems. Currently pursuing MCA at LPU.
            </p>
          </div>

          <div>
            <h3 className={`font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`text-sm transition-colors duration-200 hover:text-blue-600 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/RahulGupta931"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-gupta24/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-blue-400 hover:bg-gray-700' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rgupta8750@gmail.com"
                className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-green-400 hover:bg-gray-700' 
                    : 'bg-white text-green-600 hover:bg-green-50'
                }`}
              >
                <Mail size={20} />
              </a>
            </div>
            <p className={`text-sm mt-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              rgupta8750@gmail.com
            </p>
          </div>
        </div>

        <div className={`pt-8 border-t text-center ${
          darkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p className={`text-sm flex items-center justify-center ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © {currentYear} Rahul Gupta. Made with 
            <Heart className="mx-1 text-red-500" size={16} /> 
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;