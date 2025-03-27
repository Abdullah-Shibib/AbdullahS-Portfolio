"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { education } from "../data/resume";
import { useTheme } from "../lib/theme-provider";

const About = () => {
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

  return (
    <section id="about" className="py-20 w-full min-h-screen flex items-center relative overflow-hidden" style={{ width: '100vw', maxWidth: '100%', margin: 0, padding: '5rem 0' }}>
      {/* Dynamic background with subtle pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: isDark 
              ? "rgb(15,23,42)" 
              : "rgb(240,249,255)",
            backgroundImage: isDark
              ? "radial-gradient(circle at 30% 70%, rgba(79, 70, 229, 0.15) 0%, transparent 40%), radial-gradient(circle at 70% 30%, rgba(124, 58, 237, 0.15) 0%, transparent 40%)"
              : "radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 40%), radial-gradient(circle at 70% 30%, rgba(79, 70, 229, 0.15) 0%, transparent 40%)"
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(25)].map((_, i) => (
            <div 
              key={`particle-${i}`}
              className={`absolute rounded-full ${isDark ? 'bg-indigo-400/30' : 'bg-indigo-600/20'}`}
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Shooting stars */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className={`absolute w-0.5 h-0.5 ${isDark ? 'bg-white' : 'bg-indigo-600'} rounded-full`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${isDark ? '3px 1px' : '4px 2px'} ${isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(79, 70, 229, 0.7)'}`,
            }}
            initial={{
              scale: 0,
              x: 0,
              y: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              repeatDelay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
        
        {/* Light effect following mouse */}
        <motion.div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-30 pointer-events-none"
          style={{
            background: isDark 
              ? "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)" 
              : "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
            left: mousePosition.x - 400,
            top: mousePosition.y - 400,
            transition: "left 0.8s ease, top 0.8s ease",
          }}
        />
        
        {/* Animated floating circles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className={`absolute w-32 h-32 rounded-full ${isDark ? 'bg-indigo-500/5' : 'bg-blue-500/5'} blur-xl`}
            animate={{
              x: [0, 80, 0],
              y: [0, -80, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ top: '30%', left: '15%' }}
          />
          <motion.div
            className={`absolute w-48 h-48 rounded-full ${isDark ? 'bg-purple-500/5' : 'bg-indigo-500/5'} blur-xl`}
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ bottom: '20%', right: '15%' }}
          />
        </div>
      </div>
      
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className={`heading mb-16 text-gradient ${isDark ? 'dark:text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className={`${isDark ? 'bg-gray-800/40' : 'bg-white/70'} backdrop-blur-md rounded-xl overflow-hidden shadow-xl`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-8">
              <motion.h3 
                className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Education
              </motion.h3>
              
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h4 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>{education.university}</h4>
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{education.location}</span>
                </div>
                <p className={`text-lg mb-1 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{education.degree}</p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{education.graduationDate}</p>
              </motion.div>
              
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>Relevant Coursework</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {education.courses.map((course, index) => (
                    <motion.div
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <div className={`mr-2 mt-1 ${isDark ? 'text-indigo-400' : 'text-indigo-500'}`}>•</div>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{course}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>Co-op / Internship Availability</h4>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{education.availability}</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="mt-12 text-lg grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className={`${isDark ? 'bg-gray-800/30' : 'bg-white/60'} backdrop-blur-sm p-6 rounded-lg shadow-md`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>Background</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                I&apos;m a passionate Information Technology student at Carleton University with a focus on
                developing innovative solutions using the latest technologies. My expertise spans 
                full-stack development, machine learning, and data analysis.
              </p>
            </motion.div>
            
            <motion.div
              className={`${isDark ? 'bg-gray-800/30' : 'bg-white/60'} backdrop-blur-sm p-6 rounded-lg shadow-md`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>Journey</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                My journey in tech began with a curiosity about how digital systems shape our daily lives.
                This curiosity has evolved into a dedicated pursuit of knowledge in areas like web development,
                artificial intelligence, and database management.
              </p>
            </motion.div>
            
            <motion.div
              className={`${isDark ? 'bg-gray-800/30' : 'bg-white/60'} backdrop-blur-sm p-6 rounded-lg shadow-md`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>Interests</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                Outside of academics, I enjoy staying current with emerging technologies, contributing to open-source
                projects, and exploring how technology can solve real-world challenges. I&apos;m particularly interested in
                the intersection of technology and psychology.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 