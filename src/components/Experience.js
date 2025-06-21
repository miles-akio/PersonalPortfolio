import React, { useState } from 'react';
import digiclipsLogo from '../assets/digiclips.png';
import csulbsaseLogo from '../assets/csulbsase.png';

const Experience = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-10 bg-gray-900 text-white max-w-5xl mx-auto font-mono">
      <h2 className="text-4xl font-bold mb-6">Experience</h2>

      {[{
        logo: digiclipsLogo,
        alt: 'DigiClips Logo',
        date: "Mar'25 - Present",
        title: 'Software Engineer',
        company: {
          name: 'DigiClips Inc.',
          url: 'https://www.digiclipsinc.com/home',
        },
        description: 'As a Software Engineer at DigiClips Inc., I contribute to optimizing backend logic, improving infrastructure reliability, enhancing search engine capabilities, and collaborating with cross-functional teams to drive operational efficiency.',
        duties: [
          'Engineered the DigiClips New Version Project’s performance by optimizing backend logic with Angular, increasing efficiency by 30%.',
          'Reduced infrastructure downtime by 25% through deployment optimizations using Amazon Web Services and Amazon Lightsail.',
          'Enhanced the media search engine with Elasticsearch, improving search accuracy and demonstration readiness by 50%.',
          'Collaborated with the lead software developer, and senior company executives to streamline cross-functional operations by 35%.',
        ],
      }, {
        logo: csulbsaseLogo,
        alt: 'CSULB SASE Logo',
        date: "June'22 - Dec'24",
        title: 'Webmaster & Graphic Designer',
        company: {
          name: 'Society of Asian Scientists & Engineers',
          url: 'https://csulbsase.org',
        },
        description: "As the webmaster, I was responsible for developing the chapters' website and maintain it as needed where I exercised my WordPress and online website development prowess. As the graphic designer, I created graphics for the chapter's social media and website, enhancing our online presence and engagement.",
        duties: [
          'Developed and maintained the CSULB SASE website with WordPress by integrating extensions to improve site functionality by 40%.',
          'Enhanced SASE website performance through search engine optimization best practices, resulting in 50% reduction in load times and 25% increase in traffic.',
          'Collaborated with the marketing team to implement interactive features and event pages, increasing user engagement and average session duration by 30%.',
          'Designed branded digital assets and social media visuals using Canva and Adobe tools, contributing to a 20% growth in social media followers over one semester.',
        ],
      }].map((exp, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg flex flex-col sm:flex-row sm:space-x-6 mb-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <img src={exp.logo} alt={exp.alt} className="w-20 h-20 mb-2 rounded" />
            <span className="text-gray-400">{exp.date}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
            <div className="flex space-x-2 mb-2">
              <a
                href={exp.company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-3 py-1 rounded font-semibold no-underline hover:underline"
              >
                {exp.company.name}
              </a>
            </div>
            <p className="text-sm text-white mb-4">{exp.description}</p>
            <p className="text-gray-300 cursor-pointer underline" onClick={() => toggleExpanded(index)}>
              {expanded[index] ? 'Click Card to Show Less' : 'Click Card to Show More'}
            </p>
            {expanded[index] && (
              <div className="mt-4 text-white">
                <h3 className="font-semibold text-lg mb-2">Duties</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  {exp.duties.map((duty, i) => (
                    <li key={i}>{duty}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
