"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function UpdatePost() {
  const { data: session } = useSession();
  const [id, setId] = useState("");
  const [form, setForm] = useState({ image: "", title: "", content: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/posts/${id}`, form, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Update Post</h2>
      <input
        type="text"
        placeholder="Post ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="block w-full p-2 mb-4 border"
      />
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
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Post</button>
    </form>
  );
}