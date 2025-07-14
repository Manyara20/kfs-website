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

const HombeForestGuesthousePage = () => {
  const [fontSize, setFontSize] = useState(16);
  const [activeTab, setActiveTab] = useState('about-guesthouse');
  const [showDrawer, setShowDrawer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: 'about-guesthouse', label: 'About Guesthouse' },
    { id: 'accommodation-details', label: 'Accommodation Details' },
    { id: 'how-to-get-there', label: 'Getting There' },
    { id: 'ideal-for', label: 'Ideal For' },
    { id: 'booking', label: 'Booking' },
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

  return (
    <div>
      <MainNavBar />
      {/* Hero */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://th.bing.com/th/id/R.746cf10d4ab45e5bcd4ec3d0ef66437b?rik=9VQOVCdAEXdrig&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1514897720544-15f43c83bffd%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxzZWFyY2h8M3x8Zm9yZXN0JTIwY2xlYXJpbmd8fDB8fHx8MTYyNzc4NjkxNg%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=tbl3LOVj3JDFV4UJ8xGjpbllukhPocGZv1wniT0KWXE%3d&risl=&pid=ImgRaw&r=0')",
        }}
      >
        <div className="absolute inset-0 "/>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1
            className="font-['Peugeot',Helvetica,sans-serif] font-bold text-white text-[2.2rem] sm:text-[3rem] leading-[1.3] tracking-[0.5px] capitalize"
            style={{ fontSize: `${fontSize * 2}px` }}
          >
            Hombe Forest Guesthouse
          </h1>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-white leading-[1.8] text-[1rem] mt-4"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            Newly refurbished retreat in the heart of Mt. Kenya Forest Reserve.
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
              {activeTab === 'about-guesthouse' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    About the Guesthouse
                  </h2>
                  <div className="relative h-64 md:h-96 squared-lg overflow-hidden mb-8 mx-auto max-w-4xl">
                    <Image
                      src="/images/Eco-tourism/HombeForestGuestHouse/Hombe-235x300.png"
                      alt="Hombe guest house after KFS refurbishment"
                      width={235}
                      height={300}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Kenya Forest Service (KFS) recently refurbished Hombe Forest Guesthouse in Mt. Kenya Forest Reserve, and the facility is now ready for occupation.
                  </p>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Located in Hombe Forest Station, off the Nairobi–Nanyuki highway, it’s approximately 165 km from Nairobi city.
                  </p>
                </section>
              )}
              {activeTab === 'accommodation-details' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Accommodation Details
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: 'Capacity', value: '2-bedroom guesthouse (4 persons)' },
                      { label: 'Additional', value: '8 persons in tents' },
                      { label: 'Self-catering', value: 'Fully equipped' },
                      { label: 'Ideal for', value: 'Individuals, groups, researchers' },
                      { label: 'Special feature', value: 'Space for personal tents' },
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 squared-md"
                        style={{ fontSize: `${fontSize * 0.85}px` }}
                      >
                        <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                          <strong>{item.label}:</strong> {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative h-64 md:h-96 squared-lg overflow-hidden mt-8 mx-auto max-w-4xl">
                    <Image
                      src="/images/Eco-tourism/HombeForestGuestHouse/Hombe-guest-house-after-KFS-refurbishment.jpg"
                      alt="Hombe Forest Guesthouse"
                      width={1200}
                      height={600}
                      className="w-full h-full object-cover"
                      unoptimized
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
                    Getting There
                  </h2>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Hombe Forest Guesthouse is accessible via the Nairobi–Nanyuki highway.
                  </p>
                  <div className="bg-green-100 p-4 squared-lg shadow-md">
                    <h3
                      className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-2"
                      style={{ fontSize: `${fontSize * 1.1}px` }}
                    >
                      Distance from Nairobi:
                    </h3>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      Approximately 165 km
                    </p>
                    <h3
                      className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mt-3 mb-2"
                      style={{ fontSize: `${fontSize * 1.1}px` }}
                    >
                      Access Road:
                    </h3>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      Turn off at Chaka shopping center, drive 13 km along Chaka-Sagana tarmac road
                    </p>
                  </div>
                  <div className="relative h-64 squared-lg overflow-hidden mt-6 bg-gray-200">
                    <div className="flex items-center justify-center h-full">
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] text-gray-500"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        Map of Hombe Forest Guesthouse location
                      </p>
                    </div>
                  </div>
                </section>
              )}
              {activeTab === 'ideal-for' && (
                <section>
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Ideal For
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      'Researchers',
                      'Budget travelers',
                      'Nature lovers',
                      'Group retreats',
                      'Long-term stays',
                      'Forest explorers',
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4 squared-md"
                        style={{ fontSize: `${fontSize * 0.85}px` }}
                      >
                        <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {activeTab === 'booking' && (
                <section className="bg-[#1a3c34] text-white p-8 squared-lg">
                  <h2
                    className="font-['Peugeot',Helvetica,sans-serif] font-bold text-white text-center mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                    style={{ fontSize: `${fontSize * 1.5}px` }}
                  >
                    Make Your Booking Today!
                  </h2>
                  <p
                    className="font-['Peugeot',Helvetica,sans-serif] font-normal text-white leading-[1.8] text-[0.9rem] text-center mb-6"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    Experience the serene beauty of Mt. Kenya Forest Reserve.
                  </p>
                  <div className="bg-green-100 text-[#0f5a28] p-6 squared-lg">
                    <h3
                      className="font-['Peugeot',Helvetica,sans-serif] font-semibold mb-3"
                      style={{ fontSize: `${fontSize * 1.2}px` }}
                    >
                      For Bookings Contact:
                    </h3>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-bold mb-4 text-[1.5rem]"
                      style={{ fontSize: `${fontSize * 1.5}px` }}
                    >
                      020-2045780
                    </p>
                    <p
                      className="font-['Peugeot',Helvetica,sans-serif] font-normal leading-[1.8] text-[0.9rem]"
                      style={{ fontSize: `${fontSize * 0.9}px` }}
                    >
                      Or use the contact information below.
                    </p>
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
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-100 p-6 squared-lg shadow-md">
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                        style={{ fontSize: `${fontSize * 1.1}px` }}
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
                          <span className="font-medium">Email:</span>{' '}
                          <a
                            href="mailto:info@kenyaforestservice.org"
                            className="text-[#0f5a28] font-semibold hover:underline"
                          >
                            info@kenyaforestservice.org
                          </a>
                        </p>
                        <p
                          className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                          style={{ fontSize: `${fontSize * 0.9}px` }}
                        >
                          <span className="font-medium">Ecotourism Email:</span>{' '}
                          <a
                            href="mailto:ecotourism@kenyaforestservice.org"
                            className="text-[#0f5a28] font-semibold hover:underline"
                          >
                            ecotourism@kenyaforestservice.org
                          </a>
                        </p>
                        <p
                          className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                          style={{ fontSize: `${fontSize * 0.9}px` }}
                        >
                          <span className="font-medium">Website:</span>{' '}
                          <a
                            href="http://www.kenyaforestservice.org"
                            className="text-[#0f5a28] font-semibold hover:underline"
                          >
                            www.kenyaforestservice.org
                          </a>
                        </p>
                      </address>
                    </div>
                    <div className="bg-green-100 p-6 squared-lg shadow-md">
                      <h3
                        className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-3"
                        style={{ fontSize: `${fontSize * 1.1}px` }}
                      >
                        Map Location
                      </h3>
                      <div className="relative h-64 squared-lg overflow-hidden bg-gray-200">
                        <div className="flex items-center justify-center h-full">
                          <p
                            className="font-['Peugeot',Helvetica,sans-serif] text-gray-500"
                            style={{ fontSize: `${fontSize * 0.9}px` }}
                          >
                            Map of Hombe Forest Guesthouse location
                          </p>
                        </div>
                      </div>
                      <p
                        className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mt-3"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        Located in Hombe Forest Station, Mt. Kenya Forest Reserve
                      </p>
                    </div>
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

export default HombeForestGuesthousePage;