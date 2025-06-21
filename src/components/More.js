import React from 'react';
import resumePDF from '../assets/Miles Shinmachi - Resume.pdf';
// Please confirm or provide the correct cover letter file path
import coverLetterPDF from '../assets/cover-letter.pdf';

const More = () => {
  return (
    <section id="more" className="py-20 px-4 sm:px-10 bg-black text-white max-w-5xl mx-auto font-mono">
      <h2 className="text-3xl font-semibold mb-6">Resume + Cover Letter</h2>
      <div className="flex flex-col sm:flex-row gap-8 justify-center">
        <div className="relative group w-full sm:w-1/2 h-[80vh] cursor-pointer overflow-hidden">
          <iframe
            src={resumePDF}
            className="w-full h-full object-contain"
            title="Resume"
          />
          <a
            href={resumePDF}
            download="Miles_Shinmachi_Resume.pdf"
            className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 flex items-center justify-center text-white font-semibold transition-opacity"
          >
            Download Resume
          </a>
        </div>

        <div className="relative group w-full sm:w-1/2 h-[80vh] cursor-pointer overflow-hidden">
          <iframe
            src={coverLetterPDF}
            className="w-full h-full object-contain"
            title="Cover Letter"
          />
          <a
            href={coverLetterPDF}
            download="Miles_Shinmachi_Cover_Letter.pdf"
            className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 flex items-center justify-center text-white font-semibold transition-opacity"
          >
            Download Cover Letter
          </a>
        </div>
      </div>
    </section>
  );
};

export default More;
