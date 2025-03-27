"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { skills } from "../data/resume";
import { useTheme } from "../lib/theme-provider";

// Extract unique categories for filter buttons
const categories = ["all", ...Array.from(new Set(skills.map(skill => skill.category)))];

const Skills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState("all");
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Filter skills based on active category
  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  // Function to format category name for display
  const formatCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <section id="skills" className="py-20 w-full min-h-screen flex items-center relative overflow-hidden" style={{ width: '100vw', maxWidth: '100%', margin: 0, padding: '5rem 0' }}>
      {/* Dynamic background with subtle pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: isDark 
              ? "rgb(15,23,42)" 
              : "rgb(240,249,255)",
            backgroundImage: isDark
              ? "radial-gradient(circle at 20% 80%, rgba(79, 70, 229, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 40%)"
              : "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(79, 70, 229, 0.15) 0%, transparent 40%)"
          }}
        />
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <div 
              key={`dot-${i}`}
              className={`absolute rounded-full ${isDark ? 'bg-indigo-400/30' : 'bg-indigo-600/20'}`}
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Shooting stars */}
        {[...Array(10)].map((_, i) => (
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
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ top: '20%', left: '10%' }}
          />
          <motion.div
            className={`absolute w-48 h-48 rounded-full ${isDark ? 'bg-purple-500/5' : 'bg-indigo-500/5'} blur-xl`}
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ bottom: '10%', right: '20%' }}
          />
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={`heading mb-12 text-gradient ${isDark ? 'dark:text-white' : 'text-gray-900'}`}>Skills</h2>
          
          {/* Category filter buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? isDark
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white'
                    : isDark
                      ? 'bg-gray-800/60 text-gray-300 hover:bg-gray-800/80'
                      : 'bg-white/60 text-gray-700 hover:bg-white/80'
                } backdrop-blur-sm`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              >
                {formatCategoryName(category)}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Skills grid */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={index}
                className={`skill-item flex flex-col items-center justify-center ${
                  isDark ? 'bg-gray-800/40' : 'bg-white/70'
                } backdrop-blur-md p-4 rounded-xl relative overflow-hidden group`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  y: -5,
                  boxShadow: isDark 
                    ? "0 10px 25px -5px rgba(99, 102, 241, 0.3)" 
                    : "0 10px 25px -5px rgba(59, 130, 246, 0.2)"
                }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-500 origin-right transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                
                {/* Skill icon */}
                <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-3 ${
                  isDark 
                    ? 'bg-indigo-500/20 text-indigo-300' 
                    : 'bg-indigo-100 text-indigo-600'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                
                {/* Skill name */}
                <h3 className={`text-center font-medium ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>
                  {skill.name}
                </h3>
                
                {/* Skill level */}
                <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className={`text-xs mt-1 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {skill.level}%
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Empty state if no skills match the filter */}
          {filteredSkills.length === 0 && (
            <motion.div 
              className={`text-center py-16 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl">No skills found in this category</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;