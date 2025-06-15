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
];

const ArabukoSokokeForestPage = () => {
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

  return (
    <div>
      <MainNavBar />
      {/* Hero */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1
            className="font-['Peugeot',Helvetica,sans-serif] font-bold text-white text-[2.2rem] sm:text-[3rem] leading-[1.3] tracking-[0.5px] capitalize"
            style={{ fontSize: `${fontSize * 2}px` }}
          >
            Arabuko-Sokoke Forest
          </h1>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-white leading-[1.8] text-[1rem] mt-4"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            Discover Kenya's largest coastal forest, home to rare wildlife and unique ecosystems.
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
          className="bg-white/95 p-6 sm:p-8 md:p-10 max-w-5xl w-full relative z-10 border border-white/30 rounded-lg shadow-lg"
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
                    Arabuko-Sokoke Forest offers a range of activities to explore its rich biodiversity and scenic landscapes.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      'Forest walks with trained guides',
                      'Forest drives on scenic tracks',
                      'Bird watching for rare species',
                      'Butterfly watching tours',
                      'Camping in designated areas',
                      'Cycling along forest trails',
                      'Picnicking in scenic spots',
                      'Running on marked paths',
                    ].map((activity, i) => (
                      <li
                        key={i}
                        className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 rounded-md"
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
                    Arabuko-Sokoke Forest is located 100km from Mombasa and 18km from Malindi along the Mombasa-Malindi highway.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Public Transport',
                        description: 'Regular buses from Nairobi to Mombasa or Malindi, then taxis or public vehicles to the forest entrance.',
                      },
                      {
                        title: 'Air Travel',
                        description: 'Flights to Mombasa or Malindi, followed by road travel to the forest.',
                      },
                      {
                        title: 'Private Transport',
                        description: 'Driving tracks accessible by 4WD recommended, saloon cars suitable for some areas.',
                      },
                      {
                        title: 'Guided Tours',
                        description: 'Guided walking trails available through ASFGA for an immersive experience.',
                      },
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 rounded-md"
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
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Park Entry Fees
                  </h2>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Entry fees are charged by Kenya Forest Service (KFS) for conservation. For current rates, contact the Forest Manager via details in the Contact section.
                  </p>
                  <div className="bg-green-100 p-4 rounded-lg shadow-md">
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      <strong>Note:</strong> Fees may vary based on residency status and group size. Always confirm with KFS for the latest pricing.
                    </p>
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
                    Arabuko-Sokoke Forest is renowned for its unique ecological and scenic attractions.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      'Over 30km of driving tracks',
                      'Well-marked walking trails',
                      'Seasonal pools with birds and amphibians',
                      'Two tree platforms for aerial views',
                      'Nyari viewpoint with coastal panorama',
                      'Mida Creek with six mangrove species',
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 rounded-md"
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
              {activeTab === 'attractions' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Attractions
                  </h2>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Arabuko-Sokoke Forest, the largest coastal forest in East Africa, is a biodiversity hotspot managed by Kenya Forest Service (KFS).
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-2"
                        style={{ fontSize: `${fontSize * 1.1}px` }}
                      >
                        Wildlife
                      </h3>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        <strong>Mammals:</strong> African Elephant, Buffalo, Golden-rumped Elephant-shrew, Ader’s Duiker, and 36 other mammal species.
                      </p>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        <strong>Birds:</strong> Over 270 species, including the endemic Clarke’s Weaver, Sokoke Scops Owl, and East Coast Akalat.
                      </p>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        <strong>Other Fauna:</strong> Rare amphibians and reptiles, including the Sokoke Bushy-tailed Mongoose.
                      </p>
                    </div>
                    <div>
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-2"
                        style={{ fontSize: `${fontSize * 1.1}px` }}
                      >
                        Flora
                      </h3>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        <strong>Forest Types:</strong> Cynometra-dominated forests and thickets, Brachystegia (Miombo) woodlands.
                      </p>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        <strong>Mixed Forests:</strong> Featuring Hymenaea verrucosa and other coastal species.
                      </p>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        <strong>Mangroves:</strong> Mida Creek hosts six mangrove species, vital for coastal ecosystems.
                      </p>
                    </div>
                  </div>
                  <h3
                    className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mt-6 mb-4"
                    style={{ fontSize: `${fontSize * 1.2}px` }}
                  >
                    Photo Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        src: '/images/Eco-tourism/Arabuko-SokokeForest/african-wood-owl-in-arabuko-sokoke-photo-by-a-rocha-kenya-300x200.jpg',
                        alt: 'African Wood Owl in Arabuko-Sokoke',
                        caption: 'African Wood Owl in Arabuko-Sokoke (Photo by A Rocha Kenya)',
                        width: 300,
                        height: 200,
                      },
                      {
                        src: '/images/Eco-tourism/Arabuko-SokokeForest/birding-in-arabuko-sokoke-photo-by-a-rocha-kenya-225x300.jpg',
                        alt: 'Birding in Arabuko-Sokoke',
                        caption: 'Birding in Arabuko-Sokoke (Photo by A Rocha Kenya)',
                        width: 225,
                        height: 300,
                      },
                      {
                        src: '/images/Eco-tourism/Arabuko-SokokeForest/giant-brachystegia-tree-in-arabuko-sokoke-300x225.jpg',
                        alt: 'Giant Brachystegia tree in Arabuko-Sokoke',
                        caption: 'Giant Brachystegia tree in Arabuko-Sokoke',
                        width: 300,
                        height: 225,
                      },
                    ].map((image, i) => (
                      <div
                        key={i}
                        className="relative rounded-lg overflow-hidden shadow-md"
                        style={{ height: `${fontSize * 14}px` }}
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
                          className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 font-['Peugeot',Helvetica,sans-serif] text-[0.8rem]"
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
                    Contact Us
                  </h2>
                  <div className="bg-green-100 p-4 rounded-lg shadow-md">
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      📍 Arabuko-Sokoke Forest Reserve, P.O. Box 201 – 80200 Malindi, Kenya
                    </p>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      📞 Mobile: +254 755 838 366 | +254 717 318 134
                    </p>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      📧 Email:{' '}
                      <a
                        href="mailto:zmkilifi@kenyaforestservice.org"
                        className="text-[#0f5a28] font-semibold hover:underline"
                      >
                        zmkilifi@kenyaforestservice.org
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
          className="fixed top-[35%] right-4 z-50 bg-[#1a3c34] hover:bg-green-800 text-white p-3 rounded-full shadow-lg transition"
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
                    <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:scale-[1.01] transition">
                      <Image
                        src={forest.image}
                        alt={forest.name}
                        width={400}
                        height={160}
                        className="w-full h-40 object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition" />
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
            className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800 transition-colors duration-300"
            aria-label="Increase font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </button>
          <button
            onClick={() => setFontSize((prev) => Math.max(prev - 1, 12))}
            className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800 transition-colors duration-300"
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

export default ArabukoSokokeForestPage;