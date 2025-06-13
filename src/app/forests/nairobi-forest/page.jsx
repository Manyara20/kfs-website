'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

const NairobiArboretumPage = () => {
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
              className="   font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-2 text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
              style={{ fontSize: `${fontSize * 1.5}px` }}
            >
              Nairobi Arboretum
            </h1>
            <p
              className="   font-normal text-[#0f5a28] leading-[1.8] text-[1rem] mb-6"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              A 30.4 hectare urban forest sanctuary just 3km from Nairobi city center
            </p>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src="/images/Eco-tourism/NairobiArboretum/Nairobi-Arboretum-2.jpg"
                alt="Panoramic view of Nairobi Arboretum"
                width={900}
                height={600}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </section>

          {/* History Section */}
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2
                  className="   font-bold text-[#0f5a28] text-3xl mb-4"
                  style={{ fontSize: `${fontSize * 1.2}px` }}
                >
                  History
                </h2>
                <p
                  className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Established in 1907 by Mr. Battiscombe, Deputy Conservator of forests mainly as a site for exotic tree species trials. This was because foresters in Kenya had become concerned that indigenous trees that the railway relied on were getting depleted faster than they could regenerate.
                </p>
                <p
                  className="   font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  To add to the tree species, Mr. H.M. Gardner (Chief Conservators of Forests) also collected indigenous shrubs and trees that were introduced there each year in spite of drought and diseases.
                </p>
                <p
                  className="   font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Arboretum Forest Station was gazetted as protected Forest Reserves in 1932 and is managed by Kenya Forest Service (KFS).
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3
                  className="   font-semibold text-[#0f5a28] mb-3"
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
                        className="   font-medium text-white text-[0.85rem] leading-[1.6]"
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

          {/* Wildlife Section */}
          <section className="mb-12">
            <h2
              className="   font-bold text-[#0f5a28] text-3xl mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Wildlife
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3
                  className="   font-semibold text-[#0f5a28] mb-3"
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
                      <span className="   font-medium text-white text-[0.85rem] leading-[1.6]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3
                  className="   font-semibold text-[#0f5a28] mb-3"
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
                      <span className="   font-medium text-white text-[0.85rem] leading-[1.6]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3
                  className="   font-semibold text-[#0f5a28] mb-3"
                  style={{ fontSize: `${fontSize * 0.95}px` }}
                >
                  Reptiles & Butterflies
                </h3>
                <p
                  className="   font-medium text-black mb-1"
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
                      <span className="   font-medium text-white text-[0.85rem] leading-[1.6]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p
                  className="   font-medium text-black mb-1"
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
                      <span className="   font-medium text-white text-[0.85rem] leading-[1.6]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: '/images/Eco-tourism/NairobiArboretum/Sykes-Monkey-300x147.jpg', alt: 'Sykes Monkey' },
                { src: '/images/Eco-tourism/NairobiArboretum/Terpsiphone-viridis-300x181.jpg', alt: 'Terpsiphone viridis bird' },
                { src: '/images/Eco-tourism/NairobiArboretum/Papilio-phorcas-300x183.jpg', alt: 'Papilio phorcas butterfly' },
                { src: '/images/Eco-tourism/NairobiArboretum/Chamaeleo-jacksoni-300x188.jpg', alt: 'Chamaeleo jacksoni chameleon' },
              ].map((image, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={188}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Plants Section */}
          <section className="mb-12">
            <h2
              className="   font-bold text-[#0f5a28] text-3xl mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Plant Species
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3
                  className="   font-semibold text-[#0f5a28] mb-3"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  Indigenous Trees
                </h3>
                <div className="bg-green-50 p-6 rounded-lg">
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
                          className="   font-normal text-black leading-[1.8] text-[0.9rem]"
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
                  className="   font-semibold text-[#0f5a28] mb-3"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  Exotic Trees
                </h3>
                <div className="bg-green-50 p-6 rounded-lg">
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
                          className="   font-normal text-black leading-[1.8] text-[0.9rem]"
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

          {/* Activities Section */}
          <section className="mb-12">
            <h2
              className="   font-bold text-[#0f5a28] text-3xl mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Activities & Facilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3
                  className="   font-semibold text-[#0f5a28] mb-3"
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
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-3 rounded-lg"
                    >
                      <p
                        className="   font-medium text-white"
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
                  className="   font-semibold text-[#0f5a28] mb-3"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  Special Features
                </h3>
                <div className="bg-green-50 p-6 rounded-lg">
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
                        <span className="   font-medium text-white text-[0.85rem] leading-[1.6]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="mb-12">
            <h2
              className="   font-bold text-[#0f5a28] text-3xl mb-6 text-center"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Arboretum Highlights
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: '/images/Eco-tourism/NairobiArboretum/Birds-Watching-300x191.jpg', alt: 'Bird watching in the arboretum' },
                { src: '/images/Eco-tourism/NairobiArboretum/Grounds-for-hire-300x182.jpg', alt: 'Grounds available for hire' },
                { src: '/images/Eco-tourism/NairobiArboretum/School-children-Education-trip-300x183.jpg', alt: 'School children education trip' },
                { src: '/images/Eco-tourism/NairobiArboretum/Prayer-centre-300x201.jpg', alt: 'Prayer centre in the arboretum' },
                { src: '/images/Eco-tourism/NairobiArboretum/Picnic-Site-300x175.jpg', alt: 'Picnic site' },
                { src: '/images/Eco-tourism/NairobiArboretum/Hiking-path-300x164.jpg', alt: 'Hiking path' },
              ].map((image, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={191}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Visiting Information */}
          <section className="mb-12">
            <h2
              className="   font-bold text-[#0f5a28] text-3xl mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Visiting Information
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3
                  className="   font-semibold text-[#0f5a28] mb-3"
                  style={{ fontSize: `${fontSize * 0.95}px` }}
                >
                  Getting There
                </h3>
                <p
                  className="   font-medium text-black mb-1"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Public Transport:
                </p>
                <p
                  className="   font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Matatu no.48 Kileleshwa route from Odeon, alight at Shell. Walk 100m to pedestrian gate.
                </p>
                <p
                  className="   font-medium text-black mt-3 mb-1"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Walking from CBD:
                </p>
                <p
                  className="   font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  ~3km via University Way and State House Road
                </p>
                <p
                  className="   font-medium text-black mt-3 mb-1"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  By Car/Taxi:
                </p>
                <p
                  className="   font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Take Arboretum Drive or University Way. Taxi ~KSh 500 from town.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3
                  className="   font-semibold text-[#0f5a28] mb-3"
                  style={{ fontSize: `${fontSize * 0.95}px` }}
                >
                  Visiting Hours
                </h3>
                <p
                  className="   font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  6:00 AM to 6:30 PM daily
                </p>
                <p
                  className="   font-normal text-black leading-[1.8] text-[0.9rem] mt-3"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Entry tickets available at the gate during visiting hours
                </p>
                <p
                  className="   font-medium text-black mt-3"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Entry Fees:
                </p>
                <p
                  className="   font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Forest conservation fee charged at entry (inquire for current rates)
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3
                  className="   font-semibold text-[#0f5a28] mb-3"
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
                      className="   font-normal text-black leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p
                  className="   font-normal text-black leading-[1.8] text-[0.8rem] mt-3"
                  style={{ fontSize: `${fontSize * 0.8}px` }}
                >
                  Note: Single use plastic bottles not allowed
                </p>
              </div>
            </div>
          </section>

          {/* Rules Section */}
          <section className="mb-12 bg-[#1a3c34] text-white p-8 rounded-lg">
            <h2
              className="   font-bold text-3xl mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Visitor Guidelines
            </h2>
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
                  <span className="   font-medium text-black text-[0.85rem] leading-[1.6]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2
              className="   font-bold text-[#0f5a28] text-3xl mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Contact Information
            </h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3
                className="   font-semibold text-[#0f5a28] mb-2"
                style={{ fontSize: `${fontSize * 0.95}px` }}
              >
                The Forest Manager
              </h3>
              <p
                className="   font-normal text-black leading-[1.8] text-[0.9rem]"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Arboretum Forest Station
              </p>
              <p
                className="   font-normal text-black leading-[1.8] text-[0.9rem] mt-2"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                <span className="font-medium">Mobile:</span> +254 755 838999
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

export default NairobiArboretumPage;