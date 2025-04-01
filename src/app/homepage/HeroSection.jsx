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

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Slide Container */}
      <div
        className="relative h-full bg-cover bg-center flex justify-center items-center text-white p-5 transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        <div className="text-center">
          <h1
            className="text-6xl font-bold mb-5 tracking-wider"
            style={{
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
              fontFamily: "'Peugeot', Helvetica, sans-serif",
            }}
          >
            {slides[currentSlide].title}
          </h1>
          <p
            className="text-4xl mb-5 italic"
            style={{
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
              fontFamily: "'Peugeot', Helvetica, sans-serif",
            }}
          >
            {slides[currentSlide].subtitle}
          </p>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2.5">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;