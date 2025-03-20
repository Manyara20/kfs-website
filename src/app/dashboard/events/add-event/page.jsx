"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function AddEvent() {
  const { data: session } = useSession();
  const [form, setForm] = useState({ title: "", date: "", time: "", venue: "", flag: "happening" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (session.user.role !== "admin") {
      alert("Unauthorized");
      return;
    }
    await axios.post("http://localhost:5000/api/events", form, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setForm({ title: "", date: "", time: "", venue: "", flag: "happening" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Add Event</h2>
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="block w-full p-2 mb-4 border"
      />
      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        className="block w-full p-2 mb-4 border"
      />
      <input
        type="time"
        value={form.time}
        onChange={(e) => setForm({ ...form, time: e.target.value })}
        className="block w-full p-2 mb-4 border"
      />
      <input
        type="text"
        placeholder="Venue"
        value={form.venue}
        onChange={(e) => setForm({ ...form, venue: e.target.value })}
        className="block w-full p-2 mb-4 border"
      />
      <select
        value={form.flag}
        onChange={(e) => setForm({ ...form, flag: e.target.value })}
        className="block w-full p-2 mb-4 border"
      >
        <option value="happening">Happening</option>
        <option value="postponed">Postponed</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Event
      </button>
    </form>
  );
}