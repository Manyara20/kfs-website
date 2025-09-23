"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const cards = [
  {
    tagline: "Kenya Forestry College",
    link: "https://kfc.ac.ke",
    background: "/images/cypress.JPG",
    description: "Discover our premier institution dedicated to forestry education and research in Kenya.",
    isExternal: true,
  },
  {
    tagline: "Explore Our Mandate",
    link: "/",
    background: "/images/community.jpg",
    description: "Learn about our mission to promote sustainable forestry and conservation practices.",
    isExternal: false,
  },
  {
    tagline: "Explore Our Nurseries",
    link: "/",
    background: "/images/mangrove.png",
    description: "Visit our state-of-the-art nurseries fostering native tree species for reforestation.",
    isExternal: false,
  },
  {
    tagline: "Our Conservation Efforts",
    link: "/",
    background: "/images/cypress.JPG",
    description: "Join us in protecting Kenya's diverse ecosystems through innovative conservation strategies.",
    isExternal: false,
  },
  {
    tagline: "Community Involvement",
    link: "/",
    background: "/images/nuseries.jpg",
    description: "Engage with local communities to support sustainable forestry and environmental stewardship.",
    isExternal: false,
  },
  {
    tagline: "Join Our Initiatives",
    link: "/",
    background: "/images/community.jpg",
    description: "Get involved in our programs to make a lasting impact on Kenya's forests.",
    isExternal: false,
  },
];

export default function About() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState(cards.map(() => false));

  useEffect(() => {
    const isSmallScreen = window.innerWidth < 768;
    if (isSmallScreen) {
      const interval = setInterval(() => {
        setCurrentCardIndex((prevIndex) =>
          prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  const handleCardClick = (index, e) => {
    // Prevent flipping when clicking the "Learn More" button
    if (e.target.tagName !== "A") {
      setFlippedCards((prev) =>
        prev.map((flipped, i) => (i === index ? !flipped : flipped))
      );
    }
  };

  const handleLearnMoreClick = (index) => {
    // Flip the card back to the front when "Learn More" is clicked
    setFlippedCards((prev) =>
      prev.map((flipped, i) => (i === index ? false : flipped))
    );
  };

  return (
    <div className="w-full h-[400px] md:h-[800px] relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-0 w-full h-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative w-full h-full transition-opacity duration-500 ${
              index === currentCardIndex ? "opacity-100" : "opacity-0"
            } md:opacity-100 group`}
          >
            <div
              className="relative w-full h-full transition-transform duration-500"
              style={{ transformStyle: "preserve-3d", transform: flippedCards[index] ? "rotateY(180deg)" : "rotateY(0deg)" }}
            >
              {/* Front of the card */}
              <div
                className="absolute w-full h-full cursor-pointer"
                style={{
                  backgroundImage: `url(${card.background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backfaceVisibility: "hidden",
                }}
                onClick={(e) => handleCardClick(index, e)}
              >
                <div className="relative flex items-center justify-center h-full">
                  <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <h2 className="relative text-white text-2xl md:text-xl font-bold text-center px-4 z-10">
                    {card.tagline}
                  </h2>
                </div>
              </div>
              {/* Back of the card */}
              <div
                className="absolute w-full h-full flex flex-col items-center justify-center p-4 cursor-pointer"
                style={{
                  backgroundColor: "#1a3c34",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                onClick={(e) => handleCardClick(index, e)}
              >
                <h2 className="text-white text-xl md:text-lg font-bold text-center mb-4">
                  {card.tagline}
                </h2>
                <p className="text-white text-base md:text-sm text-center mb-6">
                  {card.description}
                </p>
                {card.isExternal ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
                    onClick={() => handleLearnMoreClick(index)}
                  >
                    Learn More
                  </a>
                ) : (
                  <Link
                    href={card.link}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
                    onClick={() => handleLearnMoreClick(index)}
                  >
                    Learn More
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
}