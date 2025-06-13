'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const forests = [
  {
    name: "Kakamega Forest",
    image: "/images/forests/kakamega.jpg",
    subtitle: "A biodiverse rainforest with unique wildlife",
  },
  {
    name: "Arabuko Sokoke Forest",
    image: "/images/forests/arabuko.jpeg",
    subtitle: "Coastal forest with rare birds and ancient trees",
  },
  {
    name: "Hombe Forest Guesthouse",
    image: "/images/forests/mau.jpg",
    subtitle: "Serene retreat in the heart of nature",
  },
  {
    name: "Karura Forest",
    image: "/images/forests/karura.jpg",
    subtitle: "Urban oasis with trails and waterfalls",
  },
  {
    name: "Ngong Forest",
    image: "/images/forests/karura.jpg",
    subtitle: "Scenic hills with stunning city views",
  },
  {
    name: "Menengai Forest",
    image: "/images/forests/aberdare.jpeg",
    subtitle: "Volcanic crater with lush greenery",
  },
  {
    name: "Mt. Kenya Forest",
    image: "/images/forests/cheranganyi.jpg",
    subtitle: "Majestic mountain forest with alpine flora",
  },
  {
    name: "Mt. Elgon Forest",
    image: "/images/forests/mtelgon.jpeg",
    subtitle: "Caves and cliffs in a misty forest",
  },
  {
    name: "Nairobi Arboretum",
    image: "/images/forests/mtelgon.jpeg",
    subtitle: "Botanical haven in the city center",
  },
];

const slugify = (str) =>
  str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

const NuseryCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const cardRefs = useRef([]);
  const router = useRouter();

  const calculateTransformOrigin = (index) => {
    const card = cardRefs.current[index];
    if (!card) return 'center center';

    const rect = card.getBoundingClientRect();
    const container = card.parentElement.parentElement;
    const containerRect = container.getBoundingClientRect();

    const x = ((rect.left + rect.width / 2) - containerRect.left) / containerRect.width * 100;
    const y = ((rect.top + rect.height / 2) - containerRect.top) / containerRect.height * 100;

    return `${x}% ${y}%`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsZooming(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 4) % forests.length);
        setIsZooming(false);
      }, 1000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const visibleForests = forests.slice(currentIndex, currentIndex + 4);

  return (
    <>
      <div className="w-full py-4 px-4 sm:px-6 md:px-8 relative z-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-2 text-shadow-lg tracking-wide">
          Explore our Forests
        </h1>
      </div>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] overflow-hidden">
        <Link href={`/forests/${slugify(forests[currentIndex].name)}`}>
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-300 ${
              isZooming ? 'scale-[0.3]' : 'scale-110'
            }`}
            style={{
              backgroundImage: `url(${forests[currentIndex].image})`,
              transformOrigin: calculateTransformOrigin(currentIndex),
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-24 sm:p-32 md:p-32 lg:p-28 z-10">
              <div className="text-left max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight drop-shadow-md">
                  {forests[currentIndex].name}
                </h3>
                <p className="text-white text-sm sm:text-base md:text-lg mt-1 md:mt-2 drop-shadow-md">
                  {forests[currentIndex].subtitle}
                </p>
                <button
                  onClick={() => router.push(`/forests/${slugify(forests[currentIndex].name)}`)}
                  className="mt-3 sm:mt-4 bg-green-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-full hover:bg-green-700 transition-colors duration-300"
                >
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </Link>

        <div className="absolute bottom-4 right-4 flex space-x-4 overflow-x-auto max-w-[90%] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl p-4 z-20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          {visibleForests.map((forest, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[currentIndex + index] = el)}
              className="cursor-pointer w-32 sm:w-36 md:w-36 lg:w-64 h-32 sm:h-48 md:h-48 lg:h-64 rounded-lg overflow-hidden shadow-md transition-all duration-300 relative"
              onClick={() => {
                setIsZooming(true);
                setTimeout(() => {
                  setCurrentIndex(currentIndex + index);
                  setIsZooming(false);
                }, 1000);
              }}
            >
              <img
                src={forest.image}
                alt={forest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm sm:text-base md:text-lg font-semibold p-2 text-center">
                {forest.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NuseryCardSlider;