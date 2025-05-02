'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

const MenengaiForestPage = () => {
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
            className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-8 text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
            style={{ fontSize: `${fontSize * 1.5}px` }}
          >
            Menengai Forest
          </h1>

          <section className="mb-12">
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              The Menengai Caldera in Menengai Forest Station is a large shield volcano located in the Great Rift Valley, 10 km North of Nakuru town. It covers an area of approximately 90 km², with a diameter of 12 km and a depth of almost half a kilometer. It is one of the largest calderas in the world and the second most visited caldera globally.
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-xl mb-2"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Menengai Forest Biodiversity
            </h2>
            <h3
              className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-lg mt-4"
              style={{ fontSize: `${fontSize * 0.95}px` }}
            >
              Flora
            </h3>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Over 169 species of flowering plants and 17 species of grasses have been recorded, including Leleshwa (Tarconanthus camphorates), Euphorbia species, and Acacia species. Common grasses include geothermal grass (Fibristylis exilis) and Boma Rhode grass.
            </p>
            <h3
              className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-lg mt-4"
              style={{ fontSize: `${fontSize * 0.95}px` }}
            >
              Fauna
            </h3>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Menengai is home to various mammals, including Rock Hyrax, Tree Hyrax, Olive Baboons, Black-faced Vervet Monkeys, Mountain Reedbucks, Kirk’s Dik-diks, and Slender Mongoose. Bird species found here include Varreaux Eagles (exclusive to Menengai in Nakuru), Abyssinian Ground Hornbills, Lesser Spotted Eagles, African Marsh Harriers, Horus Swift Apus Hours, Turn-tailed Ravens, and Red-winged Starlings. Insects include Arachnids, Molluscs, and diverse butterfly species.
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-xl mb-2"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Attractions
            </h2>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
              {[
                'The Menengai Caldera',
                'Viewpoint',
                'Geothermal energy production',
                'Caves',
                'Nature trails',
                'Picnic sites',
                'Fumaroles',
              ].map((item, index) => (
                <li
                  key={index}
                  className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                  style={{ fontSize: `${fontSize * 0.85}px` }}
                >
                  <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6] capitalize">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-xl mb-2"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Facilities
            </h2>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
              {['Curio shops', 'Campsites'].map((item, index) => (
                <li
                  key={index}
                  className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                  style={{ fontSize: `${fontSize * 0.85}px` }}
                >
                  <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6] capitalize">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-xl mb-2"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Activities
            </h2>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
              {[
                'Educational tours',
                'Nature walking',
                'Bird watching',
                'Butterfly watching',
                'Hiking',
                'Picnicking',
                'Camping',
                'Rock climbing',
                'Cycling',
                'Horse riding',
                'Jogging',
              ].map((activity, index) => (
                <li
                  key={index}
                  className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                  style={{ fontSize: `${fontSize * 0.85}px` }}
                >
                  <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6] capitalize">
                    {activity}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-xl mb-2"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Getting There
            </h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Menengai Caldera is located in Nakuru town, 160 km west of Nairobi. To reach it, take the road towards Nairobi, turn left after the railway bridge, turn right after 300 meters onto Milimani Road, and finally, turn left after 700 meters onto Menengai Road. The main gate is 1.2 km from this turn.
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-xl mb-2"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Getting Around
            </h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              The forest features a network of driving tracks and walking trails.
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-xl mb-2"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Guides
            </h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Experienced guides are available at a fee. Inquire about guiding services at the main gate.
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-xl mb-2"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Entry Fees
            </h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Forest conservation fees are charged at the entry point. For current rates, contact the provided details.
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-xl mb-2"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Visiting Hours
            </h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Visitors are allowed from 6:00 am to 6:00 pm unless they arrange for an overnight stay.
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-xl mb-2"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              What to Wear and Carry
            </h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Wear comfortable walking shoes, trainers, and loose-fitting lightweight clothing. A hat, sunglasses, and sunscreen are useful. Carry binoculars and a camera.
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-xl mb-2"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Important Guidelines
            </h2>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
              {[
                'Be careful at viewpoints and cliffs as they are deep and dangerous.',
                'Do not feed wild animals.',
                'Do not start fires.',
                'Do not remove plants, animals, or their parts.',
                'Do not deface trees, rocks, or landmarks.',
                'Avoid excessive noise.',
                'Drive cautiously and keep speeds below 40 kph.',
                'Dispose of all litter properly.',
                'Stay on designated tracks and paths.',
                'Use a guide for an enriched experience.',
                'Single-use plastic bottles are not allowed.',
              ].map((rule, index) => (
                <li
                  key={index}
                  className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                  style={{ fontSize: `${fontSize * 0.85}px` }}
                >
                  <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-xl mb-2"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Contact Information
            </h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Forest Manager: +254794869229 / +254755839561
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Kenya Forest Service
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Karura, Off Kiambu Road
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              P.O. Box 30513 – 00100 Nairobi, Kenya
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Email: zmnakuru@kenyaforestservice.org, info@kenyaforestservice.org, ecotourism@kenyaforestservice.org
            </p>
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

export default MenengaiForestPage;