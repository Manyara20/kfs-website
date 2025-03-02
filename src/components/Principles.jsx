import Image from 'next/image';

const GuidingPrinciples = () => {
  return (

      <div className="relative w-full ">

        {/* Top Frame (1/4 Section) */}
        <div className="bg-white rounded-t-3xl h-70 flex items-center justify-center relative shadow-lg z-10">
          <h2 className="text-3xl text-black font-extrabold text-center">Guiding Principles</h2>
        </div>

        {/* Bottom Frame (3/4 Section) */}
        <div className="bg-[#0E2E0E] h-3/4 text-white p-6 relative z-0">
          <div className="flex flex-col gap-8 mt-24">

            {/* Principles in Card Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Principle 1 */}
              <div className="bg-[#0E2E0E] p-6 rounded-xl flex items-start gap-4 shadow-lg">
                <Image src="/icons/tree.svg" alt="Ecosystem Approach" width={40} height={40} />
                <div>
                  <h3 className="text-lg font-semibold">Ecosystem Approach</h3>
                  <p>
                    Adoption of an integrated ecosystem approach to conserving and managing forest resources,
                    paying particular attention to ecologically fragile areas.
                  </p>
                </div>
              </div>

              {/* Principle 2 */}
              <div className="bg-[#0E2E0E] p-6 rounded-xl flex items-start gap-4 shadow-lg">
                <Image src="/icons/public-service.png" alt="Public Good" width={40} height={40} />
                <div>
                  <h3 className="text-lg font-semibold">Public Good</h3>
                  <p>
                    Taking into consideration the multiple roles played by forests, ownership must serve a
                    common good for present and future generations.
                  </p>
                </div>
              </div>

            </div>

            {/* Principle 3 (Centered Below) */}
            <div className="flex justify-center">
              <div className="bg-[#0E2E0E] p-6 rounded-xl flex items-start gap-4 shadow-lg max-w-md">
                <Image src="/icons/sustainable.svg" alt="Sustainable Management" width={40} height={40} />
                <div>
                  <h3 className="text-lg font-semibold">Sustainable Forest Management</h3>
                  <p>
                    Sustainable management of forest resources to yield social, economic, and ecological goods
                    and services for current and future generations.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center border-white border-4  bg-[#094219] rounded-3xl w-fit mx-auto p-4">

          {/* Access KFS Intranet */}
          <div className=" text-white py-2 px-6 mb-4 font-bold rounded-full text-center">
              Access KFS Intranet
          </div>

          {/* Login and Register Buttons */}
          <div className="flex justify-center gap-4">
            <button className="border border-white text-white  bg-black py-2 px-6 rounded-full">Login</button>
            <button className="border border-white text-white py-2 bg-black  px-6 rounded-full">Register</button>
          </div>

          </div>

        </div>

        {/* Ellipse Image Overlap */}
        <div className="absolute top-[85px] left-1/2 transform -translate-x-1/2 w-60 h-60 rounded-full overflow-hidden border-4 border-[#0E2E0E] z-20">
          <Image
            src="/images/forest-worker.png"
            alt="Forest Worker"
            layout="fill"
            objectFit="cover"
          />
        </div>

      </div>

  );
};

export default GuidingPrinciples;
