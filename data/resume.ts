export const personalInfo = {
  name: "Abdullah Shibib",
  contact: {
    phone: "613-668-0982",
    email: "Abdullahshibib@yahoo.com",
    linkedin: "LinkedIn",
    linkedinUrl: "https://www.linkedin.com/in/abdullah-shibib-5875a1297/",
    github: "GitHub",
    githubUrl: "https://github.com/Abdullah-Shibib",
    resumeUrl: "/Abdullah_Shibib_Resume.pdf"
  },
  location: "Ottawa, ON",
  citizenship: "Canadian Citizen"
};

export const education = {
  university: "Carleton University",
  location: "Ottawa, ON",
  degree: "Honors Bachelor's Of Information Technology—IRM—Minor in Psychology",
  graduationDate: "Expected Graduation, December 2027",
  courses: [
    "Web Interface Development",
    "Intro to Programming and Problem Solving",
    "Intermediate Programming",
    "Multimedia Data management",
    "Data Visualization",
    "Advanced Cataloguing",
    "Subject Analysis and Indexing"
  ],
  availability: "Available for 4-16 months"
};

export const skills = [
  { name: "JavaScript", category: "programming", level: 95 },
  { name: "TypeScript", category: "programming", level: 90 },
  { name: "React", category: "frontend", level: 92 },
  { name: "Node.js", category: "backend", level: 88 },
  { name: "Next.js", category: "frontend", level: 85 },
  { name: "Python", category: "programming", level: 90 },
  { name: "Machine Learning", category: "ai", level: 80 },
  { name: "SQL", category: "database", level: 85 },
  { name: "MongoDB", category: "database", level: 75 },
  { name: "Docker", category: "devops", level: 70 },
  { name: "AWS", category: "cloud", level: 65 },
  { name: "GraphQL", category: "api", level: 80 },
  { name: "REST API", category: "api", level: 90 },
  { name: "Git", category: "tools", level: 95 },
  { name: "HTML/CSS", category: "frontend", level: 95 },
  { name: "pandas", category: "data", level: 85 },
  { name: "PostgreSQL", category: "database", level: 85 },
  { name: "Spring Boot", category: "backend", level: 85 },
  { name: "TensorFlow", category: "ai", level: 75 },
  { name: "CI/CD", category: "devops", level: 75 }
];

