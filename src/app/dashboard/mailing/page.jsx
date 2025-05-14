"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Mailing() {
  const { data: session, status } = useSession();
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "authenticated" && session?.user.role === "admin") {
      fetchEmails();
    }
  }, [session, status]);

  const fetchEmails = async () => {
    if (!session) return;
    const token = session.user.backendToken;
    if (!token) {
      setError("No backend authentication token found.");
      return;
    }
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/mailing`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmails(response.data);
      setError("");
    } catch (err) {
      const errorDetails = {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      };
      console.error("Error fetching emails:", errorDetails);
      setError(
        err.response?.data?.error || `Failed to fetch emails (Status: ${err.response?.status || "unknown"})`
      );
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      setError("Unauthorized access. Only admins can manage mailing list.");
      return;
    }

    const token = session.user.backendToken;
    if (!token) {
      setError("No backend authentication token found. Please log in again.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/mailing`,
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Email added:", response.data);
      setEmails([...emails, response.data]);
      setEmail("");
      setError("");
      alert("Email added successfully!");
    } catch (err) {
      const errorDetails = {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      };
      console.error("Error adding email:", errorDetails);
      setError(
        err.response?.data?.error || `Failed to add email (Status: ${err.response?.status || "unknown"})`
      );
    }
  };

  const handleDelete = async (id) => {
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      setError("Unauthorized access. Only admins can delete emails.");
      return;
    }

    const token = session.user.backendToken;
    if (!token) {
      setError("No backend authentication token found. Please log in again.");
      return;
    }

    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/mailing/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Email deleted:", response.data);
      setEmails(emails.filter((e) => e.id !== id));
      setError("");
      alert("Email deleted successfully!");
    } catch (err) {
      const errorDetails = {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      };
      console.error("Error deleting email:", errorDetails);
      setError(
        err.response?.data?.error || `Failed to delete email (Status: ${err.response?.status || "unknown"})`
      );
    }
  };

  if (status === "unauthenticated") return <div>Please log in to manage mailing list.</div>;
  if (session?.user.role !== "admin") return <div>Unauthorized</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Manage Mailing List</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleAdd} className="mb-6">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2 mb-4 border"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Email
        </button>
      </form>
      <ul>
        {emails.map((e) => (
          <li key={e.id} className="flex justify-between items-center mb-2">
            <span>{e.email}</span>
            <button
              onClick={() => handleDelete(e.id)}
              className="bg-red-500 text-white p-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}