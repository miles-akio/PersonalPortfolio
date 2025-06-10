import React from 'react';
import milesImage from '../assets/miles.jpg';

const Header = () => {
  return (
<header className="bg-gray-1100 text-white relative flex items-center justify-between px-16 py-4 font-mono">
      <div className="flex flex-col space-y-1 text-left text-base text-gray-400">
        <p>Software Engineer + A.I. Focus</p>
        <p className="text-gray-400">Anaheim, California, United States</p>
        <div className="space-x-10 text-purple-400">
          <a href="mailto:miles.shinmachi@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Email</a>
          <a href="tel:+6575619844" target="_blank" rel="noopener noreferrer" className="hover:underline">Phone</a>
          <a href="https://linkedin.com/in/mshinmachi/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href="https://github.com/miles-akio/" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        </div>
      </div>
      <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold whitespace-nowrap">
        Miles Shinmachi
      </h1>
      <div>
        <img
          src={milesImage}
          alt="Miles Shinmachi"
          className="w-24 h-24 rounded-full border-2 border-purple-600"
        />
      </div>
    </header>
  );
};

export default Header;
