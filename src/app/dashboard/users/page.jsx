"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Users() {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "user" });
  const [error, setError] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);

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
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
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
        err.response?.data?.error ||
          `Failed to fetch users (Status: ${err.response?.status || "unknown"})`
      );
    }
  };

  const handleAddOrUpdate = async (e) => {
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
      let response;
      if (editingUserId) {
        // Update user
        response = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users/${editingUserId}`,
          form,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setUsers(
          users.map((user) =>
            user.id === editingUserId ? { ...user, ...response.data } : user
          )
        );
        alert("User updated successfully!");
      } else {
        // Add user
        response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, form, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setUsers([...users, response.data]);
        alert("User added successfully!");
      }
      setForm({ name: "", email: "", password: "", role: "user" });
      setIsFormVisible(false);
      setEditingUserId(null);
      setError("");
    } catch (err) {
      const errorDetails = {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      };
      console.error(`Error ${editingUserId ? "updating" : "adding"} user:`, errorDetails);
      setError(
        err.response?.data?.error ||
          `Failed to ${editingUserId ? "update" : "add"} user (Status: ${
            err.response?.status || "unknown"
          })`
      );
    }
  };

  const handleEdit = (user) => {
    setForm({
      name: user.name,
      email: user.email,
      password: "", // Password is empty for security
      role: user.role,
    });
    setEditingUserId(user.id);
    setIsFormVisible(true);
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
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
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
        err.response?.data?.error ||
          `Failed to delete user (Status: ${err.response?.status || "unknown"})`
      );
    }
  };

  const handleCancel = () => {
    setForm({ name: "", email: "", password: "", role: "user" });
    setIsFormVisible(false);
    setEditingUserId(null);
    setError("");
  };

  if (status === "unauthenticated")
    return <div className="p-6 text-red-500">Please log in to manage users.</div>;
  if (session?.user.role !== "admin") return <div className="p-6 text-red-500">Unauthorized</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Manage Users</h2>
        <button
          onClick={() => {
            setIsFormVisible(true);
            setEditingUserId(null);
            setForm({ name: "", email: "", password: "", role: "user" });
          }}
          className="bg-[#0D3C00] text-white px-4 py-2 rounded-md hover:bg-[#15803d] transition-colors"
        >
          Add User
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {isFormVisible && (
        <form onSubmit={handleAddOrUpdate} className="mb-6 bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password {editingUserId ? "(Leave blank to keep unchanged)" : ""}
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00]"
              required={!editingUserId}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              id="role"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#0D3C00] focus:border-[#0D3C00]"
            >
              <option value="admin">Admin</option>
              <option value="supply_chain">Supply Chain</option>
              <option value="communication_officer">Communication Officer</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-[#0D3C00] text-white px-4 py-2 rounded-md hover:bg-[#15803d] transition-colors"
            >
              {editingUserId ? "Update User" : "Add User"}
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
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center p-4 bg-white rounded-lg shadow-sm"
          >
            <span className="text-gray-700">
              {user.name} ({user.email}) - {user.role}
            </span>
            <div className="ml-auto flex space-x-2">
              <button
                onClick={() => handleEdit(user)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
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