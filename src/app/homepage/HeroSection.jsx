"use client";

import React, { useState, useEffect } from "react";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Growing 15 Billion Trees for a Greener Kenya by 2032",
      subtitle:
        "Join us in restoring our landscapes, combating climate change, and securing livelihoods",
      image: "/images/hero/president.jpg",
      ctaText: "Plant a Tree Today",
      ctaLink: "/about/nurseries",
      secondaryCtaText: "Adopt a Forest",
      secondaryCtaLink: "/about/nurseries",
    },
    {
      title: "Explore Today, Conserve Forever.",
      subtitle:
        "Discover the untamed beauty of our forests, where your adventure fuels vital conservation and empowers local communities",
      image: "/images/hero/mangrove.png",
      ctaText: "Explore Our Forests",
      ctaLink: "/about/learnmore",
      secondaryCtaText: "Who We Are",
      secondaryCtaLink: "/about",
    },
    {
      title: "Trees for Better Lives",
      subtitle:
        "Enhancing Kenya's tree cover to 30% by 2032 through collective action",
      image: "/images/hero/cs_plants.jpeg",
      ctaText: "Explore Our Nurseries",
      ctaLink: "/about/nurseries",
      secondaryCtaText: "Get In Touch",
      secondaryCtaLink: "/contact",
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
    <div className="relative h-[85vh] sm:h-[85vh] md:h-[100vh] w-full overflow-hidden">
      
      {/* Slide Container with Background Image */}
      <div
        className="relative h-full  bg-cover bg-no-repeat bg-center flex flex-col justify-start items-center text-white transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Navigation Bars */}
        <div className="relative w-full z-20">
          <TopNavBar />
          <div >
            <MainNavBar />
          </div>
        </div>

        {/* Text Content and CTA Buttons */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center z-10 p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-6xl">
          <h1
            className="font-bold mb-3 sm:mb-8 md:mb-10 tracking-wider text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            style={{
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            }}
          >
            {slides[currentSlide].title}
          </h1>
          <p
            className="mb-4 sm:mb-10 md:mb-10  text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" //italic
            style={{
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
            }}
          >
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex gap-2 sm:gap-3 md:gap-8">
            <a
              href={slides[currentSlide].ctaLink}
              className="inline-block bg-white text-[#0D3C00] px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-md hover:bg-[#0D3C00] hover:text-white transition-all duration-300"
              style={{
              }}
            >
              {slides[currentSlide].ctaText}
            </a>
            <a
              href={slides[currentSlide].secondaryCtaLink}
              className="inline-block bg-[#0D3C00] text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-md hover:bg-white hover:text-[#0D3C00] transition-all duration-300"
              style={{
              }}
            >
              {slides[currentSlide].secondaryCtaText}
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