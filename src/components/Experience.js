import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-10 bg-gray-900 text-white max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold">Software Engineer</h3>
          <p className="text-gray-400">Tech Solutions Inc.</p>
          <p className="text-gray-400">June 2022 - Present</p>
          <p>
            Working on developing scalable web applications using React and Node.js. Collaborate with cross-functional teams to design and implement new features, optimize performance, and ensure high code quality. Led the migration of legacy systems to modern cloud infrastructure.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Intern Developer</h3>
          <p className="text-gray-400">Innovate Labs</p>
          <p className="text-gray-400">Summer 2021</p>
          <p>
            Assisted in building internal tools and dashboards using JavaScript and Python. Gained experience in agile development processes and contributed to code reviews and testing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
