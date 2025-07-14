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

const forestList = [
  {
    name: 'Ngong Hills Forest',
    image: '/images/forests/Ngong-Hills-Hiking-Trail.jpg',
    href: '/forests/ngong-forest',
  },
  {
    name: 'Karura Forest',
    image: '/images/forests/karura.jpg',
    subtitle: 'Urban oasis with trails and waterfalls',
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
    name: 'Ngong Hills Forest',
    image: '/images/forests/ngong.jpeg',
    href: '/forests/ngong-forest',
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
    name: 'Michuki Memorial Conservation Forest',
    image: '/images/forests/michuki.jpg',
    href: '/forests/michuki-memorial-conservation',
  },
];

const NairobiArboretumPage = () => {
  const [fontSize, setFontSize] = useState(16);
  const [activeTab, setActiveTab] = useState('history');
  const [showDrawer, setShowDrawer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: 'history', label: 'History' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'plants', label: 'Plants' },
    { id: 'activities', label: 'Activities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'visiting', label: 'Visiting' },
    { id: 'contact', label: 'Contact' },
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

  return (
    <div>
      <MainNavBar />
      {/* Hero */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://th.bing.com/th/id/R.656a82d1c6b531018a6baa2fc2a75f0d?rik=g4b3ay7zXi9ZKQ&pid=ImgRaw&r=0')",
        }}
      >
        <div className="absolute inset-0" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1
            className="font-['Peugeot',Helvetica,sans-serif] font-bold text-white text-[2.2rem] sm:text-[3rem] leading-[1.3] tracking-[0.5px] capitalize"
            style={{ fontSize: `${fontSize * 2}px` }}
          >
            Nairobi Arboretum
          </h1>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-white leading-[1.8] text-[1rem] mt-4"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            A 30.4 hectare urban forest sanctuary just 3km from Nairobi city center
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
              {activeTab === 'history' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    History
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        Established in 1907 by Mr. Battiscombe, Deputy Conservator of forests mainly as a site for exotic tree species trials. This was because foresters in Kenya had become concerned that indigenous trees that the railway relied on were getting depleted faster than they could regenerate.
                      </p>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        To add to the tree species, Mr. H.M. Gardner (Chief Conservators of Forests) also collected indigenous shrubs and trees that were introduced there each year in spite of drought and diseases.
                      </p>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        Arboretum Forest Station was gazetted as protected Forest Reserves in 1932 and is managed by Kenya Forest Service (KFS).
                      </p>
                      <div className="relative h-64 squared-lg overflow-hidden mt-6">
                        <Image
                          src="/images/Eco-tourism/NairobiArboretum/Nairobi-Arboretum-2.jpg"
                          alt="Panoramic view of Nairobi Arboretum"
                          width={900}
                          height={600}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                    </div>
                    <div className="bg-green-50 p-6 squared-lg">
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                        style={{ fontSize: `${fontSize * 1.1}px` }}
                      >
                        Quick Facts
                      </h3>
                      <ul className="space-y-3">
                        {[
                          { label: 'Size', value: '30.4 hectares' },
                          { label: 'Distance from CBD', value: '3 km' },
                          { label: 'Tree Species', value: '300+ (exotic and indigenous)' },
                          { label: 'Bird Species', value: '100+ (migrant and resident)' },
                          { label: 'Managed by', value: 'Kenya Forest Service (KFS)' },
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
                </section>
              )}
              {activeTab === 'wildlife' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Wildlife
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-green-50 p-6 squared-lg">
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                        style={{ fontSize: `${fontSize * 0.95}px` }}
                      >
                        Mammals
                      </h3>
                      <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                        {[
                          'Vervet Monkeys (Black-faced guenon)',
                          'Sykes/Blue Monkeys',
                          'Kenya Mole rat',
                          'Four-toed hedgehog',
                          'Greater galago',
                          'Fruit bats',
                          'Mongooses',
                          'Squirrels',
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
                    <div className="bg-green-50 p-6 squared-lg">
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                        style={{ fontSize: `${fontSize * 0.95}px` }}
                      >
                        Birds
                      </h3>
                      <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                        {[
                          'African paradise flycatcher',
                          'White-eyed slaty flycatcher',
                          'Common bulbul',
                          'Malachite kingfisher',
                          'African pied wagtail',
                          'Common fiscal',
                          'Black kite',
                          'Hadada ibis',
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
                    <div className="bg-green-50 p-6 squared-lg">
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                        style={{ fontSize: `${fontSize * 0.95}px` }}
                      >
                        Reptiles & Butterflies
                      </h3>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-medium text-black mb-1"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        Reptiles:
                      </p>
                      <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0 mb-3">
                        {[
                          "Jackson's three-horned chameleon",
                          'High-casqued chameleon',
                          'Striped skink',
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
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-medium text-black mb-1"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        Butterflies:
                      </p>
                      <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                        {[
                          'Green-banded swallowtail',
                          'Mother-of-pearl',
                          'African emigrant',
                          'Various charaxes species',
                          'Diadem',
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
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { src: '/images/Eco-tourism/NairobiArboretum/Sykes-Monkey-300x147.jpg', alt: 'Sykes Monkey', caption: 'Sykes Monkey' },
                      { src: '/images/Eco-tourism/NairobiArboretum/Terpsiphone-viridis-300x181.jpg', alt: 'Terpsiphone viridis bird', caption: 'Terpsiphone viridis bird' },
                      { src: '/images/Eco-tourism/NairobiArboretum/Papilio-phorcas-300x183.jpg', alt: 'Papilio phorcas butterfly', caption: 'Papilio phorcas butterfly' },
                      { src: '/images/Eco-tourism/NairobiArboretum/Chamaeleo-jacksoni-300x188.jpg', alt: 'Chamaeleo jacksoni chameleon', caption: 'Chamaeleo jacksoni chameleon' },
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
                          height={188}
                          className="w-full h-full object-cover"
                          unoptimized
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
              {activeTab === 'plants' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Plant Species
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                        style={{ fontSize: `${fontSize * 1.1}px` }}
                      >
                        Indigenous Trees
                      </h3>
                      <div className="bg-green-50 p-6 squared-lg">
                        <div className="grid sm:grid-cols-2 gap-4">
                          {[
                            'Croton megalocarpus',
                            'Brachylaena huillensis',
                            'Podocarpus falcatus',
                            'Markhamia lutea',
                            'Vepris simplicifolia',
                            'African Olive',
                            'Schebera alata',
                            'Erythrina abyssinica',
                            'Trichilia emetic',
                            'Adansonia digitata',
                          ].map((item, index) => (
                            <div key={index} className="flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              <span
                                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                                style={{ fontSize: `${fontSize * 0.9}px` }}
                              >
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                        style={{ fontSize: `${fontSize * 1.1}px` }}
                      >
                        Exotic Trees
                      </h3>
                      <div className="bg-green-50 p-6 squared-lg">
                        <div className="grid sm:grid-cols-2 gap-4">
                          {[
                            'Araucaria species',
                            'Lagunaria pattersonii',
                            'Brachychiton acerifolium',
                            'Jacaranda mimosfolia',
                            'Tabebuia chrysantha',
                            'Eucalyptus species',
                            'Ficus species',
                            'Phoenix palms',
                            'Bauhinia species',
                            'Strelitzia (Bird of paradise)',
                          ].map((item, index) => (
                            <div key={index} className="flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              <span
                                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                                style={{ fontSize: `${fontSize * 0.9}px` }}
                              >
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
              {activeTab === 'activities' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Activities & Facilities
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                        style={{ fontSize: `${fontSize * 1.1}px` }}
                      >
                        Available Activities
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          'Learning about trees',
                          'Bird watching',
                          'Butterfly watching',
                          'Running/jogging',
                          'Picnicking',
                          'Corporate events',
                          'Concerts',
                          'Team building',
                          'Weddings',
                          'Religious activities',
                        ].map((activity, index) => (
                          <div
                            key={index}
                            className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-3 squared-lg"
                          >
                            <p
                              className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white"
                              style={{ fontSize: `${fontSize * 0.9}px` }}
                            >
                              {activity}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                        style={{ fontSize: `${fontSize * 1.1}px` }}
                      >
                        Special Features
                      </h3>
                      <div className="bg-green-50 p-6 squared-lg">
                        <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                          {[
                            'Picnic sites',
                            'Marked walking trails',
                            'Bird watching areas',
                            'Special areas available for hire',
                            'Guidebook available for purchase (KSh 600)',
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
                  </div>
                </section>
              )}
              {activeTab === 'gallery' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Arboretum Highlights
                  </h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { src: '/images/Eco-tourism/NairobiArboretum/Birds-Watching-300x191.jpg', alt: 'Bird watching in the arboretum', caption: 'Bird watching in the arboretum' },
                      { src: '/images/Eco-tourism/NairobiArboretum/Grounds-for-hire-300x182.jpg', alt: 'Grounds available for hire', caption: 'Grounds available for hire' },
                      { src: '/images/Eco-tourism/NairobiArboretum/School-children-Education-trip-300x183.jpg', alt: 'School children education trip', caption: 'School children education trip' },
                      { src: '/images/Eco-tourism/NairobiArboretum/Prayer-centre-300x201.jpg', alt: 'Prayer centre in the arboretum', caption: 'Prayer centre in the arboretum' },
                      { src: '/images/Eco-tourism/NairobiArboretum/Picnic-Site-300x175.jpg', alt: 'Picnic site', caption: 'Picnic site' },
                      { src: '/images/Eco-tourism/NairobiArboretum/Hiking-path-300x164.jpg', alt: 'Hiking path', caption: 'Hiking path' },
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
                          height={191}
                          className="w-full h-full object-cover"
                          unoptimized
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
              {activeTab === 'visiting' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Visiting Information
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-6 squared-lg">
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                        style={{ fontSize: `${fontSize * 0.95}px` }}
                      >
                        Getting There
                      </h3>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-medium text-black mb-1"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        Public Transport:
                      </p>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        Matatu no.48 Kileleshwa route from Odeon, alight at Shell. Walk 100m to pedestrian gate.
                      </p>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-medium text-black mt-3 mb-1"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        Walking from CBD:
                      </p>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        ~3km via University Way and State House Road
                      </p>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-medium text-black mt-3 mb-1"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        By Car/Taxi:
                      </p>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        Take Arboretum Drive or University Way. Taxi ~KSh 500 from town.
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 squared-lg">
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                        style={{ fontSize: `${fontSize * 0.95}px` }}
                      >
                        Visiting Hours & Fees
                      </h3>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        6:00 AM to 6:30 PM daily
                      </p>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-3"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        Entry tickets available at the gate during visiting hours
                      </p>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-medium text-black mt-3"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        Entry Fees:
                      </p>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        Forest conservation fee charged at entry (inquire for current rates)
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 squared-lg">
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                        style={{ fontSize: `${fontSize * 0.95}px` }}
                      >
                        What to Bring
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {[
                          'Comfortable walking shoes',
                          'Drinking water',
                          'Binoculars',
                          'Camera',
                          'Wildlife guide books',
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
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.8rem] mt-3"
                        style={{ fontSize: `${fontSize * 0.8}px` }}
                      >
                        Note: Single use plastic bottles not allowed
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 bg-[#1a3c34] text-white p-8 squared-lg">
                    <h3
                      className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-xl mb-4"
                      style={{ fontSize: `${fontSize * 1.1}px` }}
                    >
                      Visitor Guidelines
                    </h3>
                    <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                      {[
                        'Enjoy yourself; pause and listen regularly to nature',
                        'Allow wildlife to move off tracks before passing',
                        'Do not feed wild animals',
                        'No fires in the forest',
                        'Do not remove any plants or animals',
                        'Do not deface trees or features',
                        'Keep noise to minimum to avoid disturbing wildlife',
                        'Carry all litter out with you',
                        'Stay on designated tracks and paths',
                        'Single use plastic bottles prohibited',
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="bg-green-50 transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                          style={{ fontSize: `${fontSize * 0.85}px` }}
                        >
                          <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-black text-[0.85rem] leading-[1.6]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}
              {activeTab === 'contact' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Contact Information
                  </h2>
                  <div className="bg-green-100 p-4 squared-lg shadow-md">
                    <h3
                      className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-2"
                      style={{ fontSize: `${fontSize * 0.95}px` }}
                    >
                      The Forest Manager
                    </h3>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      Arboretum Forest Station
                    </p>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-2"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      <span className="font-medium">Mobile:</span> +254 755 838999
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
                        src={forest.image}
                        alt={forest.name}
                        width={400}
                        height={160}
                        className="w-full h-40 object-cover"
                        unoptimized
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

export default NairobiArboretumPage;