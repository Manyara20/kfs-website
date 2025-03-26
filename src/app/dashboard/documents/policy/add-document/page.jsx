"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function AddDocument() {
  const { data: session, status } = useSession();
  const [form, setForm] = useState({ pdf: null, description: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      setError("Unauthorized access. Only admins can add policy documents.");
      return;
    }

    const token = session.user.backendToken;
    if (!token) {
      setError("No backend authentication token found. Please log in again.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", form.pdf);
    formData.append("description", form.description);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/documents/policy",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Policy document added:", response.data);
      setForm({ pdf: null, description: "" });
      setError("");
      alert("Policy document added successfully!");
    } catch (err) {
      const errorDetails = {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      };
      console.error("Error adding policy document:", errorDetails);
      setError(
        err.response?.data?.error || `Failed to add policy document (Status: ${err.response?.status || "unknown"})`
      );
    }
  };

  if (status === "unauthenticated") return <div>Please log in to add policy documents.</div>;

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Add Policy Document</h2>
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
        Add Policy Document
      </button>
    </form>
  );
}