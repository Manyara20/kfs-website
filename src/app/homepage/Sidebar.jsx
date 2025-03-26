"use client";
import Link from "next/link";
import { useState } from "react";
import { FaWheelchair, FaEnvelope, FaIdBadge, FaTree } from "react-icons/fa";

const FloatingSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [textSize, setTextSize] = useState(16); // Default font size in pixels
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isLinksUnderlined, setIsLinksUnderlined] = useState(false);

  // Function to increase text size
  const increaseText = () => {
    setTextSize((prev) => Math.min(prev + 2, 24)); // Max size 24px
    document.documentElement.style.fontSize = `${textSize + 2}px`;
  };

  // Function to decrease text size
  const decreaseText = () => {
    setTextSize((prev) => Math.max(prev - 2, 12)); // Min size 12px
    document.documentElement.style.fontSize = `${textSize - 2}px`;
  };

  // Function to toggle grayscale
  const toggleGrayscale = () => {
    setIsGrayscale((prev) => !prev);
    document.body.style.filter = isGrayscale ? "none" : "grayscale(100%)";
  };

  // Function to toggle links underline
  const toggleLinksUnderline = () => {
    setIsLinksUnderlined((prev) => !prev);
    const links = document.getElementsByTagName("a");
    for (let link of links) {
      link.style.textDecoration = isLinksUnderlined ? "none" : "underline";
    }
  };

  // Function to reset all accessibility settings
  const resetSettings = () => {
    setTextSize(16);
    setIsGrayscale(false);
    setIsLinksUnderlined(false);
    document.documentElement.style.fontSize = "16px";
    document.body.style.filter = "none";
    const links = document.getElementsByTagName("a");
    for (let link of links) {
      link.style.textDecoration = "none";
    }
  };

  return (
    <div style={styles.sidebar}>
      {/* Accessibility Button with Hover Menu */}
      <div
        style={styles.iconContainer}
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <div style={styles.icon}>
          <FaWheelchair />
        </div>
        {isMenuOpen && (
          <div style={styles.accessibilityMenu}>
            <button style={styles.menuItem} onClick={increaseText}>
              <span style={styles.menuIcon}>🔍</span> Increase Text
            </button>
            <button style={styles.menuItem} onClick={decreaseText}>
              <span style={styles.menuIcon}>🔎</span> Decrease Text
            </button>
            <button style={styles.menuItem} onClick={toggleGrayscale}>
              <span style={styles.menuIcon}>🖼️</span> Grayscale
            </button>
            <button style={styles.menuItem} onClick={toggleLinksUnderline}>
              <span style={styles.menuIcon}>🔗</span> Links Underline
            </button>
            <button style={styles.menuItem} onClick={resetSettings}>
              <span style={styles.menuIcon}>🔄</span> Reset
            </button>
          </div>
        )}
      </div>

      {/* Other Sidebar Links */}
      <Link
        href="https://mail.kenyaforestservice.org/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.kenyaforestservice.org%2fowa%2f"
        style={styles.icon}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope />
      </Link>
      <Link
        href="https://enursery.kenyaforestservice.org/"
        style={styles.icon}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaIdBadge />
      </Link>
      <Link
        href="https://sawmillers.kenyaforestservice.org/"
        style={styles.icon}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTree />
      </Link>
    </div>
  );
};

// Inline Styles
const styles = {
  sidebar: {
    position: "fixed",
    right: "0",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: "1000",
  },
  iconContainer: {
    position: "relative",
  },
  icon: {
    backgroundColor: "#1f5d2f", // Green matching KFS
    color: "white",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    fontSize: "24px",
    borderRadius: "5px",
    transition: "0.3s",
    cursor: "pointer",
  },
  accessibilityMenu: {
    position: "absolute",
    right: "60px", // Position to the left of the icon
    top: "0",
    backgroundColor: "white",
    border: "1px solid #ccc",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "200px",
    zIndex: "1001",
  },
  menuIcon: {
    marginRight: "8px",
    fontSize: "16px",
  },
  menuTitle: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    border: "none",
    background: "none",
    width: "100%",
    textAlign: "left",
    fontSize: "14px",
    color: "#333",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default FloatingSidebar;