"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function ArchiveDocument() {
  const { data: session } = useSession();
  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (session.user.role !== "admin") {
      alert("Unauthorized");
      return;
    }
    await axios.patch(`http://localhost:5000/api/documents/archive/${id}`, {}, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setId("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Archive Legal Document</h2>
      <input
        type="text"
        placeholder="Document ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="block w-full p-2 mb-4 border"
      />
      <button type="submit" className="bg-gray-500 text-white p-2 rounded">
        Archive Document
      </button>
    </form>
  );
}