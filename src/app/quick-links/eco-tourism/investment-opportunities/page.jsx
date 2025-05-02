'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

const InvestmentOpportunitiesPage = () => {
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
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
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
                  className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  className="bg-green-100 p-4 rounded-lg shadow transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
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
            <div className="mt-6 p-4 bg-green-200 rounded-lg shadow">
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

export default InvestmentOpportunitiesPage;