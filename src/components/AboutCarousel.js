import React, { useState } from 'react';

const images = [
  '/carousel1.jpg',
  '/carousel2.jpg',
  '/carousel3.jpg',
];

const AboutCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative max-w-4xl mx-auto mt-8">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
      className="w-full h-96 object-cover rounded-lg"
      />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#8594;
      </button>
    </div>
  );
};

export default AboutCarousel;
