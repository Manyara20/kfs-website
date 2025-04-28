import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';

function VisitorCodeConductPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopNavBar />
      <MainNavBar />
      <div
        className="flex-grow bg-cover bg-center bg-fixed bg-[url('/images/background-template/background.jpg')] bg-[linear-gradient(rgba(0,50,20,0.8),rgba(0,50,20,0.8))] p-8 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] before:opacity-10 before:z-0"
      >
      <main className="flex-grow container mx-auto px-4 py-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-green-800 mb-2">
              Code of Conduct for Visitors
            </h1>
            <h2 className="text-xl text-gray-600">
              Ecotourism & Recreation in Public Forests
            </h2>
            <p className="text-gray-500 mt-4">
              Your actions help preserve Kenya's forests for future generations
            </p>
          </div>
          
          <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-8">
            <div className="bg-green-700 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">
                Responsible Visitor Guidelines
              </h2>
            </div>
            
            <div className="p-6">
              <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-100">
                <p className="text-green-800">
                  As a visitor to our public forests, you play a vital role in conservation. Please follow these guidelines to ensure minimal environmental impact and maximum benefit to local communities.
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Guideline 1 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Minimize Your Impact</h3>
                    <p className="text-gray-700">
                      Minimize environmental and social impact including by learning about the forest you're visiting, using eco-certified service providers, walking only on designated trails, not marking or defacing natural features, not collecting plants/animals, and taking all litter out. Abide by regulations for sensitive sites.
                    </p>
                  </div>
                </div>

                {/* Guideline 2 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Follow All Rules</h3>
                    <p className="text-gray-700">
                      Comply with all relevant legislation and guidelines including those governing visits to state forests, environmental conservation, waste management, wildlife, safety and health.
                    </p>
                  </div>
                </div>

                {/* Guideline 3 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Prioritize Safety</h3>
                    <p className="text-gray-700">
                      Protect yourself against harm from wildlife, insects, fires, and diseases by learning about potential dangers, always being accompanied by a trained guide, and having proper insurance coverage.
                    </p>
                  </div>
                </div>

                {/* Guideline 4 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Respect Local Communities</h3>
                    <p className="text-gray-700">
                      Respect forest-adjacent communities and cultures. Always obtain consent before visiting their dwellings or taking photographs.
                    </p>
                  </div>
                </div>

                {/* Guideline 5 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Support Local Businesses</h3>
                    <p className="text-gray-700">
                      Use locally owned infrastructure for accommodation and transport to ensure your visit benefits the local economy.
                    </p>
                  </div>
                </div>

                {/* Guideline 6 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Contribute to Conservation</h3>
                    <p className="text-gray-700">
                      Ask about actions you can take to improve the forest environment and participate where possible.
                    </p>
                  </div>
                </div>

                {/* Guideline 7 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold">7</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Empower Communities</h3>
                    <p className="text-gray-700">
                      Support forest-adjacent communities by using their services, purchasing their products, or contributing to their projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-blue-700 mb-2">The Responsible Visitor Pledge</h2>
                    <p className="text-blue-800">
                      By following these guidelines, you become a partner in conservation. Your responsible actions help protect Kenya's forests while supporting sustainable livelihoods for local communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
      
      
      <FooterBottom />
    </div>
  );
}

export default VisitorCodeConductPage;