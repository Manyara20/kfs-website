"use client";

import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaSkype } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

// Dynamically import MapComponent with SSR disabled
const MapComponent = dynamic(
  () => import('@/components/MapComponent'),
  { ssr: false, loading: () => <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center"><p>Loading map...</p></div> }
);

const ContactUsPage = () => {
  // Map center (Kenya) and locations
  const mapCenter = [0, 37.5]; // Approximate geographic center of Kenya
  const locations = [
    {
      name: 'KFS Headquarters',
      position: [-1.233, 36.833], // Karura Forest, Nairobi
      isHeadquarters: true,
    },
    {
      name: 'Nairobi Conservancy',
      position: [-1.2833, 36.8167], // Nairobi (Karen)
      isHeadquarters: false,
    },
    {
      name: 'Central Highlands Conservancy',
      position: [-0.4167, 36.9500], // Nyeri
      isHeadquarters: false,
    },
    {
      name: 'Eastern Conservancy',
      position: [-0.5333, 37.4500], // Embu
      isHeadquarters: false,
    },
    {
      name: 'North Eastern Conservancy',
      position: [-0.4667, 39.6500], // Garissa
      isHeadquarters: false,
    },
    {
      name: 'Ewaso North Conservancy',
      position: [0.6167, 37.6167], // Isiolo
      isHeadquarters: false,
    },
    {
      name: 'Coast Conservancy',
      position: [-4.0500, 39.6667], // Mombasa
      isHeadquarters: false,
    },
    {
      name: 'Mau Conservancy',
      position: [-0.3000, 35.9333], // Nakuru
      isHeadquarters: false,
    },
    {
      name: 'North Rift Conservancy',
      position: [0.5167, 35.2833], // Eldoret
      isHeadquarters: false,
    },
    {
      name: 'Western Conservancy',
      position: [0.2833, 34.7500], // Kakamega
      isHeadquarters: false,
    },
    {
      name: 'Nyanza Conservancy',
      position: [-0.1000, 34.7500], // Kisumu
      isHeadquarters: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen ">
      
      {/* Main Navigation Bar */}
      <MainNavBar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white">We are here to help! Reach out to us for any inquiries or support.</p>
        </div>

        {/* Grid Layout for Contact Information and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Information */}
          <div className="space-y-8">
            {/* Headquarters Card */}
            <div className="bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-green-900 mb-6">Kenya Forest Service Headquarters</h2>
              <div className="space-y-4 text-gray-700 break-words">
                <p>Karura Forest, Off Kiambu Road</p>
                <p>P.O. Box 30513-00100</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@kenyaforestservice.org"
                    className="text-green-600 hover:underline break-all"
                  >
                    info@kenyaforestservice.org
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a
                    href="https://www.kenyaforestservice.org"
                    className="text-green-600 hover:underline break-all"
                  >
                    www.kenyaforestservice.org
                  </a>
                </p>
                <p>Tel: 020-2014663, 020-2020285, 020-2689882/3</p>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-green-900 mb-6">Follow Us</h2>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-green-600 hover:text-green-700 transition duration-300"
                >
                  <FaTwitter className="text-3xl" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-green-600 hover:text-green-700 transition duration-300"
                >
                  <FaFacebookF className="text-3xl" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-green-600 hover:text-green-700 transition duration-300"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  href="skype:user?call"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Skype"
                  className="text-green-600 hover:text-green-700 transition duration-300"
                >
                  <FaSkype className="text-3xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">Our Locations</h2>
            <div className="w-full h-[400px]">
              <MapComponent mapCenter={mapCenter} locations={locations} />
            </div>
          </div>
        </div>

        {/* Conservancy Information Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Conservancies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conservancies.map((conservancy, index) => {
              // Find matching location for coordinates
              const location = locations.find(loc => loc.name === conservancy.name);
              const googleMapsUrl = location
                ? `https://www.google.com/maps?q=${location.position[0]},${location.position[1]}`
                : '#';

              return (
                <div key={index} className="bg-white p-6 shadow-lg break-words">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">{conservancy.name}</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>{conservancy.address}</p>
                    <p>
                      Email:{" "}
                      <a
                        href={`mailto:${conservancy.email}`}
                        className="text-green-600 hover:underline break-all"
                      >
                        {conservancy.email}
                      </a>
                    </p>
                    <p>Tel: {conservancy.phone}</p>
                    <p>
                      Location:{" "}
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline break-all"
                      >
                        View on Google Maps
                      </a>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
};

// Conservancy Data
const conservancies = [
  {
    name: "Nairobi Conservancy",
    address: "P.O.BOX 24951-00500 Karen, Nairobi",
    email: "hocnairobi@kenyaforestservice.org",
    phone: "020 2014663/2020285",
  },
  {
    name: "Central Highlands Conservancy",
    address: "Nyeri Town, P.O. Box 28, Nyeri",
    email: "nhoccentralhighlands@kenyaforestservice.org",
    phone: "0709751863",
  },
  {
    name: "Eastern Conservancy",
    address: "Embu Town, Njukiini East Forest Station P.O. Box 2, Embu",
    email: "hoceastern@kenyaforestservice.org",
    phone: "0709751839",
  },
  {
    name: "North Eastern Conservancy",
    address: "Garissa Town, P.O. Box 89, Garissa",
    email: "hocnortheastern@kenyaforestservice.org",
    phone: "0709751843",
  },
  {
    name: "Ewaso North Conservancy",
    address: "Isiolo Town, P.O. Box 141, Isiolo",
    email: "hocewasonorth@kenyaforestservice.org",
    phone: "0709751861",
  },
  {
    name: "Coast Conservancy",
    address: "Mombasa Town, P.O. Box 80078, Mombasa",
    email: "hoccoast@kenyaforestservice.org",
    phone: "0709751877",
  },
  {
    name: "Mau Conservancy",
    address: "Nakuru Town, Opposite Pyrethrum Road P.O. Box 281, Nakuru",
    email: "hocmau@kenyaforestservice.org",
    phone: "0709751828",
  },
  {
    name: "North Rift Conservancy",
    address: "Eldoret Town, P.O. Box 2501, Eldoret",
    email: "hocnorthrift@kenyaforestservice.org",
    phone: "0709748862",
  },
  {
    name: "Western Conservancy",
    address: "Kakamega Town, P.O. Box 1233, Kakamega",
    email: "hocwestern@kenyaforestservice.org",
    phone: "0709751876",
  },
  {
    name: "Nyanza Conservancy",
    address: "Kisumu Town, P.O. Box 1048, Kisumu",
    email: "hocnyanza@kenyaforestservice.org",
    phone: "0709751792",
  },
];

export default ContactUsPage;