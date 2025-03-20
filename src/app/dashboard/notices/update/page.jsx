"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function UpdateNotice() {
  const { data: session } = useSession();
  const [id, setId] = useState("");
  const [form, setForm] = useState({ title: "", description: "", file: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (session.user.role !== "admin") {
      alert("Unauthorized");
      return;
    }
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    if (form.file) formData.append("file", form.file);
    await axios.put(`http://localhost:5000/api/notices/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    setId("");
    setForm({ title: "", description: "", file: null });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Update Notice</h2>
      <input
        type="text"
        placeholder="Notice ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
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
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="block w-full p-2 mb-4 border"
      />
      <input
        type="file"
        onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
        className="block w-full p-2 mb-4 border"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Update Notice
      </button>
    </form>
  );
}