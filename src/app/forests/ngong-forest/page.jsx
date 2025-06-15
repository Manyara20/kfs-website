'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io';
import { FaTree } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Link from 'next/link';

const forestList = [
  {
    name: 'Kakamega Forest',
    image: '/images/forests/kakamega.jpg',
    href: '/forests/kakamega',
  },
  {
    name: 'Karura Forest',
    image: '/images/forests/karura.jpg',
    href: '/forests/karura',
  },
  {
    name: 'Hombe Forest',
    image: '/images/forests/hombe.jpg',
    href: '/forests/hombe',
  },
  {
    name: 'Arabuko Sokoke',
    image: '/images/forests/arabuko.jpg',
    href: '/forests/arabuko',
  },
  {
    name: 'Menengai Forest',
    image: '/images/forests/menengai.jpg',
    href: '/forests/menengai',
  },
  {
    name: 'Mt. Kenya Forest',
    image: '/images/forests/mtkenya.jpg',
    href: '/forests/mtkenya',
  },
  {
    name: 'Ngare Ndare',
    image: '/images/forests/ngare.jpg',
    href: '/forests/ngare',
  },
  {
    name: 'Nairobi Arboretum',
    image: '/images/forests/arboretum.jpg',
    href: '/forests/arboretum',
  },
  {
    name: 'Ndaragwa Nature Trail',
    image: '/images/forests/ndaragwa.jpg',
    href: '/forests/ndaragwa',
  },
  {
    name: 'Arabuko Sokoke',
    image: '/images/forests/arabuko.jpg',
    href: '/forests/arabuko',
  },
  {
    name: 'Arabuko Sokoke',
    image: '/images/forests/arabuko.jpg',
    href: '/forests/arabuko',
  },
];

const NgongHillsPage = () => {
  const [fontSize, setFontSize] = useState(16);
  const [activeTab, setActiveTab] = useState('forest-activities');
  const [showDrawer, setShowDrawer] = useState(false);

  const tabs = [
    { id: 'forest-activities', label: 'Activities' },
    { id: 'how-to-get-there', label: 'Getting There' },
    { id: 'park-entry-fee', label: 'Fees' },
    { id: 'key-features', label: 'Features' },
    { id: 'attractions', label: 'Attractions' },
    { id: 'contact-us', label: 'Contact' },
  ];

  const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-[#f7fdf9] text-gray-900 min-h-screen relative overflow-hidden">
      <MainNavBar />

      {/* Hero */}
      <div
        className="relative h-[75vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/forests/Ngong-Hills-Hiking-Trail.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold">Ngong Hills Forest</h1>
          <p className="text-lg mt-4">
            A serene escape above Nairobi with panoramic views, peaceful trails, and unforgettable experiences.
          </p>
        </div>
      </div>

      {/* Floating Forests Button */}
      <button
        onClick={() => setShowDrawer(true)}
        className="fixed top-[35%] right-4 z-50 bg-green-700 hover:bg-green-800 text-white p-3 squared-full shadow-lg transition"
        title="Explore Other Forests"
      >
        <FaTree className="text-xl" />
      </button>

      {/* Side Drawer */}
      <AnimatePresence>
        {showDrawer && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-[300px] sm:w-[400px] h-full bg-white shadow-xl z-50 p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-green-700">Discover Other Forests</h2>
              <button
                onClick={() => setShowDrawer(false)}
                className="text-green-700 hover:text-green-900"
              >
                <AiOutlineClose className="text-2xl" />
              </button>
            </div>

            <div className="space-y-4">
              {forestList.map((forest) => (
                <Link href={forest.href} key={forest.name} className="block group">
                  <div className="relative overflow-hidden squared-xl shadow-lg group-hover:scale-[1.01] transition">
                    <img
                      src={forest.image}
                      alt={forest.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition" />
                    <div className="absolute bottom-0 p-4 text-white font-semibold">
                      {forest.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 squared-full font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-green-700 text-white shadow'
                  : 'bg-white border border-green-600 text-green-700 hover:bg-green-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white/80 backdrop-blur-md shadow-lg p-8 squared-2xl"
              style={{ fontSize: `${fontSize}px` }}
            >
              {activeTab === 'forest-activities' && (
                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-4">Forest Activities</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      'Hiking along scenic ridges',
                      'Picnic and barbecue zones',
                      'Sunset photography spots',
                      'Camping under the stars',
                      'Prayer and meditation',
                      'Team building grounds',
                      'Nature-themed weddings',
                    ].map((activity, i) => (
                      <li
                        key={i}
                        className="bg-green-100 text-green-900 p-4 squared-lg shadow hover:scale-[1.01] transition"
                      >
                        {activity}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {activeTab === 'how-to-get-there' && (
                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-4">How to Get There</h2>
                  <p className="mb-4">
                    Ngong Hills is 25km southwest of Nairobi and easily reachable via public or private means:
                  </p>
                  <ul className="space-y-2">
                    <li>🚐 Matatu No. 111 to Ngong Town, then boda boda to gate</li>
                    <li>🚖 Taxi to Ngong Entry: ~Ksh 2,000</li>
                    <li>🚖 Taxi to Corner Baridi Entry: ~Ksh 2,500</li>
                  </ul>
                </section>
              )}
              {activeTab === 'park-entry-fee' && (
                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-4">Park Entry Fee</h2>
                  <p>
                    Entry to the forest is subject to a conservation fee. Kindly contact the forester for current rates.
                  </p>
                </section>
              )}
              {activeTab === 'key-features' && (
                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-4">Key Features</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      '3,077 hectares of forest',
                      'Open 6:00 AM – 6:00 PM',
                      'Great for high-altitude training',
                      'Guided hikes with KFS Rangers',
                      'No single-use plastics allowed',
                      'Breathtaking Rift Valley views',
                      'Wind turbines within the reserve',
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="bg-white border border-green-200 p-4 squared-lg shadow-sm"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {activeTab === 'attractions' && (
                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-4">Attractions</h2>
                  <p className="mb-4">
                    Discover a blend of rich biodiversity, spiritual calm, and stunning valley panoramas.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-green-700">Flora & Fauna</h3>
                      <p className="mb-2">
                        Acacia, cypress, pine, and sandalwood trees thrive here. Wildlife includes buffaloes, dik-diks, and porcupines.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700">Points of Interest</h3>
                      <ul className="list-disc pl-5">
                        <li>Wind turbine installations</li>
                        <li>Sunset viewpoints</li>
                        <li>Ridge-top nature trails</li>
                        <li>Peaceful prayer zones</li>
                      </ul>
                    </div>
                  </div>
                </section>
              )}
              {activeTab === 'contact-us' && (
                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-4">Contact Us</h2>
                  <p>📍 Ngong Hills Forest Station</p>
                  <p>📞 0797 480784 | 0755 838360</p>
                </section>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Font Size Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setFontSize((f) => Math.min(f + 1, 20))}
            className="bg-green-700 text-white p-2 squared-full"
          >
            <IoMdAddCircle className="text-xl" />
          </button>
          <button
            onClick={() => setFontSize((f) => Math.max(f - 1, 12))}
            className="bg-green-700 text-white p-2 squared-full"
          >
            <IoMdRemoveCircle className="text-xl" />
          </button>
        </div>
      </div>

      <FooterBottom />
    </div>
  );
};

export default NgongHillsPage;
