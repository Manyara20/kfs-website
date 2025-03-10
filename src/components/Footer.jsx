import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#023011] text-white py-10 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative">
        {/* KFS Logo (Top Left) */}
        <div className="absolute top-0 left-4 sm:left-6 lg:left-10 z-10">
          <div className="bg-white p-2 sm:p-3 rounded-lg shadow-md">
            <Image
              src="https://whatthelogo.com/storage/logos/kenya-forest-service-96842.png"
              alt="Kenya Forest Service Logo"
              width={80}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        {/* Main Content: Mission Card + Toll-Free Card */}
        <div className="pt-20 sm:pt-24 md:pt-28 flex flex-col md:flex-row justify-center gap-8 md:gap-10 lg:gap-16">
          {/* Mission Card */}
          <div className="bg-white p-5 sm:p-6 md:p-8 shadow-lg rounded-xl w-full md:w-[450px] lg:w-[500px] border-t-4 border-[#7E4009] transition-transform hover:scale-105">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold leading-tight">
              <span className="text-[#7E4009] font-extrabold">Kenya </span>
              <span className="text-[#0A6527] font-medium">Forest Service</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-gray-700 text-sm sm:text-base md:text-lg lg:text-lg font-light leading-relaxed">
              To be an internationally recognized organization for excellence in knowledge-based sustainable forest resources management and conservation.
            </p>
          </div>

          {/* Toll-Free Card */}
          <div className="bg-[#0D3C00] p-5 sm:p-6 md:p-8 shadow-xl border-4 border-[#F5F5F5] rounded-2xl w-full md:w-[450px] lg:w-[500px] transition-transform hover:scale-105">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold mb-4 sm:mb-5 text-[#F5F5F5]">
              Toll Free Number (For Anticorruption & Complaints)
            </h3>
            <div className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold mb-4 sm:mb-5 text-[#F5F5F5]">
              <span>📞</span> <span>0800 721 277</span>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-[#D1D5DB] font-light mb-4 sm:mb-5">
              Contact us now through our toll-free number for quick assistance.
            </p>
            <div className="flex justify-center mt-4 sm:mt-5">
              <button className="bg-[#1A1A1A] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl text-sm sm:text-base md:text-lg font-medium hover:bg-[#333333] transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-10 md:mt-12 lg:mt-16">
          <div className="bg-[#0A3D18] border-2 border-[#F5F5F5] p-6 sm:p-8 md:p-10 rounded-2xl w-full max-w-4xl mx-auto shadow-md">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold mb-6 sm:mb-8 text-center text-[#F5F5F5]">
              Contact Us!
            </h3>
            <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              <p className="border border-[#D1D5DB] p-3 sm:p-4 rounded-lg text-center text-sm sm:text-base md:text-lg lg:text-lg text-[#D1D5DB] font-light bg-[#023011]">
                info@kenyaforestservice.org
              </p>
              <p className="border border-[#D1D5DB] p-3 sm:p-4 rounded-lg text-center text-sm sm:text-base md:text-lg lg:text-lg text-[#D1D5DB] font-light bg-[#023011]">
                P.O BOX 30513 - 00100
              </p>
              <p className="border border-[#D1D5DB] p-3 sm:p-4 rounded-lg text-center text-sm sm:text-base md:text-lg lg:text-lg text-[#D1D5DB] font-light bg-[#023011]">
                Mon - Fri (8am - 5pm) Sat & Sun CLOSED
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-12 lg:mt-16 border-t border-[#F5F5F5]/20 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#D1D5DB]">
            © {new Date().getFullYear()} Kenya Forest Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;