'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
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
    href: '/forests/ngong-forest',
  },
  {
    name: 'Karura Forest',
    image: '/images/forests/karura.jpg',
    subtitle: 'Urban oasis with trails and waterfalls',
    href: '/forests/karura-forest',
  },
  {
    name: 'Kakamega Forest',
    image: '/images/forests/kakamega.jpg',
    href: '/forests/kakamega-forest',
  },
  {
    name: 'Hombe Forest',
    image: '/images/forests/hombe.jpg',
    href: '/forests/hombe-forest-guesthouse',
  },
  {
    name: 'Arabuko Sokoke',
    image: '/images/forests/arabuko.jpeg',
    href: '/forests/arabuko-sokoke-forest',
  },
  {
    name: 'Menengai Forest',
    image: '/images/forests/menengai.jpg',
    href: '/forests/menengai-forest',
  },
  {
    name: 'Mt. Kenya Forest',
    image: '/images/forests/mt.kenya.jpg',
    href: '/forests/mt-kenya-forest',
  },
  {
    name: 'Ngare Ndare',
    image: '/images/forests/ngare.png',
    href: '/forests/ngare-ndare-forest',
  },
  {
    name: 'Ngong Hills Forest',
    image: '/images/forests/ngong.jpeg',
    href: '/forests/ngong-forest',
  },
  {
    name: 'Nairobi Arboretum',
    image: '/images/forests/arboretum.jpg',
    href: '/forests/arboretum-forest',
  },
  {
    name: 'Ndaragwa Nature Trail',
    image: '/images/forests/ndaragwa.webp',
    href: '/forests/ndaragwa-nature-trail',
  },
  {
    name: 'Eburu Forest',
    image: '/images/forests/eburu.jpg',
    href: '/forests/eburu-forest',
  },
  {
    name: 'Castle Forest',
    image: '/images/forests/castle.jpeg',
    href: '/forests/castle-forest',
  },
  {
    name: 'Michuki Memorial Conservation Forest',
    image: '/images/forests/michuki.jpg',
    href: '/forests/michuki-memorial-conservation',
  },

];

