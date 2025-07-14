'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

const mainTabs = [
  { id: 'background', label: 'Background' },
  { id: 'fees', label: 'Fees and Charges' },
  { id: 'investment', label: 'Investment Opportunities' },
  { id: 'guidelines', label: 'Guidelines and Code of Conduct' },
  { id: 'why-visit', label: 'Why Visit Public Forests' },
];

const guidelineSubTabs = [
  { id: 'construction', label: 'Construction' },
  { id: 'decommissioning', label: 'Decommissioning' },
  { id: 'forest-adjacent', label: 'Forest-Adjacent Communities' },
  { id: 'private-investors', label: 'Private Investors' },
  { id: 'tour-leaders', label: 'Tour Leaders' },
  { id: 'visitors', label: 'Visitors' },
];

const BackgroundPage = () => {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);
  const [activeMainTab, setActiveMainTab] = useState('background');
  const [activeSubTab, setActiveSubTab] = useState('construction');

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

  const tabContentVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
  };

  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center p-4 sm:p-6 md:p-8 relative overflow-hidden"
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

        {/* Main Tabs Navigation */}
        <div className="w-full max-w-6xl mx-auto mb-6 z-10">
          <div className="flex overflow-x-auto whitespace-nowrap border-b border-green-200 scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-transparent">
            {mainTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMainTab(tab.id)}
                className={`flex-shrink-0 px-4 py-2 text-sm sm:text-base font-semibold transition-colors duration-300 ${
                  activeMainTab === tab.id
                    ? 'text-green-600 border-b-4 border-green-600'
                    : 'text-white hover:text-green-400'
                }`}
                aria-label={`View ${tab.label}`}
                role="tab"
                aria-selected={activeMainTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Tab Content */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={cardVariants}
          className="bg-white/95 p-6 sm:p-8 md:p-10 max-w-6xl w-full relative z-10 border border-white/30 squared-lg shadow-lg"
        >
          <AnimatePresence mode="wait">
            {activeMainTab === 'background' && (
              <motion.section
                key="background"
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h1
                  className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
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
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-0">
                  {[
                    'Minimize impacts on the environment',
                    'Protect and benefit forest biodiversity and conservation',
                    'Promote environmental awareness and cultural preservation',
                    'Meet and exceed tourist expectations',
                    'Benefit forest-adjacent communities',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 squared-md"
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
                  <div className="bg-white shadow-md squared-lg p-4 flex items-center space-x-4 border border-green-200 w-full sm:w-auto">
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
                      className="bg-[#1a3c34] text-white px-4 py-2 squared-md hover:bg-green-800 transition-colors duration-300"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </motion.section>
            )}
            {activeMainTab === 'fees' && (
              <motion.section
                key="fees"
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h1
                  className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                  style={{ fontSize: `${fontSize * 1.5}px` }}
                >
                  Fees & Charges
                </h1>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  The following charges apply (all exclusive of VAT):
                </p>
                <div className="space-y-6">
                  <div className="bg-green-100 p-4 squared-lg shadow-md">
                    <h2
                      className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-[1.2rem]"
                      style={{ fontSize: `${fontSize * 1.1}px` }}
                    >
                      Access to forests for recreational purposes
                    </h2>
                    <table className="w-full mt-2 border-collapse border border-green-500">
                      <thead>
                        <tr className="bg-[#1a3c34] text-white">
                          <th
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-medium"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            Group
                          </th>
                          <th
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-medium"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            Kenya & EAC Citizens
                          </th>
                          <th
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-medium"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            Kenyan Residents
                          </th>
                          <th
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-medium"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            Non-Residents
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-green-50">
                          <td
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-normal"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            Adult per day
                          </td>
                          <td
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-normal"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            200 Kshs
                          </td>
                          <td
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-normal"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            400 Kshs
                          </td>
                          <td
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-normal"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            600 Kshs
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-normal"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            Child per day
                          </td>
                          <td
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-normal"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            50 Kshs
                          </td>
                          <td
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-normal"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            100 Kshs
                          </td>
                          <td
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-normal"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            150 Kshs
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-green-100 p-4 squared-lg shadow-md">
                    <h2
                      className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-[1.2rem]"
                      style={{ fontSize: `${fontSize * 1.1}px` }}
                    >
                      Camping
                    </h2>
                    <table className="w-full mt-2 border-collapse border border-green-500">
                      <thead>
                        <tr className="bg-[#1a3c34] text-white">
                          <th
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-medium"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            Group
                          </th>
                          <th
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-medium"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            Kenya Citizens
                          </th>
                          <th
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-medium"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            Kenyan Residents
                          </th>
                          <th
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-medium"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            Non-Residents
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-green-50">
                          <td
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-normal"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            Adult per night
                          </td>
                          <td
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-normal"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            650 Kshs
                          </td>
                          <td
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-normal"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            650 Kshs
                          </td>
                          <td
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-normal"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            650 Kshs
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-normal"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            Child per night
                          </td>
                          <td
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-normal"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            100 Kshs
                          </td>
                          <td
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-normal"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            100 Kshs
                          </td>
                          <td
                            className="border border-green-500 p-2 font-['Peugeot',Helvetica,sans-serif] font-normal"
                            style={{ fontSize: `${fontSize * 0.85}px` }}
                          >
                            100 Kshs
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h2
                      className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mt-6 mb-2"
                      style={{ fontSize: `${fontSize * 1.1}px` }}
                    >
                      Other Charges
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-0">
                      {[
                        'Hire of grounds (Urban Cities): Kshs 50,000 per day',
                        'Urban Municipalities: Kshs 30,000 per day',
                        'Other areas: Kshs 15,000 per day',
                        'Filming rights: Kshs 40,000 per day',
                        'Sporting activities: Cycling (Kshs 100), Horse riding (Kshs 300)',
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 squared-md"
                          style={{ fontSize: `${fontSize * 0.85}px` }}
                        >
                          <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.section>
            )}
            {activeMainTab === 'investment' && (
              <motion.section
                key="investment"
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h1
                  className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                  style={{ fontSize: `${fontSize * 1.5}px` }}
                >
                  Forest Parks: Upcoming Investment Opportunities in Public Forests
                </h1>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Kenya Forest Service (KFS) manages over 1.9 million hectares of public forests across the country. One of KFS’s key functions is to collaborate with stakeholders in developing tourism and recreational facilities in public forests under the Forest Conservation and Management Act, 2016.
                </p>
                <h2
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mt-6 mb-2"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  Development of Forest Parks
                </h2>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  KFS aims to develop recreational infrastructure in designated Forest Parks near urban centers. These parks will provide much-needed green spaces for recreationists while maintaining environmental sustainability.
                </p>
                <h2
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mt-6 mb-2"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  Planned Recreational Facilities
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-0">
                  {[
                    'Walking and jogging trails',
                    'Picnic and amusement areas',
                    'Arboreta and botanical gardens',
                    'Restaurants and gift shops',
                    'Visitor education centers',
                    'Community centers',
                    'Zip lines and fitness facilities',
                    'Special event spaces',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 squared-md"
                      style={{ fontSize: `${fontSize * 0.85}px` }}
                    >
                      <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <h2
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mt-6 mb-2"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  Forests with Investment Opportunities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Arabuko Sokoke',
                    'Buda Forest Station',
                    'Chuka Forest Station',
                    'Eburru Forest',
                    'Eldoret Municipality Forest',
                    'Kakamega Forest',
                    'Karura Forest',
                    'Ngong Hills Forest',
                    'Menengai Forest Station',
                    'Nairobi Arboretum',
                    'Uplands Recreational Park',
                  ].map((forest, index) => (
                    <div
                      key={index}
                      className="bg-green-100 p-4 squared-lg shadow transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                    >
                      <span
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        {forest}
                      </span>
                    </div>
                  ))}
                </div>
                <h2
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mt-6 mb-2"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  Contact & Application
                </h2>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  To be added to the ecotourism investment database or to receive updates on available opportunities, send an email request to{' '}
                  <span className="text-[#0f5a28] font-semibold">info@kenyaforestservice.org</span>.
                </p>
                <div className="mt-6 p-4 bg-green-200 squared-lg shadow">
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-black"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Kenya Forest Service
                  </p>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Karura, off Kiambu Road, Nairobi
                  </p>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    P.O. Box 30513-00100 Nairobi, Kenya
                  </p>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Tel: +254 20 2020285 / 2014663
                  </p>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Email:{' '}
                    <a href="mailto:info@kenyaforestservice.org" className="text-[#0f5a28] font-semibold">
                      info@kenyaforestservice.org
                    </a>
                  </p>
                </div>
              </motion.section>
            )}
            {activeMainTab === 'guidelines' && (
              <motion.section
                key="guidelines"
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h1
                  className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                  style={{ fontSize: `${fontSize * 1.5}px` }}
                >
                  Guidelines and Code of Conduct
                </h1>
                {/* Sub-Tabs Navigation */}
                <div className="flex overflow-x-auto whitespace-nowrap border-b border-gray-200 mb-6 scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-transparent">
                  {guidelineSubTabs.map((subTab) => (
                    <button
                      key={subTab.id}
                      onClick={() => setActiveSubTab(subTab.id)}
                      className={`flex-shrink-0 px-3 py-2 text-sm sm:text-base font-medium transition-colors duration-300 ${
                        activeSubTab === subTab.id
                          ? 'text-green-600 border-b-3 border-green-600'
                          : 'text-gray-700 hover:text-green-500'
                      }`}
                      aria-label={`View ${subTab.label} guidelines`}
                      role="tab"
                      aria-selected={activeSubTab === subTab.id}
                    >
                      {subTab.label}
                    </button>
                  ))}
                </div>
                {/* Sub-Tab Content */}
                <AnimatePresence mode="wait">
                  {activeSubTab === 'construction' && (
                    <motion.div
                      key="construction"
                      variants={tabContentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <h2
                        className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-6 text-[1.6rem] sm:text-[2rem] leading-[1.3] tracking-[0.5px] capitalize"
                        style={{ fontSize: `${fontSize * 1.4}px` }}
                      >
                        Guidelines for Constructing Ecotourism & Recreational Facilities in Public Forests
                      </h2>
                      <div className="bg-white shadow-md squared-lg p-6 mb-8">
                        <p
                          className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
                          style={{ fontSize: `${fontSize * 0.9}px` }}
                        >
                          When constructing ecotourism & recreational facilities in forest reserves, developers should:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-0">
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
                              className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 squared-md"
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
                  )}
                  {activeSubTab === 'decommissioning' && (
                    <motion.div
                      key="decommissioning"
                      variants={tabContentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <h2
                        className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-6 text-[1.6rem] sm:text-[2rem] leading-[1.3] tracking-[0.5px] capitalize"
                        style={{ fontSize: `${fontSize * 1.4}px` }}
                      >
                        Guidelines for Decommissioning Ecotourism & Recreational Facilities in Public Forests
                      </h2>
                      <div className="bg-white shadow-md squared-lg p-6 mb-8">
                        <p
                          className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
                          style={{ fontSize: `${fontSize * 0.9}px` }}
                        >
                          When decommissioning ecotourism & recreational facilities, developers should:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-0">
                          {[
                            'Manage different types of wastes effectively during decommissioning including construction and demolition wastes.',
                            'Plan for and effectively manage the social impacts related to decommissioning including loss of gainful employment.',
                            'Rehabilitate and fully restore the forest area in which they have been operating during decommissioning.',
                          ].map((guideline, index) => (
                            <li
                              key={index}
                              className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 squared-md"
                              style={{ fontSize: `${fontSize * 0.85}px` }}
                            >
                              <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                                {guideline}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8 p-4 bg-green-50 squared border border-green-100">
                          <h3
                            className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-2"
                            style={{ fontSize: `${fontSize * 1.1}px` }}
                          >
                            Additional Considerations
                          </h3>
                          <p
                            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#0f5a28] leading-[1.8] text-[0.9rem]"
                            style={{ fontSize: `${fontSize * 0.9}px` }}
                          >
                            The decommissioning process should be conducted in an environmentally responsible manner, with particular attention to restoring the natural habitat and minimizing impact on local communities.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {activeSubTab === 'forest-adjacent' && (
                    <motion.div
                      key="forest-adjacent"
                      variants={tabContentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <h2
                        className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-6 text-[1.6rem] sm:text-[2rem] leading-[1.3] tracking-[0.5px] capitalize"
                        style={{ fontSize: `${fontSize * 1.4}px` }}
                      >
                        Code of Conduct for Forest Adjacent Communities in Ecotourism & Recreation in Public Forests
                      </h2>
                      <div className="bg-white shadow-md squared-lg p-6 mb-8">
                        <div className="mb-6 p-4 bg-green-50 squared border border-green-100">
                          <p
                            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#0f5a28] leading-[1.8] text-[0.9rem]"
                            style={{ fontSize: `${fontSize * 0.9}px` }}
                          >
                            Forest adjacent communities play a vital role in sustainable ecotourism. This code of conduct outlines their responsibilities and expected behaviors in forest-based tourism activities.
                          </p>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-0">
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
                              className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 squared-md"
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
                        <div className="mt-8 p-4 bg-blue-50 squared border border-blue-100">
                          <h3
                            className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-blue-700 mb-2"
                            style={{ fontSize: `${fontSize * 1.1}px` }}
                          >
                            Community Benefits
                          </h3>
                          <p
                            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-blue-800 leading-[1.8] text-[0.9rem]"
                            style={{ fontSize: `${fontSize * 0.9}px` }}
                          >
                            By following this code of conduct, communities can ensure sustainable benefits from ecotourism while protecting forest resources for future generations.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {activeSubTab === 'private-investors' && (
                    <motion.div
                      key="private-investors"
                      variants={tabContentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <h2
                        className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-6 text-[1.6rem] sm:text-[2rem] leading-[1.3] tracking-[0.5px] capitalize"
                        style={{ fontSize: `${fontSize * 1.4}px` }}
                      >
                        Code of Conduct for Private Investors in Ecotourism & Recreation Facilities
                      </h2>
                      <div className="bg-white shadow-md squared-lg p-6 mb-8">
                        <p
                          className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
                          style={{ fontSize: `${fontSize * 0.9}px` }}
                        >
                          Private investors operating ecotourism facilities in public forests must adhere to these principles to ensure environmental sustainability and community benefits.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-0">
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
                            <li
                              key={guideline.number}
                              className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 squared-md"
                              style={{ fontSize: `${fontSize * 0.85}px` }}
                            >
                              <div className="flex items-start">
                                <div
                                  className="bg-green-100 squared-lg p-2 mr-3 flex-shrink-0"
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
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8 p-4 bg-blue-50 squared border border-blue-100">
                          <h3
                            className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-blue-700 mb-2"
                            style={{ fontSize: `${fontSize * 1.1}px` }}
                          >
                            Implementation Requirements
                          </h3>
                          <p
                            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-blue-800 leading-[1.8] text-[0.9rem] mb-3"
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
                    </motion.div>
                  )}
                  {activeSubTab === 'tour-leaders' && (
                    <motion.div
                      key="tour-leaders"
                      variants={tabContentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <h2
                        className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-6 text-[1.6rem] sm:text-[2rem] leading-[1.3] tracking-[0.5px] capitalize"
                        style={{ fontSize: `${fontSize * 1.4}px` }}
                      >
                        Code of Conduct for Tour Leaders, Guides and Porters
                      </h2>
                      <div className="bg-white shadow-md squared-lg p-6 mb-8">
                        <p
                          className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
                          style={{ fontSize: `${fontSize * 0.9}px` }}
                        >
                          As frontline representatives of sustainable tourism, guides play a critical role in protecting forest ecosystems while providing quality visitor experiences.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-0">
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
                            <li
                              key={index}
                              className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 squared-md"
                              style={{ fontSize: `${fontSize * 0.85}px` }}
                            >
                              <div className="flex items-start">
                                <div className="bg-green-100 squared-lg p-2 mr-3 flex-shrink-0">
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
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8 p-4 bg-blue-50 squared border border-blue-100">
                          <h3
                            className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-blue-700 mb-2"
                            style={{ fontSize: `${fontSize * 1.1}px` }}
                          >
                            Guide Certification
                          </h3>
                          <p
                            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-blue-800 leading-[1.8] text-[0.9rem]"
                            style={{ fontSize: `${fontSize * 0.9}px` }}
                          >
                            All guides must complete KFS-approved training and certification programs to ensure compliance with these standards. Regular refresher courses are mandatory.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {activeSubTab === 'visitors' && (
                    <motion.div
                      key="visitors"
                      variants={tabContentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <h2
                        className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-6 text-[1.6rem] sm:text-[2rem] leading-[1.3] tracking-[0.5px] capitalize"
                        style={{ fontSize: `${fontSize * 1.4}px` }}
                      >
                        Code of Conduct for Visitors
                      </h2>
                      <div className="bg-white shadow-md squared-lg p-6 mb-8">
                        <p
                          className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
                          style={{ fontSize: `${fontSize * 0.9}px` }}
                        >
                          As a visitor to our public forests, you play a vital role in conservation. Please follow these guidelines to ensure minimal environmental impact and maximum benefit to local communities.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-0">
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
                            <li
                              key={guideline.number}
                              className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 squared-md"
                              style={{ fontSize: `${fontSize * 0.85}px` }}
                            >
                              <div className="flex items-start">
                                <div
                                  className="bg-green-100 squared-lg p-2 mr-3 flex-shrink-0"
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
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8 p-4 bg-blue-50 squared border border-blue-100">
                          <h3
                            className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-blue-700 mb-2"
                            style={{ fontSize: `${fontSize * 1.1}px` }}
                          >
                            The Responsible Visitor Pledge
                          </h3>
                          <p
                            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-blue-800 leading-[1.8] text-[0.9rem]"
                            style={{ fontSize: `${fontSize * 0.9}px` }}
                          >
                            By following these guidelines, you become a partner in conservation. Your responsible actions help protect Kenya's forests while supporting sustainable livelihoods for local communities.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.section>
            )}
            {activeMainTab === 'why-visit' && (
              <motion.section
                key="why-visit"
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
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
              <div className="flex-1 bg-green-50 squared -lg p-4 flex items-center justify-center">
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
                <div key={index} className="bg-green-50 squared-lg p-4">
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
                      className="bg-green-100 text-[#0f5a28] px-3 py-1 squared-full text-sm font-['Peugeot',Helvetica,sans-serif]"
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
                        className="bg-blue-100 text-blue-800 px-3 py-1 squared-full text-sm font-['Peugeot',Helvetica,sans-serif]"
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
            <div className="bg-[#1a3c34] squared-lg p-6 text-center">
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
                  className="bg-white text-[#0f5a28] font-semibold px-6 py-3 squared-lg shadow hover:bg-gray-100 transition flex items-center justify-center gap-2"
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
                  className="bg-yellow-400 text-[#0f5a28] font-semibold px-6 py-3 squared-lg shadow hover:bg-yellow-300 transition flex items-center justify-center gap-2"
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
              </motion.section>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-20">
          <button
            onClick={() => handleFontSizeChange(true)}
            className="bg-[#1a3c34] p-2 squared-full hover:bg-green-800 transition-colors duration-300"
            aria-label="Increase font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </button>
          <button
            onClick={() => handleFontSizeChange(false)}
            className="bg-[#1a3c34] p-2 squared-full hover:bg-green-800 transition-colors duration-300"
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