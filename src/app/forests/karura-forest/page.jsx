'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

const KaruraForestPage = () => {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('forest-activities');

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

  const tabs = [
    { id: 'forest-activities', label: 'Forest Activities' },
    { id: 'how-to-get-there', label: 'How to Get There' },
    { id: 'park-entry-fee', label: 'Park Entry Fee' },
    { id: 'key-features', label: 'Key Features' },
    { id: 'attractions', label: 'Attractions' },
    { id: 'contact-us', label: 'Contact Us' },
  ];

  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center" 
           style={{ backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-['Peugeot',Helvetica,sans-serif] text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Karura Forest
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Peugeot',Helvetica,sans-serif] text-lg md:text-xl text-white/90 max-w-2xl"
          >
            One of the largest urban forests in the world, teeming with wildlife and natural beauty
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" 
             style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }}></div>
      </div>

      {/* Tab Section */}
      <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-['Peugeot',Helvetica,sans-serif] font-medium text-sm`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <motion.div
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="bg-white p-8"
          >
            {/* Forest Activities Tab */}
            {activeTab === 'forest-activities' && (
              <section>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Activities Available
                </h2>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  In Karura Forest, one can undertake the following activities:
                </p>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                  {[
                    'Forest walks',
                    'Forest drives',
                    'Bird watching',
                    'Butterfly watching',
                    'Cycling',
                    'Running',
                    'Picnicking',
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
            )}

            {/* How to Get There Tab */}
            {activeTab === 'how-to-get-there' && (
              <section>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Getting There & Getting Around
                </h2>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  <strong>By private transport:</strong> The main entrance to Karura Forest is on the Limuru Road just after the Belgian Embassy. However, one can also use either the KFS main gate which is off Kiambu road and opposite CID Headquarters, or the Old Kiambu Gate which is on Old Kiambu road.
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  <strong>By public transport:</strong> Matatu (public service vehicle) numbers 11B, 106, 107, 108, 114 or 116 from Nairobi City Centre will get you to the main entrance on Limuru Road. To use the KFS main gate on Kiambu road, take matatu numbers 100 or 120.
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Taxi hire from the city centre costs approximately Ksh 1,000.
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  One can easily get around Karura Forest using the existing network of driving tracks and walking trails. Most sections of the forest are accessible by saloon cars.
                </p>
              </section>
            )}

            {/* Park Entry Fee Tab */}
            {activeTab === 'park-entry-fee' && (
              <section>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Park Entry Fee
                </h2>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Entry tickets can be purchased at the point of entry between 6:00 am and 5:00 pm. For the current entry fees, contact the numbers provided in the Contact Us section.
                </p>
              </section>
            )}

            {/* Key Features Tab */}
            {activeTab === 'key-features' && (
              <section>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Key Features
                </h2>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                  {[
                    'Mau Mau caves with historical significance.',
                    'Scenic waterfalls and rivers (Gitathuro, Ruaka, and Karura).',
                    'Marked walking trails and driving tracks.',
                    'Small wetlands, ideal habitats for birds.',
                    'Picnic sites for relaxation.',
                    'The incinerator, formerly used by the Central Bank of Kenya.',
                    'Area linked to Wangari Maathai’s conservation campaign.',
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                      style={{ fontSize: `${fontSize * 0.85}px` }}
                    >
                      <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Attractions Tab */}
            {activeTab === 'attractions' && (
              <section>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Attractions
                </h2>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Karura Forest Reserve is located in the northern part of Nairobi city. At 1,041 hectares, it is one of the largest urban gazetted forests in the world. The forest contains nearly all the 605 species of wildlife found in Nairobi including three types of antelope. It is managed by Kenya Forest Service (KFS).
                </p>
                <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Wildlife in Karura Forest
                </h3>
                <div className="mb-6">
                  <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Mammals:
                  </h4>
                  <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Include Harvey's Duiker, Grimm's Duiker, Bushbucks, Bush pigs, Genet Cats, Civets, Bush babies, Porcupines, Syke's Monkeys, Ground Squirrel, Hares and the Epauletted-bat.
                  </p>
                </div>
                <div className="mb8">
                  <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Reptiles:
                  </h4>
                  <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Include pythons, green snakes and monitor lizards.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Birds:
                  </h4>
                  <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    The forest hosts around 200 species of birds including Ayres Hawk-eagle, the African Crowned Eagle, the Silvery-cheeked Hornbill, the Hartlaub's Turaco, the Narina Trogon, Owls, Crested Cranes, Sparrows, Doves, Weavers and Vultures.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Butterflies:
                  </h4>
                  <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Include the African Queen and Desmond's Green Banded Swallowtail.
                  </p>
                </div>
                <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Plants in Karura Forest
                </h3>
                <div className="mb-6">
                  <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Plantations:
                  </h4>
                  <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Cover 632 hectares. Species found include Araucaria cunninghamii, Eucalyptus saligna, E. globula, Grevillea robusta, Cupressus torulosa and Cupressus lusitanica.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Indigenous trees:
                  </h4>
                  <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Cover 260 hectares. Species include Olea europeae subsp. auspidata, Croton megalocarpus, Warburgia ugandensis (Muthiga), Brachyleana huillensis (Muhugu), Uvaridendron anisatum, Markhamia lutea, Vepris nobilis, Juniperus procera (Cedar), Craebean brownii, Newtonia buchananii, Salvadora persica, Ficus thonningii, Trichilia emetica, Calondendrum capense and Dombeya goetzenii.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Shrubs:
                  </h4>
                  <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Include Strychnos henningsii (Muteta), Erythrococca bongensis (Muharangware), Vangueria madagascariensis (Mubiro), Rhamnus prinoides (Mukarakinga), Caesalpinia volkensii (Mubuthi), Solanum incanum (Mutongu), Elaeodendron buchananii (Mutanga) and Rhus natalensis (Muthigio).
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Other plants:
                  </h4>
                  <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    There are groves of Arudinaria alpina, Kenya's native bamboo species along the riparian belts of Gitathuro and Ruaka rivers; exotic giant bamboo Dendrocalamus giganteus along Karura river near the tree nursery, and; small wetlands that are important habitats for birds.
                  </p>
                </div>
                <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Photo Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      src: '/images/Eco-tourism/KaruraForest/karura-natural-river.jpg',
                      alt: 'Scenic waterfall in Karura Forest',
                      caption: 'Scenic waterfall in Karura Forest',
                    },
                    {
                      src: '/images/Eco-tourism/KaruraForest/Yellow-breasted-Apalis_Karura-Forest-scaled.jpg',
                      alt: 'Bird watching in Karura Forest',
                      caption: 'Bird watching in Karura Forest',
                    },
                    {
                      src: '/images/Eco-tourism/KaruraForest/Karura+Forest+Cave.jpeg',
                      alt: 'Mau Mau caves in Karura Forest',
                      caption: 'Mau Mau caves in Karura Forest',
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
                      <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                        {image.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Contact Us Tab */}
            {activeTab === 'contact-us' && (
              <section>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Contact Us
                </h2>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  <strong>The Forester-in-Charge</strong>
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Karura Forest Reserve
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  P.O. Box 30513 – 00100 Nairobi, Kenya
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Tel (mobile phones): +254 (0) 727 818 960
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Tel: +254 20 2020285; 3754904/5/6
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Email: zmnairobi@kenyaforestservice.org or ecotourism@kenyaforestservice.org or info@kenyaforestservice.org
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Website: www.kenyaforestservice.org
                </p>
              </section>
            )}
          </motion.div>
        </div>

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

export default KaruraForestPage;