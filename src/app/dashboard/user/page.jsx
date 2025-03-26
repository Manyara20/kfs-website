"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Users() {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "user" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "authenticated" && session?.user.role === "admin") {
      fetchUsers();
    }
  }, [session, status]);

  const fetchUsers = async () => {
    if (!session) return;
    const token = session.user.backendToken;
    if (!token) {
      setError("No backend authentication token found.");
      return;
    }
    try {
      const response = await axios.get("http://localhost:5000/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
      setError("");
    } catch (err) {
      const errorDetails = {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      };
      console.error("Error fetching users:", errorDetails);
      setError(
        err.response?.data?.error || `Failed to fetch users (Status: ${err.response?.status || "unknown"})`
      );
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      setError("Unauthorized access. Only admins can manage users.");
      return;
    }

    const token = session.user.backendToken;
    if (!token) {
      setError("No backend authentication token found. Please log in again.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("User added:", response.data);
      setUsers([...users, response.data]);
      setForm({ name: "", email: "", password: "", role: "user" });
      setError("");
      alert("User added successfully!");
    } catch (err) {
      const errorDetails = {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      };
      console.error("Error adding user:", errorDetails);
      setError(
        err.response?.data?.error || `Failed to add user (Status: ${err.response?.status || "unknown"})`
      );
    }
  };

  const handleDelete = async (id) => {
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      setError("Unauthorized access. Only admins can delete users.");
      return;
    }

    const token = session.user.backendToken;
    if (!token) {
      setError("No backend authentication token found. Please log in again.");
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/users/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("User deleted:", response.data);
      setUsers(users.filter((user) => user.id !== id));
      setError("");
      alert("User deleted successfully!");
    } catch (err) {
      const errorDetails = {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      };
      console.error("Error deleting user:", errorDetails);
      setError(
        err.response?.data?.error || `Failed to delete user (Status: ${err.response?.status || "unknown"})`
      );
    }
  };

  if (status === "unauthenticated") return <div>Please log in to manage users.</div>;
  if (session?.user.role !== "admin") return <div>Unauthorized</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Manage Users</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleAdd} className="mb-6">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="block w-full p-2 mb-4 border"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="block w-full p-2 mb-4 border"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="block w-full p-2 mb-4 border"
        />
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="block w-full p-2 mb-4 border"
        >
          <option value="admin">Admin</option>
          <option value="supply_chain">Supply Chain</option>
          <option value="communication_officer">Communication Officer</option>
          <option value="user">User</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add User
        </button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex justify-between items-center mb-2">
            <span>{user.name} ({user.email}) - {user.role}</span>
            <button
              onClick={() => handleDelete(user.id)}
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