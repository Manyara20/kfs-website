"use client";

import { useEffect, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Moments = [
  {
    title: "Forest Protection and Security",
    description: "Safeguarding all gazetted forests and forest resources from illegal activities, destruction, and unauthorized access is paramount to maintaining their integrity and ecological functions.",
    image: "/images/rangers_patrol.jpg",
  },
  {
    title: "Forest Conservation and Management",
    description: "Implementing sustainable forest management practices to ensure the long-term health, productivity, and biodiversity of forest ecosystems across the country.",
    image: "/images/trees_lives.png",
  },
  {
    title: "Forest Development and Tree Planting",
    description: "Expanding Kenya's forest cover through afforestation and reforestation initiatives on public and private lands to enhance environmental benefits and wood production.",
    image: "/images/planted_site_mau.jpg",
  },
  {
    title: "Sustainable Utilization of Forest Resources",
    description: "Regulating and promoting the responsible harvesting and utilization of forest products and services to meet socio-economic needs while ensuring ecological sustainability.",
    image: "/images/cypress.JPG",
  },
  {
    title: "Community Participation and Partnerships",
    description: "Engaging local communities, private sector, and other stakeholders in forest management and conservation efforts to foster ownership, shared responsibility, and equitable benefit sharing.",
    image: "/images/community.jpeg",
  },
  {
    title: "Forest Research and Innovation",
    description: "Conducting and promoting research to generate knowledge and innovative solutions for improved forest management, conservation, and sustainable utilization.",
    image: "/images/kfc.jpeg",
  },
  {
    title: "Forest Extension Services and Education",
    description: "Providing technical advice, training, and awareness programs to individuals, communities, and institutions on sustainable forest management practices and the importance of forests.",
    image: "/images/kfc.jpeg",
  },
  {
    title: "Protection of Water Catchment Areas",
    description: "Managing and conserving forests in critical water catchment areas to ensure a continuous and high-quality supply of water for domestic, agricultural, and industrial use.",
    image: "/images/planted_site_mau.jpg",
  },
  {
    title: "KEFRI Research",
    description: "Advancing forest science with KEFRI’s research capabilities.",
    image: "/images/waterfall_karura.jpg",
  },
  {
    title: "Biodiversity Conservation within Forests",
    description: "Protecting and conserving the diverse flora and fauna found within forest ecosystems, recognizing their intrinsic value and ecological importance.",
    image: "/images/cypress.JPG",
  },
  {
    title: "Climate Change Mitigation and Adaptation",
    description: "Recognizing the role of forests in carbon sequestration and implementing strategies to enhance their contribution to climate change mitigation and build resilience to its impacts.",
    image: "/images/natural_forest.jpg",
  },
  {
    title: "Collaboration and Partnerships",
    description: "Establishing and maintaining collaborations with government agencies, international organizations, and other relevant stakeholders to enhance forest management and conservation efforts at national, regional, and global levels.",
    image: "/images/patners.jpeg",
  },
];

const MomentsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(null); // Track direction: 'left' or 'right'

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setCurrentSlide((prev) => (prev === Moments.length - 1 ? 0 : prev + 1));
    }, 500000);
    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setDirection('right');
    setCurrentSlide((prev) => (prev === Moments.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setDirection('left');
    setCurrentSlide((prev) => (prev === 0 ? Moments.length - 1 : prev - 1));
  };

  const currentMoment = Moments[currentSlide];

  // Animation classes based on direction
  const slideClass = direction === 'left'
    ? 'transform translate-x-[-100%] opacity-0 transition-all duration-1000 ease-in-out'
    : direction === 'right'
      ? 'transform translate-x-[100%] opacity-0 transition-all duration-1000 ease-in-out'
      : 'transform translate-x-0 opacity-100 transition-all duration-1000 ease-in-out';

  // Reset transform after animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(null); // Reset direction to remove transform
    }, 500); // Match transition duration
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section className="bg-[#fff] py-4">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 relative">
        {/* Navigation Bar (Fixed Position) */}
        <div className="flex items-center gap-4 mb-4 md:absolute md:top-65 md:left-10 z-10">
          <button
            onClick={handlePrevSlide}
            className="bg-[#e6f5e6] text-[#0D3C00] p-2 rounded-full hover:bg-[#15803d] hover:text-white transition-colors duration-200"
            aria-label="Previous Slide"
          >
            <GoChevronLeft size={20} />
          </button>
          <span className="text-[#0D3C00] font-semibold">
            {currentSlide + 1} / {Moments.length}
          </span>
          <button
            onClick={handleNextSlide}
            className="bg-[#e6f5e6] text-[#0D3C00] p-2 rounded-full hover:bg-[#15803d] hover:text-white transition-colors duration-200"
            aria-label="Next Slide"
          >
            <GoChevronRight size={20} />
          </button>
        </div>

        {/* Small Screens: Image on Top, Text Below */}
        <div className="md:hidden">
          <div className="relative w-full h-[400px]">
            <img
              key={currentSlide}
              src={currentMoment.image}
              alt={currentMoment.title}
              className={`w-full h-full object-cover shadow-md mb-6 ${slideClass}`}
            />
          </div>
          <div className="relative flex flex-col justify-center h-48">
            <h2 className={`text-2xl font-bold text-[#0D3C00] mb-4 ${slideClass}`}>
              {currentMoment.title}
            </h2>
            <p className={`text-base text-gray-800 ${slideClass}`}>
              {currentMoment.description}
            </p>
          </div>
        </div>

        {/* Medium/Large Screens: Left (Text), Right (Image) */}
        <div className="hidden md:flex md:flex-col md:justify-center md:items-start">
          <div className="relative w-full pt-12"> {/* Offset for fixed navigation */}
            <h2 className={`text-2xl md:text-3xl font-bold text-[#0D3C00] mb-4 ${slideClass}`}>
              {currentMoment.title}
            </h2>
            <p className={`text-base md:text-lg text-gray-800 ${slideClass}`}>
              {currentMoment.description}
            </p>
          </div>
        </div>

        {/* Right Section: Full-Height Image (Medium/Large Only) */}
        <div className="hidden md:block">
          <div className="relative w-full h-[720px]">
            <img
              key={currentSlide}
              src={currentMoment.image}
              alt={currentMoment.title}
              className={`w-full h-full object-cover shadow-md ${slideClass}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;