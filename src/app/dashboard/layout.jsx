"use client";
import { useState, useEffect } from "react";
import { useSession, signOut, SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaUser, FaChevronDown, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function DashboardLayout({ children }) {
  return (
    <SessionProvider>
      <DashboardContent>{children}</DashboardContent>
    </SessionProvider>
  );
}

function DashboardContent({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState({
    posts: false,
    jobs: false,
    tenders: false,
    documents: false,
    events: false,
    notices: false,
    public: false,
    legal: false,
    policy: false,
    iso: false,
  });

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleSignOut = () => signOut({ callbackUrl: "/login" });

  const toggleDropdown = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (status === "loading") return <div className="flex items-center justify-center h-screen text-white bg-gray-900">Loading...</div>;

  return (
    <div className="flex min-h-screen">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-20 bg-[#0D3C00] text-white shadow-md">
        <div className="flex items-center h-16 px-4">
          <Image src="/images/t_logo.png" alt="Logo" width={40} height={40} />
          <h1 className="flex-1 ml-2 text-xl font-semibold">Dashboard</h1>
          {session && (
            <>
              <div className="flex items-center mr-4">
                <span
                  className={`w-2.5 h-2.5 rounded-full mr-2 ${
                    session.user.status === "online" ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
                <span className="text-sm">
                  {session.user.status === "online"
                    ? `Online (Logged in: ${new Date(session.user.last_login).toLocaleString()})`
                    : "Offline"}
                </span>
              </div>
              <button
                onClick={handleMenu}
                className="p-2 rounded-full hover:bg-[#15803d] transition-colors"
                aria-label="User menu"
              >
                <FaUser />
              </button>
              {anchorEl && (
                <div className="absolute right-4 top-16 bg-white text-gray-900 shadow-lg rounded-md w-48 z-30">
                  <button
                    onClick={() => router.push("/dashboard/profile")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => router.push("/dashboard/profile/view")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    View
                  </button>
                  <button
                    onClick={() => router.push("/dashboard/profile/edit")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </header>

      {/* Sidebar */}
      <nav className="fixed top-16 left-0 w-60 bg-[#0D3C00] text-white h-[calc(100vh-64px)] overflow-y-auto">
        <ul className="p-4">
          {[
            { name: "Posts", key: "posts", items: ["Add Posts", "Update", "Delete", "Archive"] },
            { name: "Jobs", key: "jobs", items: ["Add Job", "Update", "Delete", "Archive"] },
            { name: "Tenders", key: "tenders", items: ["Add Tender", "Update", "Delete", "Archive"] },
            {
              name: "Documents",
              key: "documents",
              items: [
                { name: "Public", items: ["Add Document", "Update", "Delete", "Archive"] },
                { name: "Legal", items: ["Add Document", "Update", "Delete", "Archive"] },
                { name: "Policy", items: ["Add Document", "Update", "Delete", "Archive"] },
                { name: "ISO", items: ["Add Document", "Update", "Delete", "Archive"] },
              ],
            },
            { name: "Events", key: "events", items: ["Add Events", "Update", "Delete", "Archive"] },
            {
              name: "Notice Board",
              key: "notices",
              items: ["Add Notices", "Update", "Delete", "Archive"],
            },
            { name: "Users", key: "user" },
            { name: "Mailing", key: "mailing" },
          ].map((section) => (
            <li key={section.name}>
              <button
                onClick={() => section.items && toggleDropdown(section.key)}
                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-700 transition-colors"
              >
                <span>{section.name}</span>
                {section.items && (open[section.key] ? <FaChevronDown /> : <FaChevronRight />)}
              </button>
              {section.items && (
                <ul className={`${open[section.key] ? "block" : "hidden"} pl-4`}>
                  {section.items.map((item) =>
                    typeof item === "string" ? (
                      <li key={item}>
                        <button
                          onClick={() =>
                            router.push(`/dashboard/${section.key}/${item.toLowerCase().replace(" ", "-")}`)
                          }
                          className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors"
                        >
                          {item}
                        </button>
                      </li>
                    ) : (
                      <li key={item.name}>
                        <button
                          onClick={() => toggleDropdown(item.name.toLowerCase())}
                          className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-700 transition-colors"
                        >
                          <span>{item.name}</span>
                          {open[item.name.toLowerCase()] ? <FaChevronDown /> : <FaChevronRight />}
                        </button>
                        <ul className={`${open[item.name.toLowerCase()] ? "block" : "hidden"} pl-4`}>
                          {item.items.map((subItem) => (
                            <li key={subItem}>
                              <button
                                onClick={() =>
                                  router.push(
                                    `/dashboard/documents/${item.name.toLowerCase()}/${subItem
                                      .toLowerCase()
                                      .replace(" ", "-")}`
                                  )
                                }
                                className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors"
                              >
                                {subItem}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 mt-16 ml-60">{children}</main>
    </div>
  );
}