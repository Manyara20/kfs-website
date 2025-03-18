// components/NewsSection.jsx
import React from "react";
import NewsCard from "@/app/homepage/NewsCard";

const newsData = [
  {
    title: "FKF-CFA Pays CCF a Courtesy Call",
    description:
      "The CCF Mr. Alex Lemarkoko has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke.",
    imageUrl: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448638908_856950539798958_73282423479938082_n-768x527.jpg",
    author: "By Admin",
    date: "June 19, 2024",
    comments: 0,
  },
  {
    title: "KFS Launches New Tree Planting Initiative",
    description:
      "Kenya Forest Service has launched a new initiative to plant 5 million trees nationwide to combat deforestation.",
    imageUrl: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448638908_856950539798958_73282423479938082_n-768x527.jpg",
    author: "By Admin",
    date: "July 5, 2024",
    comments: 12,
  },
  {
    title: "Community Clean-Up Day Announced",
    description:
      "KFS has announced a community clean-up day to be held in all major towns to promote environmental conservation.",
    imageUrl: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448638908_856950539798958_73282423479938082_n-768x527.jpg",
    author: "Admin",
    date: "August 10, 2024",
    comments: 5,
  },
  {
    title: "Forest Fire Awareness Campaign",
    description:
      "A new campaign to raise awareness about forest fires and how to prevent them has been launched.",
    imageUrl: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448638908_856950539798958_73282423479938082_n-768x527.jpg",
    author: "By Admin",
    date: "September 2, 2024",
    comments: 8,
  },
];

const NewsSection = () => {
  return (
    <section className="bg-[#e6f5e6] py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 lg:px-8">
      {/* Centered Headers */}
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl bold text-[#0E2E0E] font-black">
          News
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-900 mt-1 sm:mt-2">
          KFS Latest News
        </h2>
      </div>

      {/* News Card Scrollable Container */}
      <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x">
        <div className="flex gap-3 sm:gap-4 md:gap-6 pb-4 md:pb-6">
          {newsData.map((item, index) => (
            <NewsCard key={index} {...item} className="snap-center" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;