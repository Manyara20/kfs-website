import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';

function VisitForestsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopNavBar />
      <MainNavBar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-green-800 mb-2">
              Why You Should Keep Visiting Public Forests in Kenya
            </h1>
            <p className="text-lg text-gray-600">
              Discover the health benefits and incredible diversity of Kenya's forest ecosystems
            </p>
          </div>
          
          <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-8">
            {/* Health Benefits Section */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">
                Health Benefits of Forest Visits
              </h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <p className="text-gray-700 mb-4">
                    Research continues to demonstrate that there are actual physical and mental benefits of visiting forests. It has been proved that visiting forest areas:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Improves mood and reduces stress</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Increases energy levels</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Lowers blood pressure</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Improves sleep quality</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 bg-green-50 rounded-lg p-4 flex items-center justify-center">
                  <p className="text-green-800 italic font-medium text-center">
                    "A natural remedy with no side effects!"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Forest Diversity Section */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">
                Kenya's Diverse Forest Ecosystems
              </h2>
              <p className="text-gray-700 mb-4">
                Kenya's 1.9 million hectares of public forests offer a wide diversity of ecosystems for visitors:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-700 mb-2">Equatorial Forests</h3>
                  <p className="text-gray-700">Mt. Kenya and Aberdare forests</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-700 mb-2">Tropical Rainforests</h3>
                  <p className="text-gray-700">Kakamega Forest</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-700 mb-2">Dry Zone Forests</h3>
                  <p className="text-gray-700">Ngare Ndare and the Matthews Range</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-700 mb-2">Coastal Forests</h3>
                  <p className="text-gray-700">Arabuko Sokoke and mangroves</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-700 mb-2">Eastern Arc Mountain Forests</h3>
                  <p className="text-gray-700">Mbololo and Ngangao</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-700 mb-2">Urban Forests</h3>
                  <p className="text-gray-700">Karura and the Ngong Hills</p>
                </div>
              </div>
            </div>
            
            {/* Attractions Section */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">
                Forest Attractions & Facilities
              </h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="font-semibold text-green-700 mb-2">Natural Features</h3>
                  <p className="text-gray-700 mb-4">
                    These forests are rich in plant and wildlife biodiversity, with numerous attractive features including:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Panoramic views</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Lakes</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Craters</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Waterfalls</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Caves</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Hills</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-green-700 mb-2">Recreational Facilities</h3>
                  <p className="text-gray-700 mb-4">
                    Various facilities developed for visitor enjoyment:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Nature trails</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Ecolodges</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Restaurants</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Picnic sites</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Camping sites</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Zip lines</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Canopy walks</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="p-6">
              <div className="bg-green-700 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-3">
                  There is potential to get tree-ted!
                </h3>
                <p className="text-green-100 mb-4">
                  Discover the recreational activities in a public forest near you
                </p>
                
                <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
                  <a 
                    href="/path/to/application-form.pdf" 
                    download
                    className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Application Form (544.28 KB)
                  </a>
                  <a 
                    href="https://www.kenyaforestservice.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-green-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 transition flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Visit Kenya Forest Service
                  </a>
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

export default VisitForestsPage;