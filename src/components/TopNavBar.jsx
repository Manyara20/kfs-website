"use client";

import React, { useState, useEffect } from "react";
import { FaPhone, FaClock, FaEnvelope, FaTimes } from "react-icons/fa";

const contactItems = [
  { icon: FaPhone,    text: "0800 123 456 — Toll Free" },
  { icon: FaClock,    text: "Mon–Fri 8am–5pm · Sat & Sun Closed" },
  { icon: FaEnvelope, text: "info@kenyaforestservice.org" },
];

const TopNavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true),  5_000);
    const hideTimer = setTimeout(() => setIsVisible(false), 15_000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <div className="bg-white shadow-xl rounded-lg p-4 w-72 relative border border-gray-100">
        {/* Close */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-kfs-dark transition-colors"
          aria-label="Close"
        >
          <FaTimes className="text-sm" />
        </button>

        <h2 className="text-base font-bold text-kfs-dark mb-3">Office Hours</h2>

        <div className="space-y-2.5">
          {contactItems.map(({ icon: Icon, text }, index) => (
            <div key={index} className="flex items-start gap-2.5">
              <Icon className="text-kfs-dark mt-0.5 flex-shrink-0 text-sm" />
              <span className="text-gray-700 text-sm leading-snug">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
