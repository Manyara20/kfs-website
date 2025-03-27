import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

function NairobiArboretumPage() {
  return (
    <div className="bg-white text-gray-800">
      <TopNavBar />
      <MainNavBar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-2">Nairobi Arboretum</h1>
          <p className="text-xl text-green-600 mb-6">A 30.4 hectare urban forest sanctuary just 3km from Nairobi city center</p>
          
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image 
              src="/arboretum-panorama.jpg" 
              alt="Panoramic view of Nairobi Arboretum"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </section>

        {/* History Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">History</h2>
              <p className="mb-4">
                Established in 1907 by Mr. Battiscombe, Deputy Conservator of forests mainly as a site for exotic tree species trials. 
                This was because foresters in Kenya had become concerned that indigenous trees that the railway relied on were getting 
                depleted faster than they could regenerate.
              </p>
              <p className="mb-4">
                To add to the tree species, Mr. H.M. Gardner (Chief Conservators of Forests) also collected indigenous shrubs and trees 
                that were introduced there each year in spite of drought and diseases.
              </p>
              <p>
                Arboretum Forest Station was gazetted as protected Forest Reserves in 1932 and is managed by Kenya Forest Service (KFS).
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-green-700 mb-3">Quick Facts</h3>
              <ul className="space-y-2">
                <li><span className="font-medium">Size:</span> 30.4 hectares</li>
                <li><span className="font-medium">Distance from CBD:</span> 3 km</li>
                <li><span className="font-medium">Tree Species:</span> 300+ (exotic and indigenous)</li>
                <li><span className="font-medium">Bird Species:</span> 100+ (migrant and resident)</li>
                <li><span className="font-medium">Managed by:</span> Kenya Forest Service (KFS)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Wildlife Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Wildlife</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Mammals</h3>
              <ul className="list-disc pl-5 space-y-1">
                {[
                  "Vervet Monkeys (Black-faced guenon)",
                  "Sykes/Blue Monkeys",
                  "Kenya Mole rat",
                  "Four-toed hedgehog",
                  "Greater galago",
                  "Fruit bats",
                  "Mongooses",
                  "Squirrels"
                ].map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Birds</h3>
              <ul className="list-disc pl-5 space-y-1">
                {[
                  "African paradise flycatcher",
                  "White-eyed slaty flycatcher",
                  "Common bulbul",
                  "Malachite kingfisher",
                  "African pied wagtail",
                  "Common fiscal",
                  "Black kite",
                  "Hadada ibis"
                ].map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Reptiles & Butterflies</h3>
              <p className="font-medium mb-1">Reptiles:</p>
              <ul className="list-disc pl-5 mb-3 space-y-1">
                {[
                  "Jackson's three-horned chameleon",
                  "High-casqued chameleon",
                  "Striped skink"
                ].map(item => <li key={item}>{item}</li>)}
              </ul>
              <p className="font-medium mb-1">Butterflies:</p>
              <ul className="list-disc pl-5 space-y-1">
                {[
                  "Green-banded swallowtail",
                  "Mother-of-pearl",
                  "African emigrant",
                  "Various charaxes species",
                  "Diadem"
                ].map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image 
                src="/sykes-monkey.jpg" 
                alt="Sykes Monkey"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image 
                src="/terpsiphone-viridis.jpg" 
                alt="Terpsiphone viridis bird"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image 
                src="/papilio-phorcas.jpg" 
                alt="Papilio phorcas butterfly"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image 
                src="/chamaeleo-jacksoni.jpg" 
                alt="Chamaeleo jacksoni chameleon"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* Plants Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Plant Species</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">Indigenous Trees</h3>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Croton megalocarpus",
                    "Brachylaena huillensis",
                    "Podocarpus falcatus",
                    "Markhamia lutea",
                    "Vepris simplicifolia",
                    "African Olive",
                    "Schebera alata",
                    "Erythrina abyssinica",
                    "Trichilia emetic",
                    "Adansonia digitata"
                  ].map(item => (
                    <div key={item} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">Exotic Trees</h3>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Araucaria species",
                    "Lagunaria pattersonii",
                    "Brachychiton acerifolium",
                    "Jacaranda mimosfolia",
                    "Tabebuia chrysantha",
                    "Eucalyptus species",
                    "Ficus species",
                    "Phoenix palms",
                    "Bauhinia species",
                    "Strelitzia (Bird of paradise)"
                  ].map(item => (
                    <div key={item} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Activities & Facilities</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">Available Activities</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Learning about trees",
                  "Bird watching",
                  "Butterfly watching",
                  "Running/jogging",
                  "Picnicking",
                  "Corporate events",
                  "Concerts",
                  "Team building",
                  "Weddings",
                  "Religious activities"
                ].map(activity => (
                  <div key={activity} className="bg-green-100 p-3 rounded-lg">
                    <p>{activity}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">Special Features</h3>
              <div className="bg-green-50 p-6 rounded-lg">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Picnic sites</li>
                  <li>Marked walking trails</li>
                  <li>Bird watching areas</li>
                  <li>Special areas available for hire</li>
                  <li>Guidebook available for purchase (KSh 600)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Arboretum Highlights</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {img: "/birds-watching.jpg", alt: "Bird watching in the arboretum"},
              {img: "/grounds-for-hire.jpg", alt: "Grounds available for hire"},
              {img: "/school-trip.jpg", alt: "School children education trip"},
              {img: "/prayer-centre.jpg", alt: "Prayer centre in the arboretum"},
              {img: "/picnic-site.jpg", alt: "Picnic site"},
              {img: "/hiking-path.jpg", alt: "Hiking path"}
            ].map((item, index) => (
              <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                <Image 
                  src={item.img} 
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Visiting Information */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Getting There</h3>
              <p className="font-medium mb-1">Public Transport:</p>
              <p>Matatu no.48 Kileleshwa route from Odeon, alight at Shell. Walk 100m to pedestrian gate.</p>
              <p className="font-medium mt-3 mb-1">Walking from CBD:</p>
              <p>~3km via University Way and State House Road</p>
              <p className="font-medium mt-3 mb-1">By Car/Taxi:</p>
              <p>Take Arboretum Drive or University Way. Taxi ~KSh 500 from town.</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Visiting Hours</h3>
              <p>6:00 AM to 6:30 PM daily</p>
              <p className="mt-3">Entry tickets available at the gate during visiting hours</p>
              <p className="font-medium mt-3">Entry Fees:</p>
              <p>Forest conservation fee charged at entry (inquire for current rates)</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-3">What to Bring</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Comfortable walking shoes</li>
                <li>Drinking water</li>
                <li>Binoculars</li>
                <li>Camera</li>
                <li>Wildlife guide books</li>
              </ul>
              <p className="mt-3 text-sm">Note: Single use plastic bottles not allowed</p>
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section className="mb-12 bg-green-800 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Visitor Guidelines</h2>
          <ul className="list-disc pl-5 space-y-2">
            {[
              "Enjoy yourself; pause and listen regularly to nature",
              "Allow wildlife to move off tracks before passing",
              "Do not feed wild animals",
              "No fires in the forest",
              "Do not remove any plants or animals",
              "Do not deface trees or features",
              "Keep noise to minimum to avoid disturbing wildlife",
              "Carry all litter out with you",
              "Stay on designated tracks and paths",
              "Single use plastic bottles prohibited"
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Contact Information</h2>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-2">The Forest Manager</h3>
            <p>Arboretum Forest Station</p>
            <p className="mt-2"><span className="font-medium">Mobile:</span> +254 755 838999</p>
          </div>
        </section>
      </main>
      
      <FooterBottom />
    </div>
  );
}

export default NairobiArboretumPage;