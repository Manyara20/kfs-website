'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

const InvestorCodeConductPage = () => {
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
              Code of Conduct for Private Investors in Ecotourism & Recreation Facilities
            </h1>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[1rem]"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Guidelines for sustainable and responsible forest-based tourism operations
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-8">
            <div className="bg-[#1a3c34] px-6 py-4">
              <h2
                className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-white"
                style={{ fontSize: `${fontSize * 1.2}px` }}
              >
                Investor Responsibilities in Public Forests
              </h2>
            </div>

            <div className="p-6">
              <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-100">
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#0f5a28] leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Private investors operating ecotourism facilities in public forests must adhere to these principles to ensure environmental sustainability and community benefits.
                </p>
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
                {[
                  {
                    number: '1',
                    title: 'Proper Land Use',
                    description:
                      'Use the forest area occupied in accordance with the license granted and the approved management plan. Avoid neglecting the licensed area or failing to implement beneficial or remedial measures.',
                  },
                  {
                    number: '2',
                    title: 'Environmental Minimization',
                    description:
                      'Minimize environmental impacts by using eco-friendly low-impact technology and materials in construction and operation and ensure that construction material, water, energy and other resources used are from sustainable sources.',
                  },
                  {
                    number: '3',
                    title: 'Legal Compliance',
                    description:
                      'Comply with all relevant legislation and guidelines including those governing state forests, tourist accommodation facilities, environmental conservation, waste management, land use, wildlife, water, labour and occupational safety and health.',
                  },
                  {
                    number: '4',
                    title: 'Safety Measures',
                    description:
                      'Protect clients and employees against harm from wildlife, insects, fires, diseases and other natural elements including by proper pre-excursion briefings, ensuring that all clients are accompanied by properly-trained guides and maintaining public or third party liability insurance.',
                  },
                  {
                    number: '5',
                    title: 'Responsible Tourism Policies',
                    description:
                      'Develop and implement operational policies, programs and plans to promote responsible tourism including those on environment, tourism, employment, procurement, waste management, pollution mitigation, community participation, fire-risk management, health, safety and emergency response.',
                  },
                  {
                    number: '6',
                    title: 'Impact Monitoring',
                    description:
                      'Monitor the environmental, economic, social and cultural impacts of the enterprise regularly and take remedial action wherever necessary. This should include carrying out Environmental Impact Assessment (EIA) and annual Environmental Audit (EA).',
                  },
                  {
                    number: '7',
                    title: 'Waste Management',
                    description:
                      'Manage all wastes effectively, giving priority to waste management methods that are higher in the waste management hierarchy (avoid, reduce, reuse, recycle or dispose).',
                  },
                  {
                    number: '8',
                    title: 'Forest Protection',
                    description:
                      'Assist KFS in enforcing provisions of the Forest Conservation and Management Act 2016 including informing the service of undesirable changes in the forest, forest fires, illegal harvesting of forest produce and poaching.',
                  },
                  {
                    number: '9',
                    title: 'Tourism Education',
                    description:
                      'Promote responsible tourism by using different media and communication methods to inform and educate employees and clients.',
                  },
                  {
                    number: '10',
                    title: 'Environmental Improvement',
                    description:
                      'Take action to improve the forest and general environment in which the enterprise is located. This should include rehabilitating forest areas affected by the enterprise\'s operations at the end of the project\'s life cycle.',
                  },
                  {
                    number: '11',
                    title: 'Community Benefits',
                    description:
                      'Take action to ensure that the enterprise yields net benefits to the forest adjacent community.',
                  },
                  {
                    number: '12',
                    title: 'Inclusive Development',
                    description:
                      'Take action to improve the lot of marginalized sections of the community including women, youth and persons living with disabilities.',
                  },
                  {
                    number: '13',
                    title: 'Risk Management',
                    description:
                      'Develop a risk management strategy that includes carrying out risk assessment; provision of appropriate information for guests on risks involved; developing guests code of conduct; provision of trained guides; development of guest safety and health procedures including process to be followed in the event of an accident.',
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
                <h2
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-blue-700 mb-3"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  Implementation Requirements
                </h2>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-blue-800 mb-4 leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Investors must demonstrate compliance with this code through regular reporting and audits conducted by KFS and relevant regulatory bodies.
                </p>
                <div className="flex items-center text-blue-700">
                  <svg
                    className="w-5 h-5 mr-2"
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
                  <span
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Non-compliance may result in license revocation or other penalties
                  </span>
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

export default InvestorCodeConductPage;