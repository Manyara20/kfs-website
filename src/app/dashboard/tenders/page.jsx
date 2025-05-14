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
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tenders`, {
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
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !tender.archived) ||
      (filter === "archived" && tender.archived);
    const matchesSearch = tender.description
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (
      !session ||
      (session.user.role !== "admin" && session.user.role !== "supply_chain")
    ) {
      setError(
        "Unauthorized access. Only admins or supply chain can manage tenders."
      );
      return;
    }

    const token = session.user.backendToken;
    const formData = new FormData();
    if (form.pdf) formData.append("pdf", form.pdf);
    formData.append("description", form.description);

    try {
      let response;
      if (editingTenderId) {
        response = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/tenders/${editingTenderId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setTenders(
          tenders.map((tender) =>
            tender.id === editingTenderId ? response.data : tender
          )
        );
        alert("Tender updated successfully!");
      } else {
        response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/tenders`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setTenders([...tenders, response.data]);
        alert("Tender added successfully!");
      }
      setForm({ pdf: null, description: "" });
      setIsFormVisible(false);
      setEditingTenderId(null);
      setError("");
    } catch (err) {
      console.error(`Error ${editingTenderId ? "updating" : "adding"} tender:`, err);
      setError(
        err.response?.data?.error ||
          `Failed to ${editingTenderId ? "update" : "add"} tender.`
      );
    }
  };

  const handleEdit = (tender) => {
    setForm({ pdf: null, description: tender.description });
    setEditingTenderId(tender.id);
    setIsFormVisible(true);
  };

  const handleArchive = async (id, currentArchivedStatus) => {
    if (status === "loading") return;
    if (
      !session ||
      (session.user.role !== "admin" && session.user.role !== "supply_chain")
    ) {
      setError("Unauthorized access.");
      return;
    }

    const token = session.user.backendToken;
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/tenders/${id}/archive`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTenders(
        tenders.map((tender) =>
          tender.id === id
            ? { ...tender, archived: response.data.tender.archived }
            : tender
        )
      );
      alert(
        `Tender ${response.data.tender.archived ? "archived" : "unarchived"} successfully!`
      );
      setError("");
    } catch (err) {
      console.error("Error toggling archive:", err);
      setError(err.response?.data?.error || "Failed to toggle archive status.");
    }
  };

  const handleDelete = async (id) => {
    if (status === "loading") return;
    if (
      !session ||
      (session.user.role !== "admin" && session.user.role !== "supply_chain")
    ) {
      setError("Unauthorized access.");
      return;
    }

    const token = session.user.backendToken;
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/tenders/${id}`, {
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

  if (status === "unauthenticated")
    return <div className="p-4 sm:p-6 text-red-500">Please log in to manage tenders.</div>;
  if (
    session?.user.role !== "admin" &&
    session?.user.role !== "supply_chain"
  )
    return <div className="p-4 sm:p-6 text-red-500">Unauthorized</div>;

  return (
    <div className="p-4 sm:p-6 md:p-8 w-full">
      <div className="flex flex-col sm:flex-row items-start mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Manage Tenders
          </h2>
          <button
            onClick={() => {
              setIsFormVisible(true);
              setEditingTenderId(null);
              setForm({ pdf: null, description: "" });
            }}
            className="bg-[#0D3C00] text-white px-4 py-2 rounded-md hover:bg-[#15803d] transition-colors text-sm sm:text-base"
          >
            Add Tender
          </button>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00] text-sm sm:text-base w-full sm:w-32"
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
            className="p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00] text-sm sm:text-base w-full sm:w-48"
          />
        </div>
      </div>

      {error && <p className="text-red-500 mb-4 text-sm sm:text-base">{error}</p>}

      {isFormVisible && (
        <form
          onSubmit={handleAddOrUpdate}
          className="mb-6 bg-white p-4 sm:p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="pdf"
              className="block text-sm font-medium text-gray-700"
            >
              PDF (optional)
            </label>
            <input
              type="file"
              id="pdf"
              accept="application/pdf"
              onChange={(e) => setForm({ ...form, pdf: e.target.files[0] })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00] text-sm sm:text-base"
              rows="4"
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              type="submit"
              className="bg-[#0D3C00] text-white px-4 py-2 rounded-md hover:bg-[#15803d] transition-colors text-sm sm:text-base"
            >
              {editingTenderId ? "Update Tender" : "Add Tender"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors text-sm sm:text-base"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <ul className="space-y-2">
        {filteredTenders.map((tender) => (
          <li
            key={tender.id}
            className="flex flex-col sm:flex-row items-start p-4 bg-white rounded-lg shadow-sm"
          >
            <span className="text-gray-700 text-sm sm:text-base flex-1">
              {tender.description.substring(0, 50)}
              {tender.description.length > 50 ? "..." : ""}{" "}
              {tender.archived ? "(Archived)" : ""}
              {tender.pdf_url && (
                <a
                  href={tender.pdf_url}
                  target="_blank"
                  className="text-blue-500 ml-2 text-sm"
                >
                  View PDF
                </a>
              )}
            </span>
            <div className="mt-4 sm:mt-0 flex flex-wrap space-x-2">
              <button
                onClick={() => handleEdit(tender)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors text-sm"
                aria-label={`Edit tender ${tender.description}`}
              >
                Edit
              </button>
              <button
                onClick={() => handleArchive(tender.id, tender.archived)}
                className={`px-3 py-1 rounded-md text-white transition-colors text-sm ${
                  tender.archived
                    ? "bg-gray-500 cursor-pointer hover:bg-gray-600"
                    : "bg-yellow-500 hover:bg-yellow-600"
                }`}
                aria-label={`${
                  tender.archived ? "Unarchive" : "Archive"
                } tender ${tender.description}`}
              >
                {tender.archived ? "Unarchive" : "Archive"}
              </button>
              <button
                onClick={() => handleDelete(tender.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors text-sm"
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