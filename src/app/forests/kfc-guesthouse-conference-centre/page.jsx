'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

const KFCGuesthousePage = () => {
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
          {/* Hero Section */}
          <section className="mb-12">
            <h1
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-2 text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
              style={{ fontSize: `${fontSize * 1.5}px` }}
            >
              KFC Guesthouse & Conference Centre
            </h1>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#0f5a28] leading-[1.8] text-[1rem] mb-6"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Nestled in the serene Masaita Forest, Londiani
            </p>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src="/images/Eco-tourism/KFCGuestHouseandConference/Interior-of-the-ensuite-rooms-1-300x225.jpg"
                alt="KFC Guesthouse and Conference Centre exterior"
                width={900}
                height={600}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </section>

          {/* Location Section */}
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2
                  className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-3xl mb-4"
                  style={{ fontSize: `${fontSize * 1.2}px` }}
                >
                  Location
                </h2>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Kenya Forestry College (KFC) operates a guesthouse and conference centre within their compound in Londiani, Kericho County. KFC Guesthouse & Conference Centre is nested at the base of a lushly forested hill in Masaita Forest Block.
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3
                    className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                    style={{ fontSize: `${fontSize * 0.95}px` }}
                  >
                    Distance From:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { label: 'Nakuru-Kericho highway', value: '4km' },
                      { label: 'Nakuru town', value: '65km' },
                      { label: 'Nairobi city', value: '222km' },
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
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="h-full flex items-center justify-center">
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-500 p-4 leading-[1.8] text-[0.9rem]"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Map showing location of KFC Guesthouse in Londiani
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Accommodation Section */}
          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-3xl mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Accommodation
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  Main Guesthouse
                </h3>
                <ul className="space-y-2 mb-4">
                  <li
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    12 spacious ensuite rooms
                  </li>
                  <li
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Each room features:
                    <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0 mt-1">
                      {[
                        'Queen size bed',
                        'Study area',
                        'Dressing table with mirror',
                        'Instant showers',
                        'Adjoining lounge area with fireplace and TV',
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
                  </li>
                </ul>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/Eco-tourism/KFCGuestHouseandConference/Interior-of-the-ensuite-rooms-1-300x225.jpg"
                  alt="Interior of the ensuite rooms"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 rounded-lg overflow-hidden order-last md:order-first">
                <Image
                  src="/images/Eco-tourism/KFCGuestHouseandConference/The-Lounge-Area-1-300x225.jpg"
                  alt="Additional accommodation units"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div>
                <h3
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  Additional Accommodation
                </h3>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                  {[
                    '44 single ensuite rooms within the compound',
                    '10 single rooms in 2 prefab units',
                    'Ideal for large groups and institutional bookings',
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

          {/* Conference Facilities */}
          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-3xl mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Conference Facilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-green-50 p-6 rounded-lg mb-4">
                  <h3
                    className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                    style={{ fontSize: `${fontSize * 0.95}px` }}
                  >
                    Meeting Rooms
                  </h3>
                  <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                    {[
                      '1 large room seating 60 persons',
                      '1 medium room seating 40 persons',
                      '4 standard rooms seating 25 persons each',
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
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  KFC Guesthouse & Conference Centre is an ideal destination for institutional and corporate groups that wish to retreat or work in a quiet environment.
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3
                    className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                    style={{ fontSize: `${fontSize * 0.95}px` }}
                  >
                    Outdoor Activities
                  </h3>
                  <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                    {[
                      'Use of well-manicured pitches within the compound',
                      'Walking, jogging or cycling in forest trails',
                      'Hill ascent for panoramic views',
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
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/Eco-tourism/KFCGuestHouseandConference/KFC-Conference-Centre-Interior-1-300x225.jpg"
                  alt="KFC Conference Centre Interior"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-3xl mb-6 text-center"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Facility Highlights
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: '/images/Eco-tourism/KFCGuestHouseandConference/The-Lounge-Area-1-300x225.jpg', alt: 'The Lounge Area' },
                { src: '/images/Eco-tourism/KFCGuestHouseandConference/The-Lounge-Area-1-300x225.jpg', alt: 'Guest house and Conference Centre' },
                { src: '/images/Eco-tourism/KFCGuestHouseandConference/The-Lounge-Area-1-300x225.jpg', alt: 'Panoramic view of Masaita Forest' },
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

          {/* Booking Section */}
          <section className="mb-12 bg-[#1a3c34] text-white p-8 rounded-lg">
            <div className="max-w-2xl mx-auto text-center">
              <h2
                className="font-['Peugeot',Helvetica,sans-serif] font-bold text-3xl mb-4"
                style={{ fontSize: `${fontSize * 1.2}px` }}
              >
                Book Your Stay or Event
              </h2>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal leading-[1.8] text-[1rem] mb-6"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Experience tranquility in the heart of Masaita Forest
              </p>
              <div className="bg-white text-[#0f5a28] p-6 rounded-lg">
                <h3
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-2xl mb-3"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  For bookings and enquiries:
                </h3>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-bold text-2xl mb-2"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  020-2439901
                </p>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Or contact Kenya Forestry College directly
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-3xl mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Contact Information
            </h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3
                className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                style={{ fontSize: `${fontSize * 0.95}px` }}
              >
                Kenya Forestry College
              </h3>
              <address className="not-italic">
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Londiani Town
                </p>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  P.O. Box 8-20203
                </p>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Londiani
                </p>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-3"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  <span className="font-medium">Telephone:</span> 020 2439901
                </p>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  <span className="font-medium">Email:</span> college@kenyaforestservice.org
                </p>
              </address>
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

export default KFCGuesthousePage;