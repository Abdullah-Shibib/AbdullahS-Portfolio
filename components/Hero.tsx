"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/resume";
import { useTheme } from "../lib/theme-provider";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('about')?.scrollIntoView({ 
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden" style={{ width: '100vw', maxWidth: '100%', margin: 0 }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: isDark 
              ? "rgb(15,23,42)" 
              : "rgb(240,249,255)",
            backgroundImage: isDark
              ? "radial-gradient(circle at 25% 25%, rgba(79, 70, 229, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(124, 58, 237, 0.15) 0%, transparent 50%)"
              : "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(79, 70, 229, 0.15) 0%, transparent 50%)"
        }}></div>
        
        {/* Floating shapes */}
        <motion.div 
          className={`absolute h-64 w-64 rounded-full ${isDark ? 'bg-indigo-500/5' : 'bg-blue-500/5'} blur-3xl`}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ top: '20%', left: '10%' }}
        />
        
        <motion.div 
          className={`absolute h-80 w-80 rounded-full ${isDark ? 'bg-purple-500/5' : 'bg-indigo-500/5'} blur-3xl`}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ bottom: '10%', right: '10%' }}
        />
        
        {/* Animated dots grid */}
        <div className="absolute inset-0 z-0">
          <div className="dots-grid"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl"
        >
          <motion.div
            className="mb-6 inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.1 
            }}
          >
            <motion.div
              className={`relative inline-block text-5xl sm:text-6xl md:text-7xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              <span className="relative z-10">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                  {personalInfo.name}
                </span>
              </span>
              
              {/* Decoration behind name */}
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-indigo-500/30 to-purple-600/30 rounded-full z-0"
                animate={{ 
                  width: ["0%", "100%", "90%", "100%"],
                  x: [0, 0, 10, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
            </motion.div>
          </motion.div>

          <motion.h2
            className={`text-xl sm:text-2xl mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: 0.3 
            }}
          >
            Information Technology Student
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a
              href={personalInfo.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                isDark
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-gray-200/80 text-gray-800 hover:bg-gray-300/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </span>
            </motion.a>
            <motion.a
              href={personalInfo.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-full font-medium ${
                isDark
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white hover:from-indigo-700 hover:to-purple-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </span>
            </motion.a>
            <motion.a
              href={personalInfo.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                isDark
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-gray-200/80 text-gray-800 hover:bg-gray-300/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM9 13h6v1H9v-1zm0 2h6v1H9v-1zm0 2h6v1H9v-1z"/>
                </svg>
                Resume
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll down arrow with animation */}
        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={scrollToNextSection}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div 
            className={`p-3 rounded-full cursor-pointer ${
              isDark ? 'bg-white/10 text-white' : 'bg-gray-200/80 text-gray-800'
            }`}
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;