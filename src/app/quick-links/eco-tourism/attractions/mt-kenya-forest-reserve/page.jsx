'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

const MountKenyaForestPage = () => {
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
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
              style={{ fontSize: `${fontSize * 1.5}px` }}
            >
              Ecotourism in Mt Kenya Forest Reserve
            </h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Kenya Forest Service (KFS) manages the 213,082-hectare Mt. Kenya Forest Reserve that bestrides the equator in the central highland zones of Kenya. Administratively, this includes forest areas surrounding the mountain itself and adjacent forest blocks of Lower Imenti, Upper Imenti, Thunguru hill, Njuki-ini East, Njukiini West and Kierera.
                </p>
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                    style={{ fontSize: `${fontSize * 1.1}px` }}
                  >
                    Quick Facts
                  </h2>
                  <ul className="grid grid-cols-[finance: space-y-2">
                    {[
                      { label: 'Area', value: '213,082 hectares' },
                      { label: 'Managed by', value: 'Kenya Forest Service (KFS)' },
                      { label: 'Designations', value: 'UNESCO World Heritage Site, Important Bird Area (IBA)' },
                      { label: 'Plant Species', value: '880 recorded species' },
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
                  src="/images/Eco-tourism/MountKenyaForest/mt-kenya-peaks-from-edge-of-mt-kenya-forest-reserve.jpg"
                  alt="Panoramic view of Mt Kenya Forest Reserve"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </section>

          {/* Ecotourism Section */}
          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-3xl mb-4 border-b pb-2"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Ecotourism Potential
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  The forest reserve has great potential for tourism development. In addition to having a recorded 880 plant species, the lush natural forests teem with wildlife including the African elephant, leopard, buffalo, giant forest hog, bongo and the black fronted duiker.
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3
                    className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                    style={{ fontSize: `${fontSize * 0.95}px` }}
                  >
                    Attractive Features
                  </h3>
                  <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                    {[
                      'Panoramic views of the peak of Mt. Kenya',
                      'Waterfalls',
                      'Caves',
                      'Salt licks',
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
              <div>
                <h3
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                  style={{ fontSize: `${fontSize * 0.95}px` }}
                >
                  Tourism Activities
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Wildlife safaris', 'Bird watching', 'Trout fishing', 'Nature walks'].map((activity, index) => (
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
                  ))}
                </div>
                <div className="mt-6 relative h-48 roundeddbb-lg overflow-hidden">
                  <Image
                    src="/images/Eco-tourism/MountKenyaForest/Hombe-guest-house-after-KFS-refurbishment.jpg"
                    alt="Wildlife in Mt Kenya Forest"
                    width={300}
                    height={225}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Accommodation Section */}
          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-3xl mb-4 border-b pb-2"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Tourist Accommodation Facilities
            </h2>
            <div className="mb-8">
              <h3
                className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                style={{ fontSize: `${fontSize * 1.1}px` }}
              >
                Existing Facilities
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Castle Forest Lodge',
                  'Hombe Forest Guesthouse (A KFS-managed facility)',
                  'Mountain Rock Hotel (Bantu Lodge)',
                  'Rutundu Log Cabins',
                  'Serena Mountain Lodge',
                  'Thego Fishing Camp',
                  'Themwe Campsite',
                  'Thiba Fishing Camp',
                  'Timau River Lodge',
                ].map((facility, index) => (
                  <div
                    key={index}
                    className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 rounded-lg"
                  >
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      {facility}
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
                Upcoming Facilities
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Gitoro Forest Camp in Meru Forest Station',
                  'Nanyuki Forest Camp in Nanyuki Forest Station',
                  'Naro Moru Forest Lodge in Naro Moru Forest',
                  'Ragati Fishing Camp in Ragati Forest Station',
                  'Thegu Forest Lodge in Kabaru Forest Station',
                  'Themwe Lodge in Ruthumbi Forest Station',
                  'Tungu/Nithi Eco-lodge in Chuka Forest Station',
                ].map((facility, index) => (
                  <div
                    key={index}
                    className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 rounded-lg border border-green-200"
                  >
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      {facility}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Gallery Section */}
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
                  src: '/images/Eco-tourism/MountKenyaForest/Castle-Forest-Lodge-in-Castle-Forest-Station-Kirinyaga-County.jpg',
                  alt: 'Castle Forest Lodge in Castle Forest Station, Kirinyaga County',
                  caption: 'Castle Forest Lodge',
                },
                {
                  src: '/images/Eco-tourism/MountKenyaForest/mt-kenya-peaks-from-edge-of-mt-kenya-forest-reserve.jpg',
                  alt: 'Mt Kenya peaks from edge of Mt Kenya Forest Reserve',
                  caption: 'Mt Kenya Peaks',
                },
                {
                  src: '/images/Eco-tourism/MountKenyaForest/Thiba-fishing-camp-kerugoya.jpg',
                  alt: 'Thiba fishing camp, Kerugoya',
                  caption: 'Thiba Fishing Camp',
                },
                {
                  src: '/images/Eco-tourism/MountKenyaForest/Timau-River-Lodge.jpg',
                  alt: 'Timau River Lodge',
                  caption: 'Timau River Lodge',
                },
                {
                  src: '/images/Eco-tourism/MountKenyaForest/Hombe-guest-house-after-KFS-refurbishment.jpg',
                  alt: 'Hombe guest house after KFS refurbishment',
                  caption: 'Hombe Guest House',
                },
              ].map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={225}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-medium"
                      style={{ fontSize: `${fontSize * 0.8}px` }}
                    >
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-3xl mb-4 border-b pb-2"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Contact Information
            </h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3
                className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                style={{ fontSize: `${fontSize * 0.95}px` }}
              >
                Kenya Forest Service
              </h3>
              <address className="not-italic">
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  Karura, Off Kiambu Road
                </p>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  P.O. Box 30513 – 00100 Nairobi, Kenya
                </p>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-3"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  <span className="font-medium">Tel:</span> +254 20 2020285
                </p>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  <span className="font-medium">Fax:</span> +254 20 2385374
                </p>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  <span className="font-medium">Email:</span> info@kenyaforestservice.org or ecotourism@kenyaforestservice.org
                </p>
                <p
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  <span className="font-medium">Website:</span> www.kenyaforestservice.org
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

export default MountKenyaForestPage;