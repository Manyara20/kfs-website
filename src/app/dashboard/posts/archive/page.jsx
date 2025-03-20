"use client";

import { useState } from "react";
import axios from "axios";

export default function ArchivePost() {
  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/api/posts/${id}/archive`, {}, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setId("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Archive Post</h2>
      <input
        type="text"
        placeholder="Post ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="block w-full p-2 mb-4 border"
      />
      <button type="submit" className="bg-yellow-500 text-white p-2 rounded">Archive Post</button>
    </form>
  );
}