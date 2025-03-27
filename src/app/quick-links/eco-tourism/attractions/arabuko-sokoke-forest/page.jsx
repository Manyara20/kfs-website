import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';

function ArabukoSokokeForestPage() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      
      <main className="container mx-auto px-4 py-8 text-black">
        <h1 className="text-4xl font-bold text-center mb-8">ARABUKO-SOKOKE FOREST, KENYA</h1>
        
        <section className="mb-12">
          <p className="mb-4">
            Arabuko-Sokoke Forest Reserve is a 420 km² coastal forest in Kenya managed by Kenya Forest Service (KFS). 
            It is the largest and most intact coastal forest in East Africa, with 20% of Kenya's bird species, 
            30% butterfly species and at least 24 rare and endemic bird, mammal and butterfly species.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Attractions</h2>
          <h3 className="text-xl font-semibold mb-3">Wildlife in Arabuko-Sokoke</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2">Mammals:</h4>
            <p className="mb-4">
              The forest has 40 recorded mammal species including African Elephant, African Buffalo, African Civet, 
              Caracal, Syke's Monkeys, Yellow Baboons and Lesser Galago (or bushbaby). Some of Kenya's rarest mammals 
              are found here, including the Golden-rumped Elephant-shrew, Sokoke Bushy-tailed Mongoose and Ader's Duiker.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2">Birds:</h4>
            <p className="mb-4">
              There are over 270 species of birds recorded in the forest including several rare and endemic species. 
              The Clarke's Weaver is only found in Arabuko-Sokoke and another area 30 kms further north of Arabuko-Sokoke 
              in the whole world. Other globally threatened bird species found in Arabuko-Sokoke include: Amani Sunbird, 
              East Coast Akalat, Sokoke Scops Owl, Sokoke Pipit, and the Spotted Ground Thrush. Other birds restricted to 
              Kenyan coastal forests are found the most easily in Arabuko-Sokoke, making it a great place to visit.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2">Reptiles & amphibians:</h4>
            <p>The forest has 49 reptile and 25 amphibian species.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Plants in Arabuko-Sokoke</h3>
            <p className="mb-4">
              Arabuko-Sokoke forest is made up of three different forest types:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Cynometra-dominated forests and thickets:</strong> These cover more than half of Arabuko-Sokoke 
                Forest Reserve. Sightings of Caracal, Civet, Genet, Suni and other mammals are more common on tracks in 
                this forest type. Sokoke Scops Owls are also found here.
              </li>
              <li className="mb-2">
                <strong>Brachystegia-dominated woodlands:</strong> Also known as Miombo woodlands, this forest type is 
                airy and beautiful to walk through. Birds and butterflies are more visible here due to the open canopy.
              </li>
              <li className="mb-2">
                <strong>Mixed Forests:</strong> Dominated by species like Hymenaea verrucosa and Manilkara sansibarensis. 
                The dense vegetation in this forest type creates a tropical atmosphere as one walks or drives through, 
                the real feel of being "in the woods". Animals commonly sighted here include the Golden-rumped Elephant 
                Shrew, East Coast Akalat and Tiny Greenbuls.
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Other areas of special interest in Arabuko-Sokoke forest</h3>
            <p className="mb-4">
              In addition to the animals and plants mentioned above, Arabuko-Sokoke forest has the following attractions:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-1">A network of well-marked walking trails.</li>
              <li className="mb-1">More than 30 kms of driving tracks traversing the different forest types.</li>
              <li className="mb-1">Beautiful seasonal pools hidden amongst the Miombo woodlands teeming with birds and amphibians.</li>
              <li className="mb-1">Two tree platforms for a birds-eye-view of the forest.</li>
              <li className="mb-1">Nyari viewpoint, an elevated area of the forest with a panoramic view of the forest canopy, looking out the coast beyond.</li>
              <li className="mb-1">
                Mida Creek, a beautiful tidal inlet with six species of mangrove trees is less than 1 km from the entrance 
                to Arabuko-Sokoke Forest. The Creek is a major wintering site for migrant birds including Crab-plover, 
                Greater Flamingos, Terek Sandpipers and Sandplovers. Mida Creek Boardwalk and Bird Hide is located here, 
                a facility that generates income for forest conservation and education of local children.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Activities available</h2>
          <p className="mb-4">
            In Arabuko-Sokoke, one can undertake the following activities:
          </p>
          <ul className="list-disc pl-6 columns-2">
            <li className="mb-1">Forest walks</li>
            <li className="mb-1">Forest drives</li>
            <li className="mb-1">Bird watching</li>
            <li className="mb-1">Butterfly watching</li>
            <li className="mb-1">Camping</li>
            <li className="mb-1">Cycling</li>
            <li className="mb-1">Picnicking</li>
            <li className="mb-1">Running</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-black font-bold mb-4">Getting there & getting around</h2>
          <p className="mb-4">
            The forest lies along the tarmac Mombasa – Malindi highway, approximately 100 km from Mombasa town and 18 km 
            from Malindi. The entry is clearly signposted and visitor services are available at the offices of KFS's Malindi 
            Forest Zone located there. Regular buses and flights are available from Nairobi to Mombasa or Malindi. One can 
            also use public service vehicles or taxis from Mombasa, Malindi or Watamu.
          </p>
          <p className="mb-4">
            Kenya Forest Service (KFS) charges an entry fee at the point of entry to promote forest conservation. Call the 
            numbers given at the end of this page for the current fees.
          </p>
          <p className="mb-4">
            The forest has a network of driving tracks and walking trails. Many sections of the forest are accessible by 
            saloon cars but for best access to all tracks, a 4WD is recommended. Driving is the easiest way to see transitions 
            between the different forest types but one learns more about the forest by walking.
          </p>
          <p className="mb-4">
            Trained guides are available to help one explore the forest. The guides are members of Arabuko-Sokoke Forest 
            Guides Association (ASFGA) and charge as per the time spent and service rendered. Enquire about these services 
            at the point of entry.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Visiting hours</h2>
          <p className="mb-4">
            Entry tickets can be purchased at the point of entry between 6:00 am and 6:00 pm. Those keen to have a particularly 
            early start can purchase tickets the evening before. The best times to visit are early morning or late afternoon as 
            most wildlife will hide from the midday heat. The best time to watch birds is from dawn to around 9:00 am.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What to wear and carry</h2>
          <p className="mb-4">
            Wear comfortable walking shoes or trainers and loose-fitting lightweight clothing. A hat, sunglasses and sunscreen 
            may also come in handy. It is also important to carry drinking water, binoculars, camera and wildlife books especially 
            for birds and butterflies in addition to picnic and camping equipment in case one intends to stay overnight.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Climate</h2>
          <p className="mb-4">
            There are two wet seasons: April-June (long rains) and November-December (short rains). The other months will be 
            usually hot and dry. Annual rainfall ranges from 1,000 mm in the east to 600 mm in the northwest.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Important things to remember when visiting Arabuko-Sokoke forest</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">Enjoy yourself; in addition to seeing, pause and listen regularly.</li>
            <li className="mb-2">Stop to allow wildlife to move off the tracks before you pass.</li>
            <li className="mb-2">Do not feed wild animals.</li>
            <li className="mb-2">Do not start fires in the forest.</li>
            <li className="mb-2">Do not take away animals, animal products, plants or plant parts.</li>
            <li className="mb-2">Do not mark or deface tree stems, stones and other features.</li>
            <li className="mb-2">Avoid noise as it disturbs both wildlife and other visitors. Do not exceed 40kph when driving in the forest.</li>
            <li className="mb-2">Be careful as animals here are wild and can be dangerous.</li>
            <li className="mb-2">Take all the litter that you brought away with you.</li>
            <li className="mb-2">Keep to the designated tracks and paths when walking and always be sure of where you are headed to or coming from as orientation in forests can be difficult.</li>
            <li className="mb-2">Single use plastic bottles not allowed.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Arabuko-Sokoke photo gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* You would replace these with actual image components */}
            <div className="border p-2">
              <p>African Wood Owl in Arabuko-Sokoke (Photo by A Rocha Kenya)</p>
            </div>
            <div className="border p-2">
              <p>Birding in Arabuko-Sokoke (Photo by A Rocha Kenya)</p>
            </div>
            <div className="border p-2">
              <p>Giant Brachystegia tree in Arabuko-Sokoke</p>
            </div>
            <div className="border p-2">
              <p>Golden-rumped Elephant Shrew in Arabuko-Sokoke (Photo by Mel Ong)</p>
            </div>
            <div className="border p-2">
              <p>Guided nature walk in Arabuko-Sokoke</p>
            </div>
            <div className="border p-2">
              <p>Mida Creek Boardwalk near Arabuko-Sokoke Forest</p>
            </div>
            <div className="border p-2">
              <p>Narina Trogon in Arabuko-Sokoke (Photo by Steffen Foerster)</p>
            </div>
            <div className="border p-2">
              <p>Red-legged Sunsquirrel in Arabuko-Sokoke (Photo by Steffen Foerster)</p>
            </div>
            <div className="border p-2">
              <p>Resting on the tree platform in Arabuko-Sokoke (Photo by A Rocha Kenya)</p>
            </div>
            <div className="border p-2">
              <p>Tree platform in Arabuko-Sokoke (Photo by A Rocha Kenya)</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Entry fees:</h2>
          <p className="mb-4">
            Forest conservation fee is charged at the point of entry. For current rates, enquire from the contacts given here.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">For reservations and more information, contact:</h2>
          <p className="mb-2"><strong>The Forest Manager:</strong></p>
          <p className="mb-2">Arabuko-Sokoke Forest Reserve</p>
          <p className="mb-2">P.O. Box 201 – 80200 Malindi, Kenya.</p>
          <p className="mb-2">+254755838366</p>
          <p className="mb-2">+254717318134</p>
          <p className="mb-2">Email: zmkilifi@kenyaforestservice.org</p>
        </section>
      </main>
      
      <FooterBottom />
    </div>
  );
}

export default ArabukoSokokeForestPage;