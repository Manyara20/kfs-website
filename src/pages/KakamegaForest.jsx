import React, { useState } from 'react';

const KakamegaForest = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'activities', label: 'Activities' },
    { id: 'getting-there', label: 'How to Get There' },
    { id: 'fees', label: 'Entry Fees' },
    { id: 'features', label: 'Key Features' },
    { id: 'contact', label: 'Contacts' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Kakamega Forest: A Rainforest That Has Survived the Ages</h2>
            <p>
              Tucked between the rolling hills of Kakamega, Vihiga, and Nandi counties lies Kenya’s last true tropical rainforest—about 238 km² of ancient green that once formed part of the vast Guineo-Congolian belt. At an elevation of 1,500–1,600 m and receiving 1,200–1,700 mm of rain annually, Kakamega Forest is a lush museum of life wrapped in mist and birdsong.
            </p>
          </div>
        );
      case 'activities':
        return (
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Guided Nature Walks & Hiking:</strong> Explore Buyangu, Yala, and Isiukhu trails, or hike Lirhanda Hill for scenic views.</li>
            <li><strong>Canopy Walk:</strong> Walk across a 30m-high suspended bridge through the treetops.</li>
            <li><strong>Bird Watching:</strong> Spot over 360 bird species including the great blue turaco and African grey parrot.</li>
            <li><strong>Primate Tracking:</strong> See monkeys like the black-and-white colobus and De Brazza’s monkey.</li>
            <li><strong>Butterfly Watching:</strong> Over 400 species flourish here, especially during peak seasons.</li>
            <li><strong>Night Walks:</strong> Discover nocturnal creatures with a guide—bush babies, owls, glowing fungi.</li>
            <li><strong>Cultural Experiences:</strong> Enjoy traditional Luhya music, dance, and storytelling.</li>
            <li><strong>Tree Planting:</strong> Join reforestation drives organized by KFS and locals.</li>
            <li><strong>Educational Tours:</strong> Schools and eco-volunteers learn about forest conservation.</li>
            <li><strong>Photography/Filming:</strong> Requires KFS permits for shoots in the forest.</li>
          </ul>
        );
      case 'getting-there':
        return (
          <div className="space-y-2">
            <h3 className="font-semibold">By Road</h3>
            <ul className="list-disc pl-6">
              <li>From Nairobi (418 km): via Nakuru and Kapsabet (A104 → C36 → C39).</li>
              <li>From Eldoret: use the C39 road to Kapsabet.</li>
              <li>From Kakamega Town: park is 18 km via Webuye/Eldoret road.</li>
            </ul>
            <h3 className="font-semibold mt-4">By Air</h3>
            <p>
              Fly to Kakamega, Kisumu, or Eldoret then travel by road to the forest.
            </p>
          </div>
        );
      case 'fees':
        return (
          <div className="space-y-4">
            <table className="w-full border text-sm">
              <thead>
                <tr className="bg-green-200">
                  <th className="p-2 border">Category</th>
                  <th className="p-2 border">Adult</th>
                  <th className="p-2 border">Child</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Citizen/Resident</td>
                  <td className="p-2 border">KSH 300</td>
                  <td className="p-2 border">KSH 125</td>
                </tr>
                <tr>
                  <td className="p-2 border">Non-Resident</td>
                  <td className="p-2 border">USD 22</td>
                  <td className="p-2 border">USD 13</td>
                </tr>
              </tbody>
            </table>
            <p><strong>Payment:</strong> Via <a className="text-blue-600 underline" href="https://kws.ecitizen.go.ke" target="_blank">E-Citizen</a> using MPesa, Visa, EFT, or RTGS.</p>

            <h4 className="font-semibold">Vehicle Charges Per Day:</h4>
            <ul className="list-disc pl-6">
              <li>Less than 6 seats – KSH 300</li>
              <li>6–12 seats – KSH 1,030</li>
              <li>13–24 seats – KSH 2,585</li>
              <li>25–44 seats – KSH 4,050</li>
              <li>45+ seats – KSH 5,000</li>
            </ul>
          </div>
        );
      case 'features':
        return (
          <div className="space-y-4">
            <p>
              The southern Isecheno section, managed by KFS, is the most accessible for tourism. Visitors can enjoy panoramic views from Lirhanda Hill, experience night walks, or visit the famous Crying Stone at Ilesi.
            </p>
            <p>
              Over 360 bird species draw nature photographers, while the canopy walk gives views of treetops and the iconic “Mama Mtere” tree. Cultural experiences with the Luhya community add to the forest’s uniqueness.
            </p>
          </div>
        );
      case 'contact':
        return (
          <div className="space-y-2">
            <p><strong>Email:</strong> kakamegaforest@kws.go.ke</p>
            <p><strong>Office Phone:</strong> 0202418419</p>
            <p><strong>Main Gate:</strong> 0202654658</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Kakamega Forest</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-medium rounded-t ${
              activeTab === tab.id
                ? 'bg-green-800 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-green-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white p-6 rounded-lg shadow border">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default KakamegaForest;
