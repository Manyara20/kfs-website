"use client"
import Link from "next/link";
import { FaWheelchair, FaEnvelope, FaIdBadge, FaTree } from "react-icons/fa";

const FloatingSidebar = () => {
  return (
    <div style={styles.sidebar}>
      <Link href="#" style={styles.icon}><FaWheelchair /></Link>
      <Link href="https://mail.kenyaforestservice.org/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.kenyaforestservice.org%2fowa%2f" style={styles.icon}><FaEnvelope /></Link>
      <Link href="https://enursery.kenyaforestservice.org/" style={styles.icon}><FaIdBadge /></Link>
      <Link href="https://sawmillers.kenyaforestservice.org/" style={styles.icon}><FaTree /></Link>
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
  },
};

export default FloatingSidebar;
