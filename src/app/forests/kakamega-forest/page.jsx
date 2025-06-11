'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

const KakamegaForest = () => {
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
      <TopNavBar />
      <MainNavBar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center" 
           style={{ backgroundImage: `url('/images/forests/kakamega.jpg')` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-['Peugeot',Helvetica,sans-serif] text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Kakamega Forest
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Peugeot',Helvetica,sans-serif] text-lg md:text-xl text-white/90 max-w-2xl"
          >
            Kenya's last true tropical rainforest, a haven of biodiversity and ancient greenery
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
                  } whitespace-nowrap py-4 px-1 border-b-2 font-['Peugeot',Helvetica,sans-serif] font-medium text-sm`}
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
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Activities
                </h2>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                  {[
                    'Guided Nature Walks and Hiking: Explore trails like Buyangu, Yala, and Lirhanda Hill with local guides.',
                    'Canopy Walk: Cross a 30-meter-high bridge above the forest for aerial views.',
                    'Bird Watching: Spot rare birds like the great blue turaco and hornbills.',
                    'Primate Tracking: Track colobus, red-tailed, and De Brazza’s monkeys.',
                    'Butterfly Watching: See over 400 butterfly species on guided tours.',
                    'Night Walks: Discover bush babies, owls, and glowing fungi after dark.',
                    'Cultural Experiences: Enjoy storytelling, dances, and meals with the Luhya community.',
                    'Tree Planting: Join reforestation efforts organized by KFS and locals.',
                    'Environmental Education: Great for school tours and biodiversity research.',
                    'Photography: Capture the forest’s wildlife, mists, and iconic trees like Mama Mtere.',
                  ].map((activity, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
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

            {/* How to Get There Tab */}
            {activeTab === 'how-to-get-there' && (
              <section>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  How to Get There
                </h2>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  <strong>By Road:</strong> From Nairobi (418 km): via Nakuru and Kapsabet (A104 → C36 → C39). From Eldoret: via C39 to Kapsabet. From Kakamega Town: 18 km towards Webuye/Eldoret road.
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  <strong>By Air:</strong> Flights are available to Kakamega, Kisumu, or Eldoret, followed by road travel.
                </p>
              </section>
            )}

            {/* Park Entry Fee Tab */}
            {activeTab === 'park-entry-fee' && (
              <section>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Park Entry Fees
                </h2>
                <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Forest Entry Fee
                </h3>
                <table className="w-full border border-gray-300 rounded-md overflow-hidden mb-6">
                  <thead className="bg-green-100 text-green-800">
                    <tr>
                      <th className="p-2 border border-gray-300 text-left">Category</th>
                      <th className="p-2 border border-gray-300 text-left">Adult</th>
                      <th className="p-2 border border-gray-300 text-left">Child</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-gray-300">Citizen</td>
                      <td className="p-2 border border-gray-300">Ksh 300</td>
                      <td className="p-2 border border-gray-300">Ksh 125</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-gray-300">Resident</td>
                      <td className="p-2 border border-gray-300">Ksh 300</td>
                      <td className="p-2 border border-gray-300">Ksh 125</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-gray-300">Non-Resident</td>
                      <td className="p-2 border border-gray-300">USD 22</td>
                      <td className="p-2 border border-gray-300">USD 13</td>
                    </tr>
                  </tbody>
                </table>
                <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Vehicle Charges
                </h3>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                  {[
                    'Less than 6 seats: Ksh 300',
                    '6–12 seats: Ksh 1,030',
                    '13–24 seats: Ksh 2,585',
                    '25–44 seats: Ksh 4,050',
                    '45 seats and above: Ksh 5,000',
                  ].map((charge, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                      style={{ fontSize: `${fontSize * 0.85}px` }}
                    >
                      <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                        {charge}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Pay via{' '}
                  <a
                    href="https://kws.ecitizen.go.ke/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    E-Citizen
                  </a>{' '}
                  using M-Pesa, Visa, or EFT.
                </p>
              </section>
            )}

            {/* Key Features Tab */}
            {activeTab === 'key-features' && (
              <section>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Key Features
                </h2>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Kakamega Forest is renowned for its unique features, including:
                </p>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                  {[
                    '30-meter-high canopy walk offering stunning aerial views.',
                    'Lirhanda Hill viewpoint for panoramic forest vistas.',
                    'Mama Mtere, an iconic ancient tree.',
                    'Yala River and seasonal waterfalls.',
                    'Dense rainforest with morning mists and rich biodiversity.',
                    'Traditional Luhya cultural experiences nearby.',
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
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

            {/* Attractions Tab */}
            {activeTab === 'attractions' && (
              <section>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Attractions
                </h2>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Tucked between the rolling hills of Kakamega, Vihiga, and Nandi counties lies Kenya’s last true tropical rainforest—about 238 km² of ancient green that once formed part of the vast Guineo-Congolian belt stretching across Africa. Perched at 1,500–1,600 m and watered by 1,200–1,700 mm of rain annually, Kakamega Forest is a living museum of humidity-loving life, wrapped in morning mists and the liquid calls of hornbills.
                </p>
                <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Wildlife
                </h3>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  The forest is home to over 400 butterfly species, 350 bird species (including the great blue turaco and hornbills), and primates like colobus, red-tailed, and De Brazza’s monkeys. Nocturnal creatures such as bush babies and owls can be spotted during night walks.
                </p>
                <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Cultural and Natural Highlights
                </h3>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                  {[
                    'Luhya cultural experiences with storytelling and dances.',
                    'Seasonal waterfalls along the Yala River.',
                    'Ancient trees like Mama Mtere, a symbol of the forest’s heritage.',
                    'Glowing fungi visible during night walks.',
                  ].map((attraction, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                      style={{ fontSize: `${fontSize * 0.85}px` }}
                    >
                      <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                        {attraction}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Contact Us Tab */}
            {activeTab === 'contact-us' && (
              <section>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Contacts
                </h2>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Email:{' '}
                  <a
                    href="mailto:kakamegaforest@kws.go.ke"
                    className="text-blue-600 underline"
                  >
                    kakamegaforest@kws.go.ke
                  </a>
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Phone (Office): 0202418419
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Phone (Main Gate): 0202654658
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

export default KakamegaForest;