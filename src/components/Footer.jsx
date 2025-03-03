import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#023011] text-white p-8">
      <div className="flex justify-between items-start gap-8">

        {/* Left Section: Logo + Contact Us Card */}
        <div className="flex flex-col gap-4">

          {/* Logo */}
          <Image src="/kfs-logo.png" alt="Kenya Forest Service Logo" width={120} height={80} />

          {/* Contact Us Card (Below Logo) */}
          <div className="bg-[#023011] border border-white p-4 inline-block">
            <h3 className="text-lg font-bold mb-2">Contact Us!</h3>
            <p className="border border-white p-1 mb-1">info@kenyaforestservice.org</p>
            <p className="border border-white p-1 mb-1">P.O BOX 30513 - 00100</p>
            <p className="border border-white p-1">Mon - Fri (8am - 5pm) Sat & Sun CLOSED</p>
          </div>

        </div>

        {/* Right Section: Mission Card + Toll-Free Card */}
        <div className="flex gap-8">

          {/* Mission Card */}
          <div className="bg-white p-4 shadow-lg inline-block">
            <h2 className="text-xl font-semibold leading-tight">
              <span className="font-extrabold text-[#7E4009]">Kenya </span>
              <span className="font-medium text-[#0A6527]">Forest Service</span>
            </h2>
            <p className="mt-4 text-gray-800">
              To be an internationally recognized organization for excellence in knowledge-based sustainable forest resources management and conservation.
            </p>
          </div>

          {/* Toll-Free Card */}
          <div className="bg-[#0D3C00] p-4 shadow-lg inline-block">
            <h3 className="text-lg font-bold mb-4 leading-tight">
              Toll Free Number (For Anticorruption and Complaints)
            </h3>
            <div className="flex items-center gap-2 text-lg font-bold mb-4">
              📞 <span>0800 721 277</span>
            </div>
            <p>Contact Us Now through our Toll Free Number</p>
            <button className="bg-black text-white py-2 px-4 rounded mt-4">
              Contact Us
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
