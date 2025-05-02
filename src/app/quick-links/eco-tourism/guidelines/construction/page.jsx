'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

const ConstructionPage = () => {
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
          <h1
            className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-6 text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
            style={{ fontSize: `${fontSize * 1.5}px` }}
          >
            Guidelines for Constructing Ecotourism & Recreational Facilities in Public Forests
          </h1>
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              When constructing ecotourism & recreational facilities in forest reserves, developers should:
            </p>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
              {[
                'Take note that sites for ecotourism & recreation facilities shall not exceed 20 acres and the maximum built up area shall not exceed 30% of the licensed area.',
                'Ensure facilities blend with their environments. Buildings should not interrupt beautiful views and should be within the forest canopy (not appearing above the tree tops).',
                'Avoid felling mature trees to create space for construction of buildings. Enough vegetation should be left untouched to conceal building when they are completed. Additional vegetation should be planted after construction to ensure the forest character is retained.',
                'Minimize facilities that will be constructed in the forest including reducing numbers, dimensions and capacity to ensure that they have the least possible ecological footprint.',
                'Ensure the facilities are in character with their environment. This should include use of eco-friendly low-impact construction materials and technologies and avoidance or minimization of undesirable visual intrusion, excessive paving of surfaces, use of concrete and non-biodegradable materials, clearing of vegetation, landscaping and introduction of alien species.',
                'Begin construction only after securing all requisite approvals including the Environmental Impact Assessment (EIA) license. Construction should further not begin before the licensee submits the proposed facility\'s designs and plans, a site-specific forest management plan and a community participation plan to KFS for approval.',
                'Take advantage of natural light, heat, air movements and other features to reduce use of artificial lighting, heating, air movement, etc.',
                'Use energy, water and other materials from sustainable sources wherever possible.',
                'Give the forest adjacent community priority to supply labour, construction materials and other services required during construction. Developer should anticipate and manage any undesirable impacts that construction of the facility has on the forest adjacent community.',
                'Manage the different types of wastes and wastewater effectively during pre-construction and construction phase. Also take action to protect the environment during construction including effectively managing movement of materials and people to and from the construction site, noise pollution, air/dust pollution, water pollution, use and handling of hazardous materials, soil erosion and the risk of fire.',
                'Restore and improve the environment after construction.',
              ].map((guideline, index) => (
                <li
                  key={index}
                  className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                  style={{ fontSize: `${fontSize * 0.85}px` }}
                >
                  <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                    {guideline}
                  </span>
                </li>
              ))}
            </ul>
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

export default ConstructionPage;