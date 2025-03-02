import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#023011] text-white p-8">
      <div className="flex justify-between items-start gap-12">

        {/* Left Section: Logo  */}

          <div className="place-items-center  bg-white p-2 w-fit ">
              {/* Logo */}
              <Image
                src="https://whatthelogo.com/storage/logos/kenya-forest-service-96842.png"
                alt="Kenya Forest Service Logo"
                width={120}
                height={80}
              />
          </div>
           
         

        {/* Right Section: Mission Card + Toll-Free Card */}
        <div className="flex gap-8  ">
          {/* Mission Card */}
          <div className="bg-white p-4 shadow-lg inline-block w-100 h-fit rounded-2xl">
            <h2 className="text-xl font-semibold leading-tight">
              <span className="font-extrabold text-[#7E4009]">Kenya </span>
              <span className="font-medium text-[#0A6527]">Forest Service</span>
            </h2>
            <p className="mt-4 text-gray-800">
              To be an internationally recognized organization for excellence in knowledge-based sustainable forest resources management and conservation.
            </p>
          </div>

          {/* Toll-Free Card */}
          <div className="bg-[#0D3C00] p-4 shadow-lg inline-block border-white border-4 rounded-3xl">
            <h3 className="text-lg font-bold mb-4 leading-tight">
              Toll Free Number (For Anticorruption and Complaints)
            </h3>
            <div className="flex items-center gap-2 text-lg font-bold mb-4">
              📞 <span>0800 721 277</span>
            </div>
            <p>Contact Us Now through our Toll Free Number</p>
            <div className="flex justify-center">
              <button className="bg-black text-white py-2 px-4 rounded-2xl mt-4">
                Contact Us
              </button>
            </div>
          </div>
          

        </div>

      </div>
      <div>
        <div className="bg-[#023011] border-2 border-white  p-4 inline-block rounded-3xl w-90">
          <h3 className="text-lg font-extrabold  mb-2 text-center">Contact Us!</h3>
          <p className="border-1 border-white p-1  rounded text-center  mb-4">info@kenyaforestservice.org</p>
          <p className="border-1 border-white p-1  rounded  text-center mb-4">P.O BOX 30513 - 00100</p>
          <p className="border-1 border-white rounded text-center  p-1">Mon - Fri (8am - 5pm) Sat & Sun CLOSED</p>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
