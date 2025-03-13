'use client';

const Footer = () => {
  return (
    <footer className="bg-[#0A6527] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Toll-Free Section */}
          <div className="bg-white/10 p-4 rounded-lg shadow-md transition-transform hover:scale-102 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-2">
              Toll Free
            </h3>
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl font-semibold text-white mb-2">
              <span>📞</span> <span>0800 721 277</span>
            </div>
            <p className="text-sm md:text-base text-white/80 text-center">
              Anticorruption & Complaints
            </p>
            <div className="flex justify-center mt-2">
              <button className="bg-white text-[#0A6527] py-1 px-4 rounded-md text-sm md:text-base font-medium hover:bg-[#0A6527] hover:text-white transition-colors">
                Call Now
              </button>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="bg-white/10 p-4 rounded-lg shadow-md transition-transform hover:scale-102 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-2">
              Contact Us
            </h3>
            <div className="grid grid-cols-1 gap-2 text-center text-white/80">
              <p className="text-sm md:text-base bg-white/5 py-1 rounded-md">
                info@kenyaforestservice.org
              </p>
              <p className="text-sm md:text-base bg-white/5 py-1 rounded-md">
                P.O BOX 30513 - 00100
              </p>
              <p className="text-sm md:text-base bg-white/5 py-1 rounded-md">
                Mon-Fri: 8am-5pm
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 border-t border-white/30 pt-2 text-center">
          <p className="text-xs md:text-sm text-white/80">
            © {new Date().getFullYear()} Kenya Forest Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;