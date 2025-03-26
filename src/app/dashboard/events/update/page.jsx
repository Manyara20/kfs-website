"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function UpdateEvent() {
  const { data: session, status } = useSession();
  const [id, setId] = useState("");
  const [form, setForm] = useState({ title: "", date: "", time: "", venue: "", flag: "happening" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      setError("Unauthorized access. Only admins can update events.");
      return;
    }

    const token = session.user.backendToken;
    if (!token) {
      setError("No backend authentication token found. Please log in again.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/events/${id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Event updated:", response.data);
      setId("");
      setForm({ title: "", date: "", time: "", venue: "", flag: "happening" });
      setError("");
      alert("Event updated successfully!");
    } catch (err) {
      const errorDetails = {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      };
      console.error("Error updating event:", errorDetails);
      setError(
        err.response?.data?.error || `Failed to update event (Status: ${err.response?.status || "unknown"})`
      );
    }
  };

  if (status === "unauthenticated") return <div>Please log in to update events.</div>;

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Update Event</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="text"
        placeholder="Event ID"
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
        Update Event
      </button>
    </form>
  );
}