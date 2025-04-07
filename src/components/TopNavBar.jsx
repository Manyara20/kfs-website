"use client";

import React, { memo } from "react";
import {
  Email,
  Call,
  AccountBox,
  Assignment,
  AccessTime,
} from "@mui/icons-material";

const TopNavBar = memo(() => {
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

  return (
    <nav className="bg-[#0D3C00] w-full shadow-md relative hidden md:block">
      <div className="max-w-6xl mx-auto px-1 sm:px-2 md:px-3 lg:px-4">
        {/* Desktop/Tablet View (md and above) */}
        <div className="flex justify-between items-center py-1">
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
      </div>
    </nav>
  );
});

TopNavBar.displayName = "TopNavBar";

export default TopNavBar;