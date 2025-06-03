import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    id: 1,
    title: 'Slide One',
    description: 'Khaemba Innocent presents to you.',
    imageUrl: '/images/kayshirt.png',
  },
  {
    id: 2,
    title: 'Slide Two',
    description: 'Here is the second slide with some cool content.',
    imageUrl: 'https://source.unsplash.com/random/800x400?sig=2',
  },
  {
    id: 3,
    title: 'Slide Three',
    description: 'The third slide is here to impress you.',
    imageUrl: 'https://source.unsplash.com/random/800x400?sig=3',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 5000; // 5 seconds auto slide

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="max-w-4xl mx-auto relative select-none">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map(({ id, title, description, imageUrl }) => (
            <div
              key={id}
              className="min-w-full bg-gray-900 text-white relative"
            >
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-64 object-cover brightness-75"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 space-y-4">
                <h2 className="text-3xl font-bold drop-shadow-lg">{title}</h2>
                <p className="text-lg max-w-xl text-center drop-shadow-md">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-60 text-gray-800 rounded-full p-2 shadow-lg transition"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-60 text-gray-800 rounded-full p-2 shadow-lg transition"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="flex justify-center space-x-3 mt-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === idx ? 'bg-blue-600' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
