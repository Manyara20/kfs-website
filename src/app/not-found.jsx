"use client";
import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function NotFound() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <div className="p-4 md:p-12 bg-white min-h-screen flex flex-col items-center justify-center">
        <div className="text-center mb-10">
          <h1
            className="text-4xl md:text-5xl mb-4 text-[#023011]"
            style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
          >
            404 - Page Not Found
          </h1>
          <p
            className="text-gray-600 mb-8 max-w-[800px] mx-auto text-lg"
            style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
          >
            Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <Link href="/">
            <button
              className="bg-[#6A961F] text-white px-6 py-3 rounded hover:bg-[#023011] transition-colors duration-300"
              style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
            >
              Back to Home
            </button>
          </Link>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}