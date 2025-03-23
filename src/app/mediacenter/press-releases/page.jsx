import React from 'react';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

function PressReleasesPage() {
  // Sample data for press releases
  const pressReleases = [
    {
      title: "Public Views on Disposal (Harvesting) Of Forest Plantation Materials in Public Forests",
      link: "/path/to/public-views-disposal-harvesting.pdf",
    },
    {
      title: "Public Notice Call for Public Views on Disposal (Harvesting) Of Forest Plantation Materials in Public Forests",
      link: "/path/to/public-notice-call.pdf",
    },
    {
      title: "Forest Plantation Management and Development",
      link: "/path/to/forest-plantation-management.pdf",
    },
    {
      title: "Clarification on The Use of Movement Permits to Regulate Harvesting of Trees in The Country",
      link: "/path/to/clarification-movement-permits.pdf",
    },
    {
      title: "Revocation of Illegal Forest Title Deeds",
      link: "/path/to/revocation-illegal-titles.pdf",
    },
    {
      title: "KFS Board invites EACC to look into Forest Destruction",
      link: "/path/to/kfs-board-eacc-forest-destruction.pdf",
    },
    {
      title: "Amendment of FCMA",
      link: "/path/to/amendment-fcma.pdf",
    },
    {
      title: "Press Release – 2021 Mangrove Day",
      link: "/path/to/press-release-mangrove-day-2021.pdf",
    },
    {
      title: "Press Statement Upon Death of Joanna Stuchbury",
      link: "/path/to/press-statement-joanna-stuchbury.pdf",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <TopNavBar />

      {/* Main Navigation Bar */}
      <MainNavBar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-900 mb-4">Press Releases</h1>
          <p className="text-xl text-gray-600">Stay updated with the latest press releases from the Kenya Forest Service.</p>
        </div>

        {/* Press Releases Section */}
        <div className="max-w-3xl mx-auto">
          {pressReleases.map((release, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <a
                href={release.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-2xl font-semibold text-green-900 hover:text-green-700 mb-2"
              >
                {release.title}
              </a>
              <a
                href={release.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Download Press Release
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
}

export default PressReleasesPage;