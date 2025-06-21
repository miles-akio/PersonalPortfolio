import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('About');
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ['About', 'Projects', 'Education', 'Experience', 'Skills', 'More'];
  const displayNames = {
    About: 'About',
    Projects: 'Projects',
    Education: 'Education',
    Experience: 'Experience',
    Skills: 'Skills',
    More: 'Resume + Cover Letter',
  };

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
    <nav className="bg-gray-800 text-white sticky top-0 z-50 font-mono py-3">
      <div className="flex justify-center items-center px-4 sm:px-0 space-x-4">
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`sm:flex sm:justify-center sm:space-x-8 py-2 px-4 sm:px-0 ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => {
              setActive(item);
              setMenuOpen(false);
            }}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
            className={`block sm:inline-block text-lg font-semibold hover:text-purple-400 mb-2 sm:mb-0 ${
              active === item || hovered === item ? 'underline text-purple-400' : ''
            }`}
          >
            {displayNames[item] || item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
