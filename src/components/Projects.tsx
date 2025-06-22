import React from 'react';
import { Github, ExternalLink, Laptop, Eye, TrendingUp } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'Laptop Price Predictor',
      description: 'A machine learning application that predicts laptop prices based on specifications using advanced regression algorithms and feature engineering.',
      technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Flask', 'HTML/CSS'],
      github: 'https://github.com/RahulGupta931/Laptop-Price-Predictor-Regression',
      demo: 'https://laptop-predictor-demo.vercel.app',
      icon: <Laptop size={24} />,
      color: 'blue'
    },
    {
      title: 'Object Detection with YOLOv11',
      description: 'Real-time object detection system using the latest YOLOv11 model with custom training capabilities and web interface for image/video processing.',
      technologies: ['Python', 'YOLOv11', 'OpenCV', 'TensorFlow', 'Streamlit'],
      github: 'https://github.com/RahulGupta931/Object_Detection_YOLOv11',
      demo: 'https://yolo-detection-demo.streamlit.app',
      icon: <Eye size={24} />,
      color: 'purple'
    },
    {
      title: 'Rock vs Mine Prediction',
      description: 'Binary classification model to distinguish between rocks and mines using sonar data, featuring comprehensive data preprocessing and model evaluation.',
      technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib', 'Jupyter'],
      github: 'https://github.com/RahulGupta931/Rock-VS-Mine_Prediction',
      demo: 'https://rock-mine-classifier.herokuapp.com',
      icon: <TrendingUp size={24} />,
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: darkMode ? 'bg-blue-500/20' : 'bg-blue-100',
        text: darkMode ? 'text-blue-400' : 'text-blue-600',
        border: darkMode ? 'border-blue-500/30' : 'border-blue-200'
      },
      purple: {
        bg: darkMode ? 'bg-purple-500/20' : 'bg-purple-100',
        text: darkMode ? 'text-purple-400' : 'text-purple-600',
        border: darkMode ? 'border-purple-500/30' : 'border-purple-200'
      },
      green: {
        bg: darkMode ? 'bg-green-500/20' : 'bg-green-100',
        text: darkMode ? 'text-green-400' : 'text-green-600',
        border: darkMode ? 'border-green-500/30' : 'border-green-200'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className={`mt-4 text-lg ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Showcasing my passion for AI and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            return (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-900 border border-gray-700' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className={`p-6 ${colorClasses.bg} ${colorClasses.border} border-b`}>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${colorClasses.text} bg-white/10`}>
                      {project.icon}
                    </div>
                    <h3 className={`ml-3 text-xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className={`text-sm leading-relaxed mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                        darkMode 
                          ? 'bg-gray-700 text-white hover:bg-gray-600' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${colorClasses.bg} ${colorClasses.text} hover:opacity-80`}
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;