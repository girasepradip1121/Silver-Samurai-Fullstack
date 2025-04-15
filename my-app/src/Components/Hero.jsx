"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  // Sample images for the slider
  const slides = [
    {
      url: "/h1.jpg",
      alt: "Textile machinery with colorful threads",
    },
    {
      url: "/h2.jpg",
      alt: "Industrial textile equipment",
    },
    {
      url: "/h3.jpg",
      alt: "Modern textile production line",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  // Function to go to the previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Automatic slide transition
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
      {/* Slide transition with animation */}
      <div
        className="w-full h-full duration-500 ease-in-out transition-transform"
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50">
          {/* Content container */}
          <div className="flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">
              Leading Textile Machinery Supplier
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
              Quality machinery and international trade solutions since 2005
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/product"
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Explore Product
              </Link>
              <Link
                to="/contact"
                className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-6 rounded-md border border-white transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow Container with Gap */}
      <div className="absolute bottom-5 right-5 flex gap-3 sm:gap-5">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/30 hover:bg-white/50 text-white transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/30 hover:bg-white/50 text-white transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === slideIndex ? "bg-white scale-110" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>      
  );
};

export default HeroSlider;
