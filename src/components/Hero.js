// === src/components/Hero.js ===
import React from 'react';
import heroImage from '../assets/miles.jpg';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center" id="home">
      <img src={heroImage} alt="Profile" className="rounded-full w-40 h-40 mb-6 border-4 border-purple-500" />
      <h2 className="text-4xl font-bold mb-2">Hi, I'm Miles</h2>
      <p className="text-lg text-gray-400 max-w-md">
        A passionate software developer focused on building efficient, scalable, and beautiful web applications.
      </p>
    </section>
  );
};

export default Hero;