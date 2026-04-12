"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import navigationItems from "./navigationItems";

const MainNavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});
  const [isSticky, setIsSticky] = useState(false);

  // Flatten nav tree for search
  const flattenItems = (items, parentPath = []) => {
    let result = [];
    items.forEach((item) => {
      const path = [...parentPath, item.label];
      if (item.link) {
        result.push({ label: path.join(" › "), link: item.link, isExternal: item.isExternal });
      }
      if (item.subItems?.length > 0) {
        result = result.concat(flattenItems(item.subItems, path));
      }
    });
    return result;
  };

  const flatNavItems = flattenItems(navigationItems);

  useEffect(() => {
    const q = searchQuery.trim().toLowerCase();
    setFilteredItems(
      q ? flatNavItems.filter((i) => i.label.toLowerCase().includes(q)) : []
    );
  }, [searchQuery]);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleExpanded = (key) =>
    setExpandedItems((prev) => ({ ...prev, [key]: !prev[key] }));

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  // ── Desktop submenu (recursive) ──────────────────────────────
  const DesktopSubMenu = ({ items, level = 0 }) => (
    <div
      className={`absolute ${level === 0 ? "top-full left-0" : "top-0 left-full"} bg-kfs-dark min-w-[210px] shadow-xl border-t-2 border-kfs-accent invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50`}
    >
      {items.map((item, idx) => (
        <div key={idx} className="relative group/nested">
          <Link
            href={item.link || "#"}
            target={item.isExternal ? "_blank" : "_self"}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            className="flex items-center justify-between px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white capitalize border-b border-white/5 last:border-0 transition-colors duration-150"
          >
            <span>{item.label}</span>
            {item.subItems?.length > 0 && (
              <FaChevronRight className="ml-3 text-[10px] opacity-60 flex-shrink-0" />
            )}
          </Link>
          {item.subItems?.length > 0 && (
            <DesktopSubMenu items={item.subItems} level={level + 1} />
          )}
        </div>
      ))}
    </div>
  );

  // ── Mobile menu (recursive) ───────────────────────────────────
  const MobileMenuItems = ({ items, parentKey = "", level = 0 }) =>
    items.map((item, idx) => {
      const key = parentKey ? `${parentKey}-${idx}` : `${idx}`;
      const hasChildren = item.subItems?.length > 0;
      return (
        <React.Fragment key={key}>
          <div className="border-b border-white/10">
            {hasChildren ? (
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-sm text-white hover:bg-white/10 capitalize transition-colors duration-150"
                style={{ paddingLeft: `${16 + level * 14}px` }}
                onClick={() => toggleExpanded(key)}
              >
                <span>{item.label}</span>
                <FaChevronDown
                  className={`text-xs transition-transform duration-200 flex-shrink-0 ${
                    expandedItems[key] ? "rotate-180" : ""
                  }`}
                />
              </button>
            ) : (
              <Link
                href={item.link || "#"}
                target={item.isExternal ? "_blank" : "_self"}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="flex items-center py-3 text-sm text-white/90 hover:text-white hover:bg-white/10 capitalize transition-colors duration-150"
                style={{ paddingLeft: `${16 + level * 14}px` }}
                onClick={() => setDrawerOpen(false)}
              >
                {item.label}
              </Link>
            )}
          </div>
          {hasChildren && expandedItems[key] && (
            <div className="bg-black/20">
              <MobileMenuItems items={item.subItems} parentKey={key} level={level + 1} />
            </div>
          )}
        </React.Fragment>
      );
    });

  return (
    <>
      {/* ── Sticky Nav Bar ───────────────────────────────────── */}
      <nav
        className={`sticky top-0 z-30 transition-all duration-300 ${
          isSticky
            ? "bg-kfs-dark shadow-lg shadow-black/30"
            : "bg-black/15 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 py-2">
              <Image
                src="/images/kfs_logo.png"
                alt="Kenya Forest Service"
                width={64}
                height={48}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
              {navigationItems.map((item, index) =>
                item.subItems ? (
                  <div key={index} className="relative group">
                    <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10 rounded transition-colors duration-150 capitalize">
                      {item.label}
                      <FaChevronDown className="text-[10px] opacity-70 mt-px" />
                    </button>
                    <DesktopSubMenu items={item.subItems} />
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={item.link}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="px-3 py-2 text-sm font-semibold text-white hover:bg-white/10 rounded transition-colors duration-150 capitalize"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-1.5">
              {/* Search (desktop) */}
              <button
                className="hidden md:flex items-center justify-center w-9 h-9 text-white hover:bg-white/10 rounded transition-colors duration-150"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
              >
                <FaSearch className="text-sm" />
              </button>

              {/* Social links */}
              <div className="flex items-center gap-0.5 bg-white/10 rounded px-2 py-1.5">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 px-1.5 font-bold text-sm leading-none transition-colors"
                  aria-label="X (Twitter)"
                >
                  X
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 p-1 transition-colors" aria-label="Facebook">
                  <FaFacebookF className="text-sm" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 p-1 transition-colors" aria-label="Instagram">
                  <FaInstagram className="text-sm" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 p-1 transition-colors" aria-label="YouTube">
                  <FaYoutube className="text-sm" />
                </a>
              </div>

              {/* Mobile controls */}
              <button
                className="md:hidden flex items-center justify-center w-9 h-9 text-white hover:bg-white/10 rounded transition-colors"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
              >
                <FaSearch className="text-sm" />
              </button>
              <button
                className="md:hidden flex items-center justify-center w-9 h-9 text-white hover:bg-white/10 rounded transition-colors"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
              >
                <FaBars className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer ────────────────────────────────────── */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setDrawerOpen(false)}
          />
          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-kfs-dark flex flex-col overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/20 flex-shrink-0">
              <Image src="/images/kfs_logo.png" alt="KFS Logo" width={48} height={36} />
              <button
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <div className="overflow-y-auto flex-1 py-2">
              <MobileMenuItems items={navigationItems} />
            </div>
          </div>
        </div>
      )}

      {/* ── Search Overlay ───────────────────────────────────── */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-kfs-dark/96 flex flex-col items-center pt-20 px-4 animate-fade-in">
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            onClick={closeSearch}
            aria-label="Close search"
          >
            <FaTimes className="text-2xl" />
          </button>

          <div className="w-full max-w-2xl">
            <h2 className="text-white text-2xl font-bold text-center mb-8 tracking-wide">
              Search KFS Website
            </h2>

            {/* Input */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-sm" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter keywords…"
                autoFocus
                className="w-full pl-11 pr-4 py-3.5 bg-white/10 border border-white/25 text-white placeholder-white/40 rounded focus:outline-none focus:border-white/60 transition-colors text-sm"
              />
            </div>

            {/* Results */}
            {filteredItems.length > 0 && (
              <div className="mt-4 rounded border border-white/15 overflow-hidden max-h-72 overflow-y-auto">
                {filteredItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.link}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="block px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white capitalize border-b border-white/10 last:border-0 transition-colors"
                    onClick={closeSearch}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {searchQuery.trim() && filteredItems.length === 0 && (
              <p className="text-white/50 text-center mt-8 text-sm">
                No results found for &ldquo;{searchQuery}&rdquo;
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MainNavBar;
