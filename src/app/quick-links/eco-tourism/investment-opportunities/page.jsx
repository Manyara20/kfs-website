import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function InvestmentOpportunitiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-green-50 text-gray-900">
      <TopNavBar />
      <MainNavBar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
            Forest Parks: Upcoming Investment Opportunities in Public Forests
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            Kenya Forest Service (KFS) manages over 1.9 million hectares of public forests across the country. 
            One of KFS’s key functions is to collaborate with stakeholders in developing tourism and 
            recreational facilities in public forests under the Forest Conservation and Management Act, 2016.
          </p>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Development of Forest Parks</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            KFS aims to develop recreational infrastructure in designated Forest Parks near urban centers. 
            These parks will provide much-needed green spaces for recreationists while maintaining environmental sustainability.
          </p>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Planned Recreational Facilities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Walking and jogging trails</li>
            <li>Picnic and amusement areas</li>
            <li>Arboreta and botanical gardens</li>
            <li>Restaurants and gift shops</li>
            <li>Visitor education centers</li>
            <li>Community centers</li>
            <li>Zip lines and fitness facilities</li>
            <li>Special event spaces</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Forests with Investment Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
            {["Arabuko Sokoke", "Buda Forest Station", "Chuka Forest Station", "Eburru Forest", "Eldoret Municipality Forest", 
              "Kakamega Forest", "Karura Forest", "Ngong Hills Forest", "Menengai Forest Station", "Nairobi Arboretum", 
              "Uplands Recreational Park"].map((forest, index) => (
              <div key={index} className="bg-green-100 p-4 rounded-lg shadow">
                {forest}
              </div>
            ))}
          </div>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Contact & Application</h2>
          <p className="text-gray-700 leading-relaxed">
            To be added to the ecotourism investment database or to receive updates on available opportunities, 
            send an email request to <span className="text-green-700 font-semibold">info@kenyaforestservice.org</span>.
          </p>
          
          <div className="mt-6 p-4 bg-green-200 rounded-lg shadow">
            <p className="font-semibold">Kenya Forest Service</p>
            <p>Karura, off Kiambu Road, Nairobi</p>
            <p>P.O. Box 30513-00100 Nairobi, Kenya</p>
            <p>Tel: +254 20 2020285 / 2014663</p>
            <p>Email: <a href="mailto:info@kenyaforestservice.org" className="text-green-700 font-semibold">info@kenyaforestservice.org</a></p>
          </div>
        </section>
      </main>
      
      <FooterBottom />
    </div>
  );
}
