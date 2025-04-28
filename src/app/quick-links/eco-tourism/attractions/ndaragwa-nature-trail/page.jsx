import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

function NdaragwaNatureTrailPage() {
  return (
    <div className="bg-white">
      <TopNavBar />
      <MainNavBar />
      <div
        className="flex-grow bg-cover bg-center bg-fixed bg-[url('/images/background-template/background.jpg')] bg-[linear-gradient(rgba(0,50,20,0.8),rgba(0,50,20,0.8))] p-8 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] before:opacity-10 before:z-0"
      >
      
      <main className="container mx-auto px-4 bg-white py-8">
        {/* Page Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-2">Ndaragwa Nature Trail</h1>
          <p className="text-xl text-black">The newest stopover along the Nyeri-Nyahururu highway!</p>
        </header>

        {/* Introduction Section */}
        <section className="mb-12 text-black">
          <p className="text-lg mb-6">
            In case you are driving from Nyeri to Nyahururu, stop over for a refreshing walk at Ndaragwa Nature Trail next to Ndaragwa township.
          </p>
          
          <p className="text-lg mb-6">
            Kenya Forest Service (KFS) has developed this trail along the Nyeri-Nyahururu highway, approximately 230 km from Nairobi city.
          </p>
          
          <p className="text-lg mb-6">
            Spanning Pesi river, the trail offers a quiet walk inside the lushly forested valley interspersed with panoramic views of forest and Ndaragwa town. A footbridge at the bottom of the valley gives the best view of Ndaragwa waterfall, affording visitors a great photo opportunity.
          </p>
          
          <p className="text-lg mb-6">
            The local community is also constructing a restaurant, a curio shop and cottages along this trail.
          </p>
          
          <p className="text-lg">
            Ndaragwa Nature Trail is in Ndaragwa Forest Station, a section of the Aberdare Forest Reserve managed by Kenya Forest Service (KFS).
          </p>
        </section>

        {/* Gallery Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Image 1 */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="relative h-80 w-full">
              <Image
                src="https://www.kenyaforestservice.org/wp-content/uploads/2023/06/Ndaragwa-waterfall-viewed-from-the-footbridge-at-the-bottom-of-the-trail-225x300.jpg"
                alt="Ndaragwa waterfall, viewed from the footbridge at the bottom of the trail"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="mt-2 text-gray-600 italic">Ndaragwa waterfall, viewed from the footbridge at the bottom of the trail</p>
          </div>
          
          {/* Image 2 */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="relative h-80 w-full">
              <Image
                src="https://www.kenyaforestservice.org/wp-content/uploads/2023/06/Ndaragwa-bandas-an-upcoming-facility-along-Ndaragwa-Nature-Trail-300x225.jpg"
                alt="Ndaragwa bandas, an upcoming facility along Ndaragwa Nature Trail"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="mt-2 text-gray-600 italic">Ndaragwa bandas, an upcoming facility along Ndaragwa Nature Trail</p>
          </div>
          
          {/* Image 3 */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="relative h-80 w-full">
              <Image
                src="https://www.kenyaforestservice.org/wp-content/uploads/2023/06/A-section-of-Ndaragwa-Nature-Trail-300x225.jpg"
                alt="A section of Ndaragwa Nature Trail"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="mt-2 text-gray-600 italic">A section of Ndaragwa Nature Trail</p>
          </div>
          
          {/* Image 4 */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="relative h-80 w-full">
              <Image
                src="https://www.kenyaforestservice.org/wp-content/uploads/2023/06/A-view-of-lush-forest-along-Ndaragwa-Nature-Trail-225x300.jpg"
                alt="A view of lush forest along Ndaragwa Nature Trail"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="mt-2 text-gray-600 italic">A view of lush forest along Ndaragwa Nature Trail</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-green-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-4">For more information contact:</h2>
          <address className="not-italic text-black">
            <p className="text-lg mb-2">Kenya Forest Service</p>
            <p className="text-lg mb-2">Karura, Off Kiambu Road</p>
            <p className="text-lg mb-2">P.O. Box 30513 – 00100 Nairobi, Kenya.</p>
            <p className="text-lg mb-2">Tel: +254 20 2020285</p>
            <p className="text-lg mb-2">Fax: +254 20 2385374</p>
            <p className="text-lg">Email: info@kenyaforestservice.org or ecotourism@kenyaforestservice.org</p>
          </address>
        </section>
      </main>
      </div>
      
      <FooterBottom />
    </div>
  );
}

export default NdaragwaNatureTrailPage;