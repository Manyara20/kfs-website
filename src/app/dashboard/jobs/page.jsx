"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Jobs() {
  const { data: session, status } = useSession();
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", duties: "", requirements: "" });
  const [error, setError] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingJobId, setEditingJobId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (status === "authenticated") fetchJobs();
  }, [session, status]);

  const fetchJobs = async () => {
    if (!session) return;
    const token = session.user.backendToken;
    try {
      const response = await axios.get("http://localhost:5000/api/jobs", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError(err.response?.data?.error || "Failed to fetch jobs.");
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesFilter = filter === "all" || (filter === "active" && !job.archived) || (filter === "archived" && job.archived);
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) || job.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      setError("Unauthorized access. Only admins can manage jobs.");
      return;
    }

    const token = session.user.backendToken;
    try {
      let response;
      if (editingJobId) {
        response = await axios.put(`http://localhost:5000/api/jobs/${editingJobId}`, form, {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        });
        setJobs(jobs.map((job) => (job.id === editingJobId ? response.data : job)));
        alert("Job updated successfully!");
      } else {
        response = await axios.post("http://localhost:5000/api/jobs", form, {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        });
        setJobs([...jobs, response.data]);
        alert("Job added successfully!");
      }
      setForm({ title: "", description: "", duties: "", requirements: "" });
      setIsFormVisible(false);
      setEditingJobId(null);
      setError("");
    } catch (err) {
      console.error(`Error ${editingJobId ? "updating" : "adding"} job:`, err);
      setError(err.response?.data?.error || `Failed to ${editingJobId ? "update" : "add"} job.`);
    }
  };

  const handleEdit = (job) => {
    setForm({ title: job.title, description: job.description, duties: job.duties, requirements: job.requirements });
    setEditingJobId(job.id);
    setIsFormVisible(true);
  };

  const handleArchive = async (id) => {
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      setError("Unauthorized access.");
      return;
    }

    const token = session.user.backendToken;
    try {
      const response = await axios.patch(`http://localhost:5000/api/jobs/${id}/archive`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(jobs.map((job) => (job.id === id ? { ...job, archived: true } : job)));
      alert("Job archived successfully!");
      setError("");
    } catch (err) {
      console.error("Error archiving job:", err);
      setError(err.response?.data?.error || "Failed to archive job.");
    }
  };

  const handleDelete = async (id) => {
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      setError("Unauthorized access.");
      return;
    }

    const token = session.user.backendToken;
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(jobs.filter((job) => job.id !== id));
      alert("Job deleted successfully!");
      setError("");
    } catch (err) {
      console.error("Error deleting job:", err);
      setError(err.response?.data?.error || "Failed to delete job.");
    }
  };

  const handleCancel = () => {
    setForm({ title: "", description: "", duties: "", requirements: "" });
    setIsFormVisible(false);
    setEditingJobId(null);
    setError("");
  };

  if (status === "unauthenticated") return <div className="p-6 text-red-500">Please log in to manage jobs.</div>;
  if (session?.user.role !== "admin") return <div className="p-6 text-red-500">Unauthorized</div>;

  return (
    <div className="p-6 max-w-4xl w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-gray-800">Manage Jobs</h2>
          <button
            onClick={() => {
              setIsFormVisible(true);
              setEditingJobId(null);
              setForm({ title: "", description: "", duties: "", requirements: "" });
            }}
            className="bg-[#0D3C00] text-white px-4 py-2 rounded-md hover:bg-[#15803d] transition-colors"
          >
            Add Job
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
            placeholder="Search jobs..."
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
          <div className="mb-4">
            <label htmlFor="duties" className="block text-sm font-medium text-gray-700">
              Duties
            </label>
            <textarea
              id="duties"
              placeholder="Enter duties"
              value={form.duties}
              onChange={(e) => setForm({ ...form, duties: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00]"
              rows="4"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
              Requirements
            </label>
            <textarea
              id="requirements"
              placeholder="Enter requirements"
              value={form.requirements}
              onChange={(e) => setForm({ ...form, requirements: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00]"
              rows="4"
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-[#0D3C00] text-white px-4 py-2 rounded-md hover:bg-[#15803d] transition-colors"
            >
              {editingJobId ? "Update Job" : "Add Job"}
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
        {filteredJobs.map((job) => (
          <li key={job.id} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
            <span className="text-gray-700">
              {job.title} - {job.description.substring(0, 50)}
              {job.description.length > 50 ? "..." : ""} {job.archived ? "(Archived)" : ""}
            </span>
            <div className="ml-auto flex space-x-2">
              <button
                onClick={() => handleEdit(job)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
                aria-label={`Edit job ${job.title}`}
              >
                Edit
              </button>
              <button
                onClick={() => handleArchive(job.id)}
                className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition-colors"
                aria-label={`Archive job ${job.title}`}
                disabled={job.archived}
              >
                Archive
              </button>
              <button
                onClick={() => handleDelete(job.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                aria-label={`Delete job ${job.title}`}
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