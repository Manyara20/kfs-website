"use client"; // Mark this component as a Client Component

import React from "react";
import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

// Mock data for demonstration (replace this with your actual data fetching logic)
const newsData = [
  {
    id: 1,
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    text: "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem. The discussions centered on infrastructure development within Karura forest, increase in seedlings […]",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448638908_856950539798958_73282423479938082_n-768x527.jpg",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 2,
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    text: "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem. The discussions centered on infrastructure development within Karura forest, increase in seedlings […]",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448669343_856946449799367_3057193342022004114_n-768x512.jpg",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 3,
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    text: "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem. The discussions centered on infrastructure development within Karura forest, increase in seedlings […]",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448538348_856834363143909_1199152150830954646_n-768x527.jpg",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 4,
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    text: "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem. The discussions centered on infrastructure development within Karura forest, increase in seedlings […]",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448538272_856223783204967_1948945570565621335_n-768x512.jpg",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 5,
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    text: "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem. The discussions centered on infrastructure development within Karura forest, increase in seedlings […]",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448397406_854457203381625_3447459298235842185_n-768x553.jpg",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 6,
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    text: "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem. The discussions centered on infrastructure development within Karura forest, increase in seedlings […]",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448433039_854350123392333_8622137157694976074_n-768x431.jpg",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 7,
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    text: "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem. The discussions centered on infrastructure development within Karura forest, increase in seedlings […]",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448435260_854343170059695_4117562599724328245_n-768x440.jpg",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 8,
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    text: "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem. The discussions centered on infrastructure development within Karura forest, increase in seedlings […]",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448358790_854265436734135_5484027519296913182_n-768x575.jpg",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 9,
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    text: "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem. The discussions centered on infrastructure development within Karura forest, increase in seedlings […]",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448463550_854123993414946_590348111952176675_n-768x513.jpg",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 10,
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    text: "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem. The discussions centered on infrastructure development within Karura forest, increase in seedlings […]",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448321955_853738616786817_7902595964012633178_n-768x576.jpg",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 11,
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    text: "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem. The discussions centered on infrastructure development within Karura forest, increase in seedlings […]",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448355754_853665906794088_8594716271579967198_n-768x576.jpg",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 12,
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    text: "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem. The discussions centered on infrastructure development within Karura forest, increase in seedlings […]",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448638908_856950539798958_73282423479938082_n-768x527.jpg",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 13,
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    text: "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem. The discussions centered on infrastructure development within Karura forest, increase in seedlings […]",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448638908_856950539798958_73282423479938082_n-768x527.jpg",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 14,
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    text: "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem. The discussions centered on infrastructure development within Karura forest, increase in seedlings […]",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448638908_856950539798958_73282423479938082_n-768x527.jpg",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 15,
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    text: "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem. The discussions centered on infrastructure development within Karura forest, increase in seedlings […]",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448638908_856950539798958_73282423479938082_n-768x527.jpg",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 16,
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    text: "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem. The discussions centered on infrastructure development within Karura forest, increase in seedlings […]",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448638908_856950539798958_73282423479938082_n-768x527.jpg",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 17,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 18,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 19,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 20,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 21,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 21,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 22,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 23,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 24,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 25,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 26,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 27,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 28,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 27,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 28,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 27,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 28,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 27,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 28,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 27,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 28,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 27,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 28,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 27,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 28,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 27,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 28,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 27,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 28,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 27,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 28,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 27,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 28,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 27,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 28,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 27,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 28,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 27,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 28,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 27,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 28,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 27,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 28,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 27,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },
  {
    id: 28,
    title: "",
    text: "",
    image: "",
    author: "By Admin",
    date: "March 15, 2025",
    comments: "12 Comments",
  },





  // Add more items as needed
];

export default function NewsDetailPage({ params }) {
  // Unwrap the params promise
  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;

  // Find the news item based on the ID
  const newsItem = newsData.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return <div>News item not found</div>;
  }

  return (
    <>
      <TopNavBar />
      <MainNavBar />

      {/* News Detail Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl font-bold text-emerald-950 mb-6">{newsItem.title}</h1>

          {/* Image */}
          <div className="mb-8">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Metadata */}
          <div className="flex items-center gap-6 text-sm text-black mb-8">
            <div className="flex items-center gap-1">
              <Image src="/icons/user.png" alt="Author" width={16} height={16} />
              <span>{newsItem.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/icons/calendar.png" alt="Date" width={16} height={16} />
              <span>{newsItem.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/icons/comment.png" alt="Comments" width={16} height={16} />
              <span>{newsItem.comments}</span>
            </div>
          </div>

          {/* Content */}
          <div className="text-emerald-700 leading-relaxed">
            <p>{newsItem.text}</p>
          </div>
        </div>
      </section>

      <FooterBottom />
    </>
  );
}