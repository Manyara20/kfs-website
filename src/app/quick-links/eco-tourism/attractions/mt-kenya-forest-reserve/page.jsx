import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

function MountKenyaForestPage() {
  return (
    <div className="bg-white text-gray-800">
      <TopNavBar />
      <MainNavBar />
      <div
        className="flex-grow bg-cover bg-center bg-fixed bg-[url('/images/background-template/background.jpg')] bg-[linear-gradient(rgba(0,50,20,0.8),rgba(0,50,20,0.8))] p-8 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] before:opacity-10 before:z-0"
      >
      
      <main className="container mx-auto px-4 py-8 bg-white">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Ecotourism in Mt Kenya Forest Reserve</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Kenya Forest Service (KFS) manages the 213,082-hectare Mt. Kenya Forest Reserve that bestrides the equator in the central highland zones of Kenya. 
                Administratively, this includes forest areas surrounding the mountain itself and adjacent forest blocks of Lower Imenti, Upper Imenti, Thunguru hill, 
                Njuki-ini East, Njukiini West and Kierera.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">Quick Facts</h2>
                <ul className="space-y-2">
                  <li><span className="font-medium">Area:</span> 213,082 hectares</li>
                  <li><span className="font-medium">Managed by:</span> Kenya Forest Service (KFS)</li>
                  <li><span className="font-medium">Designations:</span> UNESCO World Heritage Site, Important Bird Area (IBA)</li>
                  <li><span className="font-medium">Plant Species:</span> 880 recorded species</li>
                </ul>
              </div>
            </div>
            
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <Image 
                src="/mt-kenya-panorama.jpg" 
                alt="Panoramic view of Mt Kenya Forest Reserve"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* Ecotourism Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4 border-b pb-2">Ecotourism Potential</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                The forest reserve has great potential for tourism development. In addition to having a recorded 880 plant species, 
                the lush natural forests teem with wildlife including the African elephant, leopard, buffalo, giant forest hog, 
                bongo and the black fronted duiker.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-700 mb-3">Attractive Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Panoramic views of the peak of Mt. Kenya</li>
                  <li>Waterfalls</li>
                  <li>Caves</li>
                  <li>Salt licks</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">Tourism Activities</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Wildlife safaris', 'Bird watching', 'Trout fishing', 'Nature walks'].map((activity) => (
                  <div key={activity} className="bg-green-100 p-4 rounded-lg text-center">
                    <p className="font-medium">{activity}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 relative h-48 rounded-lg overflow-hidden">
                <Image 
                  src="/mt-kenya-wildlife.jpg" 
                  alt="Wildlife in Mt Kenya Forest"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Accommodation Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4 border-b pb-2">Tourist Accommodation Facilities</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">Existing Facilities</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Castle Forest Lodge',
                'Hombe Forest Guesthouse (A KFS-managed facility)',
                'Mountain Rock Hotel (Bantu Lodge)',
                'Rutundu Log Cabins',
                'Serena Mountain Lodge',
                'Thego Fishing Camp',
                'Themwe Campsite',
                'Thiba Fishing Camp',
                'Timau River Lodge'
              ].map((facility) => (
                <div key={facility} className="bg-green-50 p-4 rounded-lg">
                  <p>{facility}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-3">Upcoming Facilities</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Gitoro Forest Camp in Meru Forest Station',
                'Nanyuki Forest Camp in Nanyuki Forest Station',
                'Naro Moru Forest Lodge in Naro Moru Forest',
                'Ragati Fishing Camp in Ragati Forest Station',
                'Thegu Forest Lodge in Kabaru Forest Station',
                'Themwe Lodge in Ruthumbi Forest Station',
                'Tungu/Nithi Eco-lodge in Chuka Forest Station'
              ].map((facility) => (
                <div key={facility} className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p>{facility}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4 border-b pb-2">Gallery</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="/castle-forest-lodge.jpg" 
                alt="Castle Forest Lodge in Castle Forest Station, Kirinyaga County"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                Castle Forest Lodge
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="/mt-kenya-peaks.jpg" 
                alt="Mt Kenya peaks from edge of Mt Kenya Forest Reserve"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                Mt Kenya Peaks
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="/thiba-fishing-camp.jpg" 
                alt="Thiba fishing camp, Kerugoya"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                Thiba Fishing Camp
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="/timau-river-lodge.jpg" 
                alt="Timau River Lodge"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                Timau River Lodge
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="/hombe-guest-house.jpg" 
                alt="Hombe guest house after KFS refurbishment"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                Hombe Guest House
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4 border-b pb-2">Contact Information</h2>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Kenya Forest Service</h3>
            <address className="not-italic">
              <p>Karura, Off Kiambu Road</p>
              <p>P.O. Box 30513 – 00100 Nairobi, Kenya</p>
              <p className="mt-3"><span className="font-medium">Tel:</span> +254 20 2020285</p>
              <p><span className="font-medium">Fax:</span> +254 20 2385374</p>
              <p><span className="font-medium">Email:</span> info@kenyaforestservice.org or ecotourism@kenyaforestservice.org</p>
              <p><span className="font-medium">Website:</span> www.kenyaforestservice.org</p>
            </address>
          </div>
        </section>
      </main>
      </div>
      
      <FooterBottom />
    </div>
  );
}

export default MountKenyaForestPage;