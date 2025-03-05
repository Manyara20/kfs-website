import React from 'react';

const MagazineSection = () => {
  return(
    <div className="flex justify-center">
    <div className= "bg-[#10220F] W-full max-w-4xl p-6 flex justify-centre ">
      {/* Left Text Frame */}
      <div className= "text-white flex-1 p-6">
        <h2 className=" text-3xl font-bold mb-4">Subscribe To The Forester Magazine!</h2>
        <p className="text-lg">
          Subscribe to The Forester Magazine, the official publication of the Kenya Forest Service (KFS), and become part of a movement dedicated to protecting and conserving Kenya's natural heritage. 
        </p>
 
      </div>
      {/* Right Button Frame */}
      <div className="   items-center justify-center flex p-6 rounded shadow">
        <button className=" font-black text-3xl  bg-white rounded-lg text-black  px-6 py-3 hover:bg-gray-200">
          Subscribe!
        </button>
      </div>
    </div>
    </div>

  );
};

export default MagazineSection;