export const projects = [
  {
    title: "P.A.I.D (Personal AI Doctor)",
    technologies: ["Python", "Flask", "LLAMA 3", "Mixtral 8x7B", "HTML", "CSS", "JavaScript", "RAG", "Vector Database"],
    description: [
      "Developed a web-based application leveraging Retrieval-Augmented Generation (RAG) and Large Language Models to provide medical diagnoses based on user symptoms",
      "Utilized LLAMA 3 70B to convert user input into keywords and Mixtral 8x7B to process information from vector databases to generate accurate responses",
      "Designed a user-friendly interface with HTML, CSS, and JavaScript for seamless symptom input and real-time AI responses",
      "Implemented a Python and Flask backend to handle API requests and ensure secure communication between frontend and AI models"
    ],
    links: {
      sourceCode: "https://github.com/Abdullah-Shibib/Personal-AI-Doctor-P.A.I.D"
    }
  },
  {
    title: "Ecommerce Website",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: [
      "Built a responsive electronic store specializing in computer hardware with dynamic product sliders and detailed product views",
      "Implemented comprehensive navigation with categorized products, featured sections, and new arrivals displays",
      "Created interactive gallery showcasing products and customer setups with adaptive design for all devices",
      "Developed features section highlighting store benefits including free shipping, easy returns, and gift card options"
    ],
    links: {
      sourceCode: "https://github.com/Abdullah-Shibib/Ecommerce-Website"
    }
  },
  {
    title: "Motion Detection Security System",
    technologies: ["Python", "OpenCV", "NumPy", "Twilio API"],
    description: [
      "Engineered a security system that detects motion in video feeds and records footage when movement is detected",
      "Implemented OpenCV for real-time video processing and NumPy for efficient array operations and data handling",
      "Added alert functionality that sends notifications with Twilio API when motion is detected",
      "Created a user-friendly interface with customizable sensitivity settings and recording duration options"
    ],
    links: {
      sourceCode: "https://github.com/Abdullah-Shibib/Motion-detection-security-system"
    }
  },
  {
    title: "DataWhisk",
    technologies: ["Python", "PyTorch", "BERT", "Node.js", "Playwright", "Scikit-learn"],
    description: [
      "Built a neural network based sentiment analysis tool for a bakery using BERT and PyTorch, leading to a 10% increase in sales and saving $650 per month in ingredient costs",
      "Built an automated web scraping system with Node.js and Playwright, collecting 1,350+ customer reviews, reducing manual data gathering time by at least 50%",
      "Extracted insights with scikit-learn and visualized trends using Matplotlib, helping the client focus on improving low-performing items",
      "Streamlined data processing with Pandas, saving 15+ hours/month and reducing operational costs"
    ]
  },
  {
    title: "CUExaminer",
    technologies: ["SpringBoot", "PostgreSQL", "ReactJS", "Docker"],
    description: [
      "Developed and deployed a full-stack web application that enhanced academic experiences of 700+ Carleton University students",
      "Utilized PostgreSQL for data storage, Spring Boot for a RESTful API backend, and ReactJS for the user interface",
      "Containerized the application with Docker, reducing deployment time by 30 seconds, and ran 200+ Postman API tests"
    ]
  },
  {
    title: "Ligalytics",
    technologies: ["SpringBoot", "PostgreSQL", "ReactJS", "Docker", "Python", "pandas"],
    description: [
      "Engineered a comprehensive data scraping of match statistics for 450+ players using Python and pandas, followed by dynamic manipulation and presentation of the data through a Spring Boot application",
      "Implemented real-time data manipulation within a PostgreSQL database through the effective use of SQL queries, establishing a seamless integration with a user-friendly ReactJS interface",
      "Containerized the application with Docker for streamlined deployment and utilized Postman for rigorous API testing to ensure reliability and performance"
    ]
  },
  {
    title: "AI Trading Bot",
    technologies: ["Python", "PyTorch", "FinBERT", "REST API", "Alpaca API", "Lumibot", "YahooDataBacktesting"],
    description: [
      "Developed an AI trading bot using Python and Alpaca API integrated with Lumibot and YahooDataBacktesting",
      "Implemented real-time sentiment analysis using FinBERT and PyTorch, enhancing financial decision-making with 99% accuracy",
      "Utilized REST API calls to Alpaca for data retrieval and trade execution, ensuring swift market responsiveness",
      "Achieved a remarkable 68.56% annual return on SPY in back testing, demonstrating the strategy's effectiveness"
    ]
  }
];

export const experience = [
  {
    company: "SpecSavers",
    role: "Eye Care Consultant",
    location: "Ottawa, ON",
    period: "August 2023 - Present",
    responsibilities: [
      "Senior Eye Care Consultant",
      "Ensuring patients receive the highest level of care and attention to detail",
      "Equipping new workers with the necessary skills to excel in their roles"
    ]
  },
  {
    company: "Wearhouse",
    role: "Full Stack Developer",
    location: "Ottawa, ON",
    period: "May 2025 - Present",
    responsibilities: [
      "Built a scalable used clothing marketplace using Go, React, TypeScript, and PostgreSQL, enabling seamless product listings, transactions, and authentication",
      "Integrated JWT authentication, Stripe payments, and Cloudinary storage, ensuring secure access, smooth transactions, and optimized media handling",
      "Automated testing with Python scripting and deployed a containerized backend utilizing Docker, improving system reliability and scalability"
    ],
    links: {
      website: "https://wearhouse-brown.vercel.app/",
      sourceCode: "https://github.com/Abdullah-Shibib/wearhouse"
    }
  }
];

// Define the interface for experience entries
export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  responsibilities: string[];
  links?: {
    website?: string;
    sourceCode?: string;
  };
}

// Define interface for project entries
export interface ProjectEntry {
  title: string;
  technologies: string[];
  description: string[];
  links?: {
    website?: string;
    sourceCode?: string;
  };
}

// Type assertion to ensure experience array matches the interface
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _experienceTypeCheck: ExperienceEntry[] = experience;

// Type assertion to ensure projects array matches the interface
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _projectsTypeCheck: ProjectEntry[] = projects; 