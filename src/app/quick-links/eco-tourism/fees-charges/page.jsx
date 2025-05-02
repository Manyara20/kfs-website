'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

const FeesAndChargesPage = () => {
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
              Fees & Charges
            </h1>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              The following charges apply (all exclusive of VAT):
            </p>
            <div className="space-y-6">
              <div className="bg-green-100 p-4 rounded-lg shadow-md">
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
              <div className="bg-green-100 p-4 rounded-lg shadow-md">
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
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                  {[
                    'Hire of grounds (Urban Cities): Kshs 50,000 per day',
                    'Urban Municipalities: Kshs 30,000 per day',
                    'Other areas: Kshs 15,000 per day',
                    'Filming rights: Kshs 40,000 per day',
                    'Sporting activities: Cycling (Kshs 100), Horse riding (Kshs 300)',
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

export default FeesAndChargesPage;