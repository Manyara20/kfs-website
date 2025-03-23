const FooterBottom = () => {
  return (
    <footer className="bg-[#023011] text-white py-6 shadow-lg shadow-gray-800/50 shrink-0 z-10 h-15">
      <div className="border-t border-white/30 pt-2">
          <p className="text-xs md:text-sm text-white/80 text-center">
            © {new Date().getFullYear()} Kenya Forest Service. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default FooterBottom;