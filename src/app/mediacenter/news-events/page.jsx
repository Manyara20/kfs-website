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
            reverse: Math.random() < 0.5, // Randomly assign reverse for zigzag layout
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
    <div style={{ overflowX: "hidden", width: "100vw" }}>
      <TopNavBar />
      <MainNavBar />

      {error ? (
        <div className="container mx-auto px-[clamp(1rem,2vw,4rem)] py-[clamp(2rem,5vw,12rem)] text-center text-red-500">
          {error}
        </div>
      ) : newsData.length === 0 ? (
        <div className="container mx-auto px-[clamp(1rem,2vw,4rem)] py-[clamp(2rem,5vw,12rem)] text-center text-gray-500">
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

          <div className="flex justify-center items-center my-[clamp(2rem,4vw,8rem)]">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="mx-[clamp(0.2rem,0.5vw,1rem)] px-[clamp(1rem,2vw,4rem)] py-[clamp(0.5rem,1vw,2rem)] bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 disabled:opacity-50"
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`mx-[clamp(0.2rem,0.5vw,1rem)] px-[clamp(1rem,2vw,4rem)] py-[clamp(0.5rem,1vw,2rem)] ${
                  currentPage === page ? "bg-green-500" : "bg-gray-800"
                } text-white rounded-full hover:bg-green-600 transition duration-300`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="mx-[clamp(0.2rem,0.5vw,1rem)] px-[clamp(1rem,2vw,4rem)] py-[clamp(0.5rem,1vw,2rem)] bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 disabled:opacity-50"
            >
              →
            </button>
          </div>
        </>
      )}

      <FooterBottom />
    </div>
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
      className={`container mx-auto px-[clamp(1rem,2vw,4rem)] py-[clamp(1.5rem,3vw,6rem)] flex flex-col md:flex-row items-center gap-[clamp(1rem,2vw,4rem)] ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      style={{ width: "100%", boxSizing: "border-box" }}
    >
      <div className="md:w-1/2 w-full">
        <img
          src={image}
          alt={title || "News Image"}
          className="rounded-lg shadow-lg w-full h-auto"
          style={{ maxWidth: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="md:w-1/2 w-full text-black">
        {title && (
          <h2
            className="text-[clamp(1rem,3vw,1.5rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-bold font-peugeot text-emerald-950"
            style={{ textTransform: "capitalize" }}
          >
            {title}
          </h2>
        )}
        <p className="mt-[clamp(0.5rem,1vw,1rem)] md:mt-[clamp(1rem,2vw,4rem)] text-[clamp(0.7rem,2vw,0.875rem)] md:text-[clamp(0.875rem,2.5vw,1rem)] font-peugeot">
          {text}
        </p>

        {/* Metadata */}
        <div className="flex items-center font-bold gap-[clamp(1rem,2vw,1.5rem)] md:gap-[clamp(1.5rem,3vw,6rem)] text-[clamp(0.625rem,1.5vw,0.75rem)] md:text-[clamp(0.75rem,2vw,0.875rem)] text-black my-[clamp(0.5rem,1vw,1rem)] md:my-[clamp(1rem,2vw,4rem)]">
          <a
            href="/author-profile"
            className="flex items-center gap-[clamp(0.25rem,0.5vw,1rem)] hover:underline hover:text-green-500 font-peugeot"
          >
            <Image src="/icons/user.png" alt="Author" width={14} height={14} />
            {author}
          </a>
          <a
            href="/events-calendar"
            className="flex items-center gap-[clamp(0.25rem,0.5vw,1rem)] hover:underline hover:text-green-500 font-peugeot"
          >
            <Image src="/icons/calendar.png" alt="Date" width={14} height={14} />
            {date}
          </a>
          <a
            href="/comments-section"
            className="flex items-center gap-[clamp(0.25rem,0.5vw,1rem)] hover:underline hover:text-green-500 font-peugeot"
          >
            <Image src="/icons/comment.png" alt="Comments" width={14} height={14} />
            {comments}
          </a>
        </div>
        <button
          onClick={onLearnMore}
          className="mt-[clamp(1rem,2vw,1.5rem)] md:mt-[clamp(1.5rem,3vw,6rem)] bg-emerald-950 text-white px-[clamp(1rem,2vw,1.5rem)] md:px-[clamp(1.5rem,3vw,6rem)] py-[clamp(0.25rem,0.5vw,1rem)] md:py-[clamp(0.5rem,1vw,2rem)] text-[clamp(0.7rem,2vw,0.875rem)] md:text-[clamp(0.875rem,2.5vw,1rem)] font-peugeot hover:bg-green-500 transition duration-300"
        >
          Read More
        </button>
      </div>
    </section>
  );
};

export default NewsandEvents;