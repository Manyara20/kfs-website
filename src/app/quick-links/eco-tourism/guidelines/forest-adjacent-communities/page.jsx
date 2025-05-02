import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';

function CommunityCodeConductPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavBar />
      <MainNavBar />
      <div
       className="flex-grow bg-cover bg-center bg-fixed bg-[url('/images/background-template/background.jpg')] bg-[linear-gradient(rgba(0,50,20,0.8),rgba(0,50,20,0.8))] p-8 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] before:opacity-10 before:z-0"
     >
      
      <main className="flex-grow container mx-auto px-4 py-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-green-800 mb-6">
            Code of Conduct for Forest Adjacent Communities in Ecotourism & Recreation in Public Forests
          </h1>
          
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <div className="mb-6 p-4 bg-green-50 rounded border border-green-100">
              <p className="text-green-800">
                Forest adjacent communities play a vital role in sustainable ecotourism. This code of conduct outlines their responsibilities and expected behaviors in forest-based tourism activities.
              </p>
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-green-700 mb-1">Collaboration with Stakeholders</h3>
                  <p className="text-gray-700">
                    Collaborate with KFS, investors and other partners to participate in and benefit from forest-based ecotourism & recreation facilities. In this, the community should engage with the partners who practice responsible tourism including those that demonstrate concern for environmental conservation and local communities.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-green-700 mb-1">Regulation Development</h3>
                  <p className="text-gray-700">
                    Develop and implement specific regulations and guidelines for ecotourism & recreation in community areas to reduce the negative social, economic and cultural impacts of tourism.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-green-700 mb-1">Respect for Zoned Areas</h3>
                  <p className="text-gray-700">
                    Respect forest areas that have been zoned for ecotourism & recreation and undertake only those activities that are compatible with tourism within such zones.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-green-700 mb-1">Forest Monitoring</h3>
                  <p className="text-gray-700">
                    Monitor the state of the forest and assist KFS in enforcing provisions of the Forest Conservation and Management Act 2016 including by reporting on undesirable changes in the forest, forest fires, illegal harvesting of forest produce and poaching.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-blue-50 rounded border border-blue-100">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">Community Benefits</h2>
              <p className="text-blue-800">
                By following this code of conduct, communities can ensure sustainable benefits from ecotourism while protecting forest resources for future generations.
              </p>
            </div>
          </div>
        </div>
      </main>
      </div>
      
      <FooterBottom />
    </div>
  );
}

export default CommunityCodeConductPage;