"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Users() {
  const { data: session } = useSession();
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "user" });

  useEffect(() => {
    if (session?.user.role === "admin") {
      axios
        .get("http://localhost:5000/api/users", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => setUsers(res.data));
    }
  }, [session]);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (session.user.role !== "admin") {
      alert("Unauthorized");
      return;
    }
    await axios.post("http://localhost:5000/api/users", form, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setForm({ name: "", email: "", password: "", role: "user" });
  };

  const handleDelete = async (id) => {
    if (session.user.role !== "admin") {
      alert("Unauthorized");
      return;
    }
    await axios.delete(`http://localhost:5000/api/users/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setUsers(users.filter((user) => user.id !== id));
  };

  if (session?.user.role !== "admin") return <div>Unauthorized</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Manage Users</h2>
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