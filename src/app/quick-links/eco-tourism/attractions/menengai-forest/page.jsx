import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';

export default function MenengaiForestPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <TopNavBar />
      <MainNavBar />
      <div
        className="flex-grow bg-cover bg-center bg-fixed bg-[url('/images/background-template/background.jpg')] bg-[linear-gradient(rgba(0,50,20,0.8),rgba(0,50,20,0.8))] p-8 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] before:opacity-10 before:z-0"
      >

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
            Menengai Forest
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Menengai Caldera in Menengai Forest Station is a large shield volcano located in the Great Rift Valley, 10 km North of Nakuru town. It covers an area of approximately 90 km², with a diameter of 12 km and a depth of almost half a kilometer. It is one of the largest calderas in the world and the second most visited caldera globally.
          </p>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Menengai Forest Biodiversity</h2>
          <h3 className="text-lg font-semibold text-green-600 mt-4">Flora</h3>
          <p className="text-gray-700">Over 169 species of flowering plants and 17 species of grasses have been recorded, including Leleshwa (Tarconanthus camphorates), Euphorbia species, and Acacia species. Common grasses include geothermal grass (Fibristylis exilis) and Boma Rhode grass.</p>
          
          <h3 className="text-lg font-semibold text-green-600 mt-4">Fauna</h3>
          <p className="text-gray-700">Menengai is home to various mammals, including Rock Hyrax, Tree Hyrax, Olive Baboons, Black-faced Vervet Monkeys, Mountain Reedbucks, Kirk’s Dik-diks, and Slender Mongoose. Bird species found here include Varreaux Eagles (exclusive to Menengai in Nakuru), Abyssinian Ground Hornbills, Lesser Spotted Eagles, African Marsh Harriers, Horus Swift Apus Hours, Turn-tailed Ravens, and Red-winged Starlings. Insects include Arachnids, Molluscs, and diverse butterfly species.</p>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Attractions</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>The Menengai Caldera</li>
            <li>Viewpoint</li>
            <li>Geothermal energy production</li>
            <li>Caves</li>
            <li>Nature trails</li>
            <li>Picnic sites</li>
            <li>Fumaroles</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Facilities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Curio shops</li>
            <li>Campsites</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Activities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Educational tours</li>
            <li>Nature walking</li>
            <li>Bird watching</li>
            <li>Butterfly watching</li>
            <li>Hiking</li>
            <li>Picnicking</li>
            <li>Camping</li>
            <li>Rock climbing</li>
            <li>Cycling</li>
            <li>Horse riding</li>
            <li>Jogging</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Getting There</h2>
          <p className="text-gray-700">Menengai Caldera is located in Nakuru town, 160 km west of Nairobi. To reach it, take the road towards Nairobi, turn left after the railway bridge, turn right after 300 meters onto Milimani Road, and finally, turn left after 700 meters onto Menengai Road. The main gate is 1.2 km from this turn.</p>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Getting Around</h2>
          <p className="text-gray-700">The forest features a network of driving tracks and walking trails.</p>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Guides</h2>
          <p className="text-gray-700">Experienced guides are available at a fee. Inquire about guiding services at the main gate.</p>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Entry Fees</h2>
          <p className="text-gray-700">Forest conservation fees are charged at the entry point. For current rates, contact the provided details.</p>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Visiting Hours</h2>
          <p className="text-gray-700">Visitors are allowed from 6:00 am to 6:00 pm unless they arrange for an overnight stay.</p>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">What to Wear and Carry</h2>
          <p className="text-gray-700">Wear comfortable walking shoes, trainers, and loose-fitting lightweight clothing. A hat, sunglasses, and sunscreen are useful. Carry binoculars and a camera.</p>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Important Guidelines</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Be careful at viewpoints and cliffs as they are deep and dangerous.</li>
            <li>Do not feed wild animals.</li>
            <li>Do not start fires.</li>
            <li>Do not remove plants, animals, or their parts.</li>
            <li>Do not deface trees, rocks, or landmarks.</li>
            <li>Avoid excessive noise.</li>
            <li>Drive cautiously and keep speeds below 40 kph.</li>
            <li>Dispose of all litter properly.</li>
            <li>Stay on designated tracks and paths.</li>
            <li>Use a guide for an enriched experience.</li>
            <li>Single-use plastic bottles are not allowed.</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Contact Information</h2>
          <p className="text-gray-700">Forest Manager: +254794869229 / +254755839561</p>
          <p className="text-gray-700">Kenya Forest Service</p>
          <p className="text-gray-700">Karura, Off Kiambu Road</p>
          <p className="text-gray-700">P.O. Box 30513 – 00100 Nairobi, Kenya</p>
          <p className="text-gray-700">Email: zmnakuru@kenyaforestservice.org, info@kenyaforestservice.org, ecotourism@kenyaforestservice.org</p>
        </section>
      </main>
      </div>
      <FooterBottom />
    </div>
  );
}