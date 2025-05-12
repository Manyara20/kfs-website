"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Events() {
  const { data: session, status } = useSession();
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ title: "", date: "", time: "", venue: "", flag: "happening" });
  const [error, setError] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (status === "authenticated" && (session?.user.role === "admin" || session?.user.role === "communication_officer")) {
      fetchEvents();
    }
  }, [session, status]);

  const fetchEvents = async () => {
    if (!session) return;
    const token = session.user.backendToken;
    console.log("Fetching events for user:", session.user.email, "Role:", session.user.role, "Token:", token);
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/events`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Events fetched:", response.data);
      setEvents(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching events:", {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      });
      setError(err.response?.data?.error || "Failed to fetch events.");
    }
  };

  const filteredEvents = events.filter((event) => {
    const matchesFilter = filter === "all" || (filter === "active" && !event.archived) || (filter === "archived" && event.archived);
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase()) || event.venue.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!session || (session.user.role !== "admin" && session.user.role !== "communication_officer")) {
      setError("Unauthorized access. Only admins and communication officers can manage events.");
      return;
    }

    const token = session.user.backendToken;
    try {
      let response;
      if (editingEventId) {
        response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${editingEventId}`, form, {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        });
        setEvents(events.map((event) => (event.id === editingEventId ? response.data : event)));
        alert("Event updated successfully!");
      } else {
        response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/events`, form, {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        });
        setEvents([...events, response.data]);
        alert("Event added successfully!");
      }
      setForm({ title: "", date: "", time: "", venue: "", flag: "happening" });
      setIsFormVisible(false);
      setEditingEventId(null);
      setError("");
    } catch (err) {
      console.error(`Error ${editingEventId ? "updating" : "adding"} event:`, {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      });
      setError(err.response?.data?.error || `Failed to ${editingEventId ? "update" : "add"} event.`);
    }
  };

  const handleEdit = (event) => {
    setForm({ title: event.title, date: event.date, time: event.time, venue: event.venue, flag: event.flag });
    setEditingEventId(event.id);
    setIsFormVisible(true);
  };

  const handleArchive = async (id, currentArchivedStatus) => {
    if (status === "loading") return;
    if (!session || (session.user.role !== "admin" && session.user.role !== "communication_officer")) {
      setError("Unauthorized access.");
      return;
    }

    const token = session.user.backendToken;
    console.log("Toggling archive for event ID:", id, "Current archived status:", currentArchivedStatus, "Token:", token, "User:", session.user);
    if (!id || isNaN(id)) {
      setError("Invalid event ID.");
      return;
    }

    try {
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}/archive`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Archive toggle response:", response.data);
      setEvents(events.map((event) => 
        event.id === id ? { ...event, archived: response.data.event.archived } : event
      ));
      alert(`Event ${response.data.event.archived ? "archived" : "unarchived"} successfully!`);
      setError("");
    } catch (err) {
      console.error("Error toggling archive:", {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      });
      setError(err.response?.data?.error || "Failed to toggle archive status.");
    }
  };

  const handleDelete = async (id) => {
    if (status === "loading") return;
    if (!session || (session.user.role !== "admin" && session.user.role !== "communication_officer")) {
      setError("Unauthorized access.");
      return;
    }

    const token = session.user.backendToken;
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents(events.filter((event) => event.id !== id));
      alert("Event deleted successfully!");
      setError("");
    } catch (err) {
      console.error("Error deleting event:", {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      });
      setError(err.response?.data?.error || "Failed to delete event.");
    }
  };

  const handleCancel = () => {
    setForm({ title: "", date: "", time: "", venue: "", flag: "happening" });
    setIsFormVisible(false);
    setEditingEventId(null);
    setError("");
  };

  if (status === "unauthenticated") return <div className="p-6 text-red-500">Please log in to manage events.</div>;
  if (session?.user.role !== "admin" && session?.user.role !== "communication_officer") {
    return <div className="p-6 text-red-500">Unauthorized</div>;
  }

  return (
    <div className="p-6 max-w-4xl w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-gray-800">Manage Events</h2>
          <button
            onClick={() => {
              setIsFormVisible(true);
              setEditingEventId(null);
              setForm({ title: "", date: "", time: "", venue: "", flag: "happening" });
            }}
            className="bg-[#0D3C00] text-white px-4 py-2 rounded-md hover:bg-[#15803d] transition-colors"
          >
            Add Event
          </button>
        </div>
        <div className="flex space-x-4 w-full sm:w-auto">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00]"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="archived">Archived</option>
          </select>
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00] w-full sm:w-48"
          />
        </div>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {isFormVisible && (
        <form onSubmit={handleAddOrUpdate} className="mb-6 bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              type="time"
              id="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="venue" className="block text-sm font-medium text-gray-700">
              Venue
            </label>
            <input
              type="text"
              id="venue"
              placeholder="Enter venue"
              value={form.venue}
              onChange={(e) => setForm({ ...form, venue: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="flag" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="flag"
              value={form.flag}
              onChange={(e) => setForm({ ...form, flag: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00]"
            >
              <option value="happening">Happening</option>
              <option value="postponed">Postponed</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-[#0D3C00] text-white px-4 py-2 rounded-md hover:bg-[#15803d] transition-colors"
            >
              {editingEventId ? "Update Event" : "Add Event"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <ul className="space-y-2">
        {filteredEvents.map((event) => (
          <li key={event.id} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
            <span className="text-gray-700">
              {event.title} - {event.venue} ({event.flag}) {event.archived ? "(Archived)" : ""}
            </span>
            <div className="ml-auto flex space-x-2">
              <button
                onClick={() => handleEdit(event)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
                aria-label={`Edit event ${event.title}`}
              >
                Edit
              </button>
              <button
                onClick={() => handleArchive(event.id, event.archived)}
                className={`px-3 py-1 rounded-md text-white transition-colors ${
                  event.archived
                    ? "bg-gray-500 cursor-pointer"
                    : "bg-yellow-500 hover:bg-yellow-600"
                }`}
                aria-label={`${event.archived ? "Unarchive" : "Archive"} event ${event.title}`}
              >
                {event.archived ? "Archived" : "Archive"}
              </button>
              <button
                onClick={() => handleDelete(event.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                aria-label={`Delete event ${event.title}`}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}