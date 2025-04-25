import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function FeesAndChargesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <TopNavBar />
      <MainNavBar />
      <div
        className="flex-grow bg-cover bg-center bg-fixed bg-[url('/images/background-template/background.jpg')] bg-[linear-gradient(rgba(0,50,20,0.8),rgba(0,50,20,0.8))] p-8 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] before:opacity-10 before:z-0"
      >
      
      <main className="container mx-auto px-4 py-8">
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">Fees & Charges</h1>
          <p className="text-gray-700 mb-6">The following charges apply (all exclusive of VAT):</p>
          <div className="space-y-6"></div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-800">Access to forests for recreational purposes</h2>
          <table className="w-full mt-2 border-collapse border border-green-500">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="border border-green-500 p-2">Group</th>
                    <th className="border border-green-500 p-2">Kenya & EAC Citizens</th>
                    <th className="border border-green-500 p-2">Kenyan Residents</th>
                    <th className="border border-green-500 p-2">Non-Residents</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="border border-green-500 p-2">Adult per day</td>
                    <td className="border border-green-500 p-2">200 Kshs</td>
                    <td className="border border-green-500 p-2">400 Kshs</td>
                    <td className="border border-green-500 p-2">600 Kshs</td>
                  </tr>
                  <tr>
                    <td className="border border-green-500 p-2">Child per day</td>
                    <td className="border border-green-500 p-2">50 Kshs</td>
                    <td className="border border-green-500 p-2">100 Kshs</td>
                    <td className="border border-green-500 p-2">150 Kshs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-green-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-800">Camping</h2>
              <table className="w-full mt-2 border-collapse border border-green-500">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="border border-green-500 p-2">Group</th>
                    <th className="border border-green-500 p-2">Kenya Citizens</th>
                    <th className="border border-green-500 p-2">Kenyan Residents</th>
                    <th className="border border-green-500 p-2">Non-Residents</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="border border-green-500 p-2">Adult per night</td>
                    <td className="border border-green-500 p-2">650 Kshs</td>
                    <td className="border border-green-500 p-2">650 Kshs</td>
                    <td className="border border-green-500 p-2">650 Kshs</td>
                  </tr>
                  <tr>
                    <td className="border border-green-500 p-2">Child per night</td>
                    <td className="border border-green-500 p-2">100 Kshs</td>
                    <td className="border border-green-500 p-2">100 Kshs</td>
                    <td className="border border-green-500 p-2">100 Kshs</td>
                  </tr>
                </tbody>
              </table>
              </div>

          
          
          
          
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">Other Charges</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Hire of grounds (Urban Cities): Kshs 50,000 per day</li>
            <li>Urban Municipalities: Kshs 30,000 per day</li>
            <li>Other areas: Kshs 15,000 per day</li>
            <li>Filming rights: Kshs 40,000 per day</li>
            <li>Sporting activities: Cycling (Kshs 100), Horse riding (Kshs 300)</li>
          </ul>
        </section>
      </main>
      </div>
      
      
      <FooterBottom />
    </div>
  );
}
