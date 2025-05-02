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
          <h1 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-8 text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize">
            Karura Forest
          </h1>
          <section className="mb-12">
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-8"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Karura Forest Reserve is located in the northern part of Nairobi city. At 1,041 hectares, it is one of the largest urban gazetted forests in the world. The forest contains nearly all the 605 species of wildlife found in Nairobi including three types of antelope. It is managed by Kenya Forest Service (KFS).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4">Attractions</h2>
            <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3">Wildlife in Karura Forest</h3>
            <div className="mb-6">
              <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2">Mammals:</h4>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Include Harvey's Duiker, Grimm's Duiker, Bushbucks, Bush pigs, Genet Cats, Civets, Bush babies, Porcupines, Syke's Monkeys, Ground Squirrel, Hares and the Epauletted-bat.
              </p>
            </div>
            <div className="mb-6">
              <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2">Reptiles:</h4>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Include pythons, green snakes and monitor lizards.
              </p>
            </div>
            <div className="mb-6">
              <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2">Birds:</h4>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                The forest hosts around 200 species of birds including Ayres Hawk-eagle, the African Crowned Eagle, the Silvery-cheeked Hornbill, the Hartlaub's Turaco, the Narina Trogon, Owls, Crested Cranes, Sparrows, Doves, Weavers and Vultures.
              </p>
            </div>
            <div className="mb-6">
              <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2">Butterflies:</h4>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Include the African Queen and Desmond's Green Banded Swallowtail.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3">Plants in Karura Forest</h3>
              <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2">Plantations:</h4>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Cover 632 hectares. Species found include Araucaria cunninghamii, Eucalyptus saligna, E. globula, Grevillea robusta, Cupressus torulosa and Cupressus lusitanica.
              </p>
              <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2">Indigenous trees:</h4>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Cover 260 hectares. Species include Olea europeae subsp. auspidata, Croton megalocarpus, Warburgia ugandensis (Muthiga), Brachyleana huillensis (Muhugu), Uvaridendron anisatum, Markhamia lutea, Vepris nobilis, Juniperus procera (Cedar), Craebean brownii, Newtonia buchananii, Salvadora persica, Ficus thonningii, Trichilia emetica, Calondendrum capense and Dombeya goetzenii.
              </p>
              <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2">Shrubs:</h4>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Include Strychnos henningsii (Muteta), Erythrococca bongensis (Muharangware), Vangueria madagascariensis (Mubiro), Rhamnus prinoides (Mukarakinga), Caesalpinia volkensii (Mubuthi), Solanum incanum (Mutongu), Elaeodendron buchananii (Mutanga) and Rhus natalensis (Muthigio).
              </p>
              <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2">Other plants:</h4>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                There are groves of Arudinaria alpina, Kenya's native bamboo species along the riparian belts of Gitathuro and Ruaka rivers; exotic giant bamboo Dendrocalamus giganteus along Karura river near the tree nursery, and; small wetlands that are important habitats for birds.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3">Other areas of special interest Karura Forest</h3>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Other important attractions that visitors to Karura Forest enjoy are:
              </p>
              <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                {[
                  'Mau Mau caves',
                  'Scenic waterfalls and rivers',
                  'Picnic sites',
                  'Marked walking trails',
                  'Small wetlands that are habitats for birds',
                  'The incinerator formerly used by Central Bank of Kenya to burn old currency notes',
                  'The area about which the late Professor Wangari Maathai carried out a campaign against illegal acquisition of forest land',
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
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4">Activities available</h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
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

          <section className="mb-12">
            <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4">Getting there & getting around</h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              <strong>By private transport:</strong> The main entrance to Karura Forest is on the Limuru Road just after the Belgian Embassy. However, one can also use either the KFS main gate which is off Kiambu road and opposite CID Headquaters, or the Old Kiambu Gate which is on Old Kiambu road.
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              <strong>By public transport:</strong> Matatu (public service vehicle) numbers 11B, 106, 107, 108, 114 or 116 from Nairobi City Centre will get you to the main entrance on Limuru Road. To use the KFS main gate on Kiambu road, take matatu numbers 100 or 120.
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Taxi hire from the city centre costs approximately Ksh 1,000.
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              One can easily get around Karura Forest using the existing network of driving tracks and walking trails. Most sections of the forest are accessible by saloon cars.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4">Visiting hours</h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Entry tickets can be purchased at the point of entry between 6:00 am and 5:00 pm. For the current entry fees, contact the numbers at the end of this page.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4">What to wear and carry</h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Comfortable walking shoes or trainers, drinking water, binoculars, camera and wildlife books especially for birds and butterflies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4">Climate</h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              There are two wet seasons: April-June (long rains) and October-December (short rains). In between, days are sunny and dry except for July and August which is usually cool and cloudy. The average annual rainfall in Karura is 930 mm.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4">Important things to remember when visiting Karura forest</h2>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
              {[
                'Enjoy yourself; in addition to seeing, pause and listen regularly.',
                'Stop to allow wildlife to move off the tracks before you pass.',
                'Do not feed wild animals.',
                'Do not start fires in the forest.',
                'Do not take away animals, animal products, plants or plant parts.',
                'Do not mark or deface tree stems, stones and other features.',
                'Avoid unnecessary noise as it disturbs both wildlife and other visitors. Do not exceed 40kph when driving in the forest.',
                'Take all the litter that you brought away with you.',
                'Keep to the designated tracks and paths when walking and always be sure of where you are headed to or coming from as orientation in forests can be difficult.',
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
            <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4">Karura Forest photo gallery</h2>
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

          <section className="mb-12">
            <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4">For reservations and more information, contact:</h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              <strong>The Forester-in-Charge</strong>
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Karura Forest Reserve
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
              Tel (mobile phones): +254 (0) 727 818 960
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Tel: +254 20 2020285; 3754904/5/6
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Email: zmnairobi@kenyaforestservice.org or ecotourism@kenyaforestservice.org or info@kenyaforestservice.org
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Website: www.kenyaforestservice.org
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

export default KaruraForestPage;