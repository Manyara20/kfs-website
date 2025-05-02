'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

const GuideCodeConductPage = () => {
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
              Code of Conduct for Tour Leaders, Guides and Porters
            </h1>
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[1.2rem]"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Ecotourism & Recreation in Public Forests
            </h2>
          </div>

          <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-8">
            <div className="bg-[#1a3c34] px-6 py-4">
              <h2
                className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-white"
                style={{ fontSize: `${fontSize * 1.2}px` }}
              >
                Professional Standards for Forest Guides
              </h2>
            </div>

            <div className="p-6">
              <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-100">
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#0f5a28] leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  As frontline representatives of sustainable tourism, guides play a critical role in protecting forest ecosystems while providing quality visitor experiences.
                </p>
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
                {[
                  {
                    title: 'Professional Knowledge',
                    description:
                      'Be properly trained and equipped to provide clients with adequate information on the forest they are visiting and its biodiversity.',
                  },
                  {
                    title: 'Environmental Stewardship',
                    description:
                      'Minimize environmental and social impact of forest visits including by adequately educating clients, walking only on designated trails and taking all litter out of the forest. Inform clients of specific requirements relating to visits to ecologically sensitive, historical, cultural or religious sites and ensure that they abide by them.',
                  },
                  {
                    title: 'Legal Compliance',
                    description:
                      'Comply with all relevant legislation and guidelines including those governing visits to state forests, environmental conservation, waste management, wildlife, safety and health.',
                  },
                  {
                    title: 'Client Safety',
                    description:
                      'Take all possible actions to protect clients against harm from wildlife, insects, fires, diseases and other natural elements including by briefing them on the dangers associated with forest visits and what to do in different circumstances, having clear emergency response procedures and maintaining public or third party liability insurance.',
                  },
                  {
                    title: 'Forest Monitoring',
                    description:
                      'Monitor the state of the forest in the areas visited and assist KFS in enforcing provisions of the Forest Conservation and Management Act 2016 including by reporting on undesirable changes in the forest, forest fires, illegal harvesting of forest produce and poaching.',
                  },
                  {
                    title: 'Cultural Respect',
                    description:
                      'Respect forest adjacent communities and cultures. Obtain consent before taking clients to their dwellings or taking their photographs.',
                  },
                  {
                    title: 'Environmental Improvement',
                    description:
                      'Take action to improve the forest and general environment including supporting rehabilitation of forests in the area of operation.',
                  },
                  {
                    title: 'Community Engagement',
                    description:
                      'Promote participation of forest-adjacent communities in ecotourism including by using their services and encouraging clients to purchase their products.',
                  },
                ].map((guideline, index) => (
                  <div
                    key={index}
                    className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 rounded-lg"
                  >
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-[#0f5a28]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
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
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2
                      className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-blue-700 mb-2"
                      style={{ fontSize: `${fontSize * 1.1}px` }}
                    >
                      Guide Certification
                    </h2>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-blue-800 leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      All guides must complete KFS-approved training and certification programs to ensure compliance with these standards. Regular refresher courses are mandatory.
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

export default GuideCodeConductPage;