import React, { useState } from 'react';
import digiclipsLogo from '../assets/digiclips.png';

const Experience = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <section id="experience" className="py-20 px-10 bg-gray-900 text-white max-w-5xl mx-auto font-mono">
      <h2 className="text-4xl font-bold mb-6">Experience</h2>
      <div className="bg-gray-800 p-6 rounded-lg flex space-x-6">
        <div className="flex flex-col items-center flex-shrink-0">
          <img src={digiclipsLogo} alt="DigiClips Logo" className="w-20 h-20 mb-2" />
          <span className="text-gray-400">2025 - Present</span>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-2">Software Engineer</h3>
          <div className="flex space-x-2 mb-2">
            <a
              href="https://www.digiclipsinc.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-3 py-1 rounded font-semibold no-underline hover:underline"
            >
              DigiClips Inc.
            </a>
          </div>
          <p className="text-sm text-white mb-4">
            As a Software Engineer at DigiClips Inc., I contribute to optimizing backend logic, improving infrastructure reliability, enhancing search engine capabilities, and collaborating with cross-functional teams to drive operational efficiency.
          </p>
          <p className="text-gray-300 cursor-pointer underline" onClick={toggleExpanded}>
            {expanded ? 'Click Card to Show Less' : 'Click Card to Show More'}
          </p>
          {expanded && (
            <div className="mt-4 text-white">
              <h3 className="font-semibold text-lg mb-2">Duties</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Engineered the DigiClips New Version Project’s performance by optimizing backend logic with Angular, increasing efficiency by 30%.</li>
                <li>Reduced infrastructure downtime by 25% through deployment optimizations using Amazon Web Services and Amazon Lightsail.</li>
                <li>Enhanced the media search engine with Elasticsearch, improving search accuracy and demonstration readiness by 50%.</li>
                <li>Collaborated with the lead software developer, and senior company executives to streamline cross-functional operations by 35%.</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg flex space-x-6 mt-6">
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-20 h-20 mb-2 bg-gray-700 rounded"></div>
          <span className="text-gray-400">Summer 2021</span>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-2">Intern Developer</h3>
          <div className="flex space-x-2 mb-2">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded font-semibold">Innovate Labs</span>
          </div>
          <p className="text-gray-300">
            Assisted in building internal tools and dashboards using JavaScript and Python. Gained experience in agile development processes and contributed to code reviews and testing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
