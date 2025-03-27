import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

function KFCGuesthousePage() {
  return (
    <div className="bg-white text-gray-800">
      <TopNavBar />
      <MainNavBar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-2">KFC Guesthouse & Conference Centre</h1>
          <p className="text-xl text-green-600 mb-6">Nestled in the serene Masaita Forest, Londiani</p>
          
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image 
              src="/kfc-guesthouse-exterior.jpg" 
              alt="KFC Guesthouse and Conference Centre exterior"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </section>

        {/* Location Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Location</h2>
              <p className="mb-4">
                Kenya Forestry College (KFC) operates a guesthouse and conference centre within their compound in Londiani, Kericho County. 
                KFC Guesthouse & Conference Centre is nested at the base of a lushly forested hill in Masaita Forest Block.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-3">Distance From:</h3>
                <ul className="space-y-2">
                  <li><span className="font-medium">Nakuru-Kericho highway:</span> 4km</li>
                  <li><span className="font-medium">Nakuru town:</span> 65km</li>
                  <li><span className="font-medium">Nairobi city:</span> 222km</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              {/* Replace with actual map component */}
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-500 p-4">Map showing location of KFC Guesthouse in Londiani</p>
              </div>
            </div>
          </div>
        </section>

        {/* Accommodation Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Accommodation</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">Main Guesthouse</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>12 spacious ensuite rooms</li>
                <li>Each room features:
                  <ul className="list-circle pl-5 mt-1">
                    <li>Queen size bed</li>
                    <li>Study area</li>
                    <li>Dressing table with mirror</li>
                    <li>Instant showers</li>
                    <li>Adjoining lounge area with fireplace and TV</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="/kfc-guesthouse-room.jpg" 
                alt="Interior of the ensuite rooms"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden order-last md:order-first">
              <Image 
                src="/kfc-additional-rooms.jpg" 
                alt="Additional accommodation units"
                layout="fill"
                objectFit="cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">Additional Accommodation</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>44 single ensuite rooms within the compound</li>
                <li>10 single rooms in 2 prefab units</li>
                <li>Ideal for large groups and institutional bookings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conference Facilities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Conference Facilities</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-green-700 mb-3">Meeting Rooms</h3>
                <ul className="space-y-2">
                  <li>1 large room seating 60 persons</li>
                  <li>1 medium room seating 40 persons</li>
                  <li>4 standard rooms seating 25 persons each</li>
                </ul>
              </div>
              
              <p className="mb-4">
                KFC Guesthouse & Conference Centre is an ideal destination for institutional and corporate groups that wish to retreat or work in a quiet environment.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-3">Outdoor Activities</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Use of well-manicured pitches within the compound</li>
                  <li>Walking, jogging or cycling in forest trails</li>
                  <li>Hill ascent for panoramic views</li>
                </ul>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image 
                src="/kfc-conference-center.jpg" 
                alt="KFC Conference Centre Interior"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Facility Highlights</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image 
                src="/kfc-lounge-area.jpg" 
                alt="The Lounge Area"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image 
                src="/kfc-guesthouse-exterior-2.jpg" 
                alt="Guest house and Conference Centre"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image 
                src="/kfc-viewpoint.jpg" 
                alt="Panoramic view of Masaita Forest"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="mb-12 bg-green-800 text-white p-8 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Book Your Stay or Event</h2>
            <p className="text-xl mb-6">Experience tranquility in the heart of Masaita Forest</p>
            
            <div className="bg-white text-green-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">For bookings and enquiries:</h3>
              <p className="text-2xl font-bold mb-2">020-2439901</p>
              <p>Or contact Kenya Forestry College directly</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Contact Information</h2>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Kenya Forestry College</h3>
            <address className="not-italic">
              <p>Londiani Town</p>
              <p>P.O. Box 8-20203</p>
              <p>Londiani</p>
              <p className="mt-3"><span className="font-medium">Telephone:</span> 020 2439901</p>
              <p><span className="font-medium">Email:</span> college@kenyaforestservice.org</p>
            </address>
          </div>
        </section>
      </main>
      
      <FooterBottom />
    </div>
  );
}

export default KFCGuesthousePage;