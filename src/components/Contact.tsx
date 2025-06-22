import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setStatusMessage('');
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatusMessage('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setStatusMessage('Please enter your email');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatusMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.subject.trim()) {
      setStatusMessage('Please enter a subject');
      return false;
    }
    if (!formData.message.trim()) {
      setStatusMessage('Please enter your message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `---\n` +
        `This message was sent from your portfolio website.`
      );
      
      const mailtoLink = `mailto:rgupta8750@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form and show success
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('success');
      setStatusMessage('Message prepared! Your email client should open with the message ready to send.');
      
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Something went wrong. Please try again or contact directly at rgupta8750@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDirectEmail = () => {
    window.location.href = 'mailto:rgupta8750@gmail.com?subject=Portfolio Contact';
  };

  return (
    <section id="contact" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className={`mt-4 text-lg ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Let's discuss opportunities or collaborate on exciting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Let's Connect
              </h3>
              <p className={`text-lg leading-relaxed mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm always open to discussing new opportunities, innovative projects, 
                or just having a conversation about technology and AI. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  <Mail size={20} />
                </div>
                <div className="ml-4">
                  <p className={`font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Email
                  </p>
                  <button 
                    onClick={handleDirectEmail}
                    className={`${
                      darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                    } transition-colors duration-200 underline`}
                  >
                    rgupta8750@gmail.com
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'
                }`}>
                  <Phone size={20} />
                </div>
                <div className="ml-4">
                  <p className={`font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Phone
                  </p>
                  <a 
                    href="tel:+919310121875"
                    className={`${
                      darkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-600 hover:text-green-600'
                    } transition-colors duration-200`}
                  >
                    +91 9310121875
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
                }`}>
                  <MapPin size={20} />
                </div>
                <div className="ml-4">
                  <p className={`font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Location
                  </p>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Punjab, India
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                }`}>
                  <MessageCircle size={20} />
                </div>
                <div className="ml-4">
                  <p className={`font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Response Time
                  </p>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
              <a
                href="https://github.com/rahul-gupta"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/rahul-gupta"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  darkMode 
                    ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' 
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl ${
            darkMode 
              ? 'bg-gray-900 border border-gray-700' 
              : 'bg-gray-50 border border-gray-200'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              {/* Status Message */}
              {statusMessage && (
                <div className={`p-4 rounded-lg flex items-center space-x-3 ${
                  submitStatus === 'success' 
                    ? darkMode 
                      ? 'bg-green-900/20 border border-green-500/30 text-green-400' 
                      : 'bg-green-50 border border-green-200 text-green-700'
                    : darkMode 
                      ? 'bg-red-900/20 border border-red-500/30 text-red-400' 
                      : 'bg-red-50 border border-red-200 text-red-700'
                }`}>
                  {submitStatus === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span className="text-sm">{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-blue-500/25 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Preparing Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="mr-2" size={20} />
                    Send Message
                  </div>
                )}
              </button>

              <div className={`text-center text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <p>Or contact me directly:</p>
                <button
                  type="button"
                  onClick={handleDirectEmail}
                  className={`mt-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  📧 rgupta8750@gmail.com
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;