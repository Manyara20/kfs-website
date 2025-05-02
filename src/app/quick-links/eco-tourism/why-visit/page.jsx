'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

const VisitForestsPage = () => {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center p-8 relative overflow-hidden"
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
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={cardVariants}
          className="bg-white/95 p-12 max-w-[900px] w-full relative z-10 border border-white/30"
        >
          <div className="text-center mb-10">
            <h1
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-2 text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
              style={{ fontSize: `${fontSize * 1.5}px` }}
            >
              Why You Should Keep Visiting Public Forests in Kenya
            </h1>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[1rem]"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Discover the health benefits and incredible diversity of Kenya's forest ecosystems
            </p>
          </div>

          {/* Health Benefits Section */}
          <div className="p-6 border-b border-gray-200">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Health Benefits of Forest Visits
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Research continues to demonstrate that there are actual physical and mental benefits of visiting forests. It has been proved that visiting forest areas:
                </p>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                  {[
                    'Improves mood and reduces stress',
                    'Increases energy levels',
                    'Lowers blood pressure',
                    'Improves sleep quality',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                      style={{ fontSize: `${fontSize * 0.85}px` }}
                    >
                      <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-green-50 rounded-lg p-4 flex items-center justify-center">
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] italic text-center"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  "A natural remedy with no side effects!"
                </p>
              </div>
            </div>
          </div>

          {/* Forest Diversity Section */}
          <div className="p-6 border-b border-gray-200">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Kenya's Diverse Forest Ecosystems
            </h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Kenya's 1.9 million hectares of public forests offer a wide diversity of ecosystems for visitors:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Equatorial Forests', description: 'Mt. Kenya and Aberdare forests' },
                { title: 'Tropical Rainforests', description: 'Kakamega Forest' },
                { title: 'Dry Zone Forests', description: 'Ngare Ndare and the Matthews Range' },
                { title: 'Coastal Forests', description: 'Arabuko Sokoke and mangroves' },
                { title: 'Eastern Arc Mountain Forests', description: 'Mbololo and Ngangao' },
                { title: 'Urban Forests', description: 'Karura and the Ngong Hills' },
              ].map((ecosystem, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4">
                  <h3
                    className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-2"
                    style={{ fontSize: `${fontSize * 0.95}px` }}
                  >
                    {ecosystem.title}
                  </h3>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    {ecosystem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Attractions Section */}
          <div className="p-6 border-b border-gray-200">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Forest Attractions & Facilities
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-2"
                  style={{ fontSize: `${fontSize * 0.95}px` }}
                >
                  Natural Features
                </h3>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  These forests are rich in plant and wildlife biodiversity, with numerous attractive features including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Panoramic views', 'Lakes', 'Craters', 'Waterfalls', 'Caves', 'Hills'].map((feature, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-[#0f5a28] px-3 py-1 rounded-full text-sm font-['Peugeot',Helvetica,sans-serif]"
                      style={{ fontSize: `${fontSize * 0.8}px` }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-2"
                  style={{ fontSize: `${fontSize * 0.95}px` }}
                >
                  Recreational Facilities
                </h3>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Various facilities developed for visitor enjoyment:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Nature trails', 'Ecolodges', 'Restaurants', 'Picnic sites', 'Camping sites', 'Zip lines', 'Canopy walks'].map(
                    (facility, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-['Peugeot',Helvetica,sans-serif]"
                        style={{ fontSize: `${fontSize * 0.8}px` }}
                      >
                        {facility}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="p-6">
            <div className="bg-[#1a3c34] rounded-lg p-6 text-center">
              <h3
                className="font-['Peugeot',Helvetica,sans-serif] font-bold text-white mb-3"
                style={{ fontSize: `${fontSize * 1.1}px` }}
              >
                There is potential to get tree-ted!
              </h3>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-green-100 mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Discover the recreational activities in a public forest near you
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
                <a
                  href="/path/to/application-form.pdf"
                  download
                  className="bg-white text-[#0f5a28] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span style={{ fontSize: `${fontSize * 0.9}px` }}>Download Application Form (544.28 KB)</span>
                </a>
                <a
                  href="https://www.kenyaforestservice.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-[#0f5a28] font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 transition flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <span style={{ fontSize: `${fontSize * 0.9}px` }}>Visit Kenya Forest Service</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

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

export default VisitForestsPage;