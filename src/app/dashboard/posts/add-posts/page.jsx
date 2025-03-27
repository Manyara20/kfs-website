"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function AddPost() {
  const { data: session, status } = useSession();
  const [form, setForm] = useState({ image: null, title: "", content: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!session || (session.user.role !== "admin" && session.user.role !== "communication_officer")) {
      setError("Unauthorized access. Only admins or communication officers can add posts.");
      return;
    }

    const token = session.user.backendToken;
    if (!token) {
      setError("No backend authentication token found. Please log in again.");
      return;
    }

    const formData = new FormData();
    if (form.image) formData.append("image", form.image); // Append image file if present
    formData.append("title", form.title);
    formData.append("content", form.content);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/posts",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Post added:", response.data);
      setForm({ image: null, title: "", content: "" });
      setError("");
      alert("Post added successfully!");
    } catch (err) {
      const errorDetails = {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      };
      console.error("Error adding post:", errorDetails);
      setError(
        err.response?.data?.error || `Failed to add post (Status: ${err.response?.status || "unknown"})`
      );
    }
  };

  if (status === "unauthenticated") return <div>Please log in to add posts.</div>;

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Add Post</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="file"
        accept="image/*" // Restrict to image files (e.g., .jpg, .png)
        onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
        className="block w-full p-2 mb-4 border"
      />
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="block w-full p-2 mb-4 border"
      />
      <textarea
        placeholder="Content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
        className="block w-full p-2 mb-4 border"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Post
      </button>
    </form>
  );
}