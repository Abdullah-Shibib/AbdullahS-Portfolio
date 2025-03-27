import React from 'react';

const ResumeButton = () => {
  const handleDownload = () => {
    // You can either use a local PDF file or a hosted URL
    const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL || '/assets/resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <button
      onClick={handleDownload}
      className="px-6 py-3 bg-transparent border-2 border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 whitespace-nowrap"
    >
      Download Resume
    </button>
  );
};

export default ResumeButton; 