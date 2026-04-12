"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const quickLinks = [
  { label: "Kenya Forestry College", href: "https://kfc.ac.ke", external: true },
  { label: "Ministry of Environment", href: "#", external: false },
  { label: "KEFRI", href: "#", external: false },
  { label: "Nurseries", href: "/about/nurseries", external: false },
];

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <footer className="relative text-white py-16 w-full border-t-4 border-kfs-medium overflow-hidden bg-kfs-dark" />
    );
  }

  return (
    <footer className="relative text-white w-full border-t-4 border-kfs-medium overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background-template/footer.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-kfs-dark/85 to-kfs-medium/90" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Logo & Vision */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/kfs_logo.png"
              alt="KFS Logo"
              width={64}
              height={64}
            />
            <p className="text-sm text-white/75 leading-relaxed italic">
              To be an internationally recognized organisation for excellence in
              knowledge-based sustainable forest resources management and conservation.
            </p>
          </div>

          {/* Column 2 — Contact */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/75">
                <FaEnvelope className="mt-0.5 flex-shrink-0 text-white/60" />
                info@kenyaforestservice.org
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/75">
                <FaPhone className="mt-0.5 flex-shrink-0 text-white/60" />
                0800 123 456 (Toll Free)
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/75">
                <FaMapMarkerAlt className="mt-0.5 flex-shrink-0 text-white/60" />
                P.O. Box 30513–00100, Nairobi, Kenya
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/75">
                <FaClock className="mt-0.5 flex-shrink-0 text-white/60" />
                Mon–Fri 8am–5pm · Sat &amp; Sun Closed
              </li>
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href, external }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={external ? "_blank" : "_self"}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/75 hover:text-white transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider">
              The Forester Magazine
            </h3>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              Subscribe to receive the latest forestry news and updates.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-3 py-2.5 bg-white/10 border border-white/25 text-white placeholder-white/40 text-sm rounded focus:outline-none focus:border-white/60 transition-colors"
              />
              <button className="w-full bg-kfs-medium hover:bg-white hover:text-kfs-dark text-white font-semibold py-2.5 px-4 text-sm rounded transition-all duration-300">
                Subscribe
              </button>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 mt-5">
              {[
                { href: "https://twitter.com",   Icon: FaTwitter,   label: "Twitter"   },
                { href: "https://facebook.com",  Icon: FaFacebookF, label: "Facebook"  },
                { href: "https://instagram.com", Icon: FaInstagram, label: "Instagram" },
                { href: "https://youtube.com",   Icon: FaYoutube,   label: "YouTube"   },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/60 hover:text-white hover:scale-110 transition-all duration-200"
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
