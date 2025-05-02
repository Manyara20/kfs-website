import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';

function ConstructionPage() {
  return (
    <div className="min-h-screen flex flex-col ">
      <TopNavBar />
      <MainNavBar />
      <div
        className="flex-grow bg-cover bg-center bg-fixed bg-[url('/images/background-template/background.jpg')] bg-[linear-gradient(rgba(0,50,20,0.8),rgba(0,50,20,0.8))] p-8 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] before:opacity-10 before:z-0"
      >
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white">
          <h1 className="text-3xl font-bold text-green-800 mb-6">
            Guidelines for Constructing Ecotourism & Recreational Facilities in Public Forests
          </h1>
          
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-6">
              When constructing ecotourism & recreational facilities in forest reserves, developers should:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Take note that sites for ecotourism & recreation facilities shall not exceed 20 acres and the maximum built up area shall not exceed 30% of the licensed area.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Ensure facilities blend with their environments. Buildings should not interrupt beautiful views and should be within the forest canopy (not appearing above the tree tops).</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Avoid felling mature trees to create space for construction of buildings. Enough vegetation should be left untouched to conceal building when they are completed. Additional vegetation should be planted after construction to ensure the forest character is retained.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Minimize facilities that will be constructed in the forest including reducing numbers, dimensions and capacity to ensure that they have the least possible ecological footprint.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Ensure the facilities are in character with their environment. This should include use of eco-friendly low-impact construction materials and technologies and avoidance or minimization of undesirable visual intrusion, excessive paving of surfaces, use of concrete and non-biodegradable materials, clearing of vegetation, landscaping and introduction of alien species.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Begin construction only after securing all requisite approvals including the Environmental Impact Assessment (EIA) license. Construction should further not begin before the licensee submits the proposed facility's designs and plans, a site-specific forest management plan and a community participation plan to KFS for approval.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Take advantage of natural light, heat, air movements and other features to reduce use of artificial lighting, heating, air movement, etc.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Use energy, water and other materials from sustainable sources wherever possible.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Give the forest adjacent community priority to supply labour, construction materials and other services required during construction. Developer should anticipate and manage any undesirable impacts that construction of the facility has on the forest adjacent community.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Manage the different types of wastes and wastewater effectively during pre-construction and construction phase. Also take action to protect the environment during construction including effectively managing movement of materials and people to and from the construction site, noise pollution, air/dust pollution, water pollution, use and handling of hazardous materials, soil erosion and the risk of fire.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Restore and improve the environment after construction.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      </div>
      
      <FooterBottom />
    </div>
  );
}

export default ConstructionPage;