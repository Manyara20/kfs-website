'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import { FaTree } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Link from 'next/link';
import Image from 'next/image';

// Fallback image for debugging
const FALLBACK_IMAGE = '/images/forests/fallback.jpg';

const forestList = [
  {
    name: 'Ngong Hills Forest',
    image: '/images/forests/Ngong-Hills-Hiking-Trail.jpg',
    href: '/forests/ngong-forest',
  },
  {
    name: 'Karura Forest',
    image: '/images/forests/karura.jpg',
    href: '/forests/karura-forest',
  },
  {
    name: 'Kakamega Forest',
    image: '/images/forests/kakamega.jpg',
    href: '/forests/kakamega-forest',
  },
  {
    name: 'Hombe Forest',
    image: '/images/forests/hombe.jpg',
    href: '/forests/hombe-forest-guesthouse',
  },
  {
    name: 'Arabuko Sokoke',
    image: '/images/forests/arabuko.jpeg',
    href: '/forests/arabuko-sokoke-forest',
  },
  {
    name: 'Menengai Forest',
    image: '/images/forests/menengai.jpg',
    href: '/forests/menengai-forest',
  },
  {
    name: 'Mt. Kenya Forest',
    image: '/images/forests/mt.kenya.jpg',
    href: '/forests/mt-kenya-forest',
  },
  {
    name: 'Ngare Ndare',
    image: '/images/forests/ngare.png',
    href: '/forests/ngare-ndare-forest',
  },
  {
    name: 'Nairobi Arboretum',
    image: '/images/forests/arboretum.jpg',
    href: '/forests/arboretum-forest',
  },
  {
    name: 'Ndaragwa Nature Trail',
    image: '/images/forests/ndaragwa.webp',
    href: '/forests/ndaragwa-nature-trail',
  },
  {
    name: 'Eburu Forest',
    image: '/images/forests/eburu.jpg',
    href: '/forests/eburu-forest',
  },
  {
    name: 'Castle Forest',
    image: '/images/forests/castle.jpeg',
    href: '/forests/castle-forest',
  },
  {
    name: 'Michuki Memorial Conservation Park',
    image: '/images/forests/michuki.jpg',
    href: '/forests/michuki-memorial-conservation',
  },
];

