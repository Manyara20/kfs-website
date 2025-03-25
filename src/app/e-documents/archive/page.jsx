// pages/documents-archive.js
import Link from 'next/link';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

export default function DocumentsArchivePage() {
  // Sample documents data for the Documents Archive
  const documents = [
    {
      title: "KFS Annual Report 2023-2024",
      fileSize: "2.5 MB",
      link: "/path/to/kfs-annual-report-2023-2024.pdf",
    },
    {
      title: "KFS Strategic Plan 2020-2025",
      fileSize: "1.8 MB",
      link: "/path/to/kfs-strategic-plan-2020-2025.pdf",
    },
    {
      title: "Forest Conservation and Management Policy 2022",
      fileSize: "1.2 MB",
      link: "/path/to/forest-conservation-policy-2022.pdf",
    },
    {
      title: "Environmental Impact Assessment Report 2024",
      fileSize: "3 MB",
      link: "/path/to/eia-report-2024.pdf",
    },
    {
      title: "KFS Research Report on Forest Cover 2023",
      fileSize: "1.5 MB",
      link: "/path/to/research-report-forest-cover-2023.pdf",
    },
    {
      title: "KFS Water Towers Conservation Fund Report 2024",
      fileSize: "2 MB",
      link: "/path/to/water-towers-report-2024.pdf",
    },
    {
      title: "Mau Forest Rehabilitation Trust Fund Report 2023",
      fileSize: "1.7 MB",
      link: "/path/to/mau-forest-report-2023.pdf",
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
          <h1 className="text-5xl font-bold text-green-900 mb-4">Documents Archive</h1>
          <p className="text-xl text-gray-600">
            Access a collection of reports, policies, and strategic documents from the Kenya Forest Service.
          </p>
        </div>

        {/* Documents Section */}
        <div className="grid grid-cols-1 gap-6">
          {documents.map((document, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold text-green-900 mb-2">{document.title}</h2>
              <p className="text-sm text-gray-600 mb-4">1 file(s) {document.fileSize}</p>
              <Link
                href={document.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Download Document
              </Link>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
}