const MenengaiForestPage = () => {
  const [fontSize, setFontSize] = useState(16);
  const [activeTab, setActiveTab] = useState('forest-activities');
  const [showDrawer, setShowDrawer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: 'forest-activities', label: 'Activities' },
    { id: 'how-to-get-there', label: 'Getting There' },
    { id: 'park-entry-fee', label: 'Fees' },
    { id: 'key-features', label: 'Features' },
    { id: 'attractions', label: 'Attractions' },
    { id: 'contact-us', label: 'Contact' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const tabContentVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
  };

  const galleryImages = [
    {
      src: '/images/forests/menengai.jpg',
      alt: 'Lush green Menengai Forest',
      caption: 'Lush green Menengai Forest',
      width: 300,
      height: 225,
    },
    {
      src: '/images/forests/menengai.jpg',
      alt: 'Menengai Crater View',
      caption: 'Menengai Crater View',
      width: 300,
      height: 225,
    },
    {
      src: '/images/forests/menengai.jpg',
      alt: 'Hiking Trails',
      caption: 'Hiking Trails',
      width: 300,
      height: 225,
    },
  ];

  return (
    <div>
      <MainNavBar />
      {/* Hero */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://www.hikingadventures.net/wp-content/uploads/2020/11/Menengai-Crater-2-2048x1536.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-opacity-60" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1
            className="font-['Peugeot',Helvetica,sans-serif] font-bold text-white text-[2.2rem] sm:text-[3rem] leading-[1.3] tracking-[0.5px] capitalize"
            style={{ fontSize: `${fontSize * 2}px` }}
          >
            Menengai Forest
          </h1>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-white leading-[1.8] text-[1rem] mt-4"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            Explore the majestic Menengai Caldera and its vibrant ecosystem in the Great Rift Valley.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center p-4 sm:p-6 md:p-8 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <div
          className="absolute inset-0 bg-no-repeat opacity-5 z-0"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>

        {/* Tabs Navigation */}
        <div className="w-full max-w-5xl mx-auto mb-6 z-10">
          <div className="flex overflow-x-auto whitespace-nowrap border-b border-green-200 scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-transparent">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-2 text-sm sm:text-base font-semibold transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'text-green-600 border-b-4 border-green-600'
                    : 'text-white hover:text-green-400'
                }`}
                aria-label={`View ${tab.label}`}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={cardVariants}
          className="bg-white/95 p-6 sm:p-8 md:p-10 max-w-5xl w-full relative z-10 border border-white/30 squared-lg shadow-lg"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabContentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {activeTab === 'forest-activities' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Forest Activities
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      'Educational tours',
                      'Nature walking',
                      'Bird watching',
                      'Butterfly watching',
                      'Hiking',
                      'Picnicking',
                      'Camping',
                      'Rock climbing',
                      'Cycling',
                      'Horse riding',
                      'Jogging',
                    ].map((activity, i) => (
                      <li
                        key={i}
                        className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 squared-md"
                        style={{ fontSize: `${fontSize * 0.85}px` }}
                      >
                        <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                          {activity}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative h-64 md:h-96 squared-lg overflow-hidden mt-8">
                    <Image
                      src="/images/forests/menengai.jpg"
                      alt="Hiking trails in Menengai Forest"
                      width={900}
                      height={600}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </section>
              )}
              {activeTab === 'how-to-get-there' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Getting There
                  </h2>
                  <div className="bg-green-100 p-6 squared-lg shadow-md mb-6">
                    <h3
                      className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-2"
                      style={{ fontSize: `${fontSize * 1.1}px` }}
                    >
                      Getting There
                    </h3>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      Menengai Caldera is located in Nakuru town, 160 km west of Nairobi. From Nakuru, take the Nairobi road, turn left after the railway bridge, right after 300 meters onto Milimani Road, then left after 700 meters onto Menengai Road. The main gate is 1.2 km from this turn.
                    </p>
                    <h3
                      className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-2"
                      style={{ fontSize: `${fontSize * 1.1}px` }}
                    >
                      Getting Around
                    </h3>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      The forest features driving tracks and walking trails.
                    </p>
                    <h3
                      className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-2"
                      style={{ fontSize: `${fontSize * 1.1}px` }}
                    >
                      Guides
                    </h3>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      Experienced guides are available for a fee at the main gate.
                    </p>
                  </div>
                  <div className="relative h-64 squared-lg overflow-hidden mt-6 bg-gray-200">
                    <div className="flex items-center justify-center h-full">
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] text-gray-500"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        Map of Menengai Forest location
                      </p>
                    </div>
                  </div>
                </section>
              )}
              {activeTab === 'park-entry-fee' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Park Entry Fees
                  </h2>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Forest conservation fees are charged at the entry point. Contact the Forest Manager for current rates at{' '}
                    <a
                      href="mailto:zmnakuru@kenyaforestservice.org"
                      className="text-[#0f5a28] font-semibold hover:underline"
                    >
                      zmnakuru@kenyaforestservice.org
                    </a>
                    .
                  </p>
                </section>
              )}
              {activeTab === 'key-features' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Key Features
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      'One of the world’s largest calderas',
                      'Geothermal energy production site',
                      'Active fumaroles',
                      'Geologically significant caves',
                      'Panoramic viewpoint',
                      'Curio shops and campsites',
                      'Visiting hours: 6:00 AM to 6:00 PM',
                      'Wear comfortable shoes and bring binoculars',
                      'No single-use plastic bottles allowed',
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 squared-md"
                        style={{ fontSize: `${fontSize * 0.85}px` }}
                      >
                        <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative h-64 md:h-96 squared-lg overflow-hidden mt-8">
                    <Image
                      src="/images/forests/menengai.jpg"
                      alt="Panoramic viewpoint at Menengai Caldera"
                      width={900}
                      height={600}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </section>
              )}
              {activeTab === 'attractions' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Attractions
                  </h2>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Menengai Caldera, in Menengai Forest Station, is a massive shield volcano in the Great Rift Valley, 10 km north of Nakuru. Spanning 90 km² with a 12 km diameter and nearly 0.5 km depth, it’s one of the largest calderas globally.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-100 p-6 squared-lg shadow-md">
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28]"
                        style={{ fontSize: `${fontSize * 1.1}px` }}
                      >
                        Biodiversity
                      </h3>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        <strong>Flora:</strong> Over 169 flowering plant species and 17 grasses, including Leleshwa, Euphorbia, Acacia, and geothermal grass.
                      </p>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        <strong>Fauna:</strong> Mammals like Rock Hyrax, Olive Baboons, Mountain Reedbucks. Birds include Verreaux’s Eagles, Abyssinian Ground Hornbills, and Red-winged Starlings. Insects feature arachnids, molluscs, and butterflies.
                      </p>
                    </div>
                    <div className="bg-green-100 p-6 squared-lg shadow-md">
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28]"
                        style={{ fontSize: `${fontSize * 1.1}px` }}
                      >
                        Top Attractions
                      </h3>
                      <ul className="list-disc pl-5">
                        {[
                          'Menengai Caldera',
                          'Panoramic viewpoint',
                          'Geothermal energy production',
                          'Geological caves',
                          'Nature trails',
                          'Picnic sites',
                          'Fumaroles',
                          'Curio shops and campsites',
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                            style={{ fontSize: `${fontSize * 0.9}px` }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <h3
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] mt-6 mb-4 text-[1.4rem] sm:text-[1.8rem]"
                    style={{ fontSize: `${fontSize * 1.2}px` }}
                  >
                    Photo Gallery
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((image, i) => (
                      <div
                        key={i}
                        className="relative squared-lg overflow-hidden shadow-md"
                        style={{ height: `${fontSize * 12}px` }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                        <p
                          className="absolute bottom-0 left-0 right-0 text-white p-2 font-['Peugeot',Helvetica,sans-serif] text-[0.8rem]"
                          style={{ fontSize: `${fontSize * 0.8}px` }}
                        >
                          {image.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
              {activeTab === 'contact-us' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Contact Information
                  </h2>
                  <div className="bg-green-100 p-6 squared-lg shadow-md">
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      📍 <span className="font-medium">Address:</span> Menengai Forest Station, P.O. Box 30513 – 00100 Nairobi, Kenya
                    </p>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-2"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      📞 <span className="font-medium">Forest Manager:</span> +254794869229 / +254755839561
                    </p>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-2"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      📧 <span className="font-medium">Email:</span>{' '}
                      <a
                        href="mailto:zmnakuru@kenyaforestservice.org"
                        className="text-[#0f5a28] font-semibold hover:underline"
                      >
                        zmnakuru@kenyaforestservice.org
                      </a>
                      ,{' '}
                      <a
                        href="mailto:info@kenyaforestservice.org"
                        className="text-[#0f5a28] font-semibold hover:underline"
                      >
                        info@kenyaforestservice.org
                      </a>
                      ,{' '}
                      <a
                        href="mailto:ecotourism@kenyaforestservice.org"
                        className="text-[#0f5a28] font-semibold hover:underline"
                      >
                        ecotourism@kenyaforestservice.org
                      </a>
                    </p>
                  </div>
                </section>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Floating Forests Button */}
        <button
          onClick={() => setShowDrawer(true)}
          className="fixed top-[35%] right-4 z-50 bg-[#1a3c34] hover:bg-green-800 text-white p-3 squared-full shadow-lg transition"
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
                <h2
                  className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-xl"
                  style={{ fontSize: `${fontSize * 1.2}px` }}
                >
                  Discover Other Forests
                </h2>
                <button
                  onClick={() => setShowDrawer(false)}
                  className="text-[#0f5a28] hover:text-green-900"
                >
                  <AiOutlineClose className="text-2xl" />
                </button>
              </div>

              <div className="space-y-4">
                {forestList.map((forest) => (
                  <Link href={forest.href} key={forest.name} className="block group">
                    <div className="relative overflow-hidden squared-xl shadow-lg group-hover:scale-[1.01] transition">
                      <Image
                        src={forest.image}
                        alt={forest.name}
                        width={400}
                        height={160}
                        className="w-full h-40 object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 group-hover:bg-opacity-50 transition" />
                      <div
                        className="absolute bottom-0 p-4 text-white font-['Peugeot',Helvetica,sans-serif] font-semibold"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        {forest.name}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Font Size Controls */}
        <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-20">
          <button
            onClick={() => setFontSize((prev) => Math.min(prev + 1, 20))}
            className="bg-[#1a3c34] p-2 squared-full hover:bg-green-800 transition-colors duration-300"
            aria-label="Increase font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </button>
          <button
            onClick={() => setFontSize((prev) => Math.max(prev - 1, 12))}
            className="bg-[#1a3c34] p-2 squared-full hover:bg-green-800 transition-colors duration-300"
            aria-label="Decrease font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </button>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default MenengaiForestPage;