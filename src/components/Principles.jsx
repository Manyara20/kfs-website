import Image from 'next/image';

const GuidingPrinciples = () => {
  return (

      <div className="relative w-full ">

        {/* Top Frame (1/4 Section) */}
        <div className="bg-white rounded-t-3xl h-1/4 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-center">Guiding Principles</h2>
        </div>

        {/* Bottom Frame (3/4 Section) */}
        <div className="bg-[#0E2E0E] h-3/4 text-white p-6">
          <div className="flex flex-col gap-8 mt-24">

            {/* Principles in Card Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Principle 1 */}
              <div className="bg-[#153D15] p-6 rounded-xl flex items-start gap-4 shadow-lg">
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
              <div className="bg-[#153D15] p-6 rounded-xl flex items-start gap-4 shadow-lg">
                <Image src="/icons/public-good.svg" alt="Public Good" width={40} height={40} />
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
              <div className="bg-[#153D15] p-6 rounded-xl flex items-start gap-4 shadow-lg max-w-md">
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
          <div className="mt-8 text-center border-white border-4 rounded-full p-4">

            <div className="bg-[#0E2E0E] text-white py-2 px-6 mb-4 text-center">
              Access KFS Intranet
            </div>

            <div className="flex justify-center gap-4">
              <button className="border border-white text-white py-2 px-6 rounded-full">Login</button>
              <button className="border border-white text-white py-2 px-6 rounded-full">Register</button>
            </div>
          </div>

        </div>

        {/* Ellipse Image Overlap */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full overflow-hidden border-4 border-[#0E2E0E]">
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
