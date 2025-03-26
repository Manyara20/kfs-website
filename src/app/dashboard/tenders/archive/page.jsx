"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Tenders() {
  const { data: session, status } = useSession();
  const [tenders, setTenders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "authenticated" && session) {
      fetchTenders();
    }
  }, [status, session]);

  const fetchTenders = async () => {
    try {
      const token = session.user.backendToken;
      const response = await axios.get("http://localhost:5000/api/tenders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTenders(response.data);
    } catch (err) {
      console.error("Error fetching tenders:", err);
      setError("Failed to load tenders.");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this tender?")) return;
    try {
      const token = session.user.backendToken;
      await axios.delete(`http://localhost:5000/api/tenders/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTenders(tenders.filter((tender) => tender.id !== id));
      alert("Tender deleted successfully!");
    } catch (err) {
      console.error("Error deleting tender:", err);
      setError(err.response?.data?.error || "Failed to delete tender.");
    }
  };

  const handleArchive = async (id) => {
    if (!confirm("Are you sure you want to archive this tender?")) return;
    try {
      const token = session.user.backendToken;
      await axios.patch(`http://localhost:5000/api/tenders/${id}/archive`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTenders(tenders.filter((tender) => tender.id !== id));
      alert("Tender archived successfully!");
    } catch (err) {
      console.error("Error archiving tender:", err);
      setError(err.response?.data?.error || "Failed to archive tender.");
    }
  };

  if (status === "unauthenticated") return <div>Please log in to view tenders.</div>;
  if (status === "loading") return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Tenders</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <Link href="/dashboard/tenders/add-tender" className="bg-green-500 text-white p-2 rounded mb-4 inline-block">
        Add New Tender
      </Link>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">PDF</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tenders.map((tender) => (
            <tr key={tender.id}>
              <td className="border p-2">{tender.id}</td>
              <td className="border p-2">{tender.description}</td>
              <td className="border p-2">
                <a href={tender.pdf_url} target="_blank" className="text-blue-500">
                  View PDF
                </a>
              </td>
              <td className="border p-2">
                <Link href={`/dashboard/tenders/edit-tender/${tender.id}`} className="text-blue-500 mr-2">
                  Edit
                </Link>
                <button onClick={() => handleDelete(tender.id)} className="text-red-500 mr-2">
                  Delete
                </button>
                <button onClick={() => handleArchive(tender.id)} className="text-yellow-500">
                  Archive
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}