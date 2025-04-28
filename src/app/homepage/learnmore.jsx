"use client";
import Head from "next/head";
import Link from "next/link";

export default function CodeOfConduct() {
  return (
    <div className="container mx-auto p-6 min-h-screen flex flex-col items-center">
      <Head>
        <title>Code of Conduct</title>
        <meta name="description" content="Code of Conduct page for KFS" />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-6 text-[#0D3C00]">Code of Conduct</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl">
        Welcome to the Code of Conduct page. This page contains the guidelines and ethical standards governing Kenya
        Forest Service.
      </p>

      <div className="mt-8 w-full max-w-3xl bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-[#0D3C00]">Our Core Values</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Integrity</li>
          <li>Professionalism</li>
          <li>Transparency</li>
          <li>Accountability</li>
          <li>Environmental Stewardship</li>
        </ul>
      </div>

      <div className="mt-6">
        <Link href="/">
          <button className="bg-[#0D3C00] text-white px-4 py-2 rounded hover:bg-[#4A7C12] transition">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
