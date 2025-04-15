import React from 'react';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

function PhotoGalleryPage() {
  // Photo gallery data
  const photos = [
    { id: 1, src: "/images/0B9A6344.jpg", caption: "0B9A6344" },
    { id: 2, src: "/images/0B9A6351.jpg", caption: "0B9A6351" },
    { id: 3, src: "/images/2K5A9412.jpg", caption: "2K5A9412" },
    { id: 4, src: "/images/olympus-digital-camera.jpg", caption: "OLYMPUS DIGITAL CAMERA" },
    { id: 5, src: "/images/karura-forest.jpg", caption: "A well conserved catchment forest in Karura Forest" },
    { id: 6, src: "/images/bamboo.jpg", caption: "Bamboo" },
    { id: 7, src: "/images/DSC09809.jpg", caption: "DSC09809" },
    { id: 8, src: "/images/gazi-boardwalk.jpg", caption: "Ecotourism Boardwalk in Gazi Kwale County" },
    { id: 9, src: "/images/gazi-ecotourism.jpg", caption: "Ecotourism Gazi Boardwalk" },
    { id: 10, src: "/images/ngare-ndare.jpg", caption: "Ngare Ndare" },
    { id: 11, src: "/images/michuki-park.jpg", caption: "Walking path inside Michuki Memorial Park" },
    { id: 12, src: "/images/kereita-waterfalls.jpg", caption: "Waterfalls in Kereita Forest" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50" style={{ overflowX: "hidden", width: "100vw" }}>
      {/* Top Navigation Bar */}
      <TopNavBar />

      {/* Main Navigation Bar */}
      <MainNavBar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-[clamp(1rem,2vw,4rem)] py-[clamp(2rem,5vw,12rem)]">
        {/* Header Section */}
        <div className="text-center mb-[clamp(2rem,5vw,12rem)]">
          <h1 className="text-[clamp(1.5rem,5vw,5rem)] font-bold text-green-900 mb-[clamp(1rem,2vw,4rem)]">
            Photo Gallery
          </h1>
          <p className="text-[clamp(0.875rem,3vw,1.25rem)] text-gray-600">
            Our Moments Through Photos
          </p>
        </div>

        {/* Photo Gallery Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[clamp(1rem,2vw,1.5rem)]">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              style={{ width: "100%", boxSizing: "border-box" }}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-[clamp(8rem,25vw,12rem)] object-cover"
                style={{ maxWidth: "100%" }}
              />
              <div className="p-[clamp(0.5rem,1vw,1rem)]">
                <p className="text-[clamp(0.625rem,1.5vw,0.875rem)] text-gray-700 text-center">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
}

export default PhotoGalleryPage;