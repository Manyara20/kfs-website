"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Notices() {
  const { data: session, status } = useSession();
  const [notices, setNotices] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", file: null });
  const [error, setError] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingNoticeId, setEditingNoticeId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (status === "authenticated" && (session?.user.role === "admin" || session?.user.role === "communication_officer")) {
      fetchNotices();
    }
  }, [session, status]);

  const fetchNotices = async () => {
    if (!session) return;
    const token = session.user.backendToken;
    if (!token) {
      setError("No backend authentication token found.");
      return;
    }
    try {
      const response = await axios.get("http://localhost:5000/api/notices", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotices(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching notices:", err);
      setError(err.response?.data?.error || "Failed to fetch notices.");
    }
  };

  const filteredNotices = notices.filter((notice) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !notice.archived) ||
      (filter === "archived" && notice.archived);
    const matchesSearch =
      notice.title.toLowerCase().includes(search.toLowerCase()) ||
      notice.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!session || (session.user.role !== "admin" && session.user.role !== "communication_officer")) {
      setError("Unauthorized access. Only admins and communication officers can manage notices.");
      return;
    }

    const token = session.user.backendToken;
    if (!token) {
      setError("No backend authentication token found. Please log in again.");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    if (form.file) formData.append("file", form.file);

    try {
      let response;
      if (editingNoticeId) {
        response = await axios.put(
          `http://localhost:5000/api/notices/${editingNoticeId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setNotices(
          notices.map((notice) =>
            notice.id === editingNoticeId ? response.data : notice
          )
        );
        alert("Notice updated successfully!");
      } else {
        response = await axios.post("http://localhost:5000/api/notices", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        setNotices([...notices, response.data]);
        alert("Notice added successfully!");
      }
      setForm({ title: "", description: "", file: null });
      setIsFormVisible(false);
      setEditingNoticeId(null);
      setError("");
    } catch (err) {
      console.error(`Error ${editingNoticeId ? "updating" : "adding"} notice:`, err);
      setError(
        err.response?.data?.error ||
          `Failed to ${editingNoticeId ? "update" : "add"} notice.`
      );
    }
  };

  const handleEdit = (notice) => {
    setForm({
      title: notice.title,
      description: notice.description,
      file: null,
    });
    setEditingNoticeId(notice.id);
    setIsFormVisible(true);
  };

  const handleArchive = async (id, currentArchivedStatus) => {
    if (status === "loading") return;
    if (!session || (session.user.role !== "admin" && session.user.role !== "communication_officer")) {
      setError("Unauthorized access.");
      return;
    }

    const token = session.user.backendToken;
    if (!token) {
      setError("No backend authentication token found. Please log in again.");
      return;
    }

    try {
      const response = await axios.patch(
        `http://localhost:5000/api/notices/${id}/archive`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setNotices(
        notices.map((notice) =>
          notice.id === id ? { ...notice, archived: response.data.event.archived } : notice
        )
      );
      alert(`Notice ${response.data.event.archived ? "archived" : "unarchived"} successfully!`);
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
    if (!token) {
      setError("No backend authentication token found. Please log in again.");
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/api/notices/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotices(notices.filter((notice) => notice.id !== id));
      alert("Notice deleted successfully!");
      setError("");
    } catch (err) {
      console.error("Error deleting notice:", err);
      setError(err.response?.data?.error || "Failed to delete notice.");
    }
  };

  const handleCancel = () => {
    setForm({ title: "", description: "", file: null });
    setIsFormVisible(false);
    setEditingNoticeId(null);
    setError("");
  };

  if (status === "unauthenticated")
    return <div className="p-6 text-red-500">Please log in to manage notices.</div>;
  if (session?.user.role !== "admin" && session?.user.role !== "communication_officer")
    return <div className="p-6 text-red-500">Unauthorized</div>;

  return (
    <div className="p-6 max-w-4xl w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-gray-800">Manage Notices</h2>
          <button
            onClick={() => {
              setIsFormVisible(true);
              setEditingNoticeId(null);
              setForm({ title: "", description: "", file: null });
            }}
            className="bg-[#0D3C00] text-white px-4 py-2 rounded-md hover:bg-[#15803d] transition-colors"
          >
            Add Notice
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
            placeholder="Search notices..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00] w-full sm:w-48"
          />
        </div>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {isFormVisible && (
        <form
          onSubmit={handleAddOrUpdate}
          className="mb-6 bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00]"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700"
            >
              File (optional)
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-[#0D3C00] text-white px-4 py-2 rounded-md hover:bg-[#15803d] transition-colors"
            >
              {editingNoticeId ? "Update Notice" : "Add Notice"}
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
        {filteredNotices.map((notice) => (
          <li
            key={notice.id}
            className="flex items-center p-4 bg-white rounded-lg shadow-sm"
          >
            <span className="text-gray-700">
              {notice.title} - {notice.description.substring(0, 50)}
              {notice.description.length > 50 ? "..." : ""}{" "}
              {notice.archived ? "(Archived)" : ""}
              {notice.file_url && (
                <a href={notice.file_url} target="_blank" className="text-blue-500 ml-2">
                  View File
                </a>
              )}
            </span>
            <div className="ml-auto flex space-x-2">
              <button
                onClick={() => handleEdit(notice)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
                aria-label={`Edit notice ${notice.title}`}
              >
                Edit
              </button>
              <button
                onClick={() => handleArchive(notice.id, notice.archived)}
                className={`px-3 py-1 rounded-md text-white transition-colors ${
                  notice.archived
                    ? "bg-gray-500 cursor-pointer"
                    : "bg-yellow-500 hover:bg-yellow-600"
                }`}
                aria-label={`${notice.archived ? "Unarchive" : "Archive"} notice ${notice.title}`}
              >
                {notice.archived ? "Unarchive" : "Archive"}
              </button>
              <button
                onClick={() => handleDelete(notice.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                aria-label={`Delete notice ${notice.title}`}
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