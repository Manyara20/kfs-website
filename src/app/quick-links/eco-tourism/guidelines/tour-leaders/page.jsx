import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';

function GuideCodeConductPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopNavBar />
      <MainNavBar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-green-800 mb-2">
              Code of Conduct for Tour Leaders, Guides and Porters
            </h1>
            <h2 className="text-xl text-gray-600">
              Ecotourism & Recreation in Public Forests
            </h2>
          </div>
          
          <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-8">
            <div className="bg-green-700 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">
                Professional Standards for Forest Guides
              </h2>
            </div>
            
            <div className="p-6">
              <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-100">
                <p className="text-green-800">
                  As frontline representatives of sustainable tourism, guides play a critical role in protecting forest ecosystems while providing quality visitor experiences.
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Guideline 1 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Professional Knowledge</h3>
                    <p className="text-gray-700">
                      Be properly trained and equipped to provide clients with adequate information on the forest they are visiting and its biodiversity.
                    </p>
                  </div>
                </div>

                {/* Guideline 2 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Environmental Stewardship</h3>
                    <p className="text-gray-700">
                      Minimize environmental and social impact of forest visits including by adequately educating clients, walking only on designated trails and taking all litter out of the forest. Inform clients of specific requirements relating to visits to ecologically sensitive, historical, cultural or religious sites and ensure that they abide by them.
                    </p>
                  </div>
                </div>

                {/* Guideline 3 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Legal Compliance</h3>
                    <p className="text-gray-700">
                      Comply with all relevant legislation and guidelines including those governing visits to state forests, environmental conservation, waste management, wildlife, safety and health.
                    </p>
                  </div>
                </div>

                {/* Guideline 4 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Client Safety</h3>
                    <p className="text-gray-700">
                      Take all possible actions to protect clients against harm from wildlife, insects, fires, diseases and other natural elements including by briefing them on the dangers associated with forest visits and what to do in different circumstances, having clear emergency response procedures and maintaining public or third party liability insurance.
                    </p>
                  </div>
                </div>

                {/* Guideline 5 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Forest Monitoring</h3>
                    <p className="text-gray-700">
                      Monitor the state of the forest in the areas visited and assist KFS in enforcing provisions of the Forest Conservation and Management Act 2016 including by reporting on undesirable changes in the forest, forest fires, illegal harvesting of forest produce and poaching.
                    </p>
                  </div>
                </div>

                {/* Guideline 6 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Cultural Respect</h3>
                    <p className="text-gray-700">
                      Respect forest adjacent communities and cultures. Obtain consent before taking clients to their dwellings or taking their photographs.
                    </p>
                  </div>
                </div>

                {/* Guideline 7 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Environmental Improvement</h3>
                    <p className="text-gray-700">
                      Take action to improve the forest and general environment including supporting rehabilitation of forests in the area of operation.
                    </p>
                  </div>
                </div>

                {/* Guideline 8 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Community Engagement</h3>
                    <p className="text-gray-700">
                      Promote participation of forest-adjacent communities in ecotourism including by using their services and encouraging clients to purchase their products.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-blue-700 mb-2">Guide Certification</h2>
                    <p className="text-blue-800">
                      All guides must complete KFS-approved training and certification programs to ensure compliance with these standards. Regular refresher courses are mandatory.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterBottom />
    </div>
  );
}

export default GuideCodeConductPage;