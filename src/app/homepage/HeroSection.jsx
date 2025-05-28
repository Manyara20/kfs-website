"use client";

import React, { useState, useEffect } from "react";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Kenya Forest Service",
      subtitle:
        "Provide for the development and sustainable management, including conservation and rational utilization of all forest resources for the socio-economic development of the country and for connected purposes.",
      image: "/images/cypress.JPG",
      ctaText: "Explore Our Forests",
      ctaLink: "#forests", // Replace with actual link as needed
    },
    {
      title: "Mangrove Forest Conservation Efforts",
      subtitle:
        "Protecting Kenya's forests for future generations. Increase the National Tree Cover from 13% to 21.03% in the 5-year period towards attainment of 30% tree cover by 2032",
      image: "/images/Mangroveforest.png",
      ctaText: "Explore Our Nurseries",
      ctaLink: "#nurseries", // Replace with actual link as needed
    },
    {
      title: "Trees For Better Lives",
      subtitle:
        "Promoting environmental sustainability since 2005. National Forest Cover from 8.83% to 10% in the 5 years plan period towards attainment of the National target of 10% forest cover by 2030",
      image: "/images/MTKULAL.JPG",
      ctaText: "Journey Towards 15B Trees",
      ctaLink: "#tree-planting", // Replace with actual link as needed
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[85vh] sm:h-[85vh] md:h-[95vh] w-full overflow-hidden">
      {/* Slide Container with Background Image */}
      <div
        className="relative h-full bg-cover bg-center flex flex-col justify-start items-center text-white transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Navigation Bars */}
        <div className="relative w-full z-20">
          <TopNavBar />
          <div className="sticky top-0 mt-[5px]">
            <MainNavBar />
          </div>
        </div>

        {/* Text Content and CTA Button */}
        <div className="absolute bottom-10 left-4 sm:bottom-12 sm:left-6 md:bottom-16 md:left-8 lg:bottom-20 lg:left-10 w-1/2 flex flex-col justify-end items-start text-left z-10 p-4 sm:p-6 md:p-8 lg:p-10">
          <div>
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
            <a
              href={slides[currentSlide].ctaLink}
              className="inline-block bg-white text-[#0D3C00] px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-md hover:bg-[#0D3C00] hover:text-white transition-all duration-300"
              style={{
                fontFamily: "'Peugeot', Helvetica, sans-serif",
              }}
            >
              {slides[currentSlide].ctaText}
            </a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 md:gap-2.5 z-20">
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