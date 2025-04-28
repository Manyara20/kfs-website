import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

function HombeForestGuesthousePage() {
  return (
    <div className="bg-white text-gray-800">
      <TopNavBar />
      <MainNavBar />
      <div
        className="flex-grow bg-cover bg-center bg-fixed bg-[url('/images/background-template/background.jpg')] bg-[linear-gradient(rgba(0,50,20,0.8),rgba(0,50,20,0.8))] p-8 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] before:opacity-10 before:z-0"
      >
      
      <main className="container mx-auto px-4 py-8 bg-white">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Hombe Forest Guesthouse</h1>
          <p className="text-xl text-green-600 mb-6">Now ready for occupation after complete refurbishment!</p>
          
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image 
              src="/hombe-guest-house.jpg" 
              alt="Hombe guest house after KFS refurbishment"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </section>

        {/* Main Content */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">About the Guesthouse</h2>
                <p className="mb-4">
                  Kenya Forest Service (KFS) recently refurbished Hombe Forest Guesthouse in Mt. Kenya Forest Reserve and the facility is now ready for occupation.
                </p>
                <p>
                  The guest house is in Hombe Forest Station in Mt. Kenya Forest Reserve. It is located off the Nairobi – Nanyuki highway, approximately 165 km from Nairobi city.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">Accommodation Details</h2>
                <ul className="space-y-3">
                  <li><span className="font-medium">Capacity:</span> 2-bedroom guesthouse (4 persons)</li>
                  <li><span className="font-medium">Additional:</span> 8 persons can be accommodated in tents</li>
                  <li><span className="font-medium">Self-catering:</span> Fully equipped for your convenience</li>
                  <li><span className="font-medium">Ideal for:</span> Individuals, groups, and researchers</li>
                  <li><span className="font-medium">Special feature:</span> Space available for personal tents</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">Location & Directions</h2>
                <p className="mb-4">
                  To get there, one turns off at Chaka shopping center and drives for 13 km along the Chaka-Sagana tarmac road.
                </p>
                <div className="bg-white p-4 rounded border border-green-200">
                  <h3 className="font-semibold text-green-700 mb-2">Distance from Nairobi:</h3>
                  <p>Approximately 165 km</p>
                  <h3 className="font-semibold text-green-700 mt-3 mb-2">Access Road:</h3>
                  <p>13 km from Chaka shopping center along Chaka-Sagana tarmac road</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">Ideal For</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Researchers',
                    'Budget travelers',
                    'Nature lovers',
                    'Group retreats',
                    'Long-term stays',
                    'Forest explorers'
                  ].map((item) => (
                    <div key={item} className="bg-green-100 p-3 rounded-lg text-center">
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="mb-12 bg-green-800 text-white p-8 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Make Your Booking Today!</h2>
            <p className="text-xl mb-6">Experience the serene beauty of Mt. Kenya Forest Reserve</p>
            
            <div className="bg-white text-green-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">For Bookings Contact:</h3>
              <p className="text-2xl font-bold mb-4">020-2045780</p>
              <p>Or use the contact information below</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Guesthouse Views</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative h-48 rounded-lg overflow-hidden">
                <Image 
                  src={`/hombe-guesthouse-${item}.jpg`} 
                  alt={`Hombe Forest Guesthouse view ${item}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4 border-b pb-2">Contact Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Kenya Forest Service</h3>
              <address className="not-italic">
                <p>Karura, Off Kiambu Road</p>
                <p>P.O. Box 30513 – 00100 Nairobi, Kenya</p>
                <p className="mt-3"><span className="font-medium">Tel:</span> +254 20 2020285</p>
                <p><span className="font-medium">Fax:</span> +254 20 2385374</p>
                <p><span className="font-medium">Email:</span> info@kenyaforestservice.org</p>
                <p><span className="font-medium">Ecotourism Email:</span> ecotourism@kenyaforestservice.org</p>
                <p><span className="font-medium">Website:</span> www.kenyaforestservice.org</p>
              </address>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Map Location</h3>
              <div className="relative h-64 rounded-lg overflow-hidden bg-gray-200">
                {/* Replace with actual map component */}
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">Map of Hombe Forest Guesthouse location</p>
                </div>
              </div>
              <p className="mt-3 text-sm">Located in Hombe Forest Station, Mt. Kenya Forest Reserve</p>
            </div>
          </div>
        </section>
      </main>
      </div>
      
      <FooterBottom />
    </div>
  );
}

export default HombeForestGuesthousePage;