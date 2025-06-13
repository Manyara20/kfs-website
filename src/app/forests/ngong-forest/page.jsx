'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

const NgongHillsPage = () => {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('forest-activities');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFontSizeChange = (increase) => {
    setFontSize((prev) => {
      const newSize = increase ? prev + 1 : prev - 1;
      return Math.max(12, Math.min(20, newSize));
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const tabs = [
    { id: 'forest-activities', label: 'Forest Activities' },
    { id: 'how-to-get-there', label: 'How to Get There' },
    { id: 'park-entry-fee', label: 'Park Entry Fee' },
    { id: 'key-features', label: 'Key Features' },
    { id: 'attractions', label: 'Attractions' },
    { id: 'contact-us', label: 'Contact Us' },
  ];

  return (
    <div>
      <MainNavBar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center" 
           style={{ backgroundImage: `url('/images/Eco-tourism/NgongHillsForest/Ngong-Hills-Forest-Reserve-Ngong-Kenya-TortoisePathcom-6-jpeg.webp')` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="   text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Ngong Hills Forest
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="   text-lg md:text-xl text-white/90 max-w-2xl"
          >
            Discover the scenic beauty and biodiversity of Ngong Hills, just 25km from Nairobi
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" 
             style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }}></div>
      </div>

      {/* Tab Section */}
      <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2    font-medium text-sm`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <motion.div
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="bg-white p-8"
          >
            {/* Forest Activities Tab */}
            {activeTab === 'forest-activities' && (
              <section>
                <h2 className="   font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Forest Activities
                </h2>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                  {[
                    'Hiking',
                    'Picnics',
                    'Camping',
                    'Viewing',
                    'Religious activities',
                    'Team building',
                    'Weddings',
                  ].map((activity, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                      style={{ fontSize: `${fontSize * 0.85}px` }}
                    >
                      <span className="   font-medium text-white text-[0.85rem] leading-[1.6] capitalize">
                        {activity}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* How to Get There Tab */}
            {activeTab === 'how-to-get-there' && (
              <section>
                <h2 className="   font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  How to Get There
                </h2>
                <h3 className="   font-semibold text-[#0f5a28] mb-2" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Public Transport
                </h3>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  To Ngong Entry Point: Board matatu no. 111 from Railways Matatu Terminus and alight at Ngong town (about 2km to entry point). From Ngong town, you can walk (2km) or take a bodaboda (Ksh 100).
                </p>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  To Corner Baridi Entry Point: Board matatu no. 112 from Railways Matatu Terminus and alight at Kiserian town (about 2km to entry point). From Kiserian town, you can walk (2km) or take a bodaboda (Ksh 100).
                </p>
                <h3 className="   font-semibold text-[#0f5a28] mb-2" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Private Transport
                </h3>
                <ul className="space-y-2">
                  {[
                    'Taxi from Nairobi city centre to Ngong entry point: ~Ksh 2,000',
                    'Taxi from Nairobi city centre to Corner Baridi entry point: ~Ksh 2,500',
                    'Taxi from Ngong town to Ngong entry point: ~Ksh 500',
                    'Taxi from Kiserian town to Corner Baridi entry point: ~Ksh 500',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[1px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      <span className="   font-medium text-white text-[0.85rem] leading-[1.6]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Park Entry Fee Tab */}
            {activeTab === 'park-entry-fee' && (
              <section>
                <h2 className="   
font-bold text-[#0f5a28] 
text-2xl mb-4" 
style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Park Entry Fee
                </h2>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Forest conservation fee is charged at the point of entry. For current rates, contact the Forester in Charge at the details provided in the Contact Us section.
                </p>
              </section>
            )}

            {/* Key Features Tab */}
            {activeTab === 'key-features' && (
              <section>
                <h2 className="   font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Key Features
                </h2>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                  {[
                    '3,077.6 hectares of exotic and indigenous trees.',
                    'Visiting hours: 6:00 AM to 6:00 PM.',
                    'Wear comfortable shoes, loose clothing, and carry water.',
                    'Short rains: October-December; Long rains: March-May.',
                    'No single-use plastic bottles allowed.',
                    'Hiking requires KFS Ranger accompaniment for safety.',
                    'Panoramic views of Great Rift Valley and Nairobi.',
                    '30 wind power generation sites.',
                    'High-altitude sports training and religious retreats.',
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                      style={{ fontSize: `${fontSize * 0.85}px` }}
                    >
                      <span className="   font-medium text-white text-[0.85rem] leading-[1.6]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Attractions Tab */}
            {activeTab === 'attractions' && (
              <section>
                <h2 className="   font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Attractions
                </h2>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Ngong Hills Forest is located in the northern tip of Kajiado County, about 25km from Nairobi city. The forest covers an area of 3,077.6 hectares and is managed by the Kenya Forest Service (KFS).
                </p>
                <h3 className="   font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Flora
                </h3>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  The vegetation includes exotic (Pine, Cypress) and indigenous (Sandalwood, Acacia, Croton) trees. Distribution is determined by altitude, soil type, human utilization, grazing, and forest fires.
                </p>
                <h3 className="   font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Fauna
                </h3>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  The forest hosts buffaloes, wild pigs, porcupines, and dik-diks. Animal movement depends on drought, water, and forage availability. Animals are wild and can be dangerous; KFS Ranger accompaniment is required for hikes.
                </p>
                <h3 className="   font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Areas of Special Interest
                </h3>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0 mb-6">
                  {[
                    'Communication Masts: High points for installation.',
                    'Wind Power: 30 wind energy generation sites.',
                    'Tourism: Attraction sites with scenic beauty.',
                    'Sports Training: High altitude training and hiking.',
                    'Religious Retreats: Popular sites for prayers.',
                    'Scenic Views: Great Rift Valley and Nairobi views.',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                      style={{ fontSize: `${fontSize * 0.85}px` }}
                    >
                      <span className="   font-medium text-white text-[0.85rem] leading-[1.6]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <h3 className="   font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Photo Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      src: '/images/Eco-tourism/NgongHillsForest/Power-generating-wind-turbines.jpg',
                      alt: 'Power generating wind turbines',
                      caption: 'Wind Turbines',
                    },
                    {
                      src: '/images/Eco-tourism/NgongHillsForest/Visitors-taking-a-walk-to-the-view-point.jpg',
                      alt: 'Visitors taking a walk to the view point',
                      caption: 'View Point Walk',
                    },
                    {
                      src: '/images/Eco-tourism/NgongHillsForest/One-of-the-view-points.jpg',
                      alt: 'One of the view points',
                      caption: 'Scenic View Point',
                    },
                    {
                      src: '/images/Eco-tourism/NgongHillsForest/Picnic-site-and-grounds-for-hire.jpg',
                      alt: 'Picnic site and grounds for hire',
                      caption: 'Picnic Site',
                    },
                  ].map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={300}
                        height={225}
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

            {/* Contact Us Tab */}
            {activeTab === 'contact-us' && (
              <section>
                <h2 className="   font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Contact Us
                </h2>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  The Forester in Charge
                </p>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Ngong Hills Forest Station
                </p>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Mobile: 0797 480784 or 0755 838360
                </p>
              </section>
            )}
          </motion.div>
        </div>

        <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
          <button
            onClick={() => handleFontSizeChange(true)}
            className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
            aria-label="Increase font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </button>
          <button
            onClick={() => handleFontSizeChange(false)}
            className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
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

export default NgongHillsPage;