"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../lib/theme-provider";
import { personalInfo } from "../data/resume";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.details || 'Failed to send message');
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 w-full min-h-screen flex items-center relative overflow-hidden">
      {/* Background with gradient and animated particles */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: isDark 
            ? "rgb(15,23,42)" 
            : "rgb(240,249,255)",
          backgroundImage: isDark
            ? "radial-gradient(circle at calc(50% + 200px) 50%, rgba(79, 70, 229, 0.2) 0%, transparent 50%), radial-gradient(circle at calc(50% - 300px) 50%, rgba(124, 58, 237, 0.2) 0%, transparent 50%)"
            : "radial-gradient(circle at calc(50% + 200px) 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at calc(50% - 300px) 50%, rgba(79, 70, 229, 0.2) 0%, transparent 50%)"
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={`heading mb-16 text-gradient ${isDark ? 'dark:text-white' : 'text-gray-900'}`}>Contact Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700'}`}>
                  Get in Touch
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
              </div>

              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className={`p-3 rounded-full ${isDark ? 'bg-indigo-500/20' : 'bg-indigo-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Email</h4>
                    <a href={`mailto:${personalInfo.contact.email}`} className={`${isDark ? 'text-gray-300 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-600'}`}>
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className={`p-3 rounded-full ${isDark ? 'bg-indigo-500/20' : 'bg-indigo-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Phone</h4>
                    <a href={`tel:${personalInfo.contact.phone}`} className={`${isDark ? 'text-gray-300 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-600'}`}>
                      {personalInfo.contact.phone}
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className={`p-3 rounded-full ${isDark ? 'bg-indigo-500/20' : 'bg-indigo-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Location</h4>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{personalInfo.location}</p>
                  </div>
                </motion.div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={personalInfo.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${isDark ? 'bg-indigo-500/20 hover:bg-indigo-500/30' : 'bg-indigo-100 hover:bg-indigo-200'} transition-colors`}
                >
                  <svg className="h-6 w-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.601-1-1.601-1 0-1.1.8-1.1 1.601v5.604h-3v-11h3v1.765c.5-.8 1.6-1.1 2.5-1.1 1.9 0 3.5 1.6 3.5 5.604v6.941z"/>
                  </svg>
                </a>
                <a
                  href={personalInfo.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${isDark ? 'bg-indigo-500/20 hover:bg-indigo-500/30' : 'bg-indigo-100 hover:bg-indigo-200'} transition-colors`}
                >
                  <svg className="h-6 w-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${isDark ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-md rounded-xl p-8 shadow-lg`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-md ${
                      isDark
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500'
                    } border focus:outline-none focus:ring-1`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-md ${
                      isDark
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500'
                    } border focus:outline-none focus:ring-1`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-md ${
                      isDark
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500'
                    } border focus:outline-none focus:ring-1`}
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-2 rounded-md ${
                      isDark
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500'
                    } border focus:outline-none focus:ring-1`}
                    placeholder="Your message"
                  />
                </div>

                {status.type && (
                  <div className={`p-4 rounded-md ${
                    status.type === 'success' 
                      ? 'bg-green-500/20 text-green-500 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-500 border border-red-500/30'
                  }`}>
                    {status.message}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-md font-medium ${
                    isDark
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  } transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 