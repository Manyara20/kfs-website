"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function AddPost() {
  const { data: session } = useSession();
  const [form, setForm] = useState({ image: "", title: "", content: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (session.user.role !== "admin" && session.user.role !== "communication_officer") {
      alert("Unauthorized");
      return;
    }
    await axios.post("http://localhost:5000/api/posts", form, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setForm({ image: "", title: "", content: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Add Post</h2>
      <input
        type="text"
        placeholder="Image URL"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
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
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Post</button>
    </form>
  );
}