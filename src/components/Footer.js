import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-6 mt-20">
      <p>© {new Date().getFullYear()} Shaun Lim. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
