import React from 'react';

const skills = [
  { label: 'Agile', icon: '🚀' },
  { label: 'Android Studio', icon: '🤖' },
  { label: 'Artificial Intelligence', icon: '🤖' },
  { label: 'Atlassian Jira', icon: '🧑‍💻' },
  { label: 'AWS', icon: '☁️' },
  { label: 'Azure', icon: '☁️' },
  { label: 'CI/CD Pipeline', icon: '⚙️' },
  { label: 'Docker', icon: '🐳' },
  { label: 'Figma', icon: '🎨' },
  { label: 'Firebase', icon: '🔥' },
  { label: 'Git', icon: '🐙' },
  { label: 'GitHub', icon: '🐙' },
  { label: 'HTML5', icon: '🌐' },
  { label: 'Java', icon: '☕' },
  { label: 'JavaScript (ES6+)', icon: '🟨' },
  { label: 'Kafka', icon: '🟠' },
  { label: 'Kotlin', icon: '🟪' },
  { label: 'Kubernetes', icon: '☸️' },
  { label: 'Laravel', icon: '🟣' },
  { label: 'Machine Learning', icon: '🧠' },
  { label: 'MySQL', icon: '🐬' },
  { label: 'Network Analysis', icon: '📡' },
  { label: 'Next.js', icon: '📦' },
  { label: 'Node.js', icon: '🟩' },
  { label: 'PostgreSQL', icon: '🐘' },
  { label: 'Project Management', icon: '📋' },
  { label: 'React', icon: '⚛️' },
  { label: 'Redux', icon: '⚛️' },
  { label: 'RESTful API', icon: '🌐' },
  { label: 'Scrum', icon: '📅' },
  { label: 'Stripe', icon: '💳' },
  { label: 'Tailwind CSS', icon: '🎨' },
  { label: 'TypeScript', icon: '🟦' },
  { label: 'VPN', icon: '🛡️' },
  { label: 'WebSocket', icon: '🔌' },
  { label: 'WordPress', icon: '📝' },
  { label: 'XML', icon: '📄' },
  { label: 'Redis', icon: '🟥' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-10 bg-gray-900 text-white max-w-5xl mx-auto font-mono">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <ul className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="bg-gray-700 px-4 py-2 rounded flex items-center gap-2 font-mono">
            <span>{skill.icon}</span> {skill.label}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
