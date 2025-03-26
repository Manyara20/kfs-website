"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function AddJob() {
  const { data: session, status } = useSession();
  const [form, setForm] = useState({ title: "", description: "", duties: "", requirements: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      setError("Unauthorized access. Only admins can add jobs.");
      return;
    }

    const token = session.user.backendToken;
    if (!token) {
      setError("No backend authentication token found. Please log in again.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/jobs",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Job added:", response.data);
      setForm({ title: "", description: "", duties: "", requirements: "" });
      setError("");
      alert("Job added successfully!");
    } catch (err) {
      const errorDetails = {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      };
      console.error("Error adding job:", errorDetails);
      setError(
        err.response?.data?.error || `Failed to add job (Status: ${err.response?.status || "unknown"})`
      );
    }
  };

  if (status === "unauthenticated") return <div>Please log in to add jobs.</div>;

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Add Job</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
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
      <textarea
        placeholder="Duties"
        value={form.duties}
        onChange={(e) => setForm({ ...form, duties: e.target.value })}
        className="block w-full p-2 mb-4 border"
      />
      <textarea
        placeholder="Requirements"
        value={form.requirements}
        onChange={(e) => setForm({ ...form, requirements: e.target.value })}
        className="block w-full p-2 mb-4 border"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Job
      </button>
    </form>
  );
}