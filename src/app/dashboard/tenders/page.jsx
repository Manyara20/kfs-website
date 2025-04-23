"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Tenders() {
  const { data: session, status } = useSession();
  const [tenders, setTenders] = useState([]);
  const [form, setForm] = useState({ pdf: null, description: "" });
  const [error, setError] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingTenderId, setEditingTenderId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (status === "authenticated") fetchTenders();
  }, [session, status]);

  const fetchTenders = async () => {
    if (!session) return;
    const token = session.user.backendToken;
    try {
      const response = await axios.get("http://localhost:5000/api/tenders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTenders(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching tenders:", err);
      setError(err.response?.data?.error || "Failed to fetch tenders.");
    }
  };

  const filteredTenders = tenders.filter((tender) => {
    const matchesFilter = filter === "all" || (filter === "active" && !tender.archived) || (filter === "archived" && tender.archived);
    const matchesSearch = tender.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!session || (session.user.role !== "admin" && session.user.role !== "supply_chain")) {
      setError("Unauthorized access. Only admins or supply chain can manage tenders.");
      return;
    }

    const token = session.user.backendToken;
    const formData = new FormData();
    if (form.pdf) formData.append("pdf", form.pdf);
    formData.append("description", form.description);

    try {
      let response;
      if (editingTenderId) {
        response = await axios.put(`http://localhost:5000/api/tenders/${editingTenderId}`, formData, {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
        });
        setTenders(tenders.map((tender) => (tender.id === editingTenderId ? response.data : tender)));
        alert("Tender updated successfully!");
      } else {
        response = await axios.post("http://localhost:5000/api/tenders", formData, {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
        });
        setTenders([...tenders, response.data]);
        alert("Tender added successfully!");
      }
      setForm({ pdf: null, description: "" });
      setIsFormVisible(false);
      setEditingTenderId(null);
      setError("");
    } catch (err) {
      console.error(`Error ${editingTenderId ? "updating" : "adding"} tender:`, err);
      setError(err.response?.data?.error || `Failed to ${editingTenderId ? "update" : "add"} tender.`);
    }
  };

  const handleEdit = (tender) => {
    setForm({ pdf: null, description: tender.description });
    setEditingTenderId(tender.id);
    setIsFormVisible(true);
  };

  const handleArchive = async (id) => {
    if (status === "loading") return;
    if (!session || (session.user.role !== "admin" && session.user.role !== "supply_chain")) {
      setError("Unauthorized access.");
      return;
    }

    const token = session.user.backendToken;
    try {
      const response = await axios.patch(`http://localhost:5000/api/tenders/${id}/archive`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTenders(tenders.map((tender) => (tender.id === id ? { ...tender, archived: true } : tender)));
      alert("Tender archived successfully!");
      setError("");
    } catch (err) {
      console.error("Error archiving tender:", err);
      setError(err.response?.data?.error || "Failed to archive tender.");
    }
  };

  const handleDelete = async (id) => {
    if (status === "loading") return;
    if (!session || (session.user.role !== "admin" && session.user.role !== "supply_chain")) {
      setError("Unauthorized access.");
      return;
    }

    const token = session.user.backendToken;
    try {
      await axios.delete(`http://localhost:5000/api/tenders/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTenders(tenders.filter((tender) => tender.id !== id));
      alert("Tender deleted successfully!");
      setError("");
    } catch (err) {
      console.error("Error deleting tender:", err);
      setError(err.response?.data?.error || "Failed to delete tender.");
    }
  };

  const handleCancel = () => {
    setForm({ pdf: null, description: "" });
    setIsFormVisible(false);
    setEditingTenderId(null);
    setError("");
  };

  if (status === "unauthenticated") return <div className="p-6 text-red-500">Please log in to manage tenders.</div>;
  if (session?.user.role !== "admin" && session?.user.role !== "supply_chain")
    return <div className="p-6 text-red-500">Unauthorized</div>;

  return (
    <div className="p-6 max-w-4xl w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-gray-800">Manage Tenders</h2>
          <button
            onClick={() => {
              setIsFormVisible(true);
              setEditingTenderId(null);
              setForm({ pdf: null, description: "" });
            }}
            className="bg-[#0D3C00] text-white px-4 py-2 rounded-md hover:bg-[#15803d] transition-colors"
          >
            Add Tender
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
            placeholder="Search tenders..."
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
            <label htmlFor="pdf" className="block text-sm font-medium text-gray-700">
              PDF (optional)
            </label>
            <input
              type="file"
              id="pdf"
              accept="application/pdf"
              onChange={(e) => setForm({ ...form, pdf: e.target.files[0] })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00]"
              rows="4"
              required
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-[#0D3C00] text-white px-4 py-2 rounded-md hover:bg-[#15803d] transition-colors"
            >
              {editingTenderId ? "Update Tender" : "Add Tender"}
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
        {filteredTenders.map((tender) => (
          <li key={tender.id} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
            <span className="text-gray-700">
              {tender.description.substring(0, 50)}
              {tender.description.length > 50 ? "..." : ""} {tender.archived ? "(Archived)" : ""}
              {tender.pdf_url && (
                <a href={tender.pdf_url} target="_blank" className="text-blue-500 ml-2">
                  View PDF
                </a>
              )}
            </span>
            <div className="ml-auto flex space-x-2">
              <button
                onClick={() => handleEdit(tender)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
                aria-label={`Edit tender ${tender.description}`}
              >
                Edit
              </button>
              <button
                onClick={() => handleArchive(tender.id)}
                className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition-colors"
                aria-label={`Archive tender ${tender.description}`}
                disabled={tender.archived}
              >
                Archive
              </button>
              <button
                onClick={() => handleDelete(tender.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                aria-label={`Delete tender ${tender.description}`}
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