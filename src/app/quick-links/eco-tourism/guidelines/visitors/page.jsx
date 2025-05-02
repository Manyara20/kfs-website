'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

const VisitorCodeConductPage = () => {
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
              Code of Conduct for Visitors
            </h1>
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[1.2rem]"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Ecotourism & Recreation in Public Forests
            </h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black mt-4 leading-[1.8] text-[0.9rem]"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Your actions help preserve Kenya's forests for future generations
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-8">
            <div className="bg-[#1a3c34] px-6 py-4">
              <h2
                className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-white"
                style={{ fontSize: `${fontSize * 1.2}px` }}
              >
                Responsible Visitor Guidelines
              </h2>
            </div>

            <div className="p-6">
              <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-100">
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#0f5a28] leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  As a visitor to our public forests, you play a vital role in conservation. Please follow these guidelines to ensure minimal environmental impact and maximum benefit to local communities.
                </p>
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
                {[
                  {
                    number: '1',
                    title: 'Minimize Your Impact',
                    description:
                      'Minimize environmental and social impact including by learning about the forest you\'re visiting, using eco-certified service providers, walking only on designated trails, not marking or defacing natural features, not collecting plants/animals, and taking all litter out. Abide by regulations for sensitive sites.',
                  },
                  {
                    number: '2',
                    title: 'Follow All Rules',
                    description:
                      'Comply with all relevant legislation and guidelines including those governing visits to state forests, environmental conservation, waste management, wildlife, safety and health.',
                  },
                  {
                    number: '3',
                    title: 'Prioritize Safety',
                    description:
                      'Protect yourself against harm from wildlife, insects, fires, and diseases by learning about potential dangers, always being accompanied by a trained guide, and having proper insurance coverage.',
                  },
                  {
                    number: '4',
                    title: 'Respect Local Communities',
                    description:
                      'Respect forest-adjacent communities and cultures. Always obtain consent before visiting their dwellings or taking photographs.',
                  },
                  {
                    number: '5',
                    title: 'Support Local Businesses',
                    description:
                      'Use locally owned infrastructure for accommodation and transport to ensure your visit benefits the local economy.',
                  },
                  {
                    number: '6',
                    title: 'Contribute to Conservation',
                    description:
                      'Ask about actions you can take to improve the forest environment and participate where possible.',
                  },
                  {
                    number: '7',
                    title: 'Empower Communities',
                    description:
                      'Support forest-adjacent communities by using their services, purchasing their products, or contributing to their projects.',
                  },
                ].map((guideline) => (
                  <div
                    key={guideline.number}
                    className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 rounded-lg"
                  >
                    <div className="flex items-start">
                      <div
                        className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        <span className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28]">
                          {guideline.number}
                        </span>
                      </div>
                      <div>
                        <h3
                          className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-white mb-1"
                          style={{ fontSize: `${fontSize * 0.95}px` }}
                        >
                          {guideline.title}
                        </h3>
                        <p
                          className="font-['Peugeot',Helvetica,sans-serif] font-normal text-white leading-[1.6] text-[0.85rem]"
                          style={{ fontSize: `${fontSize * 0.85}px` }}
                        >
                          {guideline.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2
                      className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-blue-700 mb-2"
                      style={{ fontSize: `${fontSize * 1.1}px` }}
                    >
                      The Responsible Visitor Pledge
                    </h2>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-blue-800 leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      By following these guidelines, you become a partner in conservation. Your responsible actions help protect Kenya's forests while supporting sustainable livelihoods for local communities.
                    </p>
                  </div>
                </div>
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

export default VisitorCodeConductPage;