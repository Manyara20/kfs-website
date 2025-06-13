'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

const MountKenyaForestPage = () => {
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
           style={{ backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="   text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Mount Kenya Forest
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="   text-lg md:text-xl text-white/90 max-w-2xl"
          >
            A UNESCO World Heritage Site teeming with biodiversity and stunning landscapes
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
                    'Wildlife safaris',
                    'Bird watching',
                    'Trout fishing',
                    'Nature walks',
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
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Mount Kenya Forest Reserve is accessible from several towns, including Nanyuki, Meru, and Embu. The main entry points are via Naro Moru, Chogoria, and Sirimon gates, which are well-connected by road from Nairobi (approximately 175–200 km). Public transport (matatus) and private vehicles can reach these gates, with tarmac and all-weather roads available. For detailed directions, contact the Kenya Forest Service.
                </p>
              </section>
            )}

            {/* Park Entry Fee Tab */}
            {activeTab === 'park-entry-fee' && (
              <section>
                <h2 className="   font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Park Entry Fee
                </h2>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Entry fees for Mount Kenya Forest Reserve vary based on citizenship and age. For current rates, contact the Kenya Forest Service at the details provided in the Contact Us section or visit www.kenyaforestservice.org.
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
                    'Panoramic views of Mount Kenya’s peaks.',
                    'Waterfalls and caves for exploration.',
                    'Salt licks attracting wildlife.',
                    '880 recorded plant species.',
                    'UNESCO World Heritage Site and Important Bird Area.',
                    'Accommodation options like Castle Forest Lodge and Serena Mountain Lodge.',
                    'Upcoming eco-lodges and campsites.',
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
                  Kenya Forest Service (KFS) manages the 213,082-hectare Mt. Kenya Forest Reserve that bestrides the equator in the central highland zones of Kenya. Administratively, this includes forest areas surrounding the mountain itself and adjacent forest blocks of Lower Imenti, Upper Imenti, Thunguru hill, Njuki-ini East, Njukiini West and Kierera.
                </p>
                <h3 className="   font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Wildlife and Biodiversity
                </h3>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  The forest reserve has great potential for tourism development. In addition to having a recorded 880 plant species, the lush natural forests teem with wildlife including the African elephant, leopard, buffalo, giant forest hog, bongo and the black fronted duiker.
                </p>
                <h3 className="   font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Tourist Accommodation Facilities
                </h3>
                <h4 className="   font-medium text-[#0f5a28] text-lg mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Existing Facilities
                </h4>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0 mb-6">
                  {[
                    'Castle Forest Lodge',
                    'Hombe Forest Guesthouse (A KFS-managed facility)',
                    'Mountain Rock Hotel (Bantu Lodge)',
                    'Rutundu Log Cabins',
                    'Serena Mountain Lodge',
                    'Thego Fishing Camp',
                    'Themwe Campsite',
                    'Thiba Fishing Camp',
                    'Timau River Lodge',
                  ].map((facility, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                      style={{ fontSize: `${fontSize * 0.85}px` }}
                    >
                      <span className="   font-medium text-white text-[0.85rem] leading-[1.6]">
                        {facility}
                      </span>
                    </li>
                  ))}
                </ul>
                <h4 className="   font-medium text-[#0f5a28] text-lg mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Upcoming Facilities
                </h4>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0 mb-6">
                  {[
                    'Gitoro Forest Camp in Meru Forest Station',
                    'Nanyuki Forest Camp in Nanyuki Forest Station',
                    'Naro Moru Forest Lodge in Naro Moru Forest',
                    'Ragati Fishing Camp in Ragati Forest Station',
                    'Thegu Forest Lodge in Kabaru Forest Station',
                    'Themwe Lodge in Ruthumbi Forest Station',
                    'Tungu/Nithi Eco-lodge in Chuka Forest Station',
                  ].map((facility, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 border border-green-200"
                      style={{ fontSize: `${fontSize * 0.85}px` }}
                    >
                      <span className="   font-medium text-white text-[0.85rem] leading-[1.6]">
                        {facility}
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
                      src: '/images/Eco-tourism/MountKenyaForest/Castle-Forest-Lodge-in-Castle-Forest-Station-Kirinyaga-County.jpg',
                      alt: 'Castle Forest Lodge in Castle Forest Station, Kirinyaga County',
                      caption: 'Castle Forest Lodge',
                    },
                    {
                      src: '/images/Eco-tourism/MountKenyaForest/mt-kenya-peaks-from-edge-of-mt-kenya-forest-reserve.jpg',
                      alt: 'Mt Kenya peaks from edge of Mt Kenya Forest Reserve',
                      caption: 'Mt Kenya Peaks',
                    },
                    {
                      src: '/images/Eco-tourism/MountKenyaForest/Thiba-fishing-camp-kerugoya.jpg',
                      alt: 'Thiba fishing camp, Kerugoya',
                      caption: 'Thiba Fishing Camp',
                    },
                    {
                      src: '/images/Eco-tourism/MountKenyaForest/Timau-River-Lodge.jpg',
                      alt: 'Timau River Lodge',
                      caption: 'Timau River Lodge',
                    },
                    {
                      src: '/images/Eco-tourism/MountKenyaForest/Hombe-guest-house-after-KFS-refurbishment.jpg',
                      alt: 'Hombe guest house after KFS refurbishment',
                      caption: 'Hombe Guest House',
                    },
                  ].map((image, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden">
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
                  Kenya Forest Service
                </p>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Karura, Off Kiambu Road
                </p>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  P.O. Box 30513 – 00100 Nairobi, Kenya
                </p>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Tel: +254 20 2020285
                </p>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Fax: +254 20 2385374
                </p>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Email: <a href="mailto:info@kenyaforestservice.org" className="text-blue-600 underline">info@kenyaforestservice.org</a> or <a href="mailto:ecotourism@kenyaforestservice.org" className="text-blue-600 underline">ecotourism@kenyaforestservice.org</a>
                </p>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Website: <a href="http://www.kenyaforestservice.org" className="text-blue-600 underline">www.kenyaforestservice.org</a>
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

export default MountKenyaForestPage;