"use client";
import Head from "next/head";
import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";


export default function LearnMore() {
  return (
    <>
    <TopNavBar />
    <MainNavBar />
    <div className="flex-col  bg-cover bg-center bg-fixed flex justify-center items-center p-8 relative overflow-hidden"
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
        <title>About Kenya Forest Service</title>
        <meta name="description" content="Learn about the mandate and functions of the Kenya Forest Service for sustainable forest management." />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-6 text-[#fff]">About Kenya Forest Service</h1>

      <div className="mt-8 w-full max-w-3xl bg-white p-6 shadow-lg squared-lg">
        <h2 className="text-2xl font-bold mb-4 text-[#0D3C00]">Mandate and Functions of the Kenya Forest Service</h2>
        <p className="text-lg text-gray-700 mb-4">
          Provide for the development and sustainable management, including conservation and rational utilization of all forest resources for the socio-economic development of the country and for connected purposes.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          In carrying out its mandate, the functions of KFS include among others:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Conserve, protect and manage all Public Forests</li>
          <li>Prepare and implement management plans for all public forests, and, where requested, assist in preparation of management plans for community forests or private forests in consultation with the relevant owners</li>
          <li>Receive and consider applications for licenses or permits in relation to forest resources or management of forests or any other relevant matter in accordance with the Act</li>
          <li>Establish and implement benefit sharing arrangements in accordance with the provision of the Act</li>
          <li>Assist Country Governments to build capacity in forestry and forest management in the counties</li>
          <li>In consultation with relevant stakeholders, develop programmes for tourism and for recreational and ceremonial use of public forests</li>
          <li>Promote forestry education and training</li>
          <li>Register and maintain a register of all forest management plans prepared for public forests</li>
          <li>Collaborate with relevant persons in identifying research needs and applying research findings in relation to forests and forestry</li>
          <li>Manage water catchment areas in relation to soil and water conservation, carbon sequestration and other environmental services in collaboration with relevant stakeholders</li>
          <li>Prepare Forest status report for the Cabinet Secretary once in every two years</li>
          <li>Prepare resource assessment report for the Cabinet Secretary once in every five years</li>
          <li>Consider and recommend to the Cabinet Secretary the determination and alteration of boundaries of public forests on un-alienated public land or any other public land</li>
          <li>Establish forest conservancy areas for purposes of conservation and management</li>
          <li>Approve the provision of credit facilities and technical training for community based forest industries and the provision of incentives to persons for the sustainable utilization of wood and non-wood forest products</li>
          <li>Implement and enforce rules and regulations governing importation, exportation and trade in forest produce</li>
          <li>Develop, maintain and regularly update a geographic information system database of all forests in Kenya</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          From its mandate and functions, KFS is therefore both a service provider working with partners and stakeholders for the sustainable management and utilisation of forest resources, and an enforcement agency.
        </p>
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