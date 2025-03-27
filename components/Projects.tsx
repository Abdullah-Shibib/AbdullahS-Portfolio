"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/resume";
import { useTheme } from "../lib/theme-provider";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [flippedCards, setFlippedCards] = useState<boolean[]>(Array(projects.length).fill(false));
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

  const flipCard = (index: number) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

  return (
    <section id="projects" className="py-20 w-full min-h-screen flex items-center relative overflow-hidden" style={{ width: '100vw', maxWidth: '100%', margin: 0, padding: '5rem 0' }}>
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
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute h-12 w-12 rounded-full ${isDark ? 'bg-indigo-500/10' : 'bg-blue-500/10'} animate-first`} style={{ top: '10%', left: '20%' }}></div>
        <div className={`absolute h-16 w-16 rounded-full ${isDark ? 'bg-purple-500/10' : 'bg-indigo-500/10'} animate-second`} style={{ top: '30%', right: '10%' }}></div>
        <div className={`absolute h-10 w-10 rounded-full ${isDark ? 'bg-pink-500/10' : 'bg-purple-500/10'} animate-third`} style={{ bottom: '15%', left: '40%' }}></div>
        <div className={`absolute h-14 w-14 rounded-full ${isDark ? 'bg-indigo-500/10' : 'bg-sky-500/10'} animate-fourth`} style={{ bottom: '30%', right: '30%' }}></div>
      </div>
      
      {/* Light effect following mouse */}
      <div 
        className={`absolute ${isDark ? 'bg-indigo-500/5' : 'bg-blue-500/5'} w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-3xl opacity-30 pointer-events-none z-0`}
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          transition: "left 0.8s ease, top 0.8s ease",
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={`heading mb-16 text-gradient ${isDark ? 'dark:text-white' : 'text-gray-900'}`}>Projects</h2>

          <div className="max-w-5xl mx-auto">
            {/* Project Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {projects.map((project, index) => (
                <motion.button
                  key={index}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors relative overflow-hidden group ${
                    activeProject === index
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                      : isDark 
                        ? "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20" 
                        : "bg-gray-200/80 backdrop-blur-sm text-gray-800 hover:bg-gray-300/80"
                  }`}
                  onClick={() => setActiveProject(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeProject === index && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 z-0"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{project.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Project Cards */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="perspective-1000 w-full"
                >
                  <div 
                    className="flip-card-inner w-full transition-transform duration-1000 ease-in-out relative" 
                    style={{ 
                      transformStyle: 'preserve-3d',
                      transform: flippedCards[activeProject] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    {/* Front of Card */}
                    <div 
                      className={`${isDark ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-md rounded-xl overflow-hidden shadow-lg p-8 w-full`}
                      style={{ backfaceVisibility: 'hidden', position: 'relative' }}
                    >
                      <div className={`${isDark ? 'text-white' : 'text-gray-800'}`}>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className={`text-2xl font-bold ${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700'}`}>
                            {projects[activeProject].title}
                          </h3>
                          <motion.button
                            className={`p-2 rounded-full ${
                              isDark
                                ? 'bg-indigo-700/80 hover:bg-indigo-600 text-white'
                                : 'bg-indigo-600/80 hover:bg-indigo-500 text-white'
                            } transition-colors flex items-center justify-center`}
                            onClick={() => flipCard(activeProject)}
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            title="Flip for details"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                            </svg>
                          </motion.button>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {projects[activeProject].technologies.map((tech, index) => (
                              <motion.span
                                key={index}
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  isDark
                                    ? 'bg-indigo-900/30 text-indigo-200' 
                                    : 'bg-indigo-100 text-indigo-800'
                                }`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Description */}
                        <div>
                          <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>Key Achievements</h4>
                          <ul className="space-y-3">
                            {projects[activeProject].description.map((item, index) => (
                              <motion.li 
                                key={index} 
                                className="flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                              >
                                <div className={`mr-2 mt-1 text-xl ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>•</div>
                                <span className={`${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* GitHub Link */}
                        {'links' in projects[activeProject] && projects[activeProject].links?.sourceCode && (
                          <div className="mt-4">
                            <a 
                              href={projects[activeProject].links?.sourceCode}
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
                              View Source Code
                            </a>
                          </div>
                        )}

                        {/* Flip button */}
                        <motion.button
                          className={`mt-6 px-4 py-2 rounded-md ${
                            isDark 
                              ? 'bg-indigo-700 hover:bg-indigo-600 text-white'
                              : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                          } font-medium transition-colors flex items-center`}
                          onClick={() => flipCard(activeProject)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                          </svg>
                          Flip for Details
                        </motion.button>
                      </div>
                    </div>
                    
                    {/* Back of Card */}
                    <div 
                      className={`${isDark ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-md rounded-xl overflow-hidden shadow-lg p-8 w-full absolute top-0 left-0`}
                      style={{ 
                        backfaceVisibility: 'hidden', 
                        transform: 'rotateY(180deg)',
                        height: '100%'
                      }}
                    >
                      <div className={`${isDark ? 'text-white' : 'text-gray-800'} h-full flex flex-col`}>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className={`text-2xl font-bold ${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700'}`}>
                            About {projects[activeProject].title}
                          </h3>
                          <motion.button
                            className={`p-2 rounded-full ${
                              isDark
                                ? 'bg-purple-700/80 hover:bg-purple-600 text-white'
                                : 'bg-purple-600/80 hover:bg-purple-500 text-white'
                            } transition-colors flex items-center justify-center`}
                            onClick={() => flipCard(activeProject)}
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            title="Back to summary"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                            </svg>
                          </motion.button>
                        </div>

                        <div className="flex-1 overflow-y-auto card-content-scroll pr-2">
                          <div className="mb-6">
                            <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>Project Overview</h4>
                            <p className={`mb-4 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                              {getProjectDetails(projects[activeProject].title).overview}
                            </p>
                          </div>

                          <div className="mb-6">
                            <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>Technical Challenges</h4>
                            <p className={`mb-4 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                              {getProjectDetails(projects[activeProject].title).challenges}
                            </p>
                          </div>

                          <div className="mb-6">
                            <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>Solution Approach</h4>
                            <p className={`${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                              {getProjectDetails(projects[activeProject].title).solution}
                            </p>
                          </div>
                        </div>

                        {/* Flip back button */}
                        <motion.button
                          className={`mt-6 px-4 py-2 rounded-md ${
                            isDark
                              ? 'bg-purple-700 hover:bg-purple-600 text-white'
                              : 'bg-purple-600 hover:bg-purple-500 text-white'
                          } font-medium transition-colors flex items-center`}
                          onClick={() => flipCard(activeProject)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                          </svg>
                          Back to Summary
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Function to get detailed project descriptions
function getProjectDetails(projectTitle: string) {
  switch (projectTitle) {
    case "DataWhisk":
      return {
        overview: "DataWhisk is a sentiment analysis tool that helps bakeries understand customer feedback. It combines machine learning with web scraping to gather and analyze customer reviews, uncovering insights that help optimize product offerings and improve overall business performance.",
        challenges: "The main challenges included processing unstructured text data from various sources, developing an accurate sentiment analysis model that could understand context-specific terminology, and creating a pipeline that could efficiently collect and process data with minimal manual intervention.",
        solution: "I implemented a BERT-based neural network model fine-tuned specifically for food-related sentiment analysis, achieving over 93% accuracy. The automated web scraping system was built with Node.js and Playwright to gather reviews from multiple platforms including Google Reviews, Yelp, and social media. Data visualization dashboards provided actionable insights that allowed the bakery to make data-driven decisions."
      };
    case "CUExaminer":
      return {
        overview: "CUExaminer is a comprehensive web application designed specifically for Carleton University students to help them prepare for exams. It provides access to past exams, study resources, and collaborative learning tools to enhance academic success.",
        challenges: "Key challenges included creating a secure user authentication system, developing a scalable database schema to handle various types of academic content, and designing an intuitive user interface that worked well on both desktop and mobile devices.",
        solution: "I developed a full-stack solution using Spring Boot for the backend API and ReactJS for the frontend. The PostgreSQL database was structured to efficiently manage relationships between courses, resources, and user data. Docker containerization ensured consistent deployment across different environments. User testing with actual Carleton students helped refine the interface for maximum usability."
      };
    case "Ligalytics":
      return {
        overview: "Ligalytics is a data analytics platform for sports leagues that provides comprehensive statistics and performance metrics for players and teams. The application helps coaches, analysts, and fans gain deeper insights into player and team performance through advanced data visualizations.",
        challenges: "The project required dealing with large datasets containing inconsistent information formats, creating efficient data processing pipelines to handle real-time updates, and developing meaningful visualizations that could convey complex statistical relationships in an intuitive way.",
        solution: "I built a Python-based scraping and data manipulation system using pandas to standardize and clean the data from multiple sources. The Spring Boot backend provided REST APIs for the React frontend to consume. Interactive visualizations were implemented using D3.js and React-Charts, allowing users to explore correlations between different performance metrics. The Docker containerization made deployment seamless across development and production environments."
      };
    case "AI Trading Bot":
      return {
        overview: "This AI Trading Bot leverages natural language processing and machine learning to analyze financial news and market sentiment for more informed trading decisions. The system combines technical analysis with sentiment data to determine optimal entry and exit points for trades.",
        challenges: "Major challenges included processing financial news in real-time, developing accurate sentiment analysis specifically calibrated for financial terminology, implementing risk management algorithms, and ensuring the system could respond quickly to rapidly changing market conditions.",
        solution: "The solution used FinBERT, a financial-domain-specific version of BERT, to analyze news articles and social media content for market sentiment. The trading logic was implemented using Lumibot, which provided a robust framework for strategy execution. I integrated the Alpaca API for paper trading and eventual real-money execution. Backtesting with YahooDataBacktesting demonstrated the strategy's effectiveness across different market conditions, achieving a 68.56% annual return on SPY in historical simulations."
      };
    default:
      return {
        overview: "A cutting-edge technology project that combines innovative approaches to solve real-world problems.",
        challenges: "The project tackled complex technical challenges requiring creative problem-solving and deep domain knowledge.",
        solution: "The solution implemented state-of-the-art technologies and methodologies to deliver high-quality results that exceeded expectations."
      };
  }
}

export default Projects; 