"use client";

import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Kenya Forest Service",
      subtitle:
        "Provide for the development and sustainable management, including conservation and rational utilization of all forest resources for the socio-economic development of the country and for connected purposes.",
      image: "/images/cypress.JPG",
    },
    {
      title: "Mangrove Forest Conservation Efforts",
      subtitle:
        "Protecting Kenya's forests for future generations. Increase the National Tree Cover from 13% to 21.03% in the 5-year period towards attainment of 30% tree cover by 2032",
      image: "/images/Mangroveforest.png",
    },
    {
      title: "Trees For Better Lives",
      subtitle:
        "Promoting environmental sustainability since 2005. National Forest Cover from 8.83% to 10% in the 5 years plan period towards attainment of the National target of 10% forest cover by 2030",
      image: "/images/MTKULAL.JPG",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {/* Slide Container */}
      <div
        className="relative h-full bg-cover bg-center flex justify-center items-center text-white p-4 sm:p-6 md:p-8 lg:p-10 transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text Content */}
        <div className="relative text-center z-10">
          <h1
            className="font-bold mb-3 sm:mb-4 md:mb-5 tracking-wider text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            style={{
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
              fontFamily: "'Peugeot', Helvetica, sans-serif",
            }}
          >
            {slides[currentSlide].title}
          </h1>
          <p
            className="mb-4 sm:mb-5 md:mb-6 italic text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
            style={{
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
              fontFamily: "'Peugeot', Helvetica, sans-serif",
            }}
          >
            {slides[currentSlide].subtitle}
          </p>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 md:gap-2.5">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;