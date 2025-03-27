import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

function KaruraForestPage() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      
      <main className="container mx-auto px-4 py-8 text-black">
        <h1 className="text-4xl font-bold text-center mb-8">KARURA FOREST</h1>
        
        <section className="mb-12">
          <p className="mb-4">
            Karura Forest Reserve is located in the northern part of Nairobi city. At 1,041 hectares, 
            it is one of the largest urban gazetted forests in the world. The forest contains nearly 
            all the 605 species of wildlife found in Nairobi including three types of antelope. 
            It is managed by Kenya Forest Service (KFS).
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Attractions</h2>
          <h3 className="text-xl font-semibold mb-3">Wildlife in Karura Forest</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2">Mammals:</h4>
            <p className="mb-4">
              Include Harvey's Duiker, Grimm's Duiker, Bushbucks, Bush pigs, Genet Cats, Civets, 
              Bush babies, Porcupines, Syke's Monkeys, Ground Squirrel, Hares and the Epauletted-bat.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2">Reptiles:</h4>
            <p className="mb-4">Include pythons, green snakes and monitor lizards.</p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2">Birds:</h4>
            <p className="mb-4">
              The forest hosts around 200 species of birds including Ayres Hawk-eagle, the African 
              Crowned Eagle, the Silvery-cheeked Hornbill, the Hartlaub's Turaco, the Narina Trogon, 
              Owls, Crested Cranes, Sparrows, Doves, Weavers and Vultures.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2">Butterflies:</h4>
            <p>Include the African Queen and Desmond's Green Banded Swallowtail.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Plants in Karura Forest</h3>
            
            <h4 className="text-lg font-medium mb-2">Plantations:</h4>
            <p className="mb-4">
              Cover 632 hectares. Species found include Araucaria cunninghamii, Eucalyptus saligna, 
              E. globula, Grevillea robusta, Cupressus torulosa and Cupressus lusitanica.
            </p>
            
            <h4 className="text-lg font-medium mb-2">Indigenous trees:</h4>
            <p className="mb-4">
              Cover 260 hectares. Species include Olea europeae subsp. auspidata, Croton megalocarpus, 
              Warburgia ugandensis (Muthiga), Brachyleana huillensis (Muhugu), Uvaridendron anisatum, 
              Markhamia lutea, Vepris nobilis, Juniperus procera (Cedar), Craebean brownii, Newtonia 
              buchananii, Salvadora persica, Ficus thonningii, Trichilia emetica, Calondendrum capense 
              and Dombeya goetzenii.
            </p>
            
            <h4 className="text-lg font-medium mb-2">Shrubs:</h4>
            <p className="mb-4">
              Include Strychnos henningsii (Muteta), Erythrococca bongensis (Muharangware), 
              Vangueria madagascariensis (Mubiro), Rhamnus prinoides (Mukarakinga), Caesalpinia 
              volkensii (Mubuthi), Solanum incanum (Mutongu), Elaeodendron buchananii (Mutanga) 
              and Rhus natalensis (Muthigio).
            </p>
            
            <h4 className="text-lg font-medium mb-2">Other plants:</h4>
            <p className="mb-4">
              There are groves of Arudinaria alpina, Kenya's native bamboo species along the riparian 
              belts of Gitathuro and Ruaka rivers; exotic giant bamboo Dendrocalamus giganteus along 
              Karura river near the tree nursery, and; small wetlands that are important habitats for birds.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Other areas of special interest Karura Forest</h3>
            <p className="mb-4">
              Other important attractions that visitors to Karura Forest enjoy are:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-1">Mau Mau caves</li>
              <li className="mb-1">Scenic waterfalls and rivers</li>
              <li className="mb-1">Picnic sites</li>
              <li className="mb-1">Marked walking trails</li>
              <li className="mb-1">Small wetlands that are habitats for birds</li>
              <li className="mb-1">The incinerator formerly used by Central Bank of Kenya to burn old currency notes</li>
              <li className="mb-1">The area about which the late Professor Wangari Maathai carried out a campaign against illegal acquisition of forest land</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Activities available</h2>
          <p className="mb-4">
            In Karura Forest, one can undertake the following activities:
          </p>
          <ul className="list-disc pl-6 columns-2">
            <li className="mb-1">Forest walks</li>
            <li className="mb-1">Forest drives</li>
            <li className="mb-1">Bird watching</li>
            <li className="mb-1">Butterfly watching</li>
            <li className="mb-1">Cycling</li>
            <li className="mb-1">Running</li>
            <li className="mb-1">Picnicking</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Getting there & getting around</h2>
          <p className="mb-4">
            <strong>By private transport:</strong> The main entrance to Karura Forest is on the Limuru Road just after the Belgian Embassy. 
            However, one can also use either the KFS main gate which is off Kiambu road and opposite CID Headquaters, 
            or the Old Kiambu Gate which is on Old Kiambu road.
          </p>
          <p className="mb-4">
            <strong>By public transport:</strong> Matatu (public service vehicle) numbers 11B, 106, 107, 108, 114 or 116 from Nairobi 
            City Centre will get you to the main entrance on Limuru Road. To use the KFS main gate on Kiambu road, 
            take matatu numbers 100 or 120.
          </p>
          <p className="mb-4">
            Taxi hire from the city centre costs approximately Ksh 1,000.
          </p>
          <p className="mb-4">
            One can easily get around Karura Forest using the existing network of driving tracks and walking trails. 
            Most sections of the forest are accessible by saloon cars.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Visiting hours</h2>
          <p className="mb-4">
            Entry tickets can be purchased at the point of entry between 6:00 am and 5:00 pm. For the current entry fees, 
            contact the numbers at the end of this page.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What to wear and carry</h2>
          <p className="mb-4">
            Comfortable walking shoes or trainers, drinking water, binoculars, camera and wildlife books especially 
            for birds and butterflies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Climate</h2>
          <p className="mb-4">
            There are two wet seasons: April-June (long rains) and October-December (short rains). In between, 
            days are sunny and dry except for July and August which is usually cool and cloudy. The average 
            annual rainfall in Karura is 930 mm.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Important things to remember when visiting Karura forest</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">Enjoy yourself; in addition to seeing, pause and listen regularly.</li>
            <li className="mb-2">Stop to allow wildlife to move off the tracks before you pass.</li>
            <li className="mb-2">Do not feed wild animals.</li>
            <li className="mb-2">Do not start fires in the forest.</li>
            <li className="mb-2">Do not take away animals, animal products, plants or plant parts.</li>
            <li className="mb-2">Do not mark or deface tree stems, stones and other features.</li>
            <li className="mb-2">Avoid unnecessary noise as it disturbs both wildlife and other visitors. Do not exceed 40kph when driving in the forest.</li>
            <li className="mb-2">Take all the litter that you brought away with you.</li>
            <li className="mb-2">Keep to the designated tracks and paths when walking and always be sure of where you are headed to or coming from as orientation in forests can be difficult.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Karura Forest photo gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example image - replace with your actual images */}
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/karura-forest/waterfall.jpg" // Update path
                alt="Scenic waterfall in Karura Forest"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                Scenic waterfall in Karura Forest
              </p>
            </div>
            
            {/* Add more images following the same pattern */}
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/karura-forest/bird-watching.jpg"
                alt="Bird watching in Karura Forest"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                Bird watching in Karura Forest
              </p>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/karura-forest/mau-mau-caves.jpg"
                alt="Mau Mau caves in Karura Forest"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                Mau Mau caves in Karura Forest
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">For reservations and more information, contact:</h2>
          <p className="mb-2"><strong>The Forester-in-Charge</strong></p>
          <p className="mb-2">Karura Forest Reserve</p>
          <p className="mb-2">P.O. Box 30513 – 00100 Nairobi, Kenya</p>
          <p className="mb-2">Tel (mobile phones): +254 (0) 727 818 960</p>
          <p className="mb-2">Tel: +254 20 2020285; 3754904/5/6</p>
          <p className="mb-2">Email: zmnairobi@kenyaforestservice.org or ecotourism@kenyaforestservice.org or info@kenyaforestservice.org</p>
          <p className="mb-2">Website: www.kenyaforestservice.org</p>
        </section>
      </main>
      
      <FooterBottom />
    </div>
  );
}

export default KaruraForestPage;