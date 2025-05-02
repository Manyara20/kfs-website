'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

const NdaragwaNatureTrailPage = () => {
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
          {/* Page Header */}
          <header className="mb-8 text-center">
            <h1
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-2 text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
              style={{ fontSize: `${fontSize * 1.5}px` }}
            >
              Ndaragwa Nature Trail
            </h1>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[1rem]"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              The newest stopover along the Nyeri-Nyahururu highway!
            </p>
          </header>

          {/* Introduction Section */}
          <section className="mb-12 text-black">
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              In case you are driving from Nyeri to Nyahururu, stop over for a refreshing walk at Ndaragwa Nature Trail next to Ndaragwa township.
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Kenya Forest Service (KFS) has developed this trail along the Nyeri-Nyahururu highway, approximately 230 km from Nairobi city.
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Spanning Pesi river, the trail offers a quiet walk inside the lushly forested valley interspersed with panoramic views of forest and Ndaragwa town. A footbridge at the bottom of the valley gives the best view of Ndaragwa waterfall, affording visitors a great photo opportunity.
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              The local community is also constructing a restaurant, a curio shop and cottages along this trail.
            </p>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              Ndaragwa Nature Trail is in Ndaragwa Forest Station, a section of the Aberdare Forest Reserve managed by Kenya Forest Service (KFS).
            </p>
          </section>

          {/* Gallery Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                src: '/images/Eco-tourism/NdaragwaNatureTrail/Ndaragwa-waterfall-viewed-from-the-footbridge-at-the-bottom-of-the-trail-225x300.jpg',
                alt: 'Ndaragwa waterfall, viewed from the footbridge at the bottom of the trail',
                caption: 'Ndaragwa waterfall, viewed from the footbridge at the bottom of the trail',
              },
              {
                src: '/images/Eco-tourism/NdaragwaNatureTrail/Ndaragwa-bandas-an-upcoming-facility-along-Ndaragwa-Nature-Trail-300x225.jpg',
                alt: 'Ndaragwa bandas, an upcoming facility along Ndaragwa Nature Trail',
                caption: 'Ndaragwa bandas, an upcoming facility along Ndaragwa Nature Trail',
              },
              {
                src: '/images/Eco-tourism/NdaragwaNatureTrail/A-section-of-Ndaragwa-Nature-Trail-300x225.jpg',
                alt: 'A section of Ndaragwa Nature Trail',
                caption: 'A section of Ndaragwa Nature Trail',
              },
              {
                src: '/images/Eco-tourism/NdaragwaNatureTrail/A-section-of-Ndaragwa-Nature-Trail-2-225x300.jpg',
                alt: 'A view of lush forest along Ndaragwa Nature Trail',
                caption: 'A view of lush forest along Ndaragwa Nature Trail',
              },
            ].map((image, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <div className="relative h-80 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={225}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <p
                  className="mt-2 font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-600 italic leading-[1.8] text-[0.85rem]"
                  style={{ fontSize: `${fontSize * 0.85}px` }}
                >
                  {image.caption}
                </p>
              </div>
            ))}
          </section>

          {/* Contact Section */}
          <section className="bg-green-50 p-8 rounded-lg">
            <h2
              className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4"
              style={{ fontSize: `${fontSize * 1.1}px` }}
            >
              For more information contact:
            </h2>
            <address className="not-italic">
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Kenya Forest Service
              </p>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Karura, Off Kiambu Road
              </p>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                P.O. Box 30513 – 00100 Nairobi, Kenya.
              </p>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                <span className="font-medium">Tel:</span> +254 20 2020285
              </p>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2"
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
            </address>
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

export default NdaragwaNatureTrailPage;