// pages/public-documents.js
import Link from 'next/link';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

export default function PublicDocumentsPage() {
  // Documents data for the Public Documents page
  const documents = [
    {
      title: "Filming and Photoshoot Application Form",
      fileSize: "56.42 KB",
      link: "/path/to/filming-photoshoot-application-form.pdf",
    },
    {
      title: "Tree Planting Permit Application Form",
      fileSize: "120 KB",
      link: "/path/to/tree-planting-permit-form.pdf",
    },
    {
      title: "Public Forest Access Permit Application Form",
      fileSize: "90 KB",
      link: "/path/to/public-forest-access-permit-form.pdf",
    },
    {
      title: "KFS Annual Public Report 2024",
      fileSize: "2 MB",
      link: "/path/to/kfs-annual-public-report-2024.pdf",
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
          <h1 className="text-5xl font-bold text-green-900 mb-4">Public Documents</h1>
          <p className="text-xl text-gray-600">
            Access forms, permits, and reports available to the public from the Kenya Forest Service.
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