"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  // State to ensure rendering happens only on the client to avoid hydration error
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Placeholder during server-side rendering to avoid hydration mismatch
  if (!isMounted) {
    return (
      <footer className="bg-[#0D3C00] text-white py-12 sm:py-10 md:py-8 lg:py-6 w-full border-t-4 border-[#1f5d2f] relative overflow-hidden">
        <div className="px-8 sm:px-6 md:px-4 lg:px-2"></div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#0D3C00] text-white py-12 sm:py-10 md:py-8 lg:py-6 w-full border-t-4 border-[#1f5d2f] relative overflow-hidden">
      {/* Background Overlay with Forest Theme */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D3C00]/80 to-[#1f5d2f]/80"></div>

      <div className="relative px-8 sm:px-6 md:px-4 lg:px-2">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 md:gap-4 lg:gap-3">
          {/* Column 1: Logo, Tagline */}
          <div className="p-6 sm:p-4 md:p-3 flex flex-col items-start">
            <div className="mb-6 sm:mb-4 md:mb-3">
              <Image
                src="/images/t_logo_edited.png"
                alt="Kenya Forest Service Logo"
                width={80}
                height={56}
                priority
                className="w-16 h-auto sm:w-14 md:w-12 lg:w-10"
              />
            </div>
            <p className="text-xl sm:text-lg md:text-base lg:text-sm text-white/80 mb-6 sm:mb-4 md:mb-3 font-light italic">
              To be an internationally recognized organisation for excellence in knowledge-based sustainable forest resources management and conservation.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="p-6 sm:p-4 md:p-3">
            <h3 className="text-3xl sm:text-2xl md:text-xl lg:text-lg font-serif font-bold text-white mb-4 sm:mb-3 md:mb-2">
              Contact Us
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:gap-2 text-white/80">
              <p className="text-xl sm:text-lg md:text-base lg:text-sm py-1 flex items-center gap-2">
                <FaEnvelope className="text-[#1f5d2f]" />
                info@kenyaforestservice.org
              </p>
              <p className="text-xl sm:text-lg md:text-base lg:text-sm py-1 flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#1f5d2f]" />
                P.O BOX 30513 - 00100 NAIROBI - KENYA
              </p>
              <p className="text-xl sm:text-lg md:text-base lg:text-sm py-1 flex items-center gap-2">
                <FaClock className="text-[#1f5d2f]" />
                Mon - Fri (8am - 5pm) Sat & Sun CLOSED
              </p>
            </div>
          </div>

          {/* Column 3: Toll-Free */}
          <div className="p-6 sm:p-4 md:p-3">
            <h3 className="text-3xl sm:text-2xl md:text-xl lg:text-lg font-serif font-bold text-white mb-4 sm:mb-3 md:mb-2">
              Toll Free
            </h3>
            <div className="flex items-center gap-3 sm:gap-2 text-2xl sm:text-xl md:text-lg lg:text-base font-semibold text-white mb-3 sm:mb-2">
              <FaPhone className="text-white rotate-180" />
              <span>0800 721 277</span>
            </div>
            <p className="text-xl sm:text-lg md:text-base lg:text-sm text-white/80 mb-4 sm:mb-3 md:mb-2">
              Toll Free Number (For Anticorruption and Complaints)
            </p>
            <div className="flex justify-start">
              <button className="bg-[#1f5d2f] text-white py-2 sm:py-1.5 md:py-1 px-4 sm:px-3 md:px-2 rounded-md text-xl sm:text-lg md:text-base lg:text-sm font-medium hover:bg-white hover:text-[#0D3C00] transition-all duration-300 shadow-md hover:shadow-lg">
                Call Now
              </button>
            </div>
          </div>

          {/* Column 4: Subscribe */}
          <div className="p-6 sm:p-4 md:p-3">
            <h3 className="text-3xl sm:text-2xl md:text-xl lg:text-lg font-serif font-bold text-white mb-4 sm:mb-3 md:mb-2">
              Subscribe to The Forester Magazine
            </h3>
            <div className="flex flex-col gap-4 sm:gap-3 md:gap-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 sm:p-2.5 md:p-2 rounded-md text-black text-xl sm:text-lg md:text-base lg:text-sm border border-white focus:outline-none focus:ring-2 focus:ring-[#1f5d2f] pl-10"
                />
              </div>
              <div className="flex justify-start">
                <button className="bg-[#1f5d2f] text-white py-2 sm:py-1.5 md:py-1 px-4 sm:px-3 md:px-2 rounded-md text-xl sm:text-lg md:text-base lg:text-sm font-medium hover:bg-white hover:text-[#0D3C00] transition-all duration-300 shadow-md hover:shadow-lg">
                  Subscribe
                </button>
              </div>
              <div className="flex gap-4 sm:gap-3 md:gap-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-white text-2xl sm:text-xl md:text-lg lg:text-base hover:text-[#1f5d2f] hover:scale-110 hover:rotate-12 transition-all duration-300" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-white text-2xl sm:text-xl md:text-lg lg:text-base hover:text-[#1f5d2f] hover:scale-110 hover:rotate-12 transition-all duration-300" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white text-2xl sm:text-xl md:text-lg lg:text-base hover:text-[#1f5d2f] hover:scale-110 hover:rotate-12 transition-all duration-300" />
                </a>
                <a href="skype:user?call" target="_blank" rel="noopener noreferrer">
                  <FaSkype className="text-white text-2xl sm:text-xl md:text-lg lg:text-base hover:text-[#1f5d2f] hover:scale-110 hover:rotate-12 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Row: Quick Links and Copyright */}
        <div className="border-t border-white/20 mt-8 sm:mt-6 md:mt-4 pt-6 sm:pt-4 md:pt-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-3">
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-3 md:gap-2 text-white/80">
              <a href="/about" className="text-xl sm:text-lg md:text-base lg:text-sm hover:text-[#1f5d2f] transition-colors">
                About Us
              </a>
              <a href="/services" className="text-xl sm:text-lg md:text-base lg:text-sm hover:text-[#1f5d2f] transition-colors">
                Services
              </a>
              <a href="/privacy" className="text-xl sm:text-lg md:text-base lg:text-sm hover:text-[#1f5d2f] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-xl sm:text-lg md:text-base lg:text-sm hover:text-[#1f5d2f] transition-colors">
                Terms of Use
              </a>
            </div>
            {/* Copyright */}
            <p className="text-xl sm:text-lg md:text-base lg:text-sm text-white/80">
              © {new Date().getFullYear()} Kenya Forest Service. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;