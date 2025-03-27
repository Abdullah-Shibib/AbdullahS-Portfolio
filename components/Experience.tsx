"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../lib/theme-provider";
import { experience, ExperienceEntry } from "../data/resume";

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="experience" className="py-20 w-full min-h-screen flex items-center relative overflow-hidden" style={{ width: '100vw', maxWidth: '100%', margin: 0, padding: '5rem 0' }}>
      {/* Background with 3D perspective effect */}
      <div className="absolute inset-0 z-0 perspective-3d">
        <div 
          className="absolute inset-0"
          style={{
            background: isDark 
              ? "rgb(15,23,42)" 
              : "rgb(240,249,255)",
            backgroundImage: isDark
              ? "linear-gradient(to bottom right, rgba(79, 70, 229, 0.05) 0%, transparent 50%), linear-gradient(to top left, rgba(124, 58, 237, 0.05) 0%, transparent 50%)"
              : "linear-gradient(to bottom right, rgba(59, 130, 246, 0.05) 0%, transparent 50%), linear-gradient(to top left, rgba(79, 70, 229, 0.05) 0%, transparent 50%)"
          }}
        />
        
        {/* 3D Grid lines */}
        <motion.div 
          className="absolute inset-0 grid-lines"
          animate={{
            rotateX: [0, 10, 0],
            rotateY: [0, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-20 h-20 rounded-full ${
                isDark 
                  ? 'bg-indigo-500/5' 
                  : 'bg-blue-500/5'
              } blur-xl`}
              initial={{ 
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
              }}
              animate={{
                x: [
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50
                ],
                y: [
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50
                ],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{ 
                left: `${10 + i * 20}%`, 
                top: `${20 + (i % 3) * 25}%`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={`heading mb-16 text-gradient ${isDark ? 'dark:text-white' : 'text-gray-900'}`}>Experience</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className={`absolute top-5 bottom-0 left-6 md:left-1/2 md:-ml-0.5 w-1 ${isDark ? 'bg-gradient-to-b from-indigo-600 to-purple-600' : 'bg-gradient-to-b from-indigo-500 to-purple-500'}`}></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {experience.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative ${
                      index % 2 === 0 ? 'md:ml-auto md:pl-16 pl-14' : 'md:mr-auto md:pr-0 pl-14'
                    } ${
                      index % 2 === 1 ? 'md:ml-0 md:pl-16' : ''
                    } md:w-1/2`}
                  >
                    {/* Timeline circle */}
                    <motion.div 
                      className={`absolute left-0 md:left-auto ${
                        index % 2 === 0 ? 'md:-left-4' : 'md:-right-4'
                      } -translate-x-1/2 md:translate-x-0 top-5 w-8 h-8 rounded-full flex items-center justify-center ${
                        isDark ? 'bg-gray-900 border-2 border-indigo-500' : 'bg-white border-2 border-indigo-500'
                      } z-10`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedExp(selectedExp === index ? null : index)}
                    >
                      <span className={`w-3 h-3 rounded-full ${
                        isDark ? 'bg-indigo-500' : 'bg-indigo-600'
                      }`}></span>
                    </motion.div>
                    
                    {/* Experience Card */}
                    <motion.div 
                      className={`${
                        isDark ? 'bg-gray-800/40' : 'bg-white/80'
                      } backdrop-blur-md p-6 rounded-xl relative shadow-lg`}
                      whileHover={{ 
                        y: -5, 
                        transition: { duration: 0.2 } 
                      }}
                    >
                      {/* Card glow effect on hover */}
                      <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className={`absolute inset-0 -top-40 blur-3xl opacity-20 ${
                          isDark ? 'bg-indigo-500' : 'bg-indigo-400'
                        }`}></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                          isDark 
                            ? 'bg-indigo-900/50 text-indigo-200' 
                            : 'bg-indigo-100 text-indigo-800'
                        }`}>
                          {exp.period}
                        </div>
                        
                        <h3 className={`text-xl font-semibold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {exp.role}
                        </h3>
                        
                        <p className={`mb-3 font-medium ${
                          isDark ? 'text-indigo-300' : 'text-indigo-700'
                        }`}>
                          {exp.company}
                        </p>
                        
                        <div className={`${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          <ul className="list-disc pl-5 space-y-2">
                            {exp.responsibilities.map((resp, respIndex) => (
                              <motion.li 
                                key={respIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: respIndex * 0.1 }}
                              >
                                {resp}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Links if available */}
                        {'links' in exp && exp.links && (
                          <div className="mt-4 flex flex-wrap gap-3">
                            {exp.links.website && (
                              <a 
                                href={exp.links.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm ${
                                  isDark 
                                    ? 'bg-indigo-900/50 text-indigo-200 hover:bg-indigo-800/50' 
                                    : 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
                                } transition-colors`}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                                </svg>
                                Website
                              </a>
                            )}
                            {exp.links.sourceCode && (
                              <a 
                                href={exp.links.sourceCode} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm ${
                                  isDark 
                                    ? 'bg-gray-800/70 text-gray-200 hover:bg-gray-700/70' 
                                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                } transition-colors`}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                Source Code
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 