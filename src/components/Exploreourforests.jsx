'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const forests = [
  {
    name: 'Karura Forest',
    image: '/images/forests/karura.jpg',
    subtitle: 'Urban oasis with trails and waterfalls',
    href: '/forests/karura-forest',
  },
  {
    name: 'Menengai Forest',
    image: '/images/forests/Menengai-Forest.jpg',
    subtitle: 'Volcanic crater with lush greenery',
    href: '/forests/menengai-forest',
  },
  {
    name: 'Mt. Kenya Forest',
    image: '/images/forests/mt.kenya.jpg',
    subtitle: 'Majestic mountain forest with alpine flora',
    href: '/forests/mt-kenya-forest',
  },
  {
    name: 'Ngare Ndare Forest',
    image: '/images/forests/ngare.png',
    subtitle: 'Canopy walkway and elephant corridor',
    href: '/forests/ngare-ndare-forest',
  },
  {
    name: 'Eburu Forest',
    image: '/images/forests/eburu.jpg',
    subtitle: 'Canopy walkway and elephant corridor',
    href: '/forests/eburu-forest',
  },
  {
    name: 'Kakamega Forest',
    image: '/images/forests/kakamega.jpg',
    subtitle: 'Biodiverse rainforest with unique wildlife',
    href: '/forests/kakamega-forest',
  },
  {
    name: 'Castle Forest',
    image: '/images/forests/castle.jpeg',
    subtitle: 'Canopy walkway and elephant corridor',
    href: '/forests/castle-forest',
  },
  {
    name: 'Michuki Memorial Conservation Forest',
    image: '/images/forests/michuki.jpg',
    subtitle: 'Canopy walkway and elephant corridor',
    href: '/forests/michuki-memorial-conservation',
  },
  {
    name: 'Arabuko Sokoke',
    image: '/images/forests/arabuko.jpeg',
    subtitle: 'Coastal forest with rare birds',
    href: '/forests/arabuko-sokoke-forest',
  },
  {
    name: 'Ngong Hills Forest',
    image: '/images/forests/ngong.jpeg',
    subtitle: 'Scenic hills with stunning city views',
    href: '/forests/ngong-forest',
  },
  {
    name: 'Nairobi Arboretum',
    image: '/images/forests/arboretum.jpg',
    subtitle: 'Botanical haven in the city center',
    href: '/forests/arboretum-forest',
  },
  {
    name: 'Hombe Forest',
    image: '/images/forests/hombe.jpg',
    subtitle: 'Serene retreat in lush nature',
    href: '/forests/hombe-forest-guesthouse',
  },
];

const ForestCardGrid = () => {
  const [visibleCount, setVisibleCount] = useState(8); // Show 8 cards (2 rows of 4)
  const groupSize = 8; // 2 rows x 4 columns
  const totalForests = forests.length;
  const hasMore = visibleCount < totalForests;
  const canLoadLess = visibleCount > 8; // Show Load Less only if more than 8 cards are visible

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + groupSize, totalForests));
  };

  const handleLoadLess = () => {
    setVisibleCount(8); // Reset to initial 8 cards
  };

  const currentForests = forests.slice(0, visibleCount);

  const cardVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative max-h-screen bg-[#0f5a28] py-14 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        }}
      />

      <div className="relative max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Discover Kenya’s Forests
          </h1>
        </motion.div>

        {/* 2x4 Grid */}
        <AnimatePresence>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
            {currentForests.map((forest, index) => (
              <Link href={forest.href} key={forest.name}>
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="relative h-64 rounded-lg overflow-hidden shadow-xl bg-white"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <Image
                    src={forest.image}
                    alt={forest.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h2 className="text-white text-lg font-bold">{forest.name}</h2>
                    <p className="text-white/90 text-sm">{forest.subtitle}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </AnimatePresence>

        {/* Load More and Load Less Buttons */}
        {(hasMore || canLoadLess) && (
          <div className="flex justify-center mt-8 space-x-4">
            {hasMore && (
              <motion.button
                onClick={handleLoadMore}
                className="bg-white hover:bg-green-700 text-green-600 font-semibold py-4 px-8 rounded-lg shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More
              </motion.button>
            )}
            {canLoadLess && (
              <motion.button
                onClick={handleLoadLess}
                className="bg-white hover:bg-red-700 text-red-600 font-semibold py-4 px-8 rounded-lg shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Load Less
              </motion.button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForestCardGrid;