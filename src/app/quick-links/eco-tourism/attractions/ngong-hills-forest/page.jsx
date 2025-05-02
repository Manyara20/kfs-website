import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

function NgongHillsPage() {
  return (
    <div className="bg-white text-gray-800">
      <TopNavBar />
      <MainNavBar />
      <div
        className="flex-grow bg-cover bg-center bg-fixed bg-[url('/images/background-template/background.jpg')] bg-[linear-gradient(rgba(0,50,20,0.8),rgba(0,50,20,0.8))] p-8 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] before:opacity-10 before:z-0"
      >
      
      <main className="container mx-auto  bg-white px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Ngong Hills Forest</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Ngong Hills Forest is located in the northern tip of Kajiado County and it's about 25Km from Nairobi city. 
                The forest covers an area of 3077.6 ha. It is managed by Kenya Forest Service (KFS).
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">Quick Facts</h2>
                <ul className="space-y-2">
                  <li><span className="font-medium">Location:</span> Kajiado County, 25km from Nairobi</li>
                  <li><span className="font-medium">Area:</span> 3,077.6 hectares</li>
                  <li><span className="font-medium">Managed by:</span> Kenya Forest Service (KFS)</li>
                  <li><span className="font-medium">Visiting Hours:</span> 6:00 AM - 6:00 PM</li>
                </ul>
              </div>
            </div>
            
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <Image 
                src="/ngong-hills-panorama.jpg" 
                alt="Panoramic view of Ngong Hills"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* Flora Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4 border-b pb-2">Flora</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                The vegetation of Ngong Hills forest includes exotic and indigenous trees. The distribution is mainly 
                determined by altitude, soil type and human utilization of the land. Grazing and forest fires also 
                determine the spatial variation in vegetation cover.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">Exotic Trees</h3>
                  <ul className="list-disc pl-5">
                    <li>Pine</li>
                    <li>Cypress</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">Indigenous Trees</h3>
                  <ul className="list-disc pl-5">
                    <li>Sandalwood</li>
                    <li>Acacia</li>
                    <li>Croton</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="/ngong-flora.jpg" 
                alt="Flora of Ngong Hills"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* Fauna Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4 border-b pb-2">Fauna</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                The forest is known to host a variety of animals which includes: buffaloes, wild pigs, porcupines, 
                and dik-diks. These animals are residents of the forest and their movement is usually determined by 
                factors such as drought, water availability and forage availability.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-700 mb-3">Wildlife Safety</h3>
                <p>
                  Animals here are wild and can be dangerous. Always be accompanied by KFS Rangers when hiking to the peaks.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image 
                  src="/ngong-buffalo.jpg" 
                  alt="Buffalo in Ngong Hills"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image 
                  src="/ngong-dikdik.jpg" 
                  alt="Dik-dik in Ngong Hills"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image 
                  src="/ngong-porcupine.jpg" 
                  alt="Porcupine in Ngong Hills"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image 
                  src="/ngong-wildpig.jpg" 
                  alt="Wild pig in Ngong Hills"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Special Interest */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4 border-b pb-2">Areas of Special Interest</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Communication Masts</h3>
              <p>High points for installation of communication masts.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Wind Power</h3>
              <p>30 wind energy generation power sites.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Tourism</h3>
              <p>Attraction sites due to its vantage point and scenic beauty.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Sports Training</h3>
              <p>High altitude sports training and hiking areas.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Religious Retreats</h3>
              <p>Popular sites for religious retreats and prayers.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Scenic Views</h3>
              <p>Panoramic views of the Great Rift Valley and Nairobi city from the summit.</p>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4 border-b pb-2">Activities</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {['Hiking', 'Picnics', 'Camping', 'Viewing', 'Religious activities', 'Team building', 'Weddings'].map((activity) => (
              <div key={activity} className="bg-green-100 p-4 rounded-lg text-center">
                <p className="font-medium">{activity}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Getting There Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4 border-b pb-2">Getting There and Around</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">Public Transport</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-1">To Ngong Entry Point:</h4>
                  <p>Board matatu no. 111 from Railways Matatu Terminus and alight at Ngong town (about 2km to entry point).</p>
                  <p className="mt-2">Options from Ngong town:</p>
                  <ul className="list-disc pl-5">
                    <li>Walk (2km)</li>
                    <li>Bodaboda (Ksh 100)</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-1">To Corner Baridi Entry Point:</h4>
                  <p>Board matatu no. 112 from Railways Matatu Terminus and alight at Kiserian town (about 2km to entry point).</p>
                  <p className="mt-2">Options from Kiserian town:</p>
                  <ul className="list-disc pl-5">
                    <li>Walk (2km)</li>
                    <li>Bodaboda (Ksh 100)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">Private Transport</h3>
              <div className="bg-green-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li><span className="font-medium">Taxi from Nairobi city centre to Ngong entry point:</span> ~Ksh 2,000</li>
                  <li><span className="font-medium">Taxi from Nairobi city centre to Corner Baridi entry point:</span> ~Ksh 2,500</li>
                  <li><span className="font-medium">Taxi from Ngong town to Ngong entry point:</span> ~Ksh 500</li>
                  <li><span className="font-medium">Taxi from Kiserian town to Corner Baridi entry point:</span> ~Ksh 500</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Visiting Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4 border-b pb-2">Visiting Information</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-3">Visiting Hours</h3>
              <p>6:00 AM to 6:00 PM</p>
              <p className="mt-2 text-sm">Entry tickets are available at entry points. For early visits, arrange to obtain tickets a day before.</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-3">What to Wear & Carry</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Comfortable shoes/trainers</li>
                <li>Loose fitting clothing for hikes</li>
                <li>Warm clothing for wind power sites</li>
                <li>Camera, binoculars</li>
                <li>Drinking water</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-3">Climate</h3>
              <p>Short rains: October-December</p>
              <p>Long rains: March-May</p>
              <p className="mt-2">Annual rainfall varies between 400mm and 1200mm depending on altitude.</p>
            </div>
          </div>
        </section>

        {/* Rules and Guidelines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4 border-b pb-2">Important Guidelines</h2>
          <div className="bg-green-50 p-6 rounded-lg">
            <ul className="list-disc pl-5 space-y-2">
              <li>Enjoy yourself; in addition to seeing, pause and listen regularly.</li>
              <li>Stop to allow wildlife to move off the tracks before you pass.</li>
              <li>Do not feed wild animals.</li>
              <li>Do not start fires in the forest.</li>
              <li>Do not take away animals, animal products, plants or plant parts.</li>
              <li>Do not mark or deface tree stems, stones and other features.</li>
              <li>Avoid noise as it disturbs both wildlife and other visitors.</li>
              <li>Be careful as animals here are wild and can be dangerous.</li>
              <li>Take all the litter that you brought away with you.</li>
              <li>Keep to the designated tracks and paths when walking.</li>
              <li>Single use plastic bottles not allowed.</li>
              <li>Those hiking to the peaks must be accompanied by KFS Rangers for security.</li>
            </ul>
          </div>
        </section>

        {/* Contact and Fees */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4 border-b pb-2">Entry Fees & Contact</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-3">Entry Fees</h3>
              <p>Forest conservation fee is charged at the point of entry. For current rates, enquire from the contacts below.</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-3">Contact Information</h3>
              <p className="font-medium">The Forester in Charge</p>
              <p>Ngong Hills Forest Station</p>
              <p className="mt-2">
                <span className="font-medium">Mobile:</span> 0797 480784 or 0755 838360
              </p>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4 border-b pb-2">Gallery</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image 
                src="/ngong-wind-turbines.jpg" 
                alt="Power generating wind turbines"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image 
                src="/ngong-visitors-walking.jpg" 
                alt="Visitors taking a walk to the view point"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image 
                src="/ngong-viewpoint.jpg" 
                alt="One of the view points"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image 
                src="/ngong-picnic-site.jpg" 
                alt="Picnic site and grounds for hire"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>
      </main>
      </div>
      
      <FooterBottom />
    </div>
  );
}

export default NgongHillsPage;