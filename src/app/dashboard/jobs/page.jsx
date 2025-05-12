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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      console.log("Session loaded:", { email: session.user.email, role: session.user.role });
      fetchJobs();
    }
  }, [session, status]);

  const fetchJobs = async () => {
    if (!session || !session.user.backendToken) {
      console.error("No session or backend token available");
      setError("Authentication required. Please log in again.");
      return;
    }

    setIsLoading(true);
    const token = session.user.backendToken;
    console.log("Fetching jobs with token:", token.slice(0, 10) + "...");

    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Jobs fetched successfully:", response.data);
      setJobs(response.data || []);
      setError("");
    } catch (err) {
      console.error("Error fetching jobs:", {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      });
      setError(
        err.response?.data?.error ||
          `Failed to fetch jobs: ${err.message}. Check console for details.`
      );
      setJobs([]);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !job.archived) ||
      (filter === "archived" && job.archived);
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.description.toLowerCase().includes(search.toLowerCase());
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
        response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${editingJobId}`, form, {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        });
        setJobs(jobs.map((job) => (job.id === editingJobId ? response.data : job)));
        alert("Job updated successfully!");
      } else {
        response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`, form, {
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
      console.error(`Error ${editingJobId ? "updating" : "adding"} job:`, {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      });
      setError(err.response?.data?.error || `Failed to ${editingJobId ? "update" : "add"} job.`);
    }
  };

  const handleEdit = (job) => {
    setForm({
      title: job.title,
      description: job.description,
      duties: job.duties || "",
      requirements: job.requirements || "",
    });
    setEditingJobId(job.id);
    setIsFormVisible(true);
  };

  const handleArchive = async (id, currentArchivedStatus) => {
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      setError("Unauthorized access.");
      return;
    }

    const token = session.user.backendToken;
    console.log("Toggling archive for job ID:", id, "Current archived status:", currentArchivedStatus);
    try {
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${id}/archive`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Archive toggle response:", response.data);
      setJobs(jobs.map((job) =>
        job.id === id ? { ...job, archived: response.data.job.archived } : job
      ));
      alert(`Job ${response.data.job.archived ? "archived" : "unarchived"} successfully!`);
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
    if (!session || session.user.role !== "admin") {
      setError("Unauthorized access.");
      return;
    }

    const token = session.user.backendToken;
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(jobs.filter((job) => job.id !== id));
      alert("Job deleted successfully!");
      setError("");
    } catch (err) {
      console.error("Error deleting job:", {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      });
      setError(err.response?.data?.error || "Failed to delete job.");
    }
  };

  const handleCancel = () => {
    setForm({ title: "", description: "", duties: "", requirements: "" });
    setIsFormVisible(false);
    setEditingJobId(null);
    setError("");
  };

  if (status === "unauthenticated")
    return <div className="p-4 sm:p-6 text-red-500">Please log in to manage jobs.</div>;
  if (session?.user.role !== "admin")
    return <div className="p-4 sm:p-6 text-red-500">Unauthorized</div>;

  return (
    <div className="p-4 sm:p-6 md:p-8 w-full">
      <div className="flex flex-col sm:flex-row items-start mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Manage Jobs
          </h2>
          <button
            onClick={() => {
              setIsFormVisible(true);
              setEditingJobId(null);
              setForm({ title: "", description: "", duties: "", requirements: "" });
            }}
            className="bg-[#0D3C00] text-white px-4 py-2 rounded-md hover:bg-[#15803d] transition-colors text-sm sm:text-base"
          >
            Add Job
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
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00] text-sm sm:text-base w-full sm:w-48"
          />
        </div>
      </div>

      {error && <p className="text-red-500 mb-4 text-sm sm:text-base">{error}</p>}

      {isLoading && <p className="text-gray-600 mb-4 text-sm sm:text-base">Loading jobs...</p>}

      {!isLoading && filteredJobs.length === 0 && !error && (
        <p className="text-gray-600 mb-4 text-sm sm:text-base">No jobs found.</p>
      )}

      {isFormVisible && (
        <form
          onSubmit={handleAddOrUpdate}
          className="mb-6 bg-white p-4 sm:p-6 rounded-lg shadow-md"
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00] text-sm sm:text-base"
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00] text-sm sm:text-base"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="duties"
              className="block text-sm font-medium text-gray-700"
            >
              Duties
            </label>
            <textarea
              id="duties"
              placeholder="Enter duties"
              value={form.duties}
              onChange={(e) => setForm({ ...form, duties: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00] text-sm sm:text-base"
              rows="4"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="requirements"
              className="block text-sm font-medium text-gray-700"
            >
              Requirements
            </label>
            <textarea
              id="requirements"
              placeholder="Enter requirements"
              value={form.requirements}
              onChange={(e) => setForm({ ...form, requirements: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00] text-sm sm:text-base"
              rows="4"
            />
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              type="submit"
              className="bg-[#0D3C00] text-white px-4 py-2 rounded-md hover:bg-[#15803d] transition-colors text-sm sm:text-base"
            >
              {editingJobId ? "Update Job" : "Add Job"}
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

      {!isLoading && filteredJobs.length > 0 && (
        <ul className="space-y-2">
          {filteredJobs.map((job) => (
            <li
              key={job.id}
              className="flex flex-col sm:flex-row items-start p-4 bg-white rounded-lg shadow-sm"
            >
              <span className="text-gray-700 text-sm sm:text-base flex-1">
                {job.title} - {job.description.substring(0, 50)}
                {job.description.length > 50 ? "..." : ""} {job.archived ? "(Archived)" : ""}
              </span>
              <div className="mt-4 sm:mt-0 flex flex-wrap space-x-2">
                <button
                  onClick={() => handleEdit(job)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors text-sm"
                  aria-label={`Edit job ${job.title}`}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleArchive(job.id, job.archived)}
                  className={`px-3 py-1 rounded-md text-white transition-colors text-sm ${
                    job.archived
                      ? "bg-gray-500 cursor-pointer hover:bg-gray-600"
                      : "bg-yellow-500 hover:bg-yellow-600"
                  }`}
                  aria-label={`${job.archived ? "Unarchive" : "Archive"} job ${job.title}`}
                >
                  {job.archived ? "Unarchive" : "Archive"}
                </button>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors text-sm"
                  aria-label={`Delete job ${job.title}`}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}