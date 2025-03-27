import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';

function KFSDecommissioningPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavBar />
      <MainNavBar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-green-800 mb-6">
            Guidelines for Decommissioning Ecotourism & Recreational Facilities in Public Forests
          </h1>
          
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-6">
              When decommissioning ecotourism & recreational facilities, developers should:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Manage different types of wastes effectively during decommissioning including construction and demolition wastes.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Plan for and effectively manage the social impacts related to decommissioning including loss of gainful employment.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Rehabilitate and fully restore the forest area in which they have been operating during decommissioning.</span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-green-50 rounded border border-green-100">
              <h2 className="text-xl font-semibold text-green-700 mb-2">Additional Considerations</h2>
              <p className="text-green-800">
                The decommissioning process should be conducted in an environmentally responsible manner, 
                with particular attention to restoring the natural habitat and minimizing impact on local communities.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <FooterBottom />
    </div>
  );
}

export default KFSDecommissioningPage;