import React from 'react';

const projects = [
  {
    title: 'StreamSync',
    description: 'Built a real-time ETL pipeline using Node.js, Kafka, and PostgreSQL, reducing data latency by 40%. \n Designed Kafka-based microservices architecture improving system scalability and resilience by 30%. \n Implemented WebSocket-based live updates in React (Next.js) and Node.js, enhancing UI responsiveness and reducing data retrieval time by 50%.',
    image: '/project1.png',
    links: {
      github: 'https://github.com/yourusername/streamsync',
      presentation: 'https://yourpresentationlink.com/streamsync',
    },
    tags: [
      { label: 'Node.js', icon: '🟩' },
      { label: 'Kafka', icon: '🟠' },
      { label: 'PostgreSQL', icon: '🐘' },
      { label: 'React', icon: '⚛️' },
      { label: 'WebSocket', icon: '🔌' },
    ],
  },
  {
    title: 'User Authentication Wallet',
    description: 'Engineered a JWT-based authentication system in Laravel with React.js, improving login security and session management by 20%. Integrated Stripe API for secure wallet transactions, reducing user transaction errors by 15%. Developed a RESTful API for seamless frontend-backend communication, optimizing request-response efficiency by 30%.',
    image: '/project2.png',
    links: {
      github: 'https://github.com/yourusername/auth-wallet',
      presentation: 'https://yourpresentationlink.com/auth-wallet',
    },
    tags: [
      { label: 'Laravel', icon: '🟣' },
      { label: 'React', icon: '⚛️' },
      { label: 'Stripe', icon: '💳' },
      { label: 'JWT', icon: '🔐' },
    ],
  },
  {
    title: 'TraceFree',
    description: 'Developed a VPN-based Android app to block apps from tracking user location using Kotlin & Android SDK, improving data privacy by 30%. Implemented Retrofit for network analysis to monitor data flows, reducing unauthorized user-location tracking by 40%. Employed agile sprints and Git version control to coordinate modular feature implementation, reducing crash rates by 25%.',
    image: '/project3.png',
    links: {
      github: 'https://github.com/yourusername/tracefree',
    },
    tags: [
      { label: 'Kotlin', icon: '🟪' },
      { label: 'Android', icon: '🤖' },
      { label: 'VPN', icon: '🛡️' },
      { label: 'Network Analysis', icon: '📡' },
    ],
  },
  {
    title: 'CalCoy',
    description: 'Led development of an AI-driven calendar app using React.js, reducing scheduling conflicts by 40% with machine learning algorithms. Managed a team of 5 developers using Scrum methodology & Atlassian Jira, improving sprint efficiency and feature delivery by 35%. Optimized backend infrastructure housing the database and AI chatbot with Node.js, reducing overall system latency by 20%.',
    image: '/project4.png',
    links: {
      github: 'https://github.com/yourusername/cal-coy',
      presentation: 'https://yourpresentationlink.com/cal-coy',
      website: 'https://calcoyapp.com',
    },
    tags: [
      { label: 'AI', icon: '🤖' },
      { label: 'React', icon: '⚛️' },
      { label: 'Node.js', icon: '🟩' },
      { label: 'Scrum', icon: '📅' },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-10 bg-black max-w-5xl mx-auto text-white font-mono">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg flex flex-col">
            <img src={project.image} alt={project.title} className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <ul className="text-white mb-4 text-sm list-disc list-inside space-y-2">
              {project.description.split(/(?<=\.)\s+/).map((sentence, idx) => (
                <li key={idx}>{sentence.trim()}</li>
              ))}
            </ul>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="bg-blue-600 px-3 py-1 rounded text-sm font-semibold hover:bg-blue-700">
                  GitHub
                </a>
              )}
              {project.links.devpost && (
                <a href={project.links.devpost} target="_blank" rel="noopener noreferrer" className="bg-purple-600 px-3 py-1 rounded text-sm font-semibold hover:bg-purple-700">
                  Devpost
                </a>
              )}
              {project.links.presentation && (
                <a href={project.links.presentation} target="_blank" rel="noopener noreferrer" className="bg-orange-600 px-3 py-1 rounded text-sm font-semibold hover:bg-orange-700">
                  Presentation
                </a>
              )}
              {project.links.website && (
                <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="bg-red-600 px-3 py-1 rounded text-sm font-semibold hover:bg-red-700">
                  Website
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="bg-gray-700 px-2 py-1 rounded text-xs flex items-center gap-1">
                  <span>{tag.icon}</span> {tag.label}
                </span>
              ))}
            </div>
            <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded text-center font-semibold">
              Show Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
