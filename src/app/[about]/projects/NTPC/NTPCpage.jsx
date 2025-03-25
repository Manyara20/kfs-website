// pages/ic-fra-documents.js
import Link from 'next/link';

export default function ICFraDocumentsPage() {
 
  const documents = [
    {
      title: "National Tree Planting Campaign",
      fileSize: "2 MB",
      link: "/path/to/ic-fra-report-2024.pdf",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-900 mb-4">IC FRA Documents</h1>
          <p className="text-xl text-gray-600">
            Access the latest Independent Conformity and Forest Risk Assessment (IC FRA) documents from the Kenya Forest Service.
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

    </div>
  );
}