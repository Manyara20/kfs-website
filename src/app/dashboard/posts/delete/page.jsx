"use client";

import { useState } from "react";
import axios from "axios";

export default function DeletePost() {
  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:5000/api/posts/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setId("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Delete Post</h2>
      <input
        type="text"
        placeholder="Post ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="block w-full p-2 mb-4 border"
      />
      <button type="submit" className="bg-red-500 text-white p-2 rounded">Delete Post</button>
    </form>
  );
}