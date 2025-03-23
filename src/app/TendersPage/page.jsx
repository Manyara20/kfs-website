import React from 'react';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

function TendersPage() {
  // Tender data
  const tenders = [
    {
      title: "Tender for disposal of forest plantation materials in Nyeri County (Salvage)",
      tenderNo: "KFS.DISP.093.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-093.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Nyeri County",
      tenderNo: "KFS.DISP.082.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-082.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Uasin Gishu County (Salvage)",
      tenderNo: "KFS.DISP.085.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-085.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Uasin Gishu County",
      tenderNo: "KFS.DISP.081.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-081.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Kitui County (Salvage)",
      tenderNo: "KFS.DISP.088.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-088.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Meru County",
      tenderNo: "KFS.DISP.083.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-083.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Murang’a County",
      tenderNo: "KFS.DISP.097.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-097.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Nakuru County (Salvage)",
      tenderNo: "KFS.DISP.092.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-092.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Nakuru County (Thinning)",
      tenderNo: "KFS.DISP.094.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-094.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Nakuru County",
      tenderNo: "KFS.DISP.079.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-079.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Nandi County (Salvage)",
      tenderNo: "KFS.DISP.084.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-084.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Nyandarua County (Salvage)",
      tenderNo: "KFS.DISP.089.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-089.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Nyandarua County",
      tenderNo: "KFS.DISP.080.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-080.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Baringo County (Salvage)",
      tenderNo: "KFS.DISP.086.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-086.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Elgeyo Marakwet County (Salvage)",
      tenderNo: "KFS.DISP.087.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-087.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Elgeyo Marakwet County",
      tenderNo: "KFS.DISP.078.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-078.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Kakamega County (Thinning)",
      tenderNo: "KFS.DISP.095.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-095.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Kericho County (Salvage)",
      tenderNo: "KFS.DISP.091.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-091.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Kericho County",
      tenderNo: "KFS.DISP.096.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-096.pdf",
    },
    {
      title: "Tender for disposal of forest plantation materials in Kiambu County (Salvage)",
      tenderNo: "KFS.DISP.090.2024-2025",
      fileSize: "1 MB",
      link: "/path/to/tender-090.pdf",
    },
    {
      title: "ADDENDUM No. 2 – TENDER NO: KFS/RFP/GZDSPII/001/2024-2025",
      tenderNo: "TENDER NAME: REQUEST FOR PROPOSAL (RFP) FOR ENVIROMENTAL & SOCIAL COMPLIANCE AUDIT FOR GREEN ZONES DEVELOPMENT SUPPORT PROJECT PHASE II",
      fileSize: "451 KB",
      link: "/path/to/addendum-2.pdf",
    },
    {
      title: "ADDENDUM No. 1 – TENDER NO: KFS/RFP/GZDSPII/001/2024-2025",
      tenderNo: "TENDER NAME: REQUEST FOR PROPOSAL (RFP) FOR ENVIROMENTAL & SOCIAL COMPLIANCE AUDIT FOR GREEN ZONES DEVELOPMENT SUPPORT PROJECT PHASE II",
      fileSize: "350 KB",
      link: "/path/to/addendum-1.pdf",
    },
    {
      title: "Tender No. KFS/RFP/GZDPII/001/2024-2025",
      tenderNo: "Tender Name: ENVIRONMENTAL & SOCIAL COMPLIANCE AUDIT FOR GREEN ZONES DEVELOPMENT SUPPORT PROJECT PHASE II",
      fileSize: "699 KB",
      link: "/path/to/tender-001.pdf",
    },
    {
      title: "OCB No: KFS/GZDSP11/002/2024-2025",
      tenderNo: "TENDER NAME: TENDER FOR CONSTRUCTION OF SOLAR-POWERED ELECTRIC PERIMETER FENCE FOR KAPCHUMBE FOREST BLOCK, CHEPALUNGU FOREST STATION IN BOMET COUNTY",
      fileSize: "4 MB",
      link: "/path/to/ocb-002.pdf",
    },
    {
      title: "TENDER NO: KFS/005/2024-2025",
      tenderNo: "Provision, Maintenance, And Technical Support Services For Arcgis And Erdas Imagine Software Licenses",
      fileSize: "810 KB",
      link: "/path/to/tender-005.pdf",
    },
    {
      title: "REGISTRATION OF SUPPLIERS -2024-2025- 2026- SUCCESSFUL APPLICANTS",
      tenderNo: "",
      fileSize: "238 KB",
      link: "/path/to/successful-applicants.pdf",
    },
    {
      title: "REGISTRATION OF SUPPLIERS -2024-2025- 2026- UNSUCCESSFUL APPLICANTS",
      tenderNo: "",
      fileSize: "90 KB",
      link: "/path/to/unsuccessful-applicants.pdf",
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
          <h1 className="text-5xl font-bold text-green-900 mb-4">Tenders</h1>
          <p className="text-xl text-gray-600">Explore the latest tenders from the Kenya Forest Service.</p>
        </div>

        {/* Tenders Section */}
        <div className="grid grid-cols-1 gap-6">
          {tenders.map((tender, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold text-green-900 mb-2">{tender.title}</h2>
              {tender.tenderNo && (
                <p className="text-sm text-gray-600 mb-2">{tender.tenderNo}</p>
              )}
              <p className="text-sm text-gray-600 mb-4">1 file(s) {tender.fileSize}</p>
              <a
                href={tender.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Download Tender
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

export default TendersPage;