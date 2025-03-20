"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Mailing() {
  const { data: session } = useSession();
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (session?.user.role === "admin") {
      axios
        .get("http://localhost:5000/api/mailing", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => setEmails(res.data));
    }
  }, [session]);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (session.user.role !== "admin") {
      alert("Unauthorized");
      return;
    }
    await axios.post(
      "http://localhost:5000/api/mailing",
      { email },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    setEmail("");
  };

  const handleDelete = async (id) => {
    if (session.user.role !== "admin") {
      alert("Unauthorized");
      return;
    }
    await axios.delete(`http://localhost:5000/api/mailing/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setEmails(emails.filter((e) => e.id !== id));
  };

  if (session?.user.role !== "admin") return <div>Unauthorized</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Manage Mailing List</h2>
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