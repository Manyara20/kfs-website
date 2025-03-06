// components/NewsSection.jsx
import React from "react";
import NewsCard from "@/components/NewsCard";


const newsData = [
  {
    title: "FKF-CFA Pays CCF a Courtesy Call",
    description:
      "The CCF Mr. Alex Lemarkoko has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke.",
    imageUrl: "https://example.com/news1.jpg",
    author: "By Admin",
    date: "June 19, 2024",
    comments: 0,
  },
  {
    title: "KFS Launches New Tree Planting Initiative",
    description:
      "Kenya Forest Service has launched a new initiative to plant 5 million trees nationwide to combat deforestation.",
    imageUrl: "https://example.com/news2.jpg",
    author: "By Admin",
    date: "July 5, 2024",
    comments: 12,
  },
  {
    title: "Community Clean-Up Day Announced",
    description:
      "KFS has announced a community clean-up day to be held in all major towns to promote environmental conservation.",
    imageUrl: "https://example.com/news3.jpg",
    author: "Admin",
    date: "August 10, 2024",
    comments: 5,
  },
  {
    title: "Forest Fire Awareness Campaign",
    description:
      "A new campaign to raise awareness about forest fires and how to prevent them has been launched.",
    imageUrl: "https://example.com/news4.jpg",
    author: "By Admin",
    date: "September 2, 2024",
    comments: 8,
  },
];

const NewsSection = () => {
  return (
    <section className="bg-white py-12 px-2">
      {/* Centered Headers */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-ultrabold text-black font-black">News</h1>
        <h2 className="text-3xl font-extrabold text-green-900 mt-2">
          KFS Latest News
        </h2>
      </div>

      {/* News Card Scrollable Container */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar ">
        {newsData.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
