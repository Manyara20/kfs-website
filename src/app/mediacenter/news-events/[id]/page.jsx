"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";

const mockNewsData = [
  {
    id: 6,
    image: "/Uploads/1749733049920-751192738.jpg",
    title: "National Blue Carbon Dialogue",
    author_id: null,
    date: "2025-05-13T13:50:19.246Z",
    comments: null,
    content:
      "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem.\r\n" +
      "The discussions centered on infrastructure development within Karura forest, increase in seedlings production and development of nurseries, realignment of financial budgetary allocation to support KFS in realization of 15 billion tree growing agenda.\r\n" +
      "Present at the meeting included KFS Commandant Mohamed Mohamed, Nairobi Regional Forest Conservator Joyce Nthuku and Other officials from KFS and FKF.",
    archived: false,
    updated_at: "2025-06-12T12:57:30.004Z",
    user_id: 2,
  },
  {
    id: 7,
    image: "/Uploads/1749733065323-559600218.jpg",
    title: "National Blue Carbon Dialogue",
    author_id: null,
    date: "2025-06-11T13:21:28.801Z",
    comments: null,
    content:
      "A national Blue Carbon Dialogue took place on 27th of March, 2025, at Mnarani Beach Club, Kilifi County. The workshop, themed “Enhancing Local Level Governance of Blue Carbon in Kenya”, provided a platform to deliberate collective actions towards harnessing blue carbon ecosystems (BCEs) as vital tools for nature and community livelihood.\r\n" +
      "\r\n" +
      "The workshop served as a platform for government agencies, civil society, expert groups, and local community organizations to provide guidance on the integration of blue carbon into the climate actions and development agenda.\r\n" +
      "\r\n" +
      "Blue carbon’ is the term used to denote carbon captured and stored by coastal wetlands, particularly mangroves, seagrass beds and salt marshes ecosystems. These ecosystems capture and store 3-10 times more carbon than their terrestrial counterparts; as such could play a critical role in mitigating climate change.  \r\n" +
      "\r\n" +
      "In Kenya, major BCE are mangroves and seagrass beds. Covering approximately 61,000 ha for mangroves and 39,693 ha for seagrasses, these ecosystems store more than 75. million tCO₂e and sequester an additional 7.5 tCO₂e/ha/year, offering significant carbon credit potential. Over the next 20 years, blue carbon ecosystems could generate up to $440 million in revenue from carbon credits alone. This is in addition to the support value of blue carbon ecosystems to fisheries, shoreline protection, and in provisions of harvestable wood and non-wood products.\r\n" +
      "\r\n" +
      "While Kenya has made significant strides in incorporating blue carbon ecosystems into policy frameworks, these frameworks have mostly focuAsed on mangroves rather than seagrasses. Notable achievements in mangrove management include, the development of the National Mangrove Ecosystem Management Plan, the National Mangrove Ecosystem Restoration Guidelines, National Mangrove Portal, Lamu Mangrove Harvest Plan, and  the Mangrove Nursery Manual. These management tools are critical and are designed to guide the sustainable management of mangrove ecosystems, involving stakeholders at all levels and ensuring both ecosystem resilience and a balance between ecological health and community needs. In contrast, seagrasses have received less attention, being addressed only in the Coral Reef and Seagrass Ecosystem Conservation Strategy (2014-2018), which is up for review.  Considering the vital importance of the seagrass seascape, similar tools are required to be developed. Furthermore, there is a critical need to enhance the visibility of seagrass ecosystems.",
    archived: false,
    updated_at: "2025-06-12T12:57:45.440Z",
    user_id: 2,
  },
  {
    id: 8,
    image: "/Uploads/1749733097225-972169723.JPG",
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    author_id: null,
    date: "2025-06-12T12:20:49.720Z",
    comments: null,
    content:
      "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem.\r\n" +
      "The discussions centered on infrastructure development within Karura forest, increase in seedlings production and development of nurseries, realignment of financial budgetary allocation to support KFS in realization of 15 billion tree growing agenda.\r\n" +
      "Present at the meeting included KFS Commandant Mohamed Mohamed, Nairobi Regional Forest Conservator Joyce Nthuku and Other officials from KFS and FKF.",
    archived: false,
    updated_at: "2025-06-12T12:58:17.317Z",
    user_id: 2,
  },
  {
    id: 9,
    image: "/Uploads/1749739397385-693999295.jpg",
    title: "FKF-CFA PAYS CCF A COURTESY CALL",
    author_id: null,
    date: "2025-06-12T14:43:17.491Z",
    comments: null,
    content:
      "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem.\r\n" +
      "The discussions centered on infrastructure development within Karura forest, increase in seedlings production and development of nurseries, realignment of financial budgetary allocation to support KFS in realization of 15 billion tree growing agenda.\r\n" +
      "Present at the meeting included KFS Commandant Mohamed Mohamed, Nairobi Regional Forest Conservator Joyce Nthuku and Other officials from KFS and FKF.",
    archived: false,
    updated_at: "2025-06-12T14:43:17.491Z",
    user_id: 2,
  },
];

