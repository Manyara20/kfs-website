"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import { useRouter } from "next/navigation";
import axios from "axios";

const NewsandEvents = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState("");
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchNewsPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts/public");
        console.log("News posts fetched:", response.data);
        setNewsData(
          response.data.map((post) => ({
            id: post.id,
            title: post.title || "",
            text: post.content || "",
            image: post.image ? `http://localhost:5000${post.image}` : "https://via.placeholder.com/768x512",
            author: post.author || "By Admin",
            date: new Date(post.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }) || "Unknown Date",
            comments: `${post.comments_count || 0} Comments`,
            reverse: Math.random() < 0.5,
          }))
        );
        setError("");
      } catch (err) {
        console.error("Error fetching news posts:", {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data,
        });
        setError(
          err.response?.data?.error || "Failed to load news posts. Please try again later."
        );
      }
    };

    fetchNewsPosts();
  }, []);

  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleLearnMore = (id) => {
    router.push(`/mediacenter/news-events/${id}`);
  };

  const currentItems = newsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <TopNavBar />
      <MainNavBar />

      {error ? (
        <div className="container mx-auto px-4 py-12 text-center text-red-500">
          {error}
        </div>
      ) : newsData.length === 0 ? (
        <div className="container mx-auto px-4 py-12 text-center text-gray-500">
          No news posts available at this time.
        </div>
      ) : (
        <>
          {currentItems.map((item) => (
            <ZigzagSection
              key={item.id}
              title={item.title}
              text={item.text}
              image={item.image}
              author={item.author}
              date={item.date}
              comments={item.comments}
              reverse={item.reverse}
              onLearnMore={() => handleLearnMore(item.id)}
            />
          ))}

          <div className="flex justify-center items-center my-8">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="mx-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 disabled:opacity-50"
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`mx-1 px-4 py-2 ${
                  currentPage === page ? "bg-green-500" : "bg-gray-800"
                } text-white rounded-full hover:bg-green-600 transition duration-300`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="mx-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 disabled:opacity-50"
            >
              →
            </button>
          </div>
        </>
      )}

      <FooterBottom />
    </>
  );
};

const ZigzagSection = ({
  title,
  text,
  image,
  author,
  date,
  comments,
  reverse,
  onLearnMore,
}) => {
  return (
    <section
      className={`container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="md:w-1/2">
        <img src={image} alt={title || "News Image"} className="rounded-lg shadow-lg w-full h-auto" />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 text-black">
        {title && <h2 className="text-3xl font-bold">{title}</h2>}
        <p className="mt-4">{text}</p>

        {/* Metadata */}
        <div className="flex items-center font-bold gap-6 text-sm text-black my-4">
          <a href="/author-profile" className="flex items-center gap-1 hover:underline hover:text-green-500">
            <Image src="/icons/user.png" alt="Author" width={16} height={16} />
            {author}
          </a>
          <a href="/events-calendar" className="flex items-center gap-1 hover:underline hover:text-green-500">
            <Image src="/icons/calendar.png" alt="Date" width={16} height={16} />
            {date}
          </a>
          <a href="/comments-section" className="flex items-center gap-1 hover:underline hover:text-green-500">
            <Image src="/icons/comment.png" alt="Comments" width={16} height={16} />
            {comments}
          </a>
        </div>

        {/* Learn More Button */}
        <button
          onClick={onLearnMore}
          className="mt-6 bg-emerald-950 text-white px-6 py-2 hover:bg-green-500 transition duration-300"
        >
          READ MORE
        </button>
      </div>
    </section>
  );
};

export default NewsandEvents;