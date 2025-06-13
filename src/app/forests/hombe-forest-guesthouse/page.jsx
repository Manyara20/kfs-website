'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

const HombeForestGuesthousePage = () => {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('about-guesthouse');

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
    { id: 'about-guesthouse', label: 'About Guesthouse' },
    { id: 'accommodation-details', label: 'Accommodation Details' },
    { id: 'how-to-get-there', label: 'How to Get There' },
    { id: 'ideal-for', label: 'Ideal For' },
    { id: 'booking', label: 'Booking' },
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
            Hombe Forest Guesthouse
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="   text-lg md:text-xl text-white/90 max-w-2xl"
          >
            Newly refurbished retreat in the heart of Mt. Kenya Forest Reserve
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
            {/* About Guesthouse Tab */}
            {activeTab === 'about-guesthouse' && (
              <section>
                <h2 className="   font-bold text-[#0f5a28] text-2xl mb-3" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  About the Guesthouse
                </h2>
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8 mx-auto max-w-4xl">
                  <Image
                    src="/images/Eco-tourism/HombeForestGuestHouse/Hombe-235x300.png"
                    alt="Hombe guest house after KFS refurbishment"
                    width={235}
                    height={300}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Kenya Forest Service (KFS) recently refurbished Hombe Forest Guesthouse in Mt. Kenya Forest Reserve
                  and the facility is now ready for occupation.
                </p>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem]" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  The guest house is in Hombe Forest Station in Mt. Kenya Forest Reserve. It is located off the Nairobi –
                  Nanyuki highway, approximately 165 km from Nairobi city.
                </p>
              </section>
            )}

            {/* Accommodation Details Tab */}
            {activeTab === 'accommodation-details' && (
              <section>
                <h2 className="   font-bold text-[#0f5a28] text-2xl mb-3" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Accommodation Details
                </h2>
                <ul className="space-y-3">
                  {[
                    { label: 'Capacity', value: '2-bedroom guesthouse (4 persons)' },
                    { label: 'Additional', value: '8 persons can be accommodated in tents' },
                    { label: 'Self-catering', value: 'Fully equipped for your convenience' },
                    { label: 'Ideal for', value: 'Individuals, groups, and researchers' },
                    { label: 'Special feature', value: 'Space available for personal tents' },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                    >
                      <span
                        className="   font-medium text-white text-[0.85rem] leading-[1.6]"
                        style={{ fontSize: `${fontSize * 0.85}px` }}
                      >
                        <strong>{item.label}:</strong> {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mt-8 mx-auto max-w-4xl">
                  <Image
                    src="/images/Eco-tourism/HombeForestGuestHouse/Hombe-guest-house-after-KFS-refurbishment.jpg"
                    alt="Hombe Forest Guesthouse"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              </section>
            )}

            {/* How to Get There Tab */}
            {activeTab === 'how-to-get-there' && (
              <section>
                <h2 className="   font-bold text-[#0f5a28] text-2xl mb-3" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Location & Directions
                </h2>
                <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  To get there, one turns off at Chaka shopping center and drives for 13 km along the Chaka-Sagana tarmac
                  road.
                </p>
                <div className="bg-white p-4 rounded border border-green-200">
                  <h3 className="   font-semibold text-[#0f5a28] mb-2" style={{ fontSize: `${fontSize * 0.95}px` }}>
                    Distance from Nairobi:
                  </h3>
                  <p className="   font-normal text-black leading-[1.8] text-[0.9rem]" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Approximately 165 km
                  </p>
                  <h3 className="   font-semibold text-[#0f5a28] mt-3 mb-2" style={{ fontSize: `${fontSize * 0.95}px` }}>
                    Access Road:
                  </h3>
                  <p className="   font-normal text-black leading-[1.8] text-[0.9rem]" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    13 km from Chaka shopping center along Chaka-Sagana tarmac road
                  </p>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden mt-6 bg-gray-200">
                  <div className="flex items-center justify-center h-full">
                    <p className="   font-normal text-gray-500 leading-[1.8] text-[0.9rem]" style={{ fontSize: `${fontSize * 0.9}px` }}>
                      Map of Hombe Forest Guesthouse location
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Ideal For Tab */}
            {activeTab === 'ideal-for' && (
              <section>
                <h2 className="   font-bold text-[#0f5a28] text-2xl mb-3" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Ideal For
                </h2>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                  {[
                    'Researchers',
                    'Budget travelers',
                    'Nature lovers',
                    'Group retreats',
                    'Long-term stays',
                    'Forest explorers',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                      style={{ fontSize: `${fontSize * 0.85}px` }}
                    >
                      <span className="   font-medium text-white text-[0.85rem] leading-[1.6] capitalize">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Booking Tab */}
            {activeTab === 'booking' && (
              <section className="bg-[#1a3c34] text-white p-8 rounded-lg">
                <h2 className="   font-bold text-3xl mb-4 text-center" style={{ fontSize: `${fontSize * 1.2}px` }}>
                  Make Your Booking Today!
                </h2>
                <p className="   font-normal leading-[1.8] text-[1rem] mb-6 text-center" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Experience the serene beauty of Mt. Kenya Forest Reserve
                </p>
                <div className="bg-white text-[#0f5a28] p-6 rounded-lg">
                  <h3 className="   font-semibold text-2xl mb-3" style={{ fontSize: `${fontSize * 1.1}px` }}>
                    For Bookings Contact:
                  </h3>
                  <p className="   font-bold text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                    020-2045780
                  </p>
                  <p className="   font-normal leading-[1.8] text-[0.9rem]" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Or use the contact information below
                  </p>
                </div>
              </section>
            )}

            {/* Contact Us Tab */}
            {activeTab === 'contact-us' && (
              <section>
                <h2 className="   font-bold text-[#0f5a28] text-3xl mb-4 border-b pb-2" style={{ fontSize: `${fontSize * 1.2}px` }}>
                  Contact Information
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="   font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                      Kenya Forest Service
                    </h3>
                    <address className="not-italic">
                      <p className="   font-normal text-black leading-[1.8] text-[0.9rem]" style={{ fontSize: `${fontSize * 0.9}px` }}>
                        Karura, Off Kiambu Road
                      </p>
                      <p className="   font-normal text-black leading-[1.8] text-[0.9rem]" style={{ fontSize: `${fontSize * 0.9}px` }}>
                        P.O. Box 30513 – 00100 Nairobi, Kenya
                      </p>
                      <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mt-3" style={{ fontSize: `${fontSize * 0.9}px` }}>
                        <span className="font-medium">Tel:</span> +254 20 2020285
                      </p>
                      <p className="   font-normal text-black leading-[1.8] text-[0.9rem]" style={{ fontSize: `${fontSize * 0.9}px` }}>
                        <span className="font-medium">Fax:</span> +254 20 2385374
                      </p>
                      <p className="   font-normal text-black leading-[1.8] text-[0.9rem]" style={{ fontSize: `${fontSize * 0.9}px` }}>
                        <span className="font-medium">Email:</span> info@kenyaforestservice.org
                      </p>
                      <p className="   font-normal text-black leading-[1.8] text-[0.9rem]" style={{ fontSize: `${fontSize * 0.9}px` }}>
                        <span className="font-medium">Ecotourism Email:</span> ecotourism@kenyaforestservice.org
                      </p>
                      <p className="   font-normal text-black leading-[1.8] text-[0.9rem]" style={{ fontSize: `${fontSize * 0.9}px` }}>
                        <span className="font-medium">Website:</span> www.kenyaforestservice.org
                      </p>
                    </address>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="   font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                      Map Location
                    </h3>
                    <div className="relative h-64 rounded-lg overflow-hidden bg-gray-200">
                      <div className="flex items-center justify-center h-full">
                        <p className="   font-normal text-gray-500 leading-[1.8] text-[0.9rem]" style={{ fontSize: `${fontSize * 0.9}px` }}>
                          Map of Hombe Forest Guesthouse location
                        </p>
                      </div>
                    </div>
                    <p className="   font-normal text-black leading-[1.8] text-[0.9rem] mt-3" style={{ fontSize: `${fontSize * 0.9}px` }}>
                      Located in Hombe Forest Station, Mt. Kenya Forest Reserve
                    </p>
                  </div>
                </div>
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

export default HombeForestGuesthousePage;