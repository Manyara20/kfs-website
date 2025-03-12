'use client';

import { useState } from 'react';
import { FaUsers, FaArrowLeft, FaBalanceScale, FaBullseye, FaStar, FaFlask, FaShieldAlt } from 'react-icons/fa';

const FlipCard = ({ frontText, backText, frontIcon: FrontIcon, backIcon: BackIcon, frontBg, backBg }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-80 h-60 cursor-pointer" onClick={handleFlip}>
      <div
        className={`w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className={`absolute w-full h-full ${frontBg} text-white flex flex-col justify-center items-center rounded-2xl shadow-lg`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {FrontIcon && <FrontIcon className="absolute top-4 right-4 text-2xl" />}
          <p className="text-2xl text-center">{frontText}</p>
        </div>

        {/* Back Side */}
        <div
          className={`absolute w-full h-full ${backBg} text-white flex flex-col justify-center items-center rounded-2xl shadow-lg`}
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
        >
          {BackIcon && <BackIcon className="absolute top-4 right-4 text-2xl" />}
          <p className="text-center px-4">{backText}</p>
        </div>
      </div>
    </div>
  );
};

const CoreValues = () => {
  return (
    <section className="bg-white py-20 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Core Values</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FlipCard
          frontText="Teamwork"
          backText="The Service will embrace mutual support and respect, active participation, and collective responsibility, open communication, information sharing, and mentoring."
          frontIcon={FaUsers}
          backIcon={FaArrowLeft}
          frontBg="bg-[#420909]"
          backBg="bg-[#094219]"
        />

        <FlipCard
          frontText="Equity"
          backText="The Service will promote the virtues of equity and fair play for equitable and sustainable development."
          frontIcon={FaBalanceScale}
          backIcon={FaArrowLeft}
          frontBg="bg-[#420909]"
          backBg="bg-[#094219]"
        />

        <FlipCard
          frontText="Result Oriented"
          backText="The Service will pursue timely attainment of targeted results at all levels."
          frontIcon={FaBullseye}
          backIcon={FaArrowLeft}
          frontBg="bg-[#420909]"
          backBg="bg-[#094219]"
        />

        <FlipCard
          frontText="Excellence"
          backText="Challenge to the highest level of verifiable performance, to create the green impact."
          frontIcon={FaStar}
          backIcon={FaArrowLeft}
          frontBg="bg-[#420909]"
          backBg="bg-[#094219]"
        />

        <FlipCard
          frontText="Scientific Principles & Professionalism"
          backText="The Service will encourage and reward creativity and innovativeness in work performance among staff."
          frontIcon={FaFlask}
          backIcon={FaArrowLeft}
          frontBg="bg-[#420909]"
          backBg="bg-[#094219]"
        />

        <FlipCard
          frontText="Integrity"
          backText="The Service and staff shall ascribe to high standards of personal integrity, ethics, transparency together with individual and corporate accountability in the conduct of business."
          frontIcon={FaShieldAlt}
          backIcon={FaArrowLeft}
          frontBg="bg-[#420909]"
          backBg="bg-[#094219]"
        />
      </div>
    </section>
  );
};

export default CoreValues;