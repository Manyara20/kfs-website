"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function UpdateNotice() {
  const { data: session, status } = useSession();
  const [id, setId] = useState("");
  const [form, setForm] = useState({ title: "", description: "", file: null });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      setError("Unauthorized access. Only admins can update notices.");
      return;
    }

    const token = session.user.backendToken;
    if (!token) {
      setError("No backend authentication token found. Please log in again.");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    if (form.file) formData.append("file", form.file);

    try {
      const response = await axios.put(
        `http://localhost:5000/api/notices/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Notice updated:", response.data);
      setId("");
      setForm({ title: "", description: "", file: null });
      setError("");
      alert("Notice updated successfully!");
    } catch (err) {
      const errorDetails = {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      };
      console.error("Error updating notice:", errorDetails);
      setError(
        err.response?.data?.error || `Failed to update notice (Status: ${err.response?.status || "unknown"})`
      );
    }
  };

  if (status === "unauthenticated") return <div>Please log in to update notices.</div>;

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Update Notice</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
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