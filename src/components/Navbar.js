import React, { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('About');

  const menuItems = ['About', 'Projects', 'Education', 'Experience', 'Skills', 'More'];

  return (
    <nav className="bg-gray-800 text-white flex justify-center space-x-8 py-4 sticky top-0 z-50">
      {menuItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setActive(item)}
          className={`text-lg font-semibold hover:text-purple-400 ${active === item ? 'underline text-purple-400' : ''}`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
