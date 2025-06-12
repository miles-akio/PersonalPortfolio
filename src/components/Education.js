import React, { useState } from 'react';
import csulbLogo from '../assets/csulb-logo.png';
import transcriptPDF from '../assets/transcript.pdf';

const Education = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <section id="education" className="py-20 px-10 bg-gray-800 text-white max-w-5xl mx-auto font-mono">
      <h2 className="text-4xl font-bold mb-6">Education</h2>
      <div className="bg-gray-900 p-6 rounded-lg flex space-x-6">
        <div className="flex flex-col items-center flex-shrink-0">
          <img src={csulbLogo} alt="CSULB Logo" className="w-20 h-20 mb-2" />
          <span className="text-gray-400">Jun'20 - Dec '24</span>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-2">California State University, Long Beach</h3>
          <div className="flex space-x-2 mb-2">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded font-semibold">Bachelor's of Science in Computer Science</span>
          </div>
          <p className="text-sm text-white mb-4">
            I am recent Computer Science graduate at California State University, Long Beach, College of Engineering. My studies focused on software development, algorithms, and emerging technologies, preparing me for a career in the tech industry.
          </p>
          <p className="text-sm text-white mb-4 cursor-pointer underline" onClick={toggleExpanded}>
            {expanded ? 'Click Card to Show Less' : 'Click Card to Show More'}
          </p>
          {expanded && (
            <div className="mt-4 text-white">
              <h3 className="font-semibold text-lg mb-2">Personal Involvement</h3>
              <ul className="list-disc list-inside mb-4 text-sm">
                <li>Webmaster & Graphic Designer, Society of Asian Scientists & Engineers</li>
                <li>Recruitment Manager, Tau Beta Pi Engineering Honor's Society</li>
              </ul>

              <h3 className="font-semibold text-lg mb-2">Relevant Coursework</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  'Algorithms',
                  'Machine Learning',
                  'Data Structures',
                  'Database Fundamentals',
                  'Artificial Intelligence',
                  'Networks and Distributed Computing',
                  'Software Engineering',
                  'Operating Systems',
                  'Computer Architecture',
                  'Applied Machine Learning',
                  'Numerical Analysis',
                  'Probability & Statistics',
                  'Calculus I - II',
                  'Ordinary Differential Equations',
                  'Linear Algebra',
                  'Discrete Math I & II',
                  'Computer Science Theory',
                  'Digital Logic',
                ].map((course) => (
                  <span key={course} className="bg-gray-700 px-2 py-1 rounded text-xs">
                    {course}
                  </span>
                ))}
              </div>

              <h3 className="font-semibold text-lg mb-2">Highlights</h3>
              <p className="mb-4 text-sm">
                Throughout my time at California State University, Long Beach, I have cultivated a deep passion for software development and problem-solving. The rigorous coursework and supportive faculty have provided me with a strong foundation in computer science principles, while also encouraging me to explore innovative technologies and real-world applications. My involvement in various research projects and leadership roles has enhanced my ability to collaborate effectively and think critically. These experiences have not only sharpened my technical skills but also inspired me to continuously learn and contribute meaningfully to the tech community.
              </p>

              <h3 className="font-semibold text-lg mb-2">Honors & Certificates</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-700 px-2 py-1 rounded text-xs">Tau Beta Pi Class of 2024 Initiation</span>
                <span className="bg-gray-700 px-2 py-1 rounded text-xs">President List (2x - Spring 2020 & Fall 2021)</span>
              </div>

              <a
                href={transcriptPDF}
                download
                className="inline-block bg-yellow-400 text-black px-4 py-2 rounded font-semibold"
              >
                Download Transcript
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
