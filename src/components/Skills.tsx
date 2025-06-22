import React from 'react';
import { Code, Database, Brain, Wrench, BarChart3, Layers } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: ['Python', 'JavaScript', 'SQL'],
      color: 'blue'
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain size={24} />,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'TensorFlow', 'YOLOv11'],
      color: 'purple'
    },
    {
      title: 'Frameworks',
      icon: <Layers size={24} />,
      skills: ['Flask', 'Django', 'Streamlit', 'Bootstrap', 'HTML', 'CSS'],
      color: 'green'
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench size={24} />,
      skills: ['VS Code', 'Jupyter Notebook', 'Google Colab', 'Git', 'GitHub', 'MS Excel'],
      color: 'orange'
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: ['Supabase', 'SQLite', 'MySQL'],
      color: 'red'
    },
    {
      title: 'Core Competencies',
      icon: <BarChart3 size={24} />,
      skills: ['Data Analysis', 'Data Visualization', 'DSA (Data Structures and Algorithms)'],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: darkMode ? 'bg-blue-500/20' : 'bg-blue-100',
        text: darkMode ? 'text-blue-400' : 'text-blue-600',
        border: darkMode ? 'border-blue-500/30' : 'border-blue-200',
        hover: darkMode ? 'hover:bg-blue-500/30' : 'hover:bg-blue-200'
      },
      purple: {
        bg: darkMode ? 'bg-purple-500/20' : 'bg-purple-100',
        text: darkMode ? 'text-purple-400' : 'text-purple-600',
        border: darkMode ? 'border-purple-500/30' : 'border-purple-200',
        hover: darkMode ? 'hover:bg-purple-500/30' : 'hover:bg-purple-200'
      },
      green: {
        bg: darkMode ? 'bg-green-500/20' : 'bg-green-100',
        text: darkMode ? 'text-green-400' : 'text-green-600',
        border: darkMode ? 'border-green-500/30' : 'border-green-200',
        hover: darkMode ? 'hover:bg-green-500/30' : 'hover:bg-green-200'
      },
      orange: {
        bg: darkMode ? 'bg-orange-500/20' : 'bg-orange-100',
        text: darkMode ? 'text-orange-400' : 'text-orange-600',
        border: darkMode ? 'border-orange-500/30' : 'border-orange-200',
        hover: darkMode ? 'hover:bg-orange-500/30' : 'hover:bg-orange-200'
      },
      red: {
        bg: darkMode ? 'bg-red-500/20' : 'bg-red-100',
        text: darkMode ? 'text-red-400' : 'text-red-600',
        border: darkMode ? 'border-red-500/30' : 'border-red-200',
        hover: darkMode ? 'hover:bg-red-500/30' : 'hover:bg-red-200'
      },
      indigo: {
        bg: darkMode ? 'bg-indigo-500/20' : 'bg-indigo-100',
        text: darkMode ? 'text-indigo-400' : 'text-indigo-600',
        border: darkMode ? 'border-indigo-500/30' : 'border-indigo-200',
        hover: darkMode ? 'hover:bg-indigo-500/30' : 'hover:bg-indigo-200'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className={`mt-4 text-lg ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Technologies I love working with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${colorClasses.bg} ${colorClasses.text}`}>
                    {category.icon}
                  </div>
                  <h3 className={`ml-3 font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 mr-2 mb-2 border ${
                        colorClasses.bg
                      } ${colorClasses.text} ${colorClasses.border} ${colorClasses.hover}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;