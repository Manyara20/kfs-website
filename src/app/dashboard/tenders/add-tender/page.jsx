"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function AddTender() {
  const { data: session } = useSession();
  const [form, setForm] = useState({ pdf: null, description: "" });
  const [error, setError] = useState(null); // Add error state for debugging

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!session?.user || (session.user.role !== "admin" && session.user.role !== "supply_chain")) {
      alert("Unauthorized");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", form.pdf);
    formData.append("description", form.description);

    try {
      const response = await axios.post("http://localhost:5000/api/tenders", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Tender added:", response.data);
      setForm({ pdf: null, description: "" });
    } catch (err) {
      console.error("Error adding tender:", err);
      setError(err.response?.data?.error || "Failed to add tender");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Add Tender</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
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
        Add Tender
      </button>
    </form>
  );
}