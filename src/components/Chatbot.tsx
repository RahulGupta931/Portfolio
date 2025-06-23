import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

interface ChatbotProps {
  darkMode: boolean;
}

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot: React.FC<ChatbotProps> = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Rahul's AI assistant. I can help you learn about his skills, projects, education, experience, and even his personality! What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn about Rahul Gupta. You can ask me about his skills, projects, education, certifications, personality, or contact information. What interests you most?";
    }

    // 💡 Skills & Technologies
    if (message.includes('programming') && (message.includes('language') || message.includes('know'))) {
      return "I am proficient in **Python** and **JavaScript**.";
    }

    if (message.includes('libraries') || (message.includes('machine learning') && message.includes('tools'))) {
      return "I've worked with **Pandas**, **NumPy**, **Matplotlib**, **Seaborn**, **Scikit-learn**, **TensorFlow**, and **YOLOv11**.";
    }

    if (message.includes('front-end') || message.includes('frontend')) {
      return "Yes, I have experience with **HTML**, **CSS**, **Bootstrap**, and basic **JavaScript**.";
    }

    if (message.includes('flask') || message.includes('django') || message.includes('framework')) {
      return "Yes, I have built projects using **Flask** and **Django**.";
    }

    if (message.includes('development tools') || message.includes('tools')) {
      return "I regularly use **VS Code**, **Jupyter Notebook**, **Google Colab**, **Git**, and **GitHub**.";
    }

    // 🎓 Education Background
    if (message.includes('educational') && message.includes('qualification')) {
      return "I am currently pursuing a **Master of Computer Applications (MCA)**.";
    }

    if (message.includes('mca') || message.includes('pursuing')) {
      return "At **Lovely Professional University** (2024–2026).";
    }

    if (message.includes('undergraduate') || message.includes('bca') || message.includes('bachelor')) {
      return "I completed my **Bachelor of Computer Applications (BCA)** from **Sunder Deep College of Management & Technology** under CCSU (2021–2024).";
    }

    if (message.includes('class 10') || message.includes('class 12') || message.includes('score')) {
      return "I scored **62%** in both Class 10th and 12th from **Ram Kishan Institute (CBSE)**.";
    }

    // 🧑‍🎓 Education & Motivation
    if (message.includes('why') && (message.includes('data science') || message.includes('ai'))) {
      return "I'm fascinated by how data can drive intelligent decisions. Data science and AI offer the perfect blend of **logic**, **creativity**, and **impact**—which is what drew me in.";
    }

    if (message.includes('why') && message.includes('mca') && message.includes('bca')) {
      return "I wanted to deepen my technical foundation and specialize in **AI/ML**. MCA helps me gain advanced knowledge and opens more doors in the industry.";
    }

    if (message.includes('favorite subject') || message.includes('favourite subject')) {
      return "I really enjoyed **Machine Learning** and **Data Structures**. Both challenge me to think critically and solve problems in unique ways.";
    }

    if (message.includes('how') && message.includes('started') && message.includes('machine learning')) {
      return "I started by exploring beginner projects in Python and later took **IBM courses**. After that, I built my own projects like laptop price prediction and object detection.";
    }

    if (message.includes('why') && message.includes('working with data')) {
      return "Because **data tells stories**—if you listen closely. I enjoy the process of turning raw data into useful insights or predictive models.";
    }

    // 👨‍💻 Work Style & Learning
    if (message.includes('stay updated') || message.includes('latest technologies')) {
      return "I regularly follow **AI/ML communities** on GitHub, LinkedIn, and YouTube. I also take online courses and read documentation of trending tools.";
    }

    if (message.includes('working alone') || message.includes('team')) {
      return "I enjoy both! I love the focus I get when working solo, but I also value **collaboration**, **brainstorming**, and learning from teammates.";
    }

    if (message.includes('approach') && message.includes('coding problems')) {
      return "First, I **break down the problem** into smaller chunks, understand the logic, then test incrementally. If stuck, I explore documentation or trusted forums.";
    }

    if (message.includes('stuck') && message.includes('project')) {
      return "I step back, take a short break, or discuss it with peers. A **fresh perspective** usually helps me find a way forward.";
    }

    if (message.includes('manage time') || message.includes('time management')) {
      return "I use a simple task manager and set **weekly goals**. Prioritization helps me balance hands-on projects and academic tasks effectively.";
    }

    // 🌱 Personality & Interests
    if (message.includes('hobbies') || message.includes('outside tech')) {
      return "I enjoy playing **cricket**, listening to **music**, and occasionally exploring **photography**.";
    }

    if (message.includes('open-source') || message.includes('side projects')) {
      return "Yes, I love experimenting with new datasets and building **ML mini-projects** during weekends.";
    }

    if (message.includes('long-term') && message.includes('career goal')) {
      return "I aim to become a skilled **Data Scientist** or **Machine Learning Engineer**, contributing to impactful AI solutions and maybe even leading my own **AI product** one day.";
    }

    if (message.includes('proud of') && message.includes('tech journey')) {
      return "Completing **8 solid projects** in machine learning and deep learning—all self-driven and well-documented—makes me proud.";
    }

    if (message.includes('work environment') && message.includes('thrive')) {
      return "A **collaborative**, **learning-driven** environment where innovation and curiosity are encouraged.";
    }

    // 💬 Optional Fun/Relatable Questions
    if (message.includes('python') && message.includes('javascript') && message.includes('prefer')) {
      return "Definitely **Python**! It's cleaner, more intuitive, and perfect for data science workflows.";
    }

    if (message.includes('tech meme') || message.includes('favorite meme')) {
      return "Probably the **\"it works on my machine\"** meme—relatable every time! 😄";
    }

    if (message.includes('tea') || message.includes('coffee') || message.includes('coding')) {
      return "**Tea** in the evening, **coffee** during crunch time. Best of both worlds.";
    }

    if (message.includes('skill') && message.includes('want to learn')) {
      return "I want to explore more about **Generative AI** and **reinforcement learning**.";
    }

    if (message.includes('relax') && message.includes('coding session')) {
      return "I listen to **music**, go for a walk, or play some **cricket** with friends.";
    }

    // 🧪 Projects
    if (message.includes('laptop') && message.includes('price') && message.includes('predictor')) {
      return "It's a **regression-based ML project** using Flask, Scikit-learn, and other tools to predict laptop prices with an **R² score of 85%**.";
    }

    if (message.includes('yolo') || message.includes('object detection')) {
      return "I used **Python**, **YOLOv11**, **LabelImg**, and **PyTorch** for real-time object detection on custom datasets.";
    }

    if (message.includes('rock') && message.includes('mine')) {
      return "It was a **classification model** that distinguishes sonar signals as rocks or mines, built using Scikit-learn with **79% accuracy**.";
    }

    if (message.includes('how many projects') || message.includes('completed')) {
      return "I have completed **8 projects** in total.";
    }

    if (message.includes('github') && message.includes('links')) {
      return "Yes:\n\n• **Laptop Price Predictor**: https://github.com/RahulGupta931/Laptop-Price-Predictor-Regression\n• **YOLOv11 Object Detection**: https://github.com/RahulGupta931/Object_Detection_YOLOv11\n• **Rock vs Mine Prediction**: https://github.com/RahulGupta931/Rock-VS-Mine_Prediction";
    }

    // 📄 Certifications
    if (message.includes('certification') && (message.includes('ibm') || message.includes('platform'))) {
      return "I have multiple **IBM certifications** in:\n\n• **Deep Learning with TensorFlow**\n• **Machine Learning with Python**\n• **Data Analysis with Python**\n• **Data Visualization with Python**\n• **SQL and Relational Databases**";
    }

    if (message.includes('tensorflow') || (message.includes('deep learning') && message.includes('course'))) {
      return "Yes, I completed **IBM's Deep Learning with TensorFlow** course.";
    }

    if (message.includes('python') && message.includes('certification')) {
      return "Yes, I have a **Python Certificate from HackerRank**.";
    }

    // 🏆 Achievements
    if (message.includes('accolades') || message.includes('python skills')) {
      return "Yes, I earned **4 stars in Python** on HackerRank.";
    }

    if (message.includes('stars') && message.includes('hackerrank')) {
      return "**4 stars in Python**.";
    }

    if (message.includes('verified skills')) {
      return "Verified in **Python** and **Data Structures**.";
    }

    // 🌐 Contact and Social Links
    if (message.includes('email') && message.includes('address')) {
      return "**rgupta8750@gmail.com**";
    }

    if (message.includes('github') && message.includes('profile')) {
      return "**github.com/RahulGupta931**";
    }

    if (message.includes('linkedin') && message.includes('profile')) {
      return "**linkedin.com/in/rahul-gupta24**";
    }

    // ❓ Miscellaneous
    if (message.includes('domains') && message.includes('passionate')) {
      return "I'm passionate about **Data Science**, **Machine Learning**, **Deep Learning**, and **Generative AI**.";
    }

    if (message.includes('internship') || message.includes('job') || message.includes('opportunities')) {
      return "Yes, I'm actively seeking relevant roles in **data science** and **machine learning**.";
    }

    if (message.includes('career goal')) {
      return "To become a skilled **Data Scientist** or **Machine Learning Engineer** and contribute to impactful AI solutions.";
    }

    // General skill/technology questions
    if (message.includes('skill') || message.includes('technolog')) {
      return "My technical skills include:\n\n🐍 **Programming:** Python, JavaScript, SQL\n🤖 **AI/ML:** Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, TensorFlow, YOLOv11\n🌐 **Frameworks:** Flask, Django, Streamlit, Bootstrap\n🛠️ **Tools:** VS Code, Git, GitHub, Google Colab, Jupyter Notebook\n💾 **Databases:** Supabase, SQLite, MySQL";
    }

    // General project questions
    if (message.includes('project')) {
      return "I have completed 8+ ML/DL projects. My top projects include:\n\n🖥️ **Laptop Price Predictor** - ML model with 85% R² score using Flask and Python\n👁️ **YOLOv11 Object Detection** - Real-time object detection with custom training\n⛏️ **Rock vs Mine Prediction** - Sonar signal classification with 79% accuracy\n\nYou can check out my GitHub: https://github.com/RahulGupta931";
    }

    // Contact information
    if (message.includes('contact') || message.includes('reach') || message.includes('hire')) {
      return "You can reach me through:\n\n📧 **Email:** rgupta8750@gmail.com\n🔗 **LinkedIn:** https://linkedin.com/in/rahul-gupta24\n💻 **GitHub:** https://github.com/RahulGupta931\n\nI'm open to internships and job opportunities in data science and AI domains!";
    }

    // Personality and interests
    if (message.includes('personality') || message.includes('about you') || message.includes('tell me about yourself')) {
      return "I'm a passionate data enthusiast who loves solving problems with code! I enjoy both **collaborative teamwork** and **focused solo work**. Outside tech, I play cricket, listen to music, and explore photography. I believe in continuous learning and love experimenting with new ML projects on weekends. 🚀";
    }

    // Default response for unrecognized questions
    return "Sorry, I don't have that information right now. You can ask me about:\n\n• **Skills & Technologies** (Python, ML libraries, frameworks)\n• **Education & Motivation** (Why I chose AI/ML, favorite subjects)\n• **Projects** (Laptop predictor, YOLO detection, etc.)\n• **Work Style** (How I solve problems, stay updated)\n• **Personality** (Hobbies, work preferences, fun facts)\n• **Contact Info** (Email, GitHub, LinkedIn)\n\nWhat would you like to know? 😊";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessage = (text: string) => {
    // Convert markdown-style formatting to HTML
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>')
      .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-600 underline">$1</a>');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 ${
          darkMode 
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
        }`}
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    }`}>
      <div className={`rounded-2xl shadow-2xl overflow-hidden h-full flex flex-col ${
        darkMode 
          ? 'bg-gray-800 border border-gray-700' 
          : 'bg-white border border-gray-200'
      }`}>
        {/* Header */}
        <div className={`p-4 border-b flex items-center justify-between ${
          darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-full ${
              darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
            }`}>
              <Bot size={20} />
            </div>
            <div>
              <h3 className={`font-semibold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Rahul's AI Assistant
              </h3>
              <p className={`text-xs ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Ask me anything about Rahul!
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className={`p-1 rounded transition-colors ${
                darkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className={`p-1 rounded transition-colors ${
                darkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[85%] ${
                    message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                  }`}>
                    <div className={`p-2 rounded-full flex-shrink-0 ${
                      message.isBot 
                        ? darkMode 
                          ? 'bg-blue-500/20 text-blue-400' 
                          : 'bg-blue-100 text-blue-600'
                        : darkMode 
                          ? 'bg-purple-500/20 text-purple-400' 
                          : 'bg-purple-100 text-purple-600'
                    }`}>
                      {message.isBot ? <Bot size={16} /> : <User size={16} />}
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.isBot 
                        ? darkMode 
                          ? 'bg-gray-700 text-gray-200' 
                          : 'bg-gray-100 text-gray-800'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    }`}>
                      <div 
                        className="text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className={`p-2 rounded-full ${
                      darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                    }`}>
                      <Bot size={16} />
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      <div className="flex space-x-1">
                        <div className={`w-2 h-2 rounded-full animate-bounce ${
                          darkMode ? 'bg-gray-400' : 'bg-gray-500'
                        }`} style={{ animationDelay: '0ms' }}></div>
                        <div className={`w-2 h-2 rounded-full animate-bounce ${
                          darkMode ? 'bg-gray-400' : 'bg-gray-500'
                        }`} style={{ animationDelay: '150ms' }}></div>
                        <div className={`w-2 h-2 rounded-full animate-bounce ${
                          darkMode ? 'bg-gray-400' : 'bg-gray-500'
                        }`} style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className={`p-4 border-t ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about skills, projects, personality..."
                  className={`flex-1 px-3 py-2 rounded-lg border text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className={`p-2 rounded-lg transition-colors ${
                    !inputValue.trim() || isTyping
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                  }`}
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;