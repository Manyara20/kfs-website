"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function AddJob() {
  const { data: session } = useSession();
  const [form, setForm] = useState({ title: "", description: "", duties: "", requirements: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (session.user.role !== "admin") {
      alert("Unauthorized");
      return;
    }
    await axios.post("http://localhost:5000/api/jobs", form, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setForm({ title: "", description: "", duties: "", requirements: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Add Job</h2>
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
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Job</button>
    </form>
  );
}