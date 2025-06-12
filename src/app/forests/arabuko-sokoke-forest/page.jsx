'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

const ArabukoSokokeForestPage = () => {
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
            Arabuko-Sokoke Forest
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Peugeot',Helvetica,sans-serif] text-lg md:text-xl text-white/90 max-w-2xl"
          >
            Discover Kenya's largest coastal forest, home to rare wildlife and unique ecosystems
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
                  In Arabuko-Sokoke, one can undertake the following activities:
                </p>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                  {['Forest walks', 'Forest drives', 'Bird watching', 'Butterfly watching', 'Camping', 'Cycling', 'Picnicking', 'Running'].map((activity, index) => (
                    <li key={index} className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4" style={{ fontSize: `${fontSize * 0.85}px` }}>
                      <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6] capitalize">{activity}</span>
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
                  The forest lies along the tarmac Mombasa – Malindi highway, approximately 100 km from Mombasa town and 18 km from Malindi. The entry is clearly signposted and visitor services are available at the offices of KFS's Malindi Forest Zone located there. Regular buses and flights are available from Nairobi to Mombasa or Malindi. One can also use public service vehicles or taxis from Mombasa, Malindi or Watamu.
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  The forest has a network of driving tracks and walking trails. Many sections of the forest are accessible by saloon cars but for best access to all tracks, a 4WD is recommended. Driving is the easiest way to see transitions between the different forest types but one learns more about the forest by walking.
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Trained guides are available to help one explore the forest. The guides are members of Arabuko-Sokoke Forest Guides Association (ASFGA) and charge as per the time spent and service rendered. Enquire about these services at the point of entry.
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
                  Kenya Forest Service (KFS) charges an entry fee at the point of entry to promote forest conservation. For current rates, enquire from the contacts given in the Contact Us section.
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
                    'A network of well-marked walking trails.',
                    'More than 30 kms of driving tracks traversing the different forest types.',
                    'Beautiful seasonal pools hidden amongst the Miombo woodlands teeming with birds and amphibians.',
                    'Two tree platforms for a birds-eye-view of the forest.',
                    'Nyari viewpoint, an elevated area of the forest with a panoramic view of the forest canopy, looking out the coast beyond.',
                    'Mida Creek, a beautiful tidal inlet with six species of mangrove trees is less than 1 km from the entrance to Arabuko-Sokoke Forest.',
                  ].map((item, index) => (
                    <li key={index} className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4" style={{ fontSize: `${fontSize * 0.85}px` }}>
                      <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">{item}</span>
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
                <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Wildlife in Arabuko-Sokoke
                </h3>
                <div className="mb-6">
                  <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Mammals:
                  </h4>
                  <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    The forest has 40 recorded mammal species including African Elephant, African Buffalo, African Civet, Caracal, Syke's Monkeys, Yellow Baboons and Lesser Galago (or bushbaby). Some of Kenya's rarest mammals are found here, including the Golden-rumped Elephant-shrew, Sokoke Bushy-tailed Mongoose and Ader's Duiker.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    Birds:
                  </h4>
                  <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                    There are over 270 species of birds recorded in the forest including several rare and endemic species. The Clarke's Weaver is only found in Arabuko-Sokoke and another area 30 kms further north of Arabuko-Sokoke in the whole world.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                    Plants in Arabuko-Sokoke
                  </h3>
                  <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                    {[
                      {
                        title: 'Cynometra-dominated forests and thickets',
                        description: 'These cover more than half of Arabuko-Sokoke Forest Reserve. Sightings of Caracal, Civet, Genet, Suni and other mammals are more common on tracks in this forest type.',
                      },
                      {
                        title: 'Brachystegia-dominated woodlands',
                        description: 'Also known as Miombo woodlands, this forest type is airy and beautiful to walk through. Birds and butterflies are more visible here due to the open canopy.',
                      },
                      {
                        title: 'Mixed Forests',
                        description: 'Dominated by species like Hymenaea verrucosa and Manilkara sansibarensis. The dense vegetation in this forest type creates a tropical atmosphere.',
                      },
                    ].map((item, index) => (
                      <li key={index} className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4" style={{ fontSize: `${fontSize * 0.85}px` }}>
                        <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                          <strong>{item.title}:</strong> {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-6" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Photo Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      src: '/images/Eco-tourism/Arabuko-SokokeForest/african-wood-owl-in-arabuko-sokoke-photo-by-a-rocha-kenya-300x200.jpg',
                      alt: 'African Wood Owl in Arabuko-Sokoke',
                      caption: 'African Wood Owl in Arabuko-Sokoke (Photo by A Rocha Kenya)',
                      width: 300,
                      height: 200,
                    },
                    {
                      src: '/images/Eco-tourism/Arabuko-SokokeForest/birding-in-arabuko-sokoke-photo-by-a-rocha-kenya-225x300.jpg',
                      alt: 'Birding in Arabuko-Sokoke',
                      caption: 'Birding in Arabuko-Sokoke (Photo by A Rocha Kenya)',
                      width: 225,
                      height: 300,
                    },
                    {
                      src: '/images/Eco-tourism/Arabuko-SokokeForest/giant-brachystegia-tree-in-arabuko-sokoke-300x225.jpg',
                      alt: 'Giant Brachystegia tree in Arabuko-Sokoke',
                      caption: 'Giant Brachystegia tree in Arabuko-Sokoke',
                      width: 300,
                      height: 225,
                    },
                  ].map((image, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                      <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">{image.caption}</p>
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
                  <strong>The Forest Manager:</strong>
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Arabuko-Sokoke Forest Reserve
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  P.O. Box 201 – 80200 Malindi, Kenya.
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  +254755838366
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  +254717318134
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Email: zmkilifi@kenyaforestservice.org
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

export default ArabukoSokokeForestPage;