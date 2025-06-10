"use client";
import React, { useState } from "react";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

const KakamegaForest = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "activities", label: "Activities" },
    { id: "fees", label: "Park Entry Fees" },
    { id: "howtoget", label: "How to Get There" },
    { id: "contact", label: "Contacts" },
  ];

  return (
    <div>
      <MainNavBar />

      {/* Hero banner */}
      <div
        className="relative w-full h-[450px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/forests/kakamega.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Kakamega Forest
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-200 italic drop-shadow-md max-w-2xl">
            A rainforest that has survived the ages
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 my-4 px-4 max-w-7xl mx-auto">
        <ol className="list-reset flex space-x-2">
          <li>
            <a href="/" className="hover:text-green-700">
              Home
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="/forests" className="hover:text-green-700">
              Forests
            </a>
          </li>
          <li>/</li>
          <li className="text-gray-800 font-semibold">Kakamega Forest</li>
        </ol>
      </nav>

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 py-8 bg-white shadow-md rounded-md">
        {/* Tabs */}
        <nav className="border-b border-gray-300 mb-6">
          <ul className="flex space-x-8 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-2 font-semibold text-lg ${
                    activeTab === tab.id
                      ? "border-b-4 border-green-700 text-green-800"
                      : "border-b-4 border-transparent text-gray-600 hover:text-green-700 hover:border-green-700"
                  } transition-colors whitespace-nowrap`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tab content */}
        <div className="prose max-w-none text-gray-800 leading-relaxed space-y-6">
          {activeTab === "overview" && (
            <div>
              <p>
                Tucked between the rolling hills of Kakamega, Vihiga, and Nandi
                counties lies Kenya’s last true tropical rainforest—about 238
                km² of ancient green that once formed part of the vast
                Guineo-Congolian belt stretching across Africa.
              </p>
              <p>
                Perched at 1,500–1,600 m and watered by 1,200–1,700 mm of rain
                annually, Kakamega Forest is a living museum of humidity-loving
                life, wrapped in morning mists and the liquid calls of
                hornbills.
              </p>
            </div>
          )}

          {activeTab === "activities" && (
            <ul className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Guided Nature Walks and Hiking:</strong> Explore
                trails like Buyangu, Yala, and Lirhanda Hill with local guides.
              </li>
              <li>
                <strong>Canopy Walk:</strong> Cross a 30-meter-high bridge above
                the forest for aerial views.
              </li>
              <li>
                <strong>Bird Watching:</strong> Spot rare birds like the great
                blue turaco and hornbills.
              </li>
              <li>
                <strong>Primate Tracking:</strong> Track colobus, red-tailed,
                and De Brazza’s monkeys.
              </li>
              <li>
                <strong>Butterfly Watching:</strong> See over 400 butterfly
                species on guided tours.
              </li>
              <li>
                <strong>Night Walks:</strong> Discover bush babies, owls, and
                glowing fungi after dark.
              </li>
              <li>
                <strong>Cultural Experiences:</strong> Enjoy storytelling,
                dances, and meals with the Luhya community.
              </li>
              <li>
                <strong>Tree Planting:</strong> Join reforestation efforts
                organized by KFS and locals.
              </li>
              <li>
                <strong>Environmental Education:</strong> Great for school tours
                and biodiversity research.
              </li>
              <li>
                <strong>Photography:</strong> Capture the forest’s wildlife,
                mists, and iconic trees like Mama Mtere.
              </li>
            </ul>
          )}

          {activeTab === "fees" && (
            <div>
              <h3 className="font-semibold text-lg mb-2">Forest Entry Fee</h3>
              <table className="w-full border border-gray-300 rounded-md overflow-hidden">
                <thead className="bg-green-100 text-green-800">
                  <tr>
                    <th className="p-2 border border-gray-300 text-left">
                      Category
                    </th>
                    <th className="p-2 border border-gray-300 text-left">
                      Adult
                    </th>
                    <th className="p-2 border border-gray-300 text-left">
                      Child
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-gray-300">Citizen</td>
                    <td className="p-2 border border-gray-300">Ksh 300</td>
                    <td className="p-2 border border-gray-300">Ksh 125</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-gray-300">Resident</td>
                    <td className="p-2 border border-gray-300">Ksh 300</td>
                    <td className="p-2 border border-gray-300">Ksh 125</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-gray-300">Non-Resident</td>
                    <td className="p-2 border border-gray-300">USD 22</td>
                    <td className="p-2 border border-gray-300">USD 13</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="font-semibold text-lg mt-6 mb-2">Vehicle Charges</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Less than 6 seats: Ksh 300</li>
                <li>6–12 seats: Ksh 1,030</li>
                <li>13–24 seats: Ksh 2,585</li>
                <li>25–44 seats: Ksh 4,050</li>
                <li>45 seats and above: Ksh 5,000</li>
              </ul>

              <p className="mt-4 text-sm text-gray-600 italic">
                Pay via{" "}
                <a
                  href="https://kws.ecitizen.go.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  E-Citizen
                </a>{" "}
                using M-Pesa, Visa, or EFT.
              </p>
            </div>
          )}

          {activeTab === "howtoget" && (
            <div>
              <p>
                <strong>By Road:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  From Nairobi (418 km): via Nakuru and Kapsabet (A104 → C36 →
                  C39).
                </li>
                <li>From Eldoret: via C39 to Kapsabet.</li>
                <li>From Kakamega Town: 18 km towards Webuye/Eldoret road.</li>
              </ul>

              <p className="mt-4">
                <strong>By Air:</strong> Flights are available to Kakamega,
                Kisumu, or Eldoret, followed by road travel.
              </p>
            </div>
          )}

          {activeTab === "contact" && (
            <div>
              <p>
                Email:{" "}
                <a
                  href="mailto:kakamegaforest@kws.go.ke"
                  className="text-blue-600 underline"
                >
                  kakamegaforest@kws.go.ke
                </a>
              </p>
              <p>Phone (Office): 0202418419</p>
              <p>Phone (Main Gate): 0202654658</p>
            </div>
          )}
        </div>
      </div>

      <FooterBottom />
    </div>
  );
};

export default KakamegaForest;
