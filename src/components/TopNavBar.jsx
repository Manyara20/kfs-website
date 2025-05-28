"use client";

import React, { useState, useEffect } from "react";
import { Email, Call, AccessTime } from "@mui/icons-material";

const OfficeHoursPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const group2 = [
    { icon: <Call />, text: "0800 123 456 - Toll Free", priority: 1 },
    {
      icon: <AccessTime />,
      text: "Mon-Fri (8am - 5pm) Sat & Sun CLOSED",
      priority: 2,
    },
    { icon: <Email />, text: "info@kenyaforestservice.org", priority: 1 },
  ];

  useEffect(() => {
    // Show popup after 5 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Hide popup after 10 seconds if not manually closed
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 15000); // 5000ms (show) + 10000ms (visible duration)

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed top-4 right-4 z-50 animate-fadeIn">
          <div className="bg-white shadow-lg rounded-lg p-4 max-w-xs w-full relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-[#0D3C00] hover:text-gray-700 focus:outline-none"
              aria-label="Close popup"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-lg font-bold text-[#0D3C00] mb-3">Office Hours</h2>
            <div className="space-y-2">
              {group2.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="text-[#0D3C00]">
                    {React.cloneElement(item.icon, {
                      className: "w-4 h-4",
                    })}
                  </div>
                  <span className="text-[#0D3C00] text-sm font-['Peugeot',Helvetica,sans-serif]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OfficeHoursPopup;