"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function DeleteDocument() {
  const { data: session, status } = useSession();
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      setError("Unauthorized access. Only admins can delete legal documents.");
      return;
    }

    const token = session.user.backendToken;
    if (!token) {
      setError("No backend authentication token found. Please log in again.");
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/documents/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Legal document deleted:", response.data);
      setId("");
      setError("");
      alert("Legal document deleted successfully!");
    } catch (err) {
      const errorDetails = {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      };
      console.error("Error deleting legal document:", errorDetails);
      setError(
        err.response?.data?.error || `Failed to delete legal document (Status: ${err.response?.status || "unknown"})`
      );
    }
  };

  if (status === "unauthenticated") return <div>Please log in to delete legal documents.</div>;

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Delete Legal Document</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="text"
        placeholder="Document ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="block w-full p-2 mb-4 border"
      />
      <button type="submit" className="bg-red-500 text-white p-2 rounded">
        Delete Legal Document
      </button>
    </form>
  );
}