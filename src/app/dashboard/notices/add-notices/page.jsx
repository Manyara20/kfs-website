"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function AddNotice() {
  const { data: session, status } = useSession();
  const [form, setForm] = useState({ title: "", description: "", file: null });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      setError("Unauthorized access. Only admins can add notices.");
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
      const response = await axios.post(
        "http://localhost:5000/api/notices",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Notice added:", response.data);
      setForm({ title: "", description: "", file: null });
      setError("");
      alert("Notice added successfully!");
    } catch (err) {
      const errorDetails = {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      };
      console.error("Error adding notice:", errorDetails);
      setError(
        err.response?.data?.error ||
        err.response?.data?.details ||
        `Failed to add notice (Status: ${err.response?.status || "unknown"})`
      );
    }
  };

  if (status === "unauthenticated") return <div>Please log in to add notices.</div>;

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Add Notice</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="block w-full p-2 mb-4 border rounded"
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="block w-full p-2 mb-4 border rounded"
      />
      <input
        type="file"
        onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
        className="block w-full p-2 mb-4 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Add Notice
      </button>
    </form>
  );
}