const NgareNdareForestPage = () => {
  const [fontSize, setFontSize] = useState(16);
  const [activeTab, setActiveTab] = useState('forest-activities');
  const [showDrawer, setShowDrawer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: 'forest-activities', label: 'Activities' },
    { id: 'how-to-get-there', label: 'Getting There' },
    { id: 'park-entry-fee', label: 'Fees' },
    { id: 'key-features', label: 'Features' },
    { id: 'attractions', label: 'Attractions' },
    { id: 'contact-us', label: 'Contact' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const tabContentVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
  };

  const handleImageError = (src) => {
    console.error(`Failed to load image: ${src}`);
    setImageError((prev) => ({ ...prev, [src]: true }));
  };

  return (
    <div>
      <MainNavBar />
      {/* Hero */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/forests/ngare.png')",
        }}
      >
        <div className="absolute inset-0" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1
            className="font-['Peugeot',Helvetica,sans-serif] font-bold text-white text-[2.2rem] sm:text-[3rem] leading-[1.3] tracking-[0.5px] capitalize"
            style={{ fontSize: `${fontSize * 2}px` }}
          >
            Ngare Ndare Forest
          </h1>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-white leading-[1.8] text-[1rem] mt-4"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            A hidden gem on Mount Kenya’s foothills, rich in biodiversity and adventure
          </p>
        </div>
      </div>

      {/* Main Content */}
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

        {/* Tabs Navigation */}
        <div className="w-full max-w-5xl mx-auto mb-6 z-10">
          <div className="flex overflow-x-auto whitespace-nowrap border-b border-green-200 scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-transparent">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-2 text-sm sm:text-base font-semibold transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'text-green-600 border-b-4 border-green-600'
                    : 'text-white hover:text-green-400'
                }`}
                aria-label={`View ${tab.label}`}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={cardVariants}
          className="bg-white/95 p-6 sm:p-8 md:p-10 max-w-5xl w-full relative z-10 border border-white/30 squared-lg shadow-lg"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabContentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {activeTab === 'forest-activities' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Forest Activities
                  </h2>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Ngare Ndare Forest offers thrilling and serene activities for nature enthusiasts.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      'Canopy walkway adventure',
                      'Guided nature walks',
                      'Bird watching',
                      'Treetop camping',
                      'Swimming in blue pools',
                      'Wildlife tracking',
                    ].map((activity, i) => (
                      <li
                        key={i}
                        className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 squared-md"
                        style={{ fontSize: `${fontSize * 0.85}px` }}
                      >
                        <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                          {activity}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative h-64 md:h-96 squared-lg overflow-hidden mt-8">
                    <Image
                      src={imageError['/images/forests/ngare.png'] ? FALLBACK_IMAGE : '/images/forests/ngare.png'}
                      alt="Ngare Ndare canopy walkway"
                      width={900}
                      height={600}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError('/images/forests/ngare-canopy.jpg')}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+/btPQAH7QL0fGWrkwAAAABJRU5ErkJggg=="
                    />
                  </div>
                </section>
              )}
              {activeTab === 'how-to-get-there' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    How to Get There
                  </h2>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Ngare Ndare Forest is located on the northern foothills of Mount Kenya, approximately 40 km from Nanyuki and 250 km from Nairobi.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      🚗 <strong>By Car:</strong> Drive from Nairobi via Nanyuki along the Nanyuki–Meru road (approx. 4-5 hours). The forest entrance is well-signposted.
                    </li>
                    <li
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      🚌 <strong>By Public Transport:</strong> Take a matatu or bus from Nairobi to Nanyuki, then a matatu to the forest entrance or arrange a taxi.
                    </li>
                    <li
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      📍 <strong>Location:</strong> Contact Ngare Ndare Forest Trust for precise GPS coordinates or directions.
                    </li>
                  </ul>
                  <div className="relative h-64 squared-lg overflow-hidden mt-6 bg-gray-200">
                    <div className="flex items-center justify-center h-full">
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] text-gray-500"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        Map of Ngare Ndare Forest location
                      </p>
                    </div>
                  </div>
                </section>
              )}
              {activeTab === 'park-entry-fee' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Entry & Activity Fees
                  </h2>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Ngare Ndare Forest charges conservation and activity fees to support its preservation efforts.
                  </p>
                  <div className="bg-green-100 p-6 squared-lg shadow-md">
                    <ul className="space-y-2">
                      {[
                        { label: 'Residents/Citizens', fees: 'KES 2,000 (day trip), KES 3,000 (camping/night)' },
                        { label: 'Non-Residents', fees: 'KES 4,000 (day trip), KES 5,000 (camping/night)' },
                        { label: 'Children (10–15 years)', fees: 'Half price; under 10: Free' },
                        { label: 'Primary Schools', fees: 'KES 300 per pupil' },
                        { label: 'Secondary Schools', fees: 'KES 500 per student' },
                        { label: 'Local Groups (10+ people)', fees: 'KES 1,500 (day), KES 2,000 (camping/night)' },
                        { label: 'Vehicle Fee', fees: 'KES 500 (14-seater or below), KES 1,000 (above 14-seater)' },
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                          style={{ fontSize: `${fontSize * 0.9}px` }}
                        >
                          <strong>{item.label}:</strong> {item.fees}
                        </li>
                      ))}
                    </ul>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-4"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      📧 <span className="font-medium">Email:</span>{' '}
                      <a
                        href="mailto:info@ngarendare.org"
                        className="text-[#0f5a28] font-semibold hover:underline"
                      >
                        info@ngarendare.org
                      </a>
                    </p>
                  </div>
                </section>
              )}
              {activeTab === 'key-features' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Key Features
                  </h2>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Ngare Ndare Forest, spanning 13,689 acres, is a UNESCO World Heritage site known for its conservation efforts and biodiversity.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      '450-metre canopy walkway',
                      'UNESCO World Heritage status',
                      'Vital elephant corridor',
                      'Over 200 bird species',
                      'Treetop camping platforms',
                      'Conservation by Ngare Ndare Forest Trust',
                      'Community support programs',
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 squared-md"
                        style={{ fontSize: `${fontSize * 0.85}px` }}
                      >
                        <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative h-64 md:h-96 squared-lg overflow-hidden mt-8">
                    <Image
                      src={imageError['/images/forests/ngare.png'] ? FALLBACK_IMAGE : '/images/forests/ngare.png'}
                      alt="Ngare Ndare blue pools"
                      width={900}
                      height={600}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError('/images/forests/ngare-pools.jpg')}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+/btPQAH7QL0fGWrkwAAAABJRU5ErkJggg=="
                    />
                  </div>
                </section>
              )}
              {activeTab === 'attractions' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Attractions
                  </h2>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Ngare Ndare Forest, a protected indigenous forest, serves as a critical wildlife corridor connecting Mount Kenya to Lewa Wildlife Conservancy.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-100 p-6 squared-lg shadow-md">
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28]"
                        style={{ fontSize: `${fontSize * 1.1}px` }}
                      >
                        Wildlife and Biodiversity
                      </h3>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        Home to endangered species, colobus monkeys, over 200 bird species, and large mammals like elephants. Managed by the Ngare Ndare Forest Trust.
                      </p>
                    </div>
                    <div className="bg-green-100 p-6 squared-lg shadow-md">
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28]"
                        style={{ fontSize: `${fontSize * 1.1}px` }}
                      >
                        Top Attractions
                      </h3>
                      <ul className="list-disc pl-5">
                        {[
                          '450-metre canopy walkway',
                          'Blue pools and waterfalls',
                          'Treetop camping platforms',
                          'Guided nature walks',
                          'Wildlife corridor tunnel',
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                            style={{ fontSize: `${fontSize * 0.9}px` }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <h3
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] mt-6 mb-4 text-[1.4rem] sm:text-[1.8rem]"
                    style={{ fontSize: `${fontSize * 1.2}px` }}
                  >
                    Photo Gallery
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      {
                        src: '/images/forests/ngare.png',
                        alt: 'Ngare Ndare canopy walkway',
                        caption: 'Canopy Walkway',
                      },
                      {
                        src: '/images/forests/ngare.png',
                        alt: 'Blue pools in Ngare Ndare Forest',
                        caption: 'Blue Pools',
                      },
                      {
                        src: '/images/forests/ngare.png',
                        alt: 'Elephant corridor tunnel',
                        caption: 'Elephant Corridor',
                      },
                      {
                        src: imageError['/images/forests/ngare.png'] ? FALLBACK_IMAGE : '/images/forests/ngare.png',
                        alt: 'Ngare Ndare canopy walkway view',
                        caption: 'Canopy View',
                      },
                      {
                        src: imageError['/images/forests/ngare.png'] ? FALLBACK_IMAGE : '/images/forests/ngare.png',
                        alt: 'Ngare Ndare blue pools close-up',
                        caption: 'Blue Pools Close-Up',
                      },
                    ].map((image, index) => (
                      <div
                        key={index}
                        className="relative squared-lg overflow-hidden shadow-md"
                        style={{ height: `${fontSize * 12}px` }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={300}
                          height={225}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(image.src)}
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+/btPQAH7QL0fGWrkwAAAABJRU5ErkJggg=="
                        />
                        <p
                          className="absolute bottom-0 left-0 right-0 text-white p-2 font-['Peugeot',Helvetica,sans-serif] text-[0.8rem]"
                          style={{ fontSize: `${fontSize * 0.8}px` }}
                        >
                          {image.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
              {activeTab === 'contact-us' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Contact Information
                  </h2>
                  <div className="bg-green-100 p-6 squared-lg shadow-md">
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      📍 <span className="font-medium">Address:</span> Ngare Ndare Forest Trust, P.O. Box 149, Nanyuki, Kenya
                    </p>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-2"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      📞 <span className="font-medium">Phone:</span>{' '}
                      <a
                        href="tel:+254724999986"
                        className="text-[#0f5a28] font-semibold hover:underline"
                      >
                        +254 724 999986
                      </a>
                    </p>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-2"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      📧 <span className="font-medium">Email:</span>{' '}
                      <a
                        href="mailto:info@ngarendare.org"
                        className="text-[#0f5a28] font-semibold hover:underline"
                      >
                        info@ngarendare.org
                      </a>
                    </p>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-2"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      🌐 <span className="font-medium">Website:</span>{' '}
                      <a
                        href="http://www.ngarendare.org"
                        className="text-[#0f5a28] font-semibold hover:underline"
                      >
                        www.ngarendare.org
                      </a>
                    </p>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-4"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      <strong>Additional Contact:</strong>
                    </p>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      📍 <span className="font-medium">Address:</span> Kenya Forest Service, Karura, Off Kiambu Road, P.O. Box 30513 – 00100 Nairobi, Kenya
                    </p>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-2"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      📧 <span className="font-medium">Email:</span>{' '}
                      <a
                        href="mailto:info@kenyaforestservice.org"
                        className="text-[#0f5a28] font-semibold hover:underline"
                      >
                        info@kenyaforestservice.org
                      </a>
                    </p>
                  </div>
                </section>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Floating Forests Button */}
        <button
          onClick={() => setShowDrawer(true)}
          className="fixed top-[35%] right-4 z-50 bg-[#1a3c34] hover:bg-green-800 text-white p-3 squared-full shadow-lg transition"
          title="Explore Other Forests"
        >
          <FaTree className="text-xl" />
        </button>

        {/* Side Drawer */}
        <AnimatePresence>
          {showDrawer && (
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-[300px] sm:w-[400px] h-full bg-white shadow-xl z-50 p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2
                  className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-xl"
                  style={{ fontSize: `${fontSize * 1.2}px` }}
                >
                  Discover Other Forests
                </h2>
                <button
                  onClick={() => setShowDrawer(false)}
                  className="text-[#0f5a28] hover:text-green-900"
                >
                  <AiOutlineClose className="text-2xl" />
                </button>
              </div>

              <div className="space-y-4">
                {forestList.map((forest) => (
                  <Link href={forest.href} key={forest.name} className="block group">
                    <div className="relative overflow-hidden squared-xl shadow-lg group-hover:scale-[1.01] transition">
                      <Image
                        src={imageError[forest.image] ? FALLBACK_IMAGE : forest.image}
                        alt={forest.name}
                        width={400}
                        height={160}
                        className="w-full h-40 object-cover"
                        onError={() => handleImageError(forest.image)}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+/btPQAH7QL0fGWrkwAAAABJRU5ErkJggg=="
                      />
                      <div className="absolute inset-0 group-hover:bg-opacity-50 transition" />
                      <div
                        className="absolute bottom-0 p-4 text-white font-['Peugeot',Helvetica,sans-serif] font-semibold"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        {forest.name}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Font Size Controls */}
        <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-20">
          <button
            onClick={() => setFontSize((prev) => Math.min(prev + 1, 20))}
            className="bg-[#1a3c34] p-2 squared-full hover:bg-green-800 transition-colors duration-300"
            aria-label="Increase font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </button>
          <button
            onClick={() => setFontSize((prev) => Math.max(prev - 1, 12))}
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

export default NgareNdareForestPage;