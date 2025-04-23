"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function Documents() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const [documents, setDocuments] = useState([]);
  const [form, setForm] = useState({ pdf: null, description: "", category: searchParams.get("category") || "public" });
  const [error, setError] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingDocumentId, setEditingDocumentId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (status === "authenticated" && form.category) fetchDocuments();
  }, [session, status, form.category]);

  const fetchDocuments = async () => {
    if (!session) return;
    const token = session.user.backendToken;
    const category = form.category || "public";
    console.log("Fetching documents for category:", category, "Token:", token);
    try {
      const response = await axios.get(`http://localhost:5000/api/documents/${category}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Documents fetched:", response.data);
      setDocuments(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching documents:", {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      });
      setError(err.response?.data?.error || "Failed to fetch documents.");
    }
  };

  const filteredDocuments = documents.filter((doc) => {
    const matchesFilter = filter === "all" || (filter === "active" && !doc.archived) || (filter === "archived" && doc.archived);
    const matchesSearch = doc.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      setError("Unauthorized access. Only admins can manage documents.");
      return;
    }

    const token = session.user.backendToken;
    const formData = new FormData();
    if (form.pdf) formData.append("pdf", form.pdf);
    formData.append("description", form.description);

    try {
      let response;
      if (editingDocumentId) {
        response = await axios.put(`http://localhost:5000/api/documents/${editingDocumentId}`, formData, {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
        });
        setDocuments(documents.map((doc) => (doc.id === editingDocumentId ? response.data : doc)));
        alert("Document updated successfully!");
      } else {
        response = await axios.post(`http://localhost:5000/api/documents/${form.category}`, formData, {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
        });
        setDocuments([...documents, response.data]);
        alert("Document added successfully!");
      }
      setForm({ pdf: null, description: "", category: form.category });
      setIsFormVisible(false);
      setEditingDocumentId(null);
      setError("");
    } catch (err) {
      console.error(`Error ${editingDocumentId ? "updating" : "adding"} document:`, err);
      setError(err.response?.data?.error || `Failed to ${editingDocumentId ? "update" : "add"} document.`);
    }
  };

  const handleEdit = (doc) => {
    setForm({ pdf: null, description: doc.description, category: doc.category });
    setEditingDocumentId(doc.id);
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
      const response = await axios.patch(`http://localhost:5000/api/documents/${id}/archive`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDocuments(documents.map((doc) => (doc.id === id ? { ...doc, archived: true } : doc)));
      alert("Document archived successfully!");
      setError("");
    } catch (err) {
      console.error("Error archiving document:", err);
      setError(err.response?.data?.error || "Failed to archive document.");
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
      await axios.delete(`http://localhost:5000/api/documents/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDocuments(documents.filter((doc) => doc.id !== id));
      alert("Document deleted successfully!");
      setError("");
    } catch (err) {
      console.error("Error deleting document:", err);
      setError(err.response?.data?.error || "Failed to delete document.");
    }
  };

  const handleCancel = () => {
    setForm({ pdf: null, description: "", category: form.category });
    setIsFormVisible(false);
    setEditingDocumentId(null);
    setError("");
  };

  if (status === "unauthenticated") return <div className="p-6 text-red-500">Please log in to manage documents.</div>;
  if (session?.user.role !== "admin") return <div className="p-6 text-red-500">Unauthorized</div>;

  return (
    <div className="p-6 max-w-4xl w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-gray-800">Manage Documents</h2>
          <button
            onClick={() => {
              setIsFormVisible(true);
              setEditingDocumentId(null);
              setForm({ pdf: null, description: "", category: form.category });
            }}
            className="bg-[#0D3C00] text-white px-4 py-2 rounded-md hover:bg-[#15803d] transition-colors"
          >
            Add Document
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
            placeholder="Search documents..."
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
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00]"
              disabled={editingDocumentId !== null}
            >
              <option value="public">Public</option>
              <option value="legal">Legal</option>
              <option value="policy">Policy</option>
              <option value="iso">ISO</option>
            </select>
          </div>
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
              {editingDocumentId ? "Update Document" : "Add Document"}
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
        {filteredDocuments.map((doc) => (
          <li key={doc.id} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
            <span className="text-gray-700">
              {doc.description.substring(0, 50)}
              {doc.description.length > 50 ? "..." : ""} ({doc.category.toUpperCase()}) {doc.archived ? "(Archived)" : ""}
              {doc.pdf_url && (
                <a href={doc.pdf_url} target="_blank" className="text-blue-500 ml-2">
                  View PDF
                </a>
              )}
            </span>
            <div className="ml-auto flex space-x-2">
              <button
                onClick={() => handleEdit(doc)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
                aria-label={`Edit document ${doc.description}`}
              >
                Edit
              </button>
              <button
                onClick={() => handleArchive(doc.id)}
                className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition-colors"
                aria-label={`Archive document ${doc.description}`}
                disabled={doc.archived}
              >
                Archive
              </button>
              <button
                onClick={() => handleDelete(doc.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                aria-label={`Delete document ${doc.description}`}
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