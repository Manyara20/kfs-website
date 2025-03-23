import React from 'react';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

function ForesterMagazinePage() {
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
          <h1 className="text-5xl font-bold text-green-900 mb-4">The Forester Magazine</h1>
          <p className="text-xl text-gray-600">Biannual Forestry Magazine of the Kenya Forest Service</p>
        </div>

        {/* Magazine Content Section */}
        <div className="max-w-3xl mx-auto text-gray-700">
          <p className="mb-6">
            Welcome to the latest edition of our biannual forestry magazine. As we reflect on the past six months, we’re proud to share the significant strides made in Kenya’s forestry sector.
          </p>
          <p className="mb-6">
            In this issue, we spotlight several key events and initiatives that underscore our commitment to sustainable forest management and conservation. Our lead story covers the launch of the Kenya Forest Service Strategic Plan, a roadmap that will guide our efforts in the coming years to enhance forest cover and promote sustainable utilization of forest resources.
          </p>
          <p className="mb-6">
            We also bring you highlights from the International Day of Forests celebrations, where we joined the global community in recognizing the vital role forests play in our lives and ecosystems. Additionally, you’ll find coverage of our National Tree Growing Day, an initiative that saw thousands of Kenyans come together to green our nation.
          </p>
          <p className="mb-6">
            This edition also features news on various Memoranda of Understanding signed with partner organizations, strengthening our collaborative efforts in forest conservation and management.
          </p>
          <p className="mb-6">
            These stories reflect our ongoing dedication to Kenya’s forests and the communities that depend on them. We hope this issue informs and inspires you to join us in our mission to protect and nurture our precious forest resources.
          </p>
          <p className="mb-6 font-semibold">
            Happy reading! <br />
            Anne Kaari, ‘ndc‘ (K)
          </p>
        </div>

        {/* Download Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-8">Download the Magazine</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* January-June 2024 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Forester January-June 2024</h3>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700">1 file(s) 31 MB</p>
                  <a
                    href="/path/to/forester-jan-jun-2024.pdf"
                    download
                    className="text-green-600 hover:underline"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>

            {/* July-December 2023 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Forester July-December 2023</h3>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700">1 file(s) 58 MB</p>
                  <a
                    href="/path/to/forester-jul-dec-2023.pdf"
                    download
                    className="text-green-600 hover:underline"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
}

export default ForesterMagazinePage;