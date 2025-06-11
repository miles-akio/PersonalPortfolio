import React, { useState } from 'react';

const projects = [
  {
    title: 'StreamSync',
    description: 'Built a real-time ETL pipeline using Node.js, Kafka, and PostgreSQL, reducing data latency by 40%. \n Designed Kafka-based microservices architecture improving system scalability and resilience by 30%. \n Implemented WebSocket-based live updates in React (Next.js) and Node.js, enhancing UI responsiveness and reducing data retrieval time by 50%.',
    image: require('../assets/streamsync.png'),
    links: {
      github: 'https://github.com/miles-akio/StreamSync'
    },
    tags: [
      { label: 'Node.js', icon: '🟩' },
      { label: 'Kafka', icon: '🟠' },
      { label: 'PostgreSQL', icon: '🐘' },
      { label: 'React', icon: '⚛️' },
      { label: 'WebSocket', icon: '🔌' },
      { label: 'Next.js', icon: '📦' },
      { label: 'TypeScript', icon: '🟦' },
      { label: 'Docker', icon: '🐳' },
      { label: 'Redis', icon: '🟥' },
    ],
  },
  {
    title: 'UAuth Wallet',
    description: 'Engineered a JWT-based authentication system in Laravel with React.js, improving login security and session management by 20%. Integrated Stripe API for secure wallet transactions, reducing user transaction errors by 15%. Developed a RESTful API for seamless frontend-backend communication, optimizing request-response efficiency by 30%.',
    image: require('../assets/uauth.png'),
    links: {
      github: 'https://github.com/miles-akio/UserAuthenticationWallet'
    },
    tags: [
      { label: 'Laravel', icon: '🟣' },
      { label: 'React', icon: '⚛️' },
      { label: 'Stripe', icon: '💳' },
      { label: 'JWT', icon: '🔐' },
      { label: 'Node.js', icon: '🟩' },
      { label: 'TypeScript', icon: '🟦' },
      { label: 'MySQL', icon: '🐬' },
      { label: 'RESTful API', icon: '🌐' },
      { label: 'Docker', icon: '🐳' },
      { label: 'Git', icon: '🐙' },
    ],
  },
  {
    title: 'TraceFree',
    description: 'Developed a VPN-based Android app to block apps from tracking user location using Kotlin & Android SDK, improving data privacy by 30%. Implemented Retrofit for network analysis to monitor data flows, reducing unauthorized user-location tracking by 40%. Employed agile sprints and Git version control to coordinate modular feature implementation, reducing crash rates by 25%.',
    image: require('../assets/tracefree.png'),
    links: {
      github: 'https://github.com/miles-akio/TraceFree',
    },
    tags: [
      { label: 'Kotlin', icon: '🟪' },
      { label: 'Android', icon: '🤖' },
      { label: 'VPN', icon: '🛡️' },
      { label: 'Network Analysis', icon: '📡' },
      { label: 'React', icon: '⚛️' },
      { label: 'Java', icon: '☕' },
      { label: 'Firebase', icon: '🔥' },
      { label: 'Agile', icon: '🚀' },
      { label: 'Git', icon: '🐙' },
      { label: 'Docker', icon: '🐳' },
    ],
  },
  {
    title: 'CalCoy',
    description: 'Led development of an AI-driven calendar app using React.js, reducing scheduling conflicts by 40% with machine learning algorithms. Managed a team of 5 developers using Scrum methodology & Atlassian Jira, improving sprint efficiency and feature delivery by 35%. Optimized backend infrastructure housing the database and AI chatbot with Node.js, reducing overall system latency by 20%.',
    image: require('../assets/calcoy.png'),
    links: {
      github: 'https://github.com/gsdyu/Calcoy'
    },
    tags: [
      { label: 'Artificial Intelligence', icon: '🤖' },
      { label: 'React', icon: '⚛️' },
      { label: 'Node.js', icon: '🟩' },
      { label: 'Machine Learning', icon: '🧠' },
      { label: 'Scrum', icon: '📅' },
      { label: 'Kotlin', icon: '🟪' },
      { label: 'Python', icon: '🐍' },
      { label: 'Git', icon: '🐙' },
      { label: 'Atlassian Jira', icon: '🧑‍💻' },
    ],
  },
];

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpanded = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="projects" className="py-20 px-10 bg-black max-w-5xl mx-auto text-white font-mono">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const sentences = project.description.split(/(?<=\.)\s+/);

          return (
            <div key={index} className="bg-gray-800 p-6 rounded-lg flex flex-col">
              <img src={project.image} alt={project.title} className="rounded-md mb-4 h-52 object-cover ml-0" />
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="bg-blue-600 px-3 py-1 rounded text-sm font-semibold hover:bg-blue-700">
                    GitHub
                  </a>
                )}
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-700 px-2 py-1 rounded text-xs flex items-center gap-1">
                    <span>{tag.icon}</span> {tag.label}
                  </span>
                ))}
              </div>
              {index === 0 && <p className="text-white text-sm mb-4">StreamSync is a real-time data pipeline platform designed to efficiently process and synchronize large volumes of data across distributed systems. It leverages modern technologies to ensure low latency and high scalability. The platform supports live updates and seamless integration with various data sources. It aims to improve data accessibility and responsiveness for end users.</p>}

              {index === 1 && <p className="text-white text-sm mb-4">UAuth Wallet is a secure digital wallet application featuring robust user authentication and payment processing capabilities. It provides a safe and reliable platform for managing digital assets with seamless frontend-backend communication and strong session management. This aims to provide secure transactions with ease without having to worry about online theft.</p>}

              {index === 2 && <p className="text-white text-sm mb-4">TraceFree is a privacy-focused mobile app that prevents unauthorized tracking of user location using VPN technology. It includes network monitoring features to analyze data flows and enhance user privacy, emphasizing security and user control over personal data.</p>}

              {index === 3 && <p className="text-white text-sm mb-4">CalCoy is an AI-powered calendar app designed to optimize scheduling and reduce conflicts. It incorporates machine learning algorithms for intelligent event management and supports team collaboration with agile project management methodologies.</p>}

              <button
                className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded text-center font-semibold"
                onClick={() => toggleExpanded(index)}
              >
                {expandedProjects[index] ? 'Hide Details' : 'Show Details'}
              </button>
              {expandedProjects[index] && (
                <ul className="text-white mt-4 text-sm list-disc list-inside space-y-2">
                  {sentences.map((sentence, idx) => (
                    <li key={idx}>{sentence.trim()}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
