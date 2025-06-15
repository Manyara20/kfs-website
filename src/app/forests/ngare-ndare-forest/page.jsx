'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io';
import { FaTree } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Link from 'next/link';
import Image from 'next/image';

const forestList = [
  {
    name: 'Ngong Hills Forest',
    image: '/images/forests/Ngong-Hills-Hiking-Trail.jpg',
    href: '/forests/ngong',
  },
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
    name: 'Nairobi Arboretum',
    image: '/images/forests/arboretum.jpg',
    href: '/forests/arboretum',
  },
  {
    name: 'Ndaragwa Nature Trail',
    image: '/images/forests/ndaragwa.jpg',
    href: '/forests/ndaragwa',
  },
];

const NgareNdareForestPage = () => {
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
          backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold">Ngare Ndare Forest</h1>
          <p className="text-lg mt-4">
            A hidden gem on Mount Kenya’s foothills, rich in biodiversity and adventure.
          </p>
        </div>
      </div>

      {/* Floating Forests Button */}
      <button
        onClick={() => setShowDrawer(true)}
        className="fixed top-[35%] right-4 z-50 bg-green-700 hover:bg-green-800 text-white p-3 rounded-full shadow-lg transition"
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
                  <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:scale-[1.01] transition">
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
              className={`px-4 py-2 rounded-full font-semibold transition ${
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
              className="bg-white/80 backdrop-blur-md shadow-lg p-8 rounded-2xl"
              style={{ fontSize: `${fontSize}px` }}
            >
              {activeTab === 'forest-activities' && (
                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-4">Forest Activities</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      'Canopy walkway adventure',
                      'Guided nature walks',
                      'Bird watching',
                      'Treetop camping',
                      'Swimming in blue pools',
                      'Wildlife tracking',
                    ].map((activity, i) => (
                      <li
                        key={i}
                        className="bg-green-100 text-green-900 p-4 rounded-lg shadow hover:scale-[1.01] transition"
                      >
                        {activity}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {activeTab === 'how-to-get-there' && (
                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-4">Getting There</h2>
                  <p className="mb-4">
                    Ngare Ndare Forest is located on the northern foothills of Mount Kenya, accessible via the Nanyuki–Meru road. It’s approximately 40 km from Nanyuki and 250 km from Nairobi. Private vehicles or public transport (matatus) from Nanyuki can reach the forest. For precise directions, contact the Ngare Ndare Forest Trust.
                  </p>
                </section>
              )}
              {activeTab === 'park-entry-fee' && (
                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-4">Entry & Activity Fees</h2>
                  <ul className="space-y-2">
                    <li><strong>Residents/Citizens:</strong> KES 2,000 (day trip), KES 3,000 (camping/night)</li>
                    <li><strong>Non-Residents:</strong> KES 4,000 (day trip), KES 5,000 (camping/night)</li>
                    <li><strong>Children (10–15 years):</strong> Half price; under 10: Free</li>
                    <li><strong>Primary Schools:</strong> KES 300 per pupil</li>
                    <li><strong>Secondary Schools:</strong> KES 500 per student</li>
                    <li><strong>Local Groups (10+ people):</strong> KES 1,500 (day), KES 2,000 (camping/night)</li>
                    <li><strong>Vehicle Fee:</strong> KES 500 (14-seater or below), KES 1,000 (above 14-seater)</li>
                  </ul>
                </section>
              )}
              {activeTab === 'key-features' && (
                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-4">Key Features</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      '450-metre canopy walkway',
                      'UNESCO World Heritage status',
                      'Vital elephant corridor',
                      'Over 200 bird species',
                      'Treetop camping platforms',
                      'Conservation by Ngare Ndare Forest Trust',
                      'Community support programs',
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="bg-white border border-green-200 p-4 rounded-lg shadow-sm"
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
                    Ngare Ndare Forest, spanning 13,689 acres, is a protected indigenous forest on Mount Kenya’s northern foothills. Fed by the Ngare Ndare River, it serves as a critical wildlife corridor, especially for elephants, connecting Mount Kenya Forest Reserve to Lewa Wildlife Conservancy via a tunnel passage.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-green-700">Wildlife and Biodiversity</h3>
                      <p>
                        Home to endangered species, colobus monkeys, over 200 bird species, and large mammals like elephants. Managed by the Ngare Ndare Forest Trust, which focuses on conservation through tree planting and fencing.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700">Top Attractions</h3>
                      <ul className="list-disc pl-5">
                        <li>450-metre canopy walkway</li>
                        <li>Blue pools and waterfalls</li>
                        <li>Treetop camping platforms</li>
                        <li>Guided nature walks</li>
                        <li>Wildlife corridor tunnel</li>
                      </ul>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mt-6 mb-4">Photo Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        src: '/images/Eco-tourism/NgareNdareForest/canopy-walkway.jpg',
                        alt: 'Ngare Ndare canopy walkway',
                        caption: 'Canopy Walkway',
                        width: 300,
                        height: 225,
                      },
                      {
                        src: '/images/Eco-tourism/NgareNdareForest/blue-pools.jpg',
                        alt: 'Blue pools in Ngare Ndare Forest',
                        caption: 'Blue Pools',
                        width: 300,
                        height: 225,
                      },
                      {
                        src: '/images/Eco-tourism/NgareNdareForest/elephant-corridor.jpg',
                        alt: 'Elephant corridor tunnel',
                        caption: 'Elephant Corridor',
                        width: 300,
                        height: 225,
                      },
                    ].map((image, i) => (
                      <div key={i} className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                        <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                          {image.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
              {activeTab === 'contact-us' && (
                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-4">Contact Us</h2>
                  <p>📍 Ngare Ndare Forest Trust, P.O. Box 149, Nanyuki, Kenya</p>
                  <p>📞 Tel: +254 724 999986</p>
                  <p>
                    📧 Email:{' '}
                    <a href="mailto:info@ngarendare.org" className="text-blue-600 underline">
                      info@ngarendare.org
                    </a>
                  </p>
                  <p>
                    🌐 Website:{' '}
                    <a href="http://www.ngarendare.org" className="text-blue-600 underline">
                      www.ngarendare.org
                    </a>
                  </p>
                </section>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Font Size Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setFontSize((f) => Math.min(f + 1, 20))}
            className="bg-green-700 text-white p-2 rounded-full"
          >
            <IoMdAddCircle className="text-xl" />
          </button>
          <button
            onClick={() => setFontSize((f) => Math.max(f - 1, 12))}
            className="bg-green-700 text-white p-2 rounded-full"
          >
            <IoMdRemoveCircle className="text-xl" />
          </button>
        </div>
      </div>

      <FooterBottom />
    </div>
  );
};

export default NgareNdareForestPage;