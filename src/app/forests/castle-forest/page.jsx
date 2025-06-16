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

// Fallback image for debugging
const FALLBACK_IMAGE = '/images/forests/fallback.jpg';

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

const CastleForestPage = () => {
  const [fontSize, setFontSize] = useState(16);
  const [activeTab, setActiveTab] = useState('forest-activities');
  const [showDrawer, setShowDrawer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: 'forest-activities', label: 'Activities' },
    { id: 'how-to-get-there', label: 'Getting There' },
    { id: 'park-entry-fee', label: 'Fees' },
    { id: 'key-features', label: 'Features' },
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

  const handleImageError = (src) => {
    console.error(`Failed to load image: ${src}`);
    setImageError((prev) => ({ ...prev, [src]: true }));
  };

  return (
    <div>
      <MainNavBar />
      {/* Hero */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1
            className="font-['Peugeot',Helvetica,sans-serif] font-bold text-white text-[2.2rem] sm:text-[3rem] leading-[1.3] tracking-[0.5px] capitalize"
            style={{ fontSize: `${fontSize * 2}px` }}
          >
            Castle Forest
          </h1>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-white leading-[1.8] text-[1rem] mt-4"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            Where the Forest whispers and Mount Kenya watches.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center p-4 sm:p-6 md:p-8 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
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
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Castle Forest offers a variety of activities for visitors to enjoy its natural beauty and biodiversity.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      'Nature Walks & Hiking: Explore lush montane rainforest through guided trails like Kamweti, with scenic waterfalls and wildlife.',
                      'Horseback Riding: Ride through forest trails and tea plantations for a unique perspective.',
                      'Trout Fishing: Fish in clear rivers with opportunities for all skill levels.',
                      'Bird Watching: Spot over 175 bird species unique to this forested environment.',
                      'Swimming: Cool off in the lodge’s infinity pool or natural waterfall pools.',
                      'Camping: Immerse in nature with equipped campsites including toilets and showers.',
                      'Mount Kenya Climbing: Trek the Kamweti Route to Point Lenana over 5-7 days.',
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
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Castle Forest is accessible from Nairobi and nearby towns, offering multiple travel options.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'By Road',
                        description:
                          'From Nairobi (2.5-3 hours): Take Thika Superhighway (A2) to Kenol, then C71 to Kagio, proceed to Kutus, and follow signs to Kimunye. The lodge is 3.5 km from the Kenya Forest Service gate on an all-weather road.',
                      },
                      {
                        title: 'By Air',
                        description:
                          'Fly from Nairobi to Nanyuki Airport (103 km away), then hire a vehicle or arrange lodge transport to Castle Forest.',
                      },
                      {
                        title: 'Public Transport',
                        description:
                          'Take a matatu or bus from Nairobi to Kerugoya or Kutus, then hire a local taxi or boda-boda to the lodge.',
                      },
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 squared-md"
                        style={{ fontSize: `${fontSize * 0.85}px` }}
                      >
                        <h3
                          className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-white mb-1"
                          style={{ fontSize: `${fontSize * 0.95}px` }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="font-['Peugeot',Helvetica,sans-serif] font-normal text-white leading-[1.6] text-[0.85rem]"
                          style={{ fontSize: `${fontSize * 0.85}px` }}
                        >
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {activeTab === 'park-entry-fee' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,san
                    s-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Park Entry Fees
                  </h2>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Entry fees for Castle Forest are as follows. Confirm with Castle Forest Lodge for the latest pricing.
                  </p>
                  <div className="bg-green-100 p-4 squared-lg shadow-md">
                    <table className="w-full text-left">
                      <thead>
                        <tr>
                          <th
                            className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] pb-2"
                            style={{ fontSize: `${fontSize * 0.95}px` }}
                          >
                            Category
                          </th>
                          <th
                            className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] pb-2"
                            style={{ fontSize: `${fontSize * 0.95}px` }}
                          >
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                            style={{ fontSize: `${fontSize * 0.9}px` }}
                          >
                            Citizens / Residents
                          </td>
                          <td
                            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                            style={{ fontSize: `${fontSize * 0.9}px` }}
                          >
                            KSH 2800
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                            style={{ fontSize: `${fontSize * 0.9}px` }}
                          >
                            Non-residents
                          </td>
                          <td
                            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                            style={{ fontSize: `${fontSize * 0.9}px` }}
                          >
                            KSH 3800
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Castle Forest is a breathtaking sanctuary where untamed nature reigns, silence speaks in whispers of wind through ancient trees, and every breath feels like a return to something pure and forgotten.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      'Towering indigenous trees forming a cathedral of green',
                      'Clear mountain streams dancing over rocks',
                      'Sunlight filtering through moss and bamboo',
                      'Crisp, cool air alive with birdsong',
                      'Wildlife including elephants and monkeys',
                      'Misty trails for horseback riding',
                      'Crystalline rivers for trout fishing',
                      'Scenic views of Mount Kenya’s peaks',
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
                </section>
              )}
              {activeTab === 'contact-us' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Contact Us
                  </h2>
                  <div className="bg-green-100 p-4 squared-lg shadow-md">
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      📍 Castle Forest Lodge, Kimunye, Kirinyaga County, Kenya
                    </p>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      📞 Tel: +254 726 206176 (please confirm with lodge)
                    </p>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      <strong>Note:</strong> Contact the lodge directly for additional details or to confirm the phone number.
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
                        src={imageError[forest.image] ? FALLBACK_IMAGE : forest.image}
                        alt={forest.name}
                        width={400}
                        height={160}
                        className="w-full h-40 object-cover"
                        onError={() => handleImageError(forest.image)}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+/btPQAH7QL0fGWrkwAAAABJRU5ErkJggg=="
                      />
                      <div className="absolute inset-0 group-hover:bg-opacity-50 transition" />
                      <div
                        className="absolute bottom-0 p-4 text-white font-['Peugeot',Helvetica,sans-serif] font-semibold"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        {forest.name}
                        {forest.subtitle && (
                          <span className="block text-sm font-normal">{forest.subtitle}</span>
                        )}
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

export default CastleForestPage;