import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function BackgroundPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <TopNavBar />
      <MainNavBar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
            Background
          </h1>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            One of the functions of Kenya Forest Service (KFS) is to develop programmes and facilities for tourism,
            recreational, and ceremonial use of forests. The organization manages over 2.5 million hectares of gazetted
            forests that range from equatorial forests, tropical rainforest, dryland forests, coastal forests, and urban forests.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            These forests are rich in plant and wildlife biodiversity, in addition to having numerous attractive features including
            panoramic views, lakes, craters, waterfalls, caves, and hills.
          </p>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Ecotourism Development</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            KFS collaborates with different stakeholders to develop responsible tourism products and activities in forest
            reserves in Kenya. The products being developed include ecolodges, tree houses, campsites, nature trails, and
            canopy walkways.
          </p>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Ecotourism Tenets</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Minimize impacts on the environment</li>
            <li>Protect and benefit forest biodiversity and conservation</li>
            <li>Promote environmental awareness and cultural preservation</li>
            <li>Meet and exceed tourist expectations</li>
            <li>Benefit forest-adjacent communities</li>
          </ul>
          
          <p className="text-gray-700 leading-relaxed mt-4">
            By promoting ecotourism, KFS aims to be the leading organization of excellence in the development and
            operation of responsible tourism in forest reserves.
          </p>
          <div className="mt-8 flex justify-center">
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
            <span className="text-blue-600 text-xl">📄</span>
            <div>
              <p className="text-gray-800 font-semibold">Download Application Form for Ecotourism and Recreation Sites in Public Forests</p>
              <p className="text-gray-600 text-sm">1 file(s) • 544.28 KB</p>
            </div>
            <a 
              href="/path/to/application-form.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Download
            </a>
          </div>
        </div>
        </section>
        
        
      </main>
      
      <FooterBottom />
    </div>
  );
}
