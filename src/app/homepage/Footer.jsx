"use client";

import React from "react";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0D3C00] text-white py-6 sm:py-8 md:py-12 w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {/* Column 1: Logo, Tagline, Socials */}
          <div className="p-4 sm:p-6 flex flex-col items-start">
            <div className="mb-4 sm:mb-6">
              <Image
                src="/images/t_logo_edited.png"
                alt="Kenya Forest Service Logo"
                width={80}
                height={56}
                className="w-12 sm:w-20 h-auto"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base text-white/80 mb-4 sm:mb-6">
              To be an internationally recognized organisation for excellence in knowledge-based sustainable forest resources management and conservation.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
              Contact Us
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:gap-3 text-white/80">
              <p className="text-xs sm:text-sm md:text-base py-1">info@kenyaforestservice.org</p>
              <p className="text-xs sm:text-sm md:text-base py-1">
                P.O BOX 30513 - 00100 NAIROBI - KENYA
              </p>
              <p className="text-xs sm:text-sm md:text-base py-1">
                Mon - Fri (8am - 5pm) Sat & Sun CLOSED
              </p>
            </div>
          </div>

          {/* Column 3: Toll-Free */}
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
              Toll Free
            </h3>
            <div className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3">
              <span className="text-white">
                <FaPhone className="text-white text-lg sm:text-xl rotate-180" />
              </span>
              <span>0800 721 277</span>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-white/80 mb-3 sm:mb-4">
              Toll Free Number (For Anticorruption and Complaints)
            </p>
            <div className="flex justify-start">
              <button className="bg-white text-[#0A6527] py-1 sm:py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm md:text-base font-medium hover:bg-[#0A6527] hover:text-white transition-colors">
                Call Now
              </button>
            </div>
          </div>

          {/* Column 4: Subscribe */}
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
              Subscribe to The Forester Magazine
            </h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 sm:p-3 rounded-md text-black text-xs sm:text-sm md:text-base border border-white focus:outline-none focus:ring-2 focus:ring-[#0A6527]"
              />
              <div className="flex justify-start">
                <button
                  className="bg-white text-[#0A6527] py-1 sm:py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm md:text-base font-medium hover:bg-[#0A6527] hover:text-white transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <div className="flex gap-3 sm:gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white hover:text-[#0A6527] text-lg sm:text-xl" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-white hover:text-[#0A6527] text-lg sm:text-xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white hover:text-[#0A6527] text-lg sm:text-xl" />
              </a>
              <a href="skype:user?call" target="_blank" rel="noopener noreferrer">
                <FaSkype className="text-white hover:text-[#0A6527] text-lg sm:text-xl" />
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;