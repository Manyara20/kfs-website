"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function UpdateDocument() {
  const { data: session } = useSession();
  const [id, setId] = useState("");
  const [form, setForm] = useState({ pdf: null, description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (session.user.role !== "admin") {
      alert("Unauthorized");
      return;
    }
    const formData = new FormData();
    if (form.pdf) formData.append("pdf", form.pdf);
    formData.append("description", form.description);
    await axios.put(`http://localhost:5000/api/documents/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    setId("");
    setForm({ pdf: null, description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Update ISO Document</h2>
      <input
        type="text"
        placeholder="Document ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="block w-full p-2 mb-4 border"
      />
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setForm({ ...form, pdf: e.target.files[0] })}
        className="block w-full p-2 mb-4 border"
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="block w-full p-2 mb-4 border"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Update Document
      </button>
    </form>
  );
}