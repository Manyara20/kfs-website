'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

const BackgroundPage = () => {
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
          <section>
            <h1
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
              style={{ fontSize: `${fontSize * 1.5}px` }}
            >
              Background
            </h1>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              One of the functions of Kenya Forest Service (KFS) is to develop programmes and facilities for tourism, recreational, and ceremonial use of forests. The organization manages over 2.5 million hectares of gazetted forests that range from equatorial forests, tropical rainforest, dryland forests, coastal forests, and urban forests.
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              These forests are rich in plant and wildlife biodiversity, in addition to having numerous attractive features including panoramic views, lakes, craters, waterfalls, caves, and hills.
            </p>
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mt-6 mb-2"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Ecotourism Development
            </h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              KFS collaborates with different stakeholders to develop responsible tourism products and activities in forest reserves in Kenya. The products being developed include ecolodges, tree houses, campsites, nature trails, and canopy walkways.
            </p>
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mt-6 mb-2"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Ecotourism Tenets
            </h2>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
              {[
                'Minimize impacts on the environment',
                'Protect and benefit forest biodiversity and conservation',
                'Promote environmental awareness and cultural preservation',
                'Meet and exceed tourist expectations',
                'Benefit forest-adjacent communities',
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
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              By promoting ecotourism, KFS aims to be the leading organization of excellence in the development and operation of responsible tourism in forest reserves.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 border border-green-200">
                <span className="text-green-600 text-[32px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-green-900"
                  >
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                  </svg>
                </span>
                <div>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28]"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Download Application Form for Ecotourism and Recreation Sites in Public Forests
                  </p>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-600 text-[0.8rem]"
                    style={{ fontSize: `${fontSize * 0.8}px` }}
                  >
                    1 file(s) • 544.28 KB
                  </p>
                </div>
                <a
                  href="/path/to/application-form.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a3c34] text-white px-4 py-2   hover:bg-green-800"
                >
                  Download
                </a>
              </div>
            </div>
          </section>
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

export default BackgroundPage;