const NewsDetails = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [newsItem, setNewsItem] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        // Attempt to fetch from API
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/posts/public/${id}`,
          {
            headers: {
              // Add authentication token if available
              Authorization: localStorage.getItem("token")
                ? `Bearer ${localStorage.getItem("token")}`
                : undefined,
            },
          }
        );
        const post = response.data;
        setNewsItem({
          id: post.id,
          title: post.title || "Untitled",
          content: post.content || "",
          image: post.image
            ? `${process.env.NEXT_PUBLIC_API_URL.replace("/api", "")}${post.image}`
            : "https://via.placeholder.com/768x527",
          author_id: post.author_id || "Admin",
          created_at: post.created_at || new Date().toISOString(),
          comments: post.comments || 0,
          gallery: [
            "https://via.placeholder.com/800x600?text=Gallery+Image+1",
            "https://via.placeholder.com/800x600?text=Gallery+Image+2",
            "https://via.placeholder.com/800x600?text=Gallery+Image+3",
          ],
        });
        setError("");
      } catch (err) {
        console.error("Error fetching news item:", {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data,
        });
        // Fallback to mock data if API fails with 401
        if (err.response?.status === 401) {
          const post = mockNewsData.find((item) => item.id === parseInt(id));
          if (post) {
            setNewsItem({
              id: post.id,
              title: post.title || "Untitled",
              content: post.content || "",
              image: post.image
                ? `${process.env.NEXT_PUBLIC_API_URL.replace("/api", "")}${post.image}`
                : "https://via.placeholder.com/768x527",
              author_id: post.author_id || "Admin",
              created_at: post.created_at || new Date().toISOString(),
              comments: post.comments || 0,
              gallery: [
                "https://via.placeholder.com/800x600?text=Gallery+Image+1",
                "https://via.placeholder.com/800x600?text=Gallery+Image+2",
                "https://via.placeholder.com/800x600?text=Gallery+Image+3",
              ],
            });
            setError("");
          } else {
            setError("News item not found in mock data.");
          }
        } else {
          setError("Failed to load news details. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchNewsItem();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    );
  }

  if (error || !newsItem) {
    return (
      <>
        <MainNavBar />
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-red-500 text-lg">{error || "News item not found."}</p>
            <button
              onClick={() => router.push("/mediacenter/news-events")}
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
            >
              Back to News
            </button>
          </div>
        </section>
        <FooterBottom />
      </>
    );
  }

  return (
    <>
      <MainNavBar />
      <section className="py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => router.push("/mediacenter/news-events")}
            className="mb-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Back to News
          </button>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={newsItem.image}
              alt={newsItem.title}
              width={768}
              height={527}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#0E2E0E] mb-2">{newsItem.title}</h3>
              <p className="text-gray-600 mb-2">
                By {newsItem.author_id} |{" "}
                {new Date(newsItem.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-gray-700 mb-4">{newsItem.content}</p>
              <p className="text-gray-500">Comments: {newsItem.comments || 0}</p>
            </div>
            {newsItem.gallery && newsItem.gallery.length > 0 && (
              <div className="p-6">
                <h4 className="text-lg font-semibold text-[#0E2E0E] mb-4">Photo Gallery</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {newsItem.gallery.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`Gallery image ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <FooterBottom />
    </>
  );
};

export default NewsDetails;