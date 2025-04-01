"use client";

import React, { useState } from "react";
import { Group, Balance, TrendingUp, Star, Science, Gavel } from "@mui/icons-material";

const coreValues = [
  { title: "Teamwork", content: "The Service will embrace mutual support and respect...", icon: <Group fontSize="large" /> },
  { title: "Equity", content: "The Service will promote the virtues of equity and fair play...", icon: <Balance fontSize="large" /> },
  { title: "Result Oriented", content: "The Service will pursue timely attainment of targeted results...", icon: <TrendingUp fontSize="large" /> },
  { title: "Scientific Principles & Professionalism", content: "The Service will encourage and reward creativity...", icon: <Science fontSize="large" /> },
  { title: "Integrity", content: "The Service and staff shall ascribe to high standards of personal integrity...", icon: <Gavel fontSize="large" /> }
];

const CoreValues = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={{ padding: "40px 0", textAlign: "center" }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "32px", fontFamily: "Peugeot, Helvetica, sans-serif" }}>
        Our Core Values
      </h1>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "16px",
          padding: "0 16px",
          scrollbarWidth: "thin",
          scrollbarColor: "#000",
        }}
      >
        {coreValues.map((value, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              height: "350px",
              flexShrink: 0,
              perspective: "1000px",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                transition: "transform 0.6s",
                transform: hoveredIndex === index ? "rotateY(180deg) scale(1.1)" : "rotateY(0deg) scale(1)",
              }}
            >
              {/* Front Side */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#1c441c",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  backfaceVisibility: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: "10px", right: "10px", color: "white" }}>
                  {value.icon}
                </div>
                <h2 style={{ fontSize: "18px", fontWeight: "bold", fontFamily: "Peugeot, Helvetica, sans-serif" }}>{value.title}</h2>
              </div>
              {/* Back Side */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#e6f5e6",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <p style={{ fontSize: "14px", textAlign: "center", fontFamily: "Peugeot, Helvetica, sans-serif" }}>{value.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
