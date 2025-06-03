import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-10 bg-gray-900 text-white max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <ul className="flex flex-wrap gap-4">
        <li className="bg-gray-700 px-4 py-2 rounded">JavaScript (ES6+), TypeScript</li>
        <li className="bg-gray-700 px-4 py-2 rounded">React, Redux, Next.js</li>
        <li className="bg-gray-700 px-4 py-2 rounded">Node.js, Express</li>
        <li className="bg-gray-700 px-4 py-2 rounded">HTML5, CSS3, Tailwind CSS</li>
        <li className="bg-gray-700 px-4 py-2 rounded">RESTful APIs, GraphQL</li>
        <li className="bg-gray-700 px-4 py-2 rounded">Git, GitHub, CI/CD</li>
        <li className="bg-gray-700 px-4 py-2 rounded">Docker, Kubernetes</li>
        <li className="bg-gray-700 px-4 py-2 rounded">Cloud Platforms: AWS, Azure</li>
        <li className="bg-gray-700 px-4 py-2 rounded">Machine Learning Basics</li>
      </ul>
    </section>
  );
};

export default Skills;
