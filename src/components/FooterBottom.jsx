// components/FooterBottom.jsx

import Link from "next/link";

const FooterBottom = () => {
  return (
    <div className="bg-[#023011] text-white py-6 border-t-4 border-white shadow-lg shadow-gray-800/50 relative z-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left Side */}
        <p className="text-sm">
          © 2023 Designed by <span className="font-semibold">KFS ICT Team</span>
        </p>

        {/* Right Side (Sitemap Links) */}
        <div className="flex space-x-8 mt-4 md:mt-0">
          <Link href="/sitemap" className="hover:underline transition-transform hover:scale-105">
            Sitemap
          </Link>
          <Link href="/terms-of-service" className="hover:underline transition-transform hover:scale-105">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="hover:underline transition-transform hover:scale-105">
            Privacy Policy
          </Link>
        </div>

      </div>
    </div>
  );
};

export default FooterBottom;
