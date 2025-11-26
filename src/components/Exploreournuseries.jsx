'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Forests array (same as previous)
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
    subtitle: 'Canopy walkway and elephant corridor',
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
    subtitle: 'Canopy walkway and elephant corridor',
    href: '/forests/castle-forest',
    location: 'Central Highlands',
    category: 'Adventure',
  },
  {
    name: 'Michuki Memorial Conservation Forest',
    image: '/images/forests/michuki.jpg',
    subtitle: 'Canopy walkway and elephant corridor',
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

const ForestCardGrid = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative bg-white py-14 px-4 sm:px-6 lg:px-8">
      {/* Background Image
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
        style={{
          backgroundImage:
            "url('/images/pattern.svg')",
        }}
      />  */}

      <div className="relative max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray tracking-tight">
            Discover Kenya’s Forests
          </h1>
        </motion.div>

        {/* Scrollable Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 py-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {forests.map((forest) => (
              <Link href={forest.href} key={forest.name}>
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  className="relative flex flex-col min-w-[300px] max-w-[300px] min-h-[450px] rounded-[15px] overflow-hidden shadow-xl bg-cover bg-center cursor-pointer snap-center"
                  style={{ backgroundImage: `url(${forest.image})` }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/50 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative flex flex-col justify-end p-6 flex-grow">
                    <h2 className="text-white text-2xl font-bold font-['Poppins'] text-center transition-all duration-500 hover:mb-5">
                      {forest.name}
                    </h2>
                    <ul className="flex justify-center gap-4 mt-4 text-white text-sm font-['Poppins'] font-normal text-shadow">
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <circle cx="18" cy="18" r="18" fill="black" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.375 13.1992C17.3566 13.1992 16.5312 14.0246 16.5312 15.043C16.5312 16.0613 17.3566 16.8867 18.375 16.8867C19.3934 16.8867 20.2188 16.0613 20.2188 15.043C20.2188 14.0246 19.3934 13.1992 18.375 13.1992ZM18.375 18.1159C16.6781 18.1159 15.3021 16.7404 15.3021 15.043C15.3021 13.3455 16.6781 11.9701 18.375 11.9701C20.0719 11.9701 21.4479 13.3455 21.4479 15.043C21.4479 16.7404 20.0719 18.1159 18.375 18.1159ZM18.375 7.66797C14.3022 7.66797 11 10.9701 11 15.043C11 18.1269 17.1489 27.3414 18.375 27.3346C19.582 27.3414 25.75 18.0852 25.75 15.043C25.75 10.9701 22.4478 7.66797 18.375 7.66797Z"
                            fill="white"
                          />
                        </svg>
                        {forest.location}
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <circle cx="18" cy="18" r="18" fill="black" />
                          <g clipPath="url(#clip0_6335_189402)">
                            <path
                              d="M16.5388 11.6086H15.2306V10.9562C15.2306 9.87996 16.1128 9 17.1918 9H19.8071C20.8861 9 21.7683 9.87996 21.7683 10.9562V11.6086H20.4602V10.9562C20.4602 10.5971 20.1661 10.3038 19.8061 10.3038H17.1908C16.8308 10.3038 16.5367 10.5971 16.5367 10.9562V11.6086H16.5388ZM10 13.5647V22.6952C10 23.4123 10.5882 24 11.3082 24H13.2694V12.261H11.3082C10.5892 12.261 10 12.8476 10 13.5658V13.5647ZM21.7694 12.261H23.0776V24H13.9235V12.261H21.7694ZM18.9249 15.9457L16.6361 13.6628C16.5712 13.5981 16.4927 13.5647 16.4006 13.5647H14.903C14.7199 13.5647 14.5765 13.7077 14.5765 13.8904V15.3841C14.5765 15.4749 14.609 15.5532 14.6749 15.619L16.9637 17.9019C17.0882 18.0261 17.2975 18.0261 17.421 17.9019L18.9249 16.4019C19.0494 16.2777 19.0494 16.0689 18.9249 15.9457ZM25.6929 12.261H23.7317V24H25.6929C26.4118 24 27.001 23.4134 27.001 22.6952V13.5647C27.001 12.8476 26.4129 12.2599 25.6929 12.2599V12.261ZM15.8847 14.38C15.6168 14.38 15.3939 14.6013 15.3939 14.8695C15.3939 15.1378 15.6157 15.3591 15.8847 15.3591C16.1537 15.3591 16.3755 15.1378 16.3755 14.8695C16.3755 14.6013 16.1537 14.38 15.8847 14.38Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_6335_189402">
                              <rect
                                width="17"
                                height="15"
                                fill="white"
                                transform="translate(10 9)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        {forest.category}
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-green-700 text-green-600 font-semibold p-3 rounded-full shadow-lg"
            aria-label="Scroll Left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-green-700 text-green-600 font-semibold p-3 rounded-full shadow-lg"
            aria-label="Scroll Right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        .text-shadow {
          text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        }
        @media (max-width: 767px) {
          .min-h-[450px] {
            min-height: 400px;
          }
          .min-w-[300px] {
            min-width: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default ForestCardGrid;