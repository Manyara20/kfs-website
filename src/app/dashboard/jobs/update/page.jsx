"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function UpdateJob() {
  const { data: session } = useSession();
  const [id, setId] = useState("");
  const [form, setForm] = useState({ title: "", description: "", duties: "", requirements: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (session.user.role !== "admin") {
      alert("Unauthorized");
      return;
    }
    await axios.put(`http://localhost:5000/api/jobs/${id}`, form, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setId("");
    setForm({ title: "", description: "", duties: "", requirements: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Update Job</h2>
      <input
        type="text"
        placeholder="Job ID"
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
        Update Job
      </button>
    </form>
  );
}