 "use client";
import Head from "next/head";
import Link from "next/link";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import Exploreournuseries from "@/components/Exploreournuseries";

export default function Nurseries() {
  return (
    <>
      <MainNavBar />
      <div
        className="flex-col bg-cover bg-center bg-fixed flex justify-center items-center p-8 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 50, 20, 0.8), rgba(0, 50, 20, 0.8)), url('/images/background-template/background.jpg')`,
        }}
      >
        <div
          className="absolute inset-0 bg-no-repeat opacity-10 z-0"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>
        <Head>
          <title>Discover Nurseries in Kenya</title>
          <meta
            name="description"
            content="Explore tree nurseries across Kenya, supporting reforestation and sustainable forest management with the Kenya Forest Service."
          />
        </Head>

        <h1 className="text-3xl font-bold text-center mb-6 text-[#fff]">
          Discover Nurseries in Kenya
        </h1>

        <div className="mt-8 w-full max-w-8xl bg-white p-6 shadow-lg squared-lg">
          <h2 className="text-2xl font-bold mb-4 text-[#0D3C00]">
            Tree Nurseries for Sustainable Forestry
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            The Kenya Forest Service supports a network of tree nurseries across
            the country to promote reforestation, afforestation, and sustainable
            forest management. These nurseries provide high-quality seedlings for
            indigenous and exotic tree species, contributing to environmental
            conservation, carbon sequestration, and community livelihoods.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our nurseries are strategically located to serve local communities,
            schools, and organizations, ensuring access to diverse tree species
            suited to Kenya’s varied ecosystems. By partnering with local farmers,
            community groups, and conservationists, we aim to restore degraded
            landscapes, enhance biodiversity, and combat climate change.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Explore our nurseries below to find locations, available species, and
            how you can get involved in planting for a greener future.
          </p>
          <Exploreournuseries />
        </div>

        <div className="mt-6">
          <Link href="/">
            <button className="bg-[#0D3C00] text-white px-4 py-2 rounded hover:bg-[#4A7C12] transition">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
      <FooterBottom />
    </>
  );
}