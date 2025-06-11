import React from 'react';
import AboutCarousel from './AboutCarousel';

const About = () => {
  return (
    <section id="about" className="py-20 px-10 bg-gray-900 text-white max-w-5xl mx-auto font-mono">
      <h2 className="text-4xl font-bold mb-6">Hello World, I'm Miles ~</h2>
      <p className="mb-4">
        I am a dedicated and passionate software developer with a strong foundation in building scalable, efficient, and user-friendly web applications. My journey in technology began with a curiosity for how things work, which quickly evolved into a deep commitment to mastering modern development tools and frameworks. I thrive on solving complex problems and continuously seek opportunities to learn and grow in the ever-evolving tech landscape.
      </p>
      <p>
        Over the years, I have honed my skills in full-stack development, with a particular focus on React for frontend development and Node.js for backend services. I am enthusiastic about creating seamless user experiences and writing clean, maintainable code. Beyond coding, I enjoy collaborating with cross-functional teams to bring innovative ideas to life and contribute to impactful projects.
      </p>
      <br />
      <p>
        My interests extend to exploring emerging technologies such as machine learning, cloud computing, and DevOps practices. I am committed to staying at the forefront of industry trends and applying best practices to deliver high-quality software solutions.
      </p>
            <br />
      <p>
        While offline, my hobbies include kickboxing, completing certifications and also creating new personal projects to add onto my resume. In addition, I enjoy spending time with my family and friends, exploring new places, and engaging in activities that challenge my creativity and problem-solving skills. I believe that a well-rounded life enhances my perspective as a developer and fuels my passion for technology.
      </p>
            <br />
      <p>
        If you made it this far, please feel free to continue reading! ~ THX :]
      </p>
      <AboutCarousel />
    </section>
  );
};

export default About;
