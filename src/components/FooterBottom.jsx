import Link from "next/link";

const FooterBottom = () => {
  return (
    <footer className="bg-[#023011] text-white py-6 border-t-4 border-white shadow-lg shadow-gray-800/50 shrink-0 z-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Side */}
        <p className="text-sm">
          © 2025 Designed by <span className="font-semibold">KFS ICT Team</span>
        </p>

        {/* Right Side (Sitemap Links) */}
        <div className="flex space-x-8 mt-4 md:mt-0">
          <Link href="/SiteMap" className="hover:underline transition-transform hover:scale-105">
            SiteMap
          </Link>
          <Link href="/Terms of Service" className="hover:underline transition-transform hover:scale-105">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="hover:underline transition-transform hover:scale-105">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;