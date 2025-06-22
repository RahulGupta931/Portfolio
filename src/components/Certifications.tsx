import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const certifications = [
    {
      title: 'Deep Learning with TensorFlow',
      issuer: 'IBM',
      code: 'ML0120EN',
      date: '2024',
      description: 'Comprehensive deep learning course covering neural networks, TensorFlow implementation, and advanced deep learning techniques.',
      skills: ['TensorFlow', 'Deep Learning', 'Neural Networks', 'Python'],
      link: 'https://courses.cognitiveclass.ai/certificates/7bab12a78a6c4e64bace62312b76d25a',
      color: 'blue'
    },
    {
      title: 'Machine Learning with Python',
      issuer: 'IBM',
      code: 'ML0101EN',
      date: '2024',
      description: 'Hands-on machine learning course covering algorithms, model evaluation, and Python implementation.',
      skills: ['Python', 'Machine Learning', 'Scikit-Learn', 'Model Evaluation'],
      link: 'https://courses.cognitiveclass.ai/certificates/7bab12a78a6c4e64bace62312b76d25a',
      color: 'green'
    },
    {
      title: 'Data Analysis with Python',
      issuer: 'IBM',
      code: 'DA0101EN',
      date: '2024',
      description: 'Data analysis fundamentals using Python, pandas, and statistical analysis techniques.',
      skills: ['Python', 'Pandas', 'Data Analysis', 'Statistics'],
      link: 'https://courses.cognitiveclass.ai/certificates/3fdb5fc658d0460b9f4188cdb16b794b',
      color: 'purple'
    },
    {
      title: 'Data Visualization with Python',
      issuer: 'IBM',
      code: 'DV0101EN',
      date: '2024',
      description: 'Creating compelling data visualizations using Python libraries like Matplotlib and Seaborn.',
      skills: ['Python', 'Matplotlib', 'Seaborn', 'Data Visualization'],
      link: 'https://courses.cognitiveclass.ai/certificates/baedb7afbaf94f3b8ad886e78d7677c9',
      color: 'orange'
    },
    {
      title: 'SQL and Relational Databases',
      issuer: 'IBM',
      code: 'DB0101EN',
      date: '2024',
      description: 'Database fundamentals, SQL queries, and relational database management systems.',
      skills: ['SQL', 'Database Management', 'Relational Databases', 'Query Optimization'],
      link: 'https://courses.cognitiveclass.ai/certificates/84a84ab0add543e2bcf41e228d7e9cf6',
      color: 'red'
    },
    {
      title: 'Python Certificate',
      issuer: 'HackerRank',
      code: '4-Star Badge',
      date: '2024',
      description: 'Demonstrated proficiency in Python programming with 4-star rating on HackerRank platform.',
      skills: ['Python', 'Problem Solving', 'Algorithms', 'Data Structures'],
      link: 'https://www.hackerrank.com/certificates/4f726b379a65',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: darkMode ? 'bg-blue-500/20' : 'bg-blue-50',
        text: darkMode ? 'text-blue-400' : 'text-blue-600',
        border: darkMode ? 'border-blue-500/30' : 'border-blue-200',
        accent: 'from-blue-600 to-blue-700'
      },
      green: {
        bg: darkMode ? 'bg-green-500/20' : 'bg-green-50',
        text: darkMode ? 'text-green-400' : 'text-green-600',
        border: darkMode ? 'border-green-500/30' : 'border-green-200',
        accent: 'from-green-600 to-green-700'
      },
      purple: {
        bg: darkMode ? 'bg-purple-500/20' : 'bg-purple-50',
        text: darkMode ? 'text-purple-400' : 'text-purple-600',
        border: darkMode ? 'border-purple-500/30' : 'border-purple-200',
        accent: 'from-purple-600 to-purple-700'
      },
      orange: {
        bg: darkMode ? 'bg-orange-500/20' : 'bg-orange-50',
        text: darkMode ? 'text-orange-400' : 'text-orange-600',
        border: darkMode ? 'border-orange-500/30' : 'border-orange-200',
        accent: 'from-orange-600 to-orange-700'
      },
      red: {
        bg: darkMode ? 'bg-red-500/20' : 'bg-red-50',
        text: darkMode ? 'text-red-400' : 'text-red-600',
        border: darkMode ? 'border-red-500/30' : 'border-red-200',
        accent: 'from-red-600 to-red-700'
      },
      indigo: {
        bg: darkMode ? 'bg-indigo-500/20' : 'bg-indigo-50',
        text: darkMode ? 'text-indigo-400' : 'text-indigo-600',
        border: darkMode ? 'border-indigo-500/30' : 'border-indigo-200',
        accent: 'from-indigo-600 to-indigo-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="certifications" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className={`mt-4 text-lg ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const colorClasses = getColorClasses(cert.color);
            return (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className={`p-6 ${colorClasses.bg} ${colorClasses.border} border-b`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg ${colorClasses.text} bg-white/10`}>
                        <Award size={24} />
                      </div>
                      <div className="ml-3">
                        <h3 className={`text-lg font-bold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {cert.title}
                        </h3>
                        <p className={`text-sm ${colorClasses.text} font-medium`}>
                          {cert.issuer} ({cert.code})
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className={`mr-1 ${colorClasses.text}`} size={16} />
                      <span className={colorClasses.text}>{cert.date}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className={`text-sm leading-relaxed mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      `bg-gradient-to-r ${colorClasses.accent} text-white hover:shadow-lg transform hover:scale-105`
                    }`}
                  >
                    <ExternalLink className="mr-2" size={16} />
                    View Certificate
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;