"use client";

import { useEffect, useState } from "react";

const Moments = [
  {
    title: "Partnership with WWF",
    description: "Collaborating with WWF to protect Kenya's biodiversity and forests.",
    image: "/images/cypress.JPG",
  },
  {
    title: "Conservation with AWF",
    description: "Working with AWF to safeguard wildlife habitats in Kenyan forests.",
    image: "/images/about.png",
  },
  {
    title: "UNEP Initiatives",
    description: "Supporting UNEP’s global environmental efforts in Kenya.",
    image: "/images/forest.jpg",
  },
  {
    title: "USAID Projects",
    description: "Enhancing forest management with USAID’s support.",
    image: "/images/forestcover.jpg",
  },
  {
    title: "FAO Collaboration",
    description: "Promoting sustainable forestry with FAO expertise.",
    image: "/images/foresty.jpg",
  },
  {
    title: "NEMA Partnership",
    description: "Aligning with NEMA for environmental regulation and conservation.",
    image: "/images/blackforest.jpg",
  },
  {
    title: "World Bank Support",
    description: "Leveraging World Bank funding for forest restoration.",
    image: "/images/cypress.JPG",
  },
  {
    title: "UNDP Efforts",
    description: "Partnering with UNDP for climate resilience in forests.",
    image: "/images/OIP.jpg",
  },
  {
    title: "KEFRI Research",
    description: "Advancing forest science with KEFRI’s research capabilities.",
    image: "/images/plantation.jpg",
  },
  {
    title: "Rhino Ark Conservation",
    description: "Protecting ecosystems with Rhino Ark’s initiatives.",
    image: "/images/cypress.JPG",
  },
  {
    title: "KFS Milestone",
    description: "Celebrating a key milestone in forest conservation with partners.",
    image: "/images/tree nusery.jpg",
  },
  {
    title: "Community Engagement",
    description: "Empowering local communities with partner support.",
    image: "/images/nuseries",
  },
];

const MomentsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === Moments.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === Moments.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Moments.length - 1 : prev - 1));
  };

  const currentMoment = Moments[currentSlide];

  return (
    <section className="bg-[#e6f5e6] py-0">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
        {/* Small Screens: Image on Top, Text Below */}
        <div className="md:hidden">
          <img
            src={currentMoment.image}
            alt={currentMoment.title}
            className="w-full h-[400px] object-cover shadow-md mb-6" // Fixed height for small screens
          />
          <div className="relative flex flex-col justify-center h-48">
            {/* Navigation for Small Screens */}
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={handlePrevSlide}
                className="bg-[#0D3C00] text-white px-4 py-2 rounded hover:bg-[#15803d] transition-colors"
              >
                &lt;
              </button>
              <span className="text-[#0D3C00] font-semibold">
                {currentSlide + 1} / {Moments.length}
              </span>
              <button
                onClick={handleNextSlide}
                className="bg-[#0D3C00] text-white px-4 py-2 rounded hover:bg-[#15803d] transition-colors"
              >
                &gt;
              </button>
            </div>
            <h2 className="text-2xl font-bold text-[#0D3C00] mb-4">
              {currentMoment.title}
            </h2>
            <p className="text-base text-gray-800">{currentMoment.description}</p>
          </div>
        </div>

        {/* Medium/Large Screens: Left (Text with Navigation), Right (Image) */}
        <div className="hidden md:flex md:flex-col md:justify-center md:items-start">
          <div className="relative w-full">
            {/* Navigation at Top Left */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={handlePrevSlide}
                className="bg-[#0D3C00] text-white px-4 py-2 rounded hover:bg-[#15803d] transition-colors"
              >
                &lt;
              </button>
              <span className="text-[#0D3C00] font-semibold">
                {currentSlide + 1} / {Moments.length}
              </span>
              <button
                onClick={handleNextSlide}
                className="bg-[#0D3C00] text-white px-4 py-2 rounded hover:bg-[#15803d] transition-colors"
              >
                &gt;
              </button>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0D3C00] mb-4">
              {currentMoment.title}
            </h2>
            <p className="text-base md:text-lg text-gray-800">
              {currentMoment.description}
            </p>
          </div>
        </div>

        {/* Right Section: Full-Height Image (Medium/Large Only) */}
        <div className="hidden md:block">
          <img
            src={currentMoment.image}
            alt={currentMoment.title}
            className="w-full h-[600px] object-cover shadow-md" // Fixed height for medium/large screens
          />
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;