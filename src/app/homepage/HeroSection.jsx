"use client";

import React, { useState, useEffect } from "react";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";

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
    title: "Explore Today, Conserve Forever",
    subtitle:
      "Discover the untamed beauty of our forests — your adventure fuels vital conservation and empowers local communities",
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
    secondaryCtaLink: "/contacts",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10_000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="relative h-[85vh] md:h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Navigation */}
      <div className="relative z-20 w-full">
        <TopNavBar />
        <MainNavBar />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-x-0 bottom-16 md:bottom-20 z-10 flex flex-col items-center text-center px-6 md:px-12 max-w-5xl mx-auto left-0 right-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-wide text-shadow">
          {slide.title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 max-w-2xl text-shadow-sm">
          {slide.subtitle}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={slide.ctaLink}
            className="bg-white text-kfs-dark px-6 py-3 text-sm font-semibold rounded hover:bg-kfs-dark hover:text-white border-2 border-white transition-all duration-300"
          >
            {slide.ctaText}
          </a>
          <a
            href={slide.secondaryCtaLink}
            className="bg-kfs-dark text-white px-6 py-3 text-sm font-semibold rounded hover:bg-white hover:text-kfs-dark border-2 border-white transition-all duration-300"
          >
            {slide.secondaryCtaText}
          </a>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
