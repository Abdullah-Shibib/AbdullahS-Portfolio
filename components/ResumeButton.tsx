import React from 'react';

const ResumeButton = () => {
  const handleDownload = () => {
    // Use the correct path to the resume PDF with the correct filename
    const resumeUrl = '/Abdullah_Shibib_Resume.pdf.pdf';
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