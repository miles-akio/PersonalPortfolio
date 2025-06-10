import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('About');
  const [hovered, setHovered] = useState(null);

  const menuItems = ['About', 'Projects', 'Education', 'Experience', 'Skills', 'More'];

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = 'About';
      for (const item of menuItems) {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const offsetTop = section.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = item;
          }
        }
      }
      setActive(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-gray-800 text-white flex justify-center space-x-8 py-4 sticky top-0 z-50 font-mono">
      {menuItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setActive(item)}
          onMouseEnter={() => setHovered(item)}
          onMouseLeave={() => setHovered(null)}
          className={`text-lg font-semibold hover:text-purple-400 ${
            (active === item || hovered === item) ? 'underline text-purple-400' : ''
          }`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
