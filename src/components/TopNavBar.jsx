"use client";

import React, { memo, useState } from "react";
import {
  Email,
  Call,
  AccountBox,
  Assignment,
  AccessTime,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

const TopNavBar = memo(() => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Menu items split into two groups
  const group1 = [
    { icon: <Email />, text: "Staff Email", priority: 2 },
    { icon: <Assignment />, text: "E-Registration", priority: 3 },
    { icon: <AccountBox />, text: "Research License", priority: 3 },
  ];

  const group2 = [
    { icon: <Call />, text: "0800 123 456 - Toll Free", priority: 1 },
    {
      icon: <AccessTime />,
      text: "Mon-Fri (8am - 5pm) Sat & Sun CLOSED",
      priority: 2,
    },
    { icon: <Email />, text: "info@kenyaforestservice.org", priority: 1 },
  ];

  // Combine all items for the panel on smaller screens
  const allItems = [...group1, ...group2];

  return (
    <nav className="bg-[#0D3C00] w-full shadow-md relative">
      <div className="max-w-6xl mx-auto px-1 sm:px-2 md:px-3 lg:px-4">
        {/* Desktop/Tablet View (md and above) */}
        <div className="hidden md:flex justify-between items-center py-1">
          {/* Group 1 */}
          <div className="flex items-center space-x-1 flex-shrink-0">
            {group1.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-white p-0.5">
                  {React.cloneElement(item.icon, {
                    className: "text-white w-3 h-3 md:w-4 md:h-4 lg:w-4 lg:h-4",
                  })}
                </div>
                <span
                  className="text-white text-[0.55rem] md:text-[0.6rem] lg:text-[0.65rem] font-['Peugeot',Helvetica,sans-serif] capitalize whitespace-nowrap"
                >
                  {item.text}
                </span>
                {index < group1.length - 1 && (
                  <div className="w-px h-2 md:h-3 lg:h-3 bg-white mx-0.5 md:mx-1 lg:mx-1" />
                )}
              </div>
            ))}
          </div>

          {/* Group 2 */}
          <div className="flex items-center space-x-1 flex-shrink-0">
            {group2.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-white p-0.5">
                  {React.cloneElement(item.icon, {
                    className: "text-white w-3 h-3 md:w-4 md:h-4 lg:w-4 lg:h-4",
                  })}
                </div>
                <span
                  className="text-white text-[0.55rem] md:text-[0.6rem] lg:text-[0.65rem] font-['Peugeot',Helvetica,sans-serif] whitespace-nowrap"
                >
                  {item.text}
                </span>
                {index < group2.length - 1 && (
                  <div className="w-px h-2 md:h-3 lg:h-3 bg-white mx-0.5 md:mx-1 lg:mx-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View (below md) - Floating Action Button */}
        <div className="md:hidden flex items-center justify-end py-2 px-3">
          <button
            onClick={() => setIsPanelOpen(!isPanelOpen)}
            className="text-white focus:outline-none bg-white/20 rounded-full p-2"
          >
            {isPanelOpen ? (
              <CloseIcon className="w-6 h-6 text-white" />
            ) : (
              <MenuIcon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Slide-In Panel for Mobile */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#0D3C00] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isPanelOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-4">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsPanelOpen(false)}
                className="text-white focus:outline-none"
              >
                <CloseIcon className="w-6 h-6 text-white" />
              </button>
            </div>
            {allItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center py-3 border-b border-white/20 last:border-b-0"
              >
                <div className="text-white p-2">
                  {React.cloneElement(item.icon, {
                    className: "text-white w-5 h-5",
                  })}
                </div>
                <span
                  className="text-white text-base font-['Peugeot',Helvetica,sans-serif] whitespace-nowrap"
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Overlay to close panel when clicking outside */}
        {isPanelOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsPanelOpen(false)}
          />
        )}
      </div>
    </nav>
  );
});

TopNavBar.displayName = "TopNavBar";

export default TopNavBar;