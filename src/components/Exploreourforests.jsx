'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const forests = [
  {
    name: 'Karura Forest',
    image: '/images/forests/karura.jpg',
    subtitle: 'Urban oasis with trails and waterfalls',
    href: '/forests/karura-forest',
    location: 'Nairobi',
    category: 'Nature & Wildlife',
  },
  {
    name: 'Menengai Forest',
    image: '/images/forests/Menengai-Forest.jpg',
    subtitle: 'Volcanic crater with lush greenery',
    href: '/forests/menengai-forest',
    location: 'Nakuru',
    category: 'Nature & Wildlife',
  },
  {
    name: 'Mt. Kenya Forest',
    image: '/images/forests/mt.kenya.jpg',
    subtitle: 'Majestic mountain forest with alpine flora',
    href: '/forests/mt-kenya-forest',
    location: 'Central Highlands',
    category: 'Nature & Wildlife',
  },
  {
    name: 'Ngare Ndare Forest',
    image: '/images/forests/ngare.png',
    subtitle: 'Canopy walkway and elephant corridor',
    href: '/forests/ngare-ndare-forest',
    location: 'Laikipia',
    category: 'Adventure',
  },
  {
    name: 'Eburu Forest',
    image: '/images/forests/eburu.jpg',
    subtitle: 'Serene montane forest reserve',
    href: '/forests/eburu-forest',
    location: 'Nakuru',
    category: 'Nature & Wildlife',
  },
  {
    name: 'Kakamega Forest',
    image: '/images/forests/kakamega.jpg',
    subtitle: 'Biodiverse rainforest with unique wildlife',
    href: '/forests/kakamega-forest',
    location: 'Western Kenya',
    category: 'Nature & Wildlife',
  },
  {
    name: 'Castle Forest',
    image: '/images/forests/castle.jpeg',
    subtitle: 'Hidden highland retreat',
    href: '/forests/castle-forest',
    location: 'Central Highlands',
    category: 'Adventure',
  },
  {
    name: 'Michuki Memorial Forest',
    image: '/images/forests/michuki.jpg',
    subtitle: 'Riverside conservation area',
    href: '/forests/michuki-memorial-conservation',
    location: 'Nairobi',
    category: 'Nature & Wildlife',
  },
  {
    name: 'Arabuko Sokoke',
    image: '/images/forests/arabuko.jpeg',
    subtitle: 'Coastal forest with rare birds',
    href: '/forests/arabuko-sokoke-forest',
    location: 'Coast',
    category: 'Nature & Wildlife',
  },
  {
    name: 'Ngong Hills Forest',
    image: '/images/forests/ngong.jpeg',
    subtitle: 'Scenic hills with stunning city views',
    href: '/forests/ngong-forest',
    location: 'Nairobi',
    category: 'Adventure',
  },
  {
    name: 'Nairobi Arboretum',
    image: '/images/forests/arboretum.jpg',
    subtitle: 'Botanical haven in the city center',
    href: '/forests/arboretum-forest',
    location: 'Nairobi',
    category: 'Nature & Wildlife',
  },
  {
    name: 'Hombe Forest',
    image: '/images/forests/hombe.jpg',
    subtitle: 'Serene retreat in lush nature',
    href: '/forests/hombe-forest-guesthouse',
    location: 'Central Highlands',
    category: 'Nature & Wildlife',
  },
];

// Simple inline SVG icons to avoid inline SVG verbosity
const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
  </svg>
);

const CategoryIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
  </svg>
);

const ForestCardGrid = () => {
  const scrollRef = useRef(null);

  const scrollBy = (direction) => {
    scrollRef.current?.scrollBy({ left: direction * 320, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-kfs-dark text-center mb-12 tracking-tight"
        >
          Discover Kenya's Forests
        </motion.h2>

        {/* Scrollable cards */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar gap-6 py-4 snap-x snap-mandatory"
          >
            {forests.map((forest) => (
              <Link href={forest.href} key={forest.name} className="flex-shrink-0 snap-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.04, transition: { duration: 0.25 } }}
                  className="relative w-[280px] sm:w-[300px] h-[420px] sm:h-[450px] rounded-2xl overflow-hidden shadow-xl bg-cover bg-center cursor-pointer"
                  style={{ backgroundImage: `url(${forest.image})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <h3 className="text-white text-xl font-bold mb-3 text-shadow-sm">
                      {forest.name}
                    </h3>
                    <div className="flex items-center gap-4 text-white/80 text-xs font-medium">
                      <span className="flex items-center gap-1.5">
                        <LocationIcon />
                        {forest.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CategoryIcon />
                        {forest.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white hover:bg-kfs-dark hover:text-white text-kfs-dark p-3 rounded-full shadow-lg transition-all duration-200 z-10"
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white hover:bg-kfs-dark hover:text-white text-kfs-dark p-3 rounded-full shadow-lg transition-all duration-200 z-10"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForestCardGrid;
