import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white flex items-center justify-between p-4">
      <div>
        <h1 className="text-2xl font-bold">Shaun Lim</h1>
        <p className="text-sm">ML Engineer and Data Enthusiast</p>
        <p className="text-xs text-gray-400">Los Angeles, California, United States</p>
        <div className="mt-1 space-x-4 text-blue-400 text-sm">
          <a href="mailto:shaun@example.com" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">Phone</a>
          <a href="https://linkedin.com/in/shaunlim" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/shaunlim" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <div>
        <img
          src="/profile.jpg"
          alt="Shaun Lim"
          className="w-16 h-16 rounded-full border-2 border-purple-600"
        />
      </div>
    </header>
  );
};

export default Header;
