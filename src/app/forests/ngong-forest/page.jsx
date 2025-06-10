'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

const NgongHillsPage = () => {
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
          className="bg-white/95 p-12 max-w-6xl w-full relative z-10 border border-white/30"
        >
          {/* Hero Section */}
          <section className="mb-12">
            <h1
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
              style={{ fontSize: `${fontSize * 1.5}px` }}
            >
              Ngong Hills Forest
            </h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Ngong Hills Forest is located in the northern tip of Kajiado County and it's about 25Km from Nairobi city. The forest covers an area of 3077.6 ha. It is managed by Kenya Forest Service (KFS).
                </p>
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-2xl mb-3"
                    style={{ fontSize: `${fontSize * 1.1}px` }}
                  >
                    Quick Facts
                  </h2>
                  <ul className="space-y-2">
                    {[
                      { label: 'Location', value: 'Kajiado County, 25km from Nairobi' },
                      { label: 'Area', value: '3,077.6 hectares' },
                      { label: 'Managed by', value: 'Kenya Forest Service (KFS)' },
                      { label: 'Visiting Hours', value: '6:00 AM - 6:00 PM' },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                      >
                        <span
                          className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]"
                          style={{ fontSize: `${fontSize * 0.85}px` }}
                        >
                          <strong>{item.label}:</strong> {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/Eco-tourism/NgongHillsForest/Ngong-Hills-Forest-Reserve-Ngong-Kenya-TortoisePathcom-6-jpeg.webp"
                  alt="Panoramic view of Ngong Hills"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </section>

          {/* Flora Section */}
          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-3xl mb-4 border-b pb-2"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Flora
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  The vegetation of Ngong Hills forest includes exotic and indigenous trees. The distribution is mainly determined by altitude, soil type and human utilization of the land. Grazing and forest fires also determine the spatial variation in vegetation cover.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3
                      className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-2"
                      style={{ fontSize: `${fontSize * 0.95}px` }}
                    >
                      Exotic Trees
                    </h3>
                    <ul className="list-disc pl-5">
                      {['Pine', 'Cypress'].map((tree, index) => (
                        <li
                          key={index}
                          className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                          style={{ fontSize: `${fontSize * 0.9}px` }}
                        >
                          {tree}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3
                      className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-2"
                      style={{ fontSize: `${fontSize * 0.95}px` }}
                    >
                      Indigenous Trees
                    </h3>
                    <ul className="list-disc pl-5">
                      {['Sandalwood', 'Acacia', 'Croton'].map((tree, index) => (
                        <li
                          key={index}
                          className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                          style={{ fontSize: `${fontSize * 0.9}px` }}
                        >
                          {tree}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/Eco-tourism/NgongHillsForest/Ngong-Hills-Forest-Reserve-Ngong-Kenya-TortoisePathcom-6-jpeg.webp"
                  alt="Flora of Ngong Hills"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </section>

          {/* Fauna Section */}
          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-3xl mb-4 border-b pb-2"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Fauna
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  The forest is known to host a variety of animals which includes: buffaloes, wild pigs, porcupines, and dik-diks. These animals are residents of the forest and their movement is usually determined by factors such as drought, water availability and forage availability.
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3
                    className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                    style={{ fontSize: `${fontSize * 0.95}px` }}
                  >
                    Wildlife Safety
                  </h3>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Animals here are wild and can be dangerous. Always be accompanied by KFS Rangers when hiking to the peaks.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    src: '/images/Eco-tourism/NgongHillsForest/NgongHillsForestFauna1.jpg',
                    alt: 'Lioness in Ngong Hills',
                  },
                  {
                    src: '/images/Eco-tourism/NgongHillsForest/NgongHillsForestFauna2.jpg',
                    alt: 'Giraffe and Zebra in Ngong Hills',
                  },
                  {
                    src: '/images/Eco-tourism/NgongHillsForest/NgongHillsForestFauna3.jpg',
                    alt: 'Cheetah in Ngong Hills',
                  },
                  {
                    src: '/images/Eco-tourism/NgongHillsForest/NgongHillsForestFauna4.jpeg',
                    alt: 'Monkey in Ngong Hills',
                  },
                ].map((image, index) => (
                  <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={225}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Areas of Special Interest */}
          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-3xl mb-4 border-b pb-2"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Areas of Special Interest
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Communication Masts', description: 'High points for installation of communication masts.' },
                { title: 'Wind Power', description: '30 wind energy generation power sites.' },
                { title: 'Tourism', description: 'Attraction sites due to its vantage point and scenic beauty.' },
                { title: 'Sports Training', description: 'High altitude sports training and hiking areas.' },
                { title: 'Religious Retreats', description: 'Popular sites for religious retreats and prayers.' },
                { title: 'Scenic Views', description: 'Panoramic views of the Great Rift Valley and Nairobi city from the summit.' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-6 rounded-lg"
                >
                  <h3
                    className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-white mb-2"
                    style={{ fontSize: `${fontSize * 0.95}px` }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-white leading-[1.8] text-[0.9rem]"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Activities Section */}
          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-3xl mb-4 border-b pb-2"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Activities
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {['Hiking', 'Picnics', 'Camping', 'Viewing', 'Religious activities', 'Team building', 'Weddings'].map(
                (activity, index) => (
                  <div
                    key={index}
                    className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 rounded-lg text-center"
                  >
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      {activity}
                    </p>
                  </div>
                )
              )}
            </div>
          </section>

          {/* Getting There Section */}
          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-3xl mb-4 border-b pb-2"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Getting There and Around
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3"
                  style={{ fontSize: `${fontSize * 0.95}px` }}
                >
                  Public Transport
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4
                      className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] mb-1"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      To Ngong Entry Point:
                    </h4>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      Board matatu no. 111 from Railways Matatu Terminus and alight at Ngong town (about 2km to entry point).
                    </p>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-2"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      Options from Ngong town:
                    </p>
                    <ul className="list-disc pl-5">
                      {['Walk (2km)', 'Bodaboda (Ksh 100)'].map((option, index) => (
                        <li
                          key={index}
                          className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                          style={{ fontSize: `${fontSize * 0.9}px` }}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4
                      className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] mb-1"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      To Corner Baridi Entry Point:
                    </h4>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      Board matatu no. 112 from Railways Matatu Terminus and alight at Kiserian town (about 2km to entry point).
                    </p>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-2"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      Options from Kiserian town:
                    </p>
                    <ul className="list-disc pl-5">
                      {['Walk (2km)', 'Bodaboda (Ksh 100)'].map((option, index) => (
                        <li
                          key={index}
                          className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                          style={{ fontSize: `${fontSize * 0.9}px` }}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3"
                  style={{ fontSize: `${fontSize * 0.95}px` }}
                >
                  Private Transport
                </h3>
                <div className="bg-green-50 p-6 rounded-lg">
                  <ul className="space-y-3">
                    {[
                      { label: 'Taxi from Nairobi city centre to Ngong entry point', value: '~Ksh 2,000' },
                      { label: 'Taxi from Nairobi city centre to Corner Baridi entry point', value: '~Ksh 2,500' },
                      { label: 'Taxi from Ngong town to Ngong entry point', value: '~Ksh 500' },
                      { label: 'Taxi from Kiserian town to Corner Baridi entry point', value: '~Ksh 500' },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                      >
                        <span
                          className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]"
                          style={{ fontSize: `${fontSize * 0.85}px` }}
                        >
                          <strong>{item.label}:</strong> {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Visiting Information */}
          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-3xl mb-4 border-b pb-2"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Visiting Information
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                  style={{ fontSize: `${fontSize * 0.95}px` }}
                >
                  Visiting Hours
                </h3>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  6:00 AM to 6:00 PM
                </p>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.8rem] mt-2"
                  style={{ fontSize: `${fontSize * 0.8}px` }}
                >
                  Entry tickets are available at entry points. For early visits, arrange to obtain tickets a day before.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                  style={{ fontSize: `${fontSize * 0.95}px` }}
                >
                  What to Wear & Carry
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  {[
                    'Comfortable shoes/trainers',
                    'Loose fitting clothing for hikes',
                    'Warm clothing for wind power sites',
                    'Camera, binoculars',
                    'Drinking water',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                  style={{ fontSize: `${fontSize * 0.95}px` }}
                >
                  Climate
                </h3>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Short rains: October-December
                </p>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Long rains: March-May
                </p>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-2"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Annual rainfall varies between 400mm and 1200mm depending on altitude.
                </p>
              </div>
            </div>
          </section>

          {/* Rules and Guidelines */}
          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-3xl mb-4 border-b pb-2"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Important Guidelines
            </h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                {[
                  'Enjoy yourself; in addition to seeing, pause and listen regularly.',
                  'Stop to allow wildlife to move off the tracks before you pass.',
                  'Do not feed wild animals.',
                  'Do not start fires in the forest.',
                  'Do not take away animals, animal products, plants or plant parts.',
                  'Do not mark or deface tree stems, stones and other features.',
                  'Avoid noise as it disturbs both wildlife and other visitors.',
                  'Be careful as animals here are wild and can be dangerous.',
                  'Take all the litter that you brought away with you.',
                  'Keep to the designated tracks and paths when walking.',
                  'Single use plastic bottles not allowed.',
                  'Those hiking to the peaks must be accompanied by KFS Rangers for security.',
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
            </div>
          </section>

          {/* Entry Fees & Contact */}
          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-3xl mb-4 border-b pb-2"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Entry Fees & Contact
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                  style={{ fontSize: `${fontSize * 0.95}px` }}
                >
                  Entry Fees
                </h3>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Forest conservation fee is charged at the point of entry. For current rates, enquire from the contacts below.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                  style={{ fontSize: `${fontSize * 0.95}px` }}
                >
                  Contact Information
                </h3>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-medium text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  The Forester in Charge
                </p>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Ngong Hills Forest Station
                </p>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-2"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  <span className="font-medium">Mobile:</span> 0797 480784 or 0755 838360
                </p>
              </div>
            </div>
          </section>

          {/* Image Gallery */}
          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-3xl mb-4 border-b pb-2"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Gallery
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  src: '/images/Eco-tourism/NgongHillsForest/Power-generating-wind-turbines.jpg',
                  alt: 'Power generating wind turbines',
                },
                {
                  src: '/images/Eco-tourism/NgongHillsForest/Visitors-taking-a-walk-to-the-view-point.jpg',
                  alt: 'Visitors taking a walk to the view point',
                },
                {
                  src: '/images/Eco-tourism/NgongHillsForest/One-of-the-view-points.jpg',
                  alt: 'One of the view points',
                },
                {
                  src: '/images/Eco-tourism/NgongHillsForest/Picnic-site-and-grounds-for-hire.jpg',
                  alt: 'Picnic site and grounds for hire',
                },
              ].map((image, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={225}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              ))}
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

export default NgongHillsPage;