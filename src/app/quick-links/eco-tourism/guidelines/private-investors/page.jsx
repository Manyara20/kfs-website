import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';

function InvestorCodeConductPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopNavBar />
      <MainNavBar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-green-800 mb-2">
              Code of Conduct for Private Investors in Ecotourism & Recreation Facilities
            </h1>
            <p className="text-lg text-gray-600">
              Guidelines for sustainable and responsible forest-based tourism operations
            </p>
          </div>
          
          <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-8">
            <div className="bg-green-700 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">
                Investor Responsibilities in Public Forests
              </h2>
            </div>
            
            <div className="p-6">
              <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-100">
                <p className="text-green-800">
                  Private investors operating ecotourism facilities in public forests must adhere to these principles to ensure environmental sustainability and community benefits.
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Guideline 1 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Proper Land Use</h3>
                    <p className="text-gray-700">
                      Use the forest area occupied in accordance with the license granted and the approved management plan. Avoid neglecting the licensed area or failing to implement beneficial or remedial measures.
                    </p>
                  </div>
                </div>

                {/* Guideline 2 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Environmental Minimization</h3>
                    <p className="text-gray-700">
                      Minimize environmental impacts by using eco-friendly low-impact technology and materials in construction and operation and ensure that construction material, water, energy and other resources used are from sustainable sources.
                    </p>
                  </div>
                </div>

                {/* Guideline 3 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Legal Compliance</h3>
                    <p className="text-gray-700">
                      Comply with all relevant legislation and guidelines including those governing state forests, tourist accommodation facilities, environmental conservation, waste management, land use, wildlife, water, labour and occupational safety and health.
                    </p>
                  </div>
                </div>

                {/* Guideline 4 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Safety Measures</h3>
                    <p className="text-gray-700">
                      Protect clients and employees against harm from wildlife, insects, fires, diseases and other natural elements including by proper pre-excursion briefings, ensuring that all clients are accompanied by properly-trained guides and maintaining public or third party liability insurance.
                    </p>
                  </div>
                </div>

                {/* Guideline 5 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Responsible Tourism Policies</h3>
                    <p className="text-gray-700">
                      Develop and implement operational policies, programs and plans to promote responsible tourism including those on environment, tourism, employment, procurement, waste management, pollution mitigation, community participation, fire-risk management, health, safety and emergency response.
                    </p>
                  </div>
                </div>

                {/* Guideline 6 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold text-lg">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Impact Monitoring</h3>
                    <p className="text-gray-700">
                      Monitor the environmental, economic, social and cultural impacts of the enterprise regularly and take remedial action wherever necessary. This should include carrying out Environmental Impact Assessment (EIA) and annual Environmental Audit (EA).
                    </p>
                  </div>
                </div>

                {/* Guideline 7 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold text-lg">7</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Waste Management</h3>
                    <p className="text-gray-700">
                      Manage all wastes effectively, giving priority to waste management methods that are higher in the waste management hierarchy (avoid, reduce, reuse, recycle or dispose).
                    </p>
                  </div>
                </div>

                {/* Guideline 8 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold text-lg">8</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Forest Protection</h3>
                    <p className="text-gray-700">
                      Assist KFS in enforcing provisions of the Forest Conservation and Management Act 2016 including informing the service of undesirable changes in the forest, forest fires, illegal harvesting of forest produce and poaching.
                    </p>
                  </div>
                </div>

                {/* Guideline 9 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold text-lg">9</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Tourism Education</h3>
                    <p className="text-gray-700">
                      Promote responsible tourism by using different media and communication methods to inform and educate employees and clients.
                    </p>
                  </div>
                </div>

                {/* Guideline 10 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold text-lg">10</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Environmental Improvement</h3>
                    <p className="text-gray-700">
                      Take action to improve the forest and general environment in which the enterprise is located. This should include rehabilitating forest areas affected by the enterprise's operations at the end of the project's life cycle.
                    </p>
                  </div>
                </div>

                {/* Guideline 11 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold text-lg">11</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Community Benefits</h3>
                    <p className="text-gray-700">
                      Take action to ensure that the enterprise yields net benefits to the forest adjacent community.
                    </p>
                  </div>
                </div>

                {/* Guideline 12 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold text-lg">12</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Inclusive Development</h3>
                    <p className="text-gray-700">
                      Take action to improve the lot of marginalized sections of the community including women, youth and persons living with disabilities.
                    </p>
                  </div>
                </div>

                {/* Guideline 13 */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="text-green-800 font-bold text-lg">13</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Risk Management</h3>
                    <p className="text-gray-700">
                      Develop a risk management strategy that includes carrying out risk assessment; provision of appropriate information for guests on risks involved; developing guests code of conduct; provision of trained guides; development of guest safety and health procedures including process to be followed in the event of an accident.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h2 className="text-xl font-semibold text-blue-700 mb-3">Implementation Requirements</h2>
                <p className="text-blue-800 mb-4">
                  Investors must demonstrate compliance with this code through regular reporting and audits conducted by KFS and relevant regulatory bodies.
                </p>
                <div className="flex items-center text-blue-700">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Non-compliance may result in license revocation or other penalties</span>
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

export default InvestorCodeConductPage;