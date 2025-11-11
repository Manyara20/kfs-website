"use client";

import { useState } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";
import KFSDocumentChat from "@/components/KFSChat"; // ← your chat component from earlier

const FloatingChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-[999]">
        {/* Chat Toggle Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="group relative bg-[#2a7a3d] hover:bg-[#1e5a2c] text-white w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border-4 border-white"
          aria-label="Open KFS AI Chat Assistant"
        >
          {isChatOpen ? (
            <FaTimes className="text-2xl sm:text-3xl animate-pulse" />
          ) : (
            <FaCommentDots className="text-2xl sm:text-3xl animate-bounce" />
          )}

          {/* Optional Tooltip */}
          {!isChatOpen && (
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs sm:text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Chat with KFS Documents
            </span>
          )}
        </button>

        {/* Chat Panel - Slides in from bottom-right */}
        <div
          className={`absolute bottom-20 right-0 w-96 sm:w-[420px] md:w-[480px] h-[600px] bg-white rounded-2xl shadow-2xl border-4 border-[#2a7a3d] overflow-hidden transition-all duration-500 origin-bottom-right ${
            isChatOpen
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-10 opacity-0 scale-90 pointer-events-none"
          }`}
        >
          {/* Header */}
          <div className="bg-[#2a7a3d] text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#2a7a3d] font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">KFS AI Assistant</h3>
                <p className="text-xs opacity-90">Ask anything about policies, regulations, forests...</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-2 transition"
            >
              <FaTimes />
            </button>
          </div>

          {/* Chat Content */}
          <div className="h-full bg-gradient-to-b from-green-50 to-white">
            <KFSDocumentChat />
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingChatButton;