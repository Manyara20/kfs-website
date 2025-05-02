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
            className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-8 text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize text-center"
            style={{ fontSize: `${fontSize * 1.5}px` }}
          >
            Arabuko-Sokoke Forest, Kenya
          </h1>

          <section className="mb-12">
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Arabuko-Sokoke Forest Reserve is a 420 km² coastal forest in Kenya managed by Kenya Forest Service (KFS). It is the largest and most intact coastal forest in East Africa, with 20% of Kenya's bird species, 30% butterfly species and at least 24 rare and endemic bird, mammal and butterfly species.
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Attractions
            </h2>
            <h3
              className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3"
              style={{ fontSize: `${fontSize * 0.95}px` }}
            >
              Wildlife in Arabuko-Sokoke
            </h3>
            <div className="mb-6">
              <h4
                className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Mammals:
              </h4>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                The forest has 40 recorded mammal species including African Elephant, African Buffalo, African Civet, Caracal, Syke's Monkeys, Yellow Baboons and Lesser Galago (or bushbaby). Some of Kenya's rarest mammals are found here, including the Golden-rumped Elephant-shrew, Sokoke Bushy-tailed Mongoose and Ader's Duiker.
              </p>
            </div>
            <div className="mb-6">
              <h4
                className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Birds:
              </h4>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                There are over 270 species of birds recorded in the forest including several rare and endemic species. The Clarke's Weaver is only found in Arabuko-Sokoke and another area 30 kms further north of Arabuko-Sokoke in the whole world. Other globally threatened bird species found in Arabuko-Sokoke include: Amani Sunbird, East Coast Akalat, Sokoke Scops Owl, Sokoke Pipit, and the Spotted Ground Thrush. Other birds restricted to Kenyan coastal forests are found the most easily in Arabuko-Sokoke, making it a great place to visit.
              </p>
            </div>
            <div className="mb-6">
              <h4
                className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Reptiles & amphibians:
              </h4>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                The forest has 49 reptile and 25 amphibian species.
              </p>
            </div>
            <div className="mb-6">
              <h3
                className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3"
                style={{ fontSize: `${fontSize * 0.95}px` }}
              >
                Plants in Arabuko-Sokoke
              </h3>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Arabuko-Sokoke forest is made up of three different forest types:
              </p>
              <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                {[
                  {
                    title: 'Cynometra-dominated forests and thickets',
                    description: 'These cover more than half of Arabuko-Sokoke Forest Reserve. Sightings of Caracal, Civet, Genet, Suni and other mammals are more common on tracks in this forest type. Sokoke Scops Owls are also found here.',
                  },
                  {
                    title: 'Brachystegia-dominated woodlands',
                    description: 'Also known as Miombo woodlands, this forest type is airy and beautiful to walk through. Birds and butterflies are more visible here due to the open canopy.',
                  },
                  {
                    title: 'Mixed Forests',
                    description: 'Dominated by species like Hymenaea verrucosa and Manilkara sansibarensis. The dense vegetation in this forest type creates a tropical atmosphere as one walks or drives through, the real feel of being "in the woods". Animals commonly sighted here include the Golden-rumped Elephant Shrew, East Coast Akalat and Tiny Greenbuls.',
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                    style={{ fontSize: `${fontSize * 0.85}px` }}
                  >
                    <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                      <strong>{item.title}:</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h3
                className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3"
                style={{ fontSize: `${fontSize * 0.95}px` }}
              >
                Other areas of special interest in Arabuko-Sokoke forest
              </h3>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                In addition to the animals and plants mentioned above, Arabuko-Sokoke forest has the following attractions:
              </p>
              <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                {[
                  'A network of well-marked walking trails.',
                  'More than 30 kms of driving tracks traversing the different forest types.',
                  'Beautiful seasonal pools hidden amongst the Miombo woodlands teeming with birds and amphibians.',
                  'Two tree platforms for a birds-eye-view of the forest.',
                  'Nyari viewpoint, an elevated area of the forest with a panoramic view of the forest canopy, looking out the coast beyond.',
                  'Mida Creek, a beautiful tidal inlet with six species of mangrove trees is less than 1 km from the entrance to Arabuko-Sokoke Forest. The Creek is a major wintering site for migrant birds including Crab-plover, Greater Flamingos, Terek Sandpipers and Sandplovers. Mida Creek Boardwalk and Bird Hide is located here, a facility that generates income for forest conservation and education of local children.',
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
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Activities available
            </h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              In Arabuko-Sokoke, one can undertake the following activities:
            </p>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
              {[
                'Forest walks',
                'Forest drives',
                'Bird watching',
                'Butterfly watching',
                'Camping',
                'Cycling',
                'Picnicking',
                'Running',
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
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Getting there & getting around
            </h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              The forest lies along the tarmac Mombasa – Malindi highway, approximately 100 km from Mombasa town and 18 km from Malindi. The entry is clearly signposted and visitor services are available at the offices of KFS's Malindi Forest Zone located there. Regular buses and flights are available from Nairobi to Mombasa or Malindi. One can also use public service vehicles or taxis from Mombasa, Malindi or Watamu.
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Kenya Forest Service (KFS) charges an entry fee at the point of entry to promote forest conservation. Call the numbers given at the end of this page for the current fees.
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              The forest has a network of driving tracks and walking trails. Many sections of the forest are accessible by saloon cars but for best access to all tracks, a 4WD is recommended. Driving is the easiest way to see transitions between the different forest types but one learns more about the forest by walking.
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Trained guides are available to help one explore the forest. The guides are members of Arabuko-Sokoke Forest Guides Association (ASFGA) and charge as per the time spent and service rendered. Enquire about these services at the point of entry.
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Visiting hours
            </h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Entry tickets can be purchased at the point of entry between 6:00 am and 6:00 pm. Those keen to have a particularly early start can purchase tickets the evening before. The best times to visit are early morning or late afternoon as most wildlife will hide from the midday heat. The best time to watch birds is from dawn to around 9:00 am.
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              What to wear and carry
            </h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Wear comfortable walking shoes or trainers and loose-fitting lightweight clothing. A hat, sunglasses and sunscreen may also come in handy. It is also important to carry drinking water, binoculars, camera and wildlife books especially for birds and butterflies in addition to picnic and camping equipment in case one intends to stay overnight.
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Climate
            </h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              There are two wet seasons: April-June (long rains) and November-December (short rains). The other months will be usually hot and dry. Annual rainfall ranges from 1,000 mm in the east to 600 mm in the northwest.
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Important things to remember when visiting Arabuko-Sokoke forest
            </h2>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
              {[
                'Enjoy yourself; in addition to seeing, pause and listen regularly.',
                'Stop to allow wildlife to move off the tracks before you pass.',
                'Do not feed wild animals.',
                'Do not start fires in the forest.',
                'Do not take away animals, animal products, plants or plant parts.',
                'Do not mark or deface tree stems, stones and other features.',
                'Avoid noise as it disturbs both wildlife and other visitors. Do not exceed 40kph when driving in the forest.',
                'Be careful as animals here are wild and can be dangerous.',
                'Take all the litter that you brought away with you.',
                'Keep to the designated tracks and paths when walking and always be sure of where you are headed to or coming from as orientation in forests can be difficult.',
                'Single use plastic bottles not allowed.',
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
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-6"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Arabuko-Sokoke Photo Gallery
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
                {
                  src: '/images/Eco-tourism/Arabuko-SokokeForest/golden-rumped-elephant-shrew-in-arabuko-sokoke-photo-by-mel-ong-300x240.jpg',
                  alt: 'Golden-rumped Elephant Shrew in Arabuko-Sokoke',
                  caption: 'Golden-rumped Elephant Shrew in Arabuko-Sokoke (Photo by Mel Ong)',
                  width: 300,
                  height: 240,
                },
                {
                  src: '/images/Eco-tourism/Arabuko-SokokeForest/guided-nature-walk-in-arabuko-sokoke-300x225.jpg',
                  alt: 'Guided nature walk in Arabuko-Sokoke',
                  caption: 'Guided nature walk in Arabuko-Sokoke',
                  width: 300,
                  height: 225,
                },
                {
                  src: '/images/Eco-tourism/Arabuko-SokokeForest/mida-creek-boardwalk-near-arabuko-sokoke-forest-300x225.jpg',
                  alt: 'Mida Creek Boardwalk near Arabuko-Sokoke Forest',
                  caption: 'Mida Creek Boardwalk near Arabuko-Sokoke Forest',
                  width: 300,
                  height: 225,
                },
                {
                  src: '/images/Eco-tourism/Arabuko-SokokeForest/narina-trogon-in-arabuko-sokoke-photo-by-steffen-foerster-300x200.jpg',
                  alt: 'Narina Trogon in Arabuko-Sokoke',
                  caption: 'Narina Trogon in Arabuko-Sokoke (Photo by Steffen Foerster)',
                  width: 300,
                  height: 200,
                },
                {
                  src: '/images/Eco-tourism/Arabuko-SokokeForest/red-legged-sunsquirrel-in-arabuko-sokoke-photo-by-steffen-foerster-300x200.jpg',
                  alt: 'Red-legged Sunsquirrel in Arabuko-Sokoke',
                  caption: 'Red-legged Sunsquirrel in Arabuko-Sokoke (Photo by Steffen Foerster)',
                  width: 300,
                  height: 200,
                },
                {
                  src: '/images/Eco-tourism/Arabuko-SokokeForest/resting-on-the-tree-platform-in-arabuko-sokoke-photo-by-a-rocha-kenya-225x300.jpg',
                  alt: 'Resting on the tree platform in Arabuko-Sokoke',
                  caption: 'Resting on the tree platform in Arabuko-Sokoke (Photo by A Rocha Kenya)',
                  width: 225,
                  height: 300,
                },
                {
                  src: '/images/Eco-tourism/Arabuko-SokokeForest/tree-platform-in-arabuko-sokoke-photo-by-a-rocha-kenya-300x225.jpg',
                  alt: 'Tree platform in Arabuko-Sokoke',
                  caption: 'Tree platform in Arabuko-Sokoke (Photo by A Rocha Kenya)',
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
                  <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                    {image.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              Entry fees:
            </h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Forest conservation fee is charged at the point of entry. For current rates, enquire from the contacts given here.
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              For reservations and more information, contact:
            </h2>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              <strong>The Forest Manager:</strong>
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Arabuko-Sokoke Forest Reserve
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              P.O. Box 201 – 80200 Malindi, Kenya.
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              +254755838366
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              +254717318134
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Email: zmkilifi@kenyaforestservice.org
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

export default ArabukoSokokeForestPage;