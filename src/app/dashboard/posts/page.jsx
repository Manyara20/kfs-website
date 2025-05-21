"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Posts() {
  const { data: session, status } = useSession();
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ image: null, title: "", content: "" });
  const [error, setError] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (status === "authenticated") fetchPosts();
  }, [session, status]);

  const fetchPosts = async () => {
    if (!session) return;
    const token = session.user.backendToken;
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError(err.response?.data?.error || "Failed to fetch posts.");
    }
  };

  const filteredPosts = posts.filter((post) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !post.archived) ||
      (filter === "archived" && post.archived);
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (
      !session ||
      (session.user.role !== "admin" &&
        session.user.role !== "communication_officer")
    ) {
      setError(
        "Unauthorized access. Only admins or communication officers can manage posts."
      );
      return;
    }

    const token = session.user.backendToken;
    if (!token) {
      setError("No backend authentication token found.");
      return;
    }

    const formData = new FormData();
    if (form.image) formData.append("image", form.image);
    formData.append("title", form.title);
    formData.append("content", form.content);

    try {
      let response;
      if (editingPostId) {
        response = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/posts/${editingPostId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setPosts(
          posts.map((post) => (post.id === editingPostId ? response.data : post))
        );
        alert("Post updated successfully!");
      } else {
        response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/posts`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setPosts([...posts, response.data]);
        alert("Post added successfully!");
      }
      setForm({ image: null, title: "", content: "" });
      setIsFormVisible(false);
      setEditingPostId(null);
      setError("");
    } catch (err) {
      console.error(`Error ${editingPostId ? "updating" : "adding"} post:`, err);
      setError(
        err.response?.data?.error ||
          `Failed to ${editingPostId ? "update" : "add"} post.`
      );
    }
  };

  const handleEdit = (post) => {
    setForm({ image: null, title: post.title, content: post.content });
    setEditingPostId(post.id);
    setIsFormVisible(true);
  };

  const handleArchive = async (id, currentArchivedStatus) => {
    if (status === "loading") return;
    if (
      !session ||
      (session.user.role !== "admin" &&
        session.user.role !== "communication_officer")
    ) {
      setError("Unauthorized access.");
      return;
    }

    const token = session.user.backendToken;
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/posts/${id}/archive`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setPosts(
        posts.map((post) =>
          post.id === id
            ? { ...post, archived: response.data.post.archived }
            : post
        )
      );
      alert(
        `Post ${response.data.post.archived ? "archived" : "unarchived"} successfully!`
      );
      setError("");
    } catch (err) {
      console.error("Error toggling archive:", err);
      setError(err.response?.data?.error || "Failed to toggle archive status.");
    }
  };

  const handleDelete = async (id) => {
    if (status === "loading") return;
    if (
      !session ||
      (session.user.role !== "admin" &&
        session.user.role !== "communication_officer")
    ) {
      setError("Unauthorized access.");
      return;
    }

    const token = session.user.backendToken;
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(posts.filter((post) => post.id !== id));
      alert("Post deleted successfully!");
      setError("");
    } catch (err) {
      console.error("Error deleting post:", err);
      setError(err.response?.data?.error || "Failed to delete post.");
    }
  };

  const handleCancel = () => {
    setForm({ image: null, title: "", content: "" });
    setIsFormVisible(false);
    setEditingPostId(null);
    setError("");
  };

  if (status === "unauthenticated")
    return <div className="p-4 sm:p-6 text-red-500">Please log in to manage posts.</div>;
  if (
    session?.user.role !== "admin" &&
    session?.user.role !== "communication_officer"
  )
    return <div className="p-4 sm:p-6 text-red-500">Unauthorized</div>;

  return (
    <div className="p-4 sm:p-6 md:p-8 w-full">
      <div className="flex flex-col sm:flex-row items-start mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Manage Posts
          </h2>
          <button
            onClick={() => {
              setIsFormVisible(true);
              setEditingPostId(null);
              setForm({ image: null, title: "", content: "" });
            }}
            className="bg-[#0D3C00] text-white px-4 py-2   hover:bg-[#15803d] transition-colors text-sm sm:text-base"
          >
            Add Post
          </button>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border border-gray-300   focus:ring-[#0D3C00] focus:border-[#0D3C00] text-sm sm:text-base w-full sm:w-32"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="archived">Archived</option>
          </select>
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border border-gray-300   focus:ring-[#0D3C00] focus:border-[#0D3C00] text-sm sm:text-base w-full sm:w-48"
          />
        </div>
      </div>

      {error && <p className="text-red-500 mb-4 text-sm sm:text-base">{error}</p>}

      {isFormVisible && (
        <form
          onSubmit={handleAddOrUpdate}
          className="mb-6 bg-white p-4 sm:p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image (optional)
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
              className="mt-1 block w-full p-2 border border-gray-300   text-sm"
            />
          </div>
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
              className="mt-1 block w-full p-2 border border-gray-300   focus:ring-[#0D3C00] focus:border-[#0D3C00] text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content"
              placeholder="Enter content"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300   focus:ring-[#0D3C00] focus:border-[#0D3C00] text-sm sm:text-base"
              rows="4"
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              type="submit"
              className="bg-[#0D3C00] text-white px-4 py-2   hover:bg-[#15803d] transition-colors text-sm sm:text-base"
            >
              {editingPostId ? "Update Post" : "Add Post"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2   hover:bg-gray-600 transition-colors text-sm sm:text-base"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <ul className="space-y-2">
        {filteredPosts.map((post) => (
          <li
            key={post.id}
            className="flex flex-col sm:flex-row items-start p-4 bg-white rounded-lg shadow-sm"
          >
            <span className="text-gray-700 text-sm sm:text-base flex-1">
              {post.title} - {post.content.substring(0, 50)}
              {post.content.length > 50 ? "..." : ""}{" "}
              {post.archived ? "(Archived)" : ""}
            </span>
            <div className="mt-4 sm:mt-0 flex flex-wrap space-x-2">
              <button
                onClick={() => handleEdit(post)}
                className="bg-blue-500 text-white px-3 py-1   hover:bg-blue-600 transition-colors text-sm"
                aria-label={`Edit post ${post.title}`}
              >
                Edit
              </button>
              <button
                onClick={() => handleArchive(post.id, post.archived)}
                className={`px-3 py-1   text-white transition-colors text-sm ${
                  post.archived
                    ? "bg-gray-500 cursor-pointer hover:bg-gray-600"
                    : "bg-yellow-500 hover:bg-yellow-600"
                }`}
                aria-label={`${
                  post.archived ? "Unarchive" : "Archive"
                } post ${post.title}`}
              >
                {post.archived ? "Unarchive" : "Archive"}
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-500 text-white px-3 py-1   hover:bg-red-600 transition-colors text-sm"
                aria-label={`Delete post ${post.title}`}
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