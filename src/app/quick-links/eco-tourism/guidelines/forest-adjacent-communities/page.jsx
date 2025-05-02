'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

const CommunityCodeConductPage = () => {
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
            Code of Conduct for Forest Adjacent Communities in Ecotourism & Recreation in Public Forests
          </h1>
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <div className="mb-6 p-4 bg-green-50 rounded border border-green-100">
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#0f5a28] leading-[1.8] text-[0.9rem]"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Forest adjacent communities play a vital role in sustainable ecotourism. This code of conduct outlines their responsibilities and expected behaviors in forest-based tourism activities.
              </p>
            </div>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
              {[
                {
                  title: 'Collaboration with Stakeholders',
                  description:
                    'Collaborate with KFS, investors and other partners to participate in and benefit from forest-based ecotourism & recreation facilities. In this, the community should engage with the partners who practice responsible tourism including those that demonstrate concern for environmental conservation and local communities.',
                },
                {
                  title: 'Regulation Development',
                  description:
                    'Develop and implement specific regulations and guidelines for ecotourism & recreation in community areas to reduce the negative social, economic and cultural impacts of tourism.',
                },
                {
                  title: 'Respect for Zoned Areas',
                  description:
                    'Respect forest areas that have been zoned for ecotourism & recreation and undertake only those activities that are compatible with tourism within such zones.',
                },
                {
                  title: 'Forest Monitoring',
                  description:
                    'Monitor the state of the forest and assist KFS in enforcing provisions of the Forest Conservation and Management Act 2016 including by reporting on undesirable changes in the forest, forest fires, illegal harvesting of forest produce and poaching.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
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
            <div className="mt-8 p-4 bg-blue-50 rounded border border-blue-100">
              <h2
                className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-blue-700 mb-2"
                style={{ fontSize: `${fontSize * 1.1}px` }}
              >
                Community Benefits
              </h2>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-blue-800 leading-[1.8] text-[0.9rem]"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                By following this code of conduct, communities can ensure sustainable benefits from ecotourism while protecting forest resources for future generations.
              </p>
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

export default CommunityCodeConductPage;