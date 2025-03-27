import React from 'react';

const ResumeButton = () => {
  const handleDownload = () => {
    const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL;
    if (resumeUrl) {
      window.open(resumeUrl, '_blank');
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="px-6 py-3 bg-transparent border-2 border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300"
    >
      Download Resume
    </button>
  );
};

export default ResumeButton; 