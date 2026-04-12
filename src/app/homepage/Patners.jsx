"use client";

const partners = [
  "https://whatthelogo.com/storage/logos/wwf-world-wildlife-fund-51730.png",
  "https://whatthelogo.com/storage/logos/african-wildlife-foundation-225883.png",
  "https://whatthelogo.com/storage/logos/the-united-nations-environment-programme-96813.png",
  "https://whatthelogo.com/storage/logos/usaid-united-states-agency-for-international-136898.png",
  "https://whatthelogo.com/storage/logos/fao-food-and-agriculture-organizations-98044.png",
  "https://whatthelogo.com/storage/logos/national-environment-management-authority-83365.png",
  "https://www.un.org/sites/un2.un.org/files/field/image/world-bank-logo_0.jpg",
  "https://whatthelogo.com/storage/logos/undp-136787.png",
  "https://www.kefri.org/assets/images/kefri_logo.png",
  "https://www.rhinoark.org/wp-content/uploads/2021/12/cropped-rhino-ark-logo-2.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmDPqcVy-UyLi-DX0pMl0zEV51gSoq6ap-w&s",
];

const PartnersSection = () => (
  <section className="bg-white py-12 border-b border-gray-100">
    <h2 className="text-2xl md:text-3xl font-bold text-center text-kfs-dark mb-10">
      Our Partners
    </h2>
    <div className="relative overflow-hidden w-full">
      {/* Duplicate the list so the marquee loops seamlessly */}
      <div className="flex gap-12 animate-marquee" style={{ minWidth: "max-content" }}>
        {[...partners, ...partners].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner ${(index % partners.length) + 1}`}
            className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
