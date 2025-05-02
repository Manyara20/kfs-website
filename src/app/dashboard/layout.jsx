"use client";

import { useState, useEffect } from "react";
import { useSession, signOut, SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaUser, FaChevronDown, FaChevronRight, FaBars } from "react-icons/fa";
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
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(3600); // Start at 60 minutes (3600 seconds)
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
    users: false,
    mailing: false,
  });

  // Timer logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev <= 0) {
          clearInterval(intervalId); // Stop the timer at 0
          return 0;
        }
        return prev - 1;
      });
    }, 1000); // Update every second

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  // Redirect if unauthenticated
  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  const handleUserMenuToggle = () => setIsUserMenuOpen((prev) => !prev);
  const handleSignOut = () => signOut({ callbackUrl: "/login" });
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const toggleDropdown = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Define role-based menu items
  const getMenuItems = (role) => {
    const allMenuItems = [
      { name: "Posts", key: "posts", route: "/dashboard/posts" },
      { name: "Jobs", key: "jobs", route: "/dashboard/jobs" },
      { name: "Tenders", key: "tenders", route: "/dashboard/tenders" },
      {
        name: "Documents",
        key: "documents",
        items: [
          { name: "Public", route: "/dashboard/documents?category=public" },
          { name: "Legal", route: "/dashboard/documents?category=legal" },
          { name: "Policy", route: "/dashboard/documents?category=policy" },
          { name: "ISO", route: "/dashboard/documents?category=iso" },
        ],
      },
      { name: "Events", key: "events", route: "/dashboard/events" },
      { name: "Notice Board", key: "notices", route: "/dashboard/notices" },
      { name: "Users", key: "users", route: "/dashboard/users" },
      { name: "Mailing", key: "mailing", route: "/dashboard/mailing" },
    ];

    switch (role) {
      case "admin":
        return allMenuItems;
      case "supply_chain":
        return allMenuItems.filter((item) => 
        ["tenders","documents"].includes(item.key));
      case "communication_officer":
        return allMenuItems.filter((item) =>
          ["posts", "events", "notices","documents"].includes(item.key)
        );
      case "user":
        return allMenuItems.filter((item) => item.key === "documents");
      default:
        return [];
    }
  };

  // Format timer as MM:SS
  const formatTimer = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  if (status === "loading")
    return (
      <div className="flex items-center justify-center h-screen text-white bg-gray-900">
        Loading...
      </div>
    );

  return (
    <div className="flex min-h-screen">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-20 bg-[#0D3C00] text-white shadow-md">
        <div className="flex items-center h-16 px-4">
          <button
            className="md:hidden p-2 mr-2"
            onClick={toggleSidebar}
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            <FaBars />
          </button>
          <Image src="/images/t_logo.png" alt="Logo" width={40} height={40} />
          <h1 className="flex-1 ml-2 text-xl font-semibold">Dashboard</h1>
          {session && (
            <>
              <div className="flex items-center mr-4">
                <span className="w-2.5 h-2.5 rounded-full mr-2 bg-green-500"></span>
                <span className="text-sm">
                  Online (Time Remaining: {formatTimer(timerSeconds)})
                </span>
              </div>
              <button
                onClick={handleUserMenuToggle}
                className="p-2 rounded-full hover:bg-[#15803d] transition-colors"
                aria-label="Toggle user menu"
                aria-expanded={isUserMenuOpen}
              >
                <FaUser />
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-4 top-16 bg-white text-gray-900 shadow-lg rounded-md w-48 z-30">
                  <button
                    onClick={() => {
                      router.push("/dashboard/profile");
                      setIsUserMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => {
                      router.push("/dashboard/profile/view");
                      setIsUserMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      router.push("/dashboard/profile/edit");
                      setIsUserMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsUserMenuOpen(false);
                    }}
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
      <nav
        className={`fixed top-16 left-0 w-60 bg-[#0D3C00] text-white h-[calc(100vh-64px)] overflow-y-auto transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-60 z-10`}
      >
        <ul className="p-4">
          {session &&
            getMenuItems(session.user.role).map((section) => (
              <li key={section.name}>
                <button
                  onClick={() => {
                    if (section.items) toggleDropdown(section.key);
                    else if (section.route) router.push(section.route);
                  }}
                  className="flex items-center justify-between w-full px-4 py-2 hover:bg-[#15803d] transition-colors"
                >
                  <span>{section.name}</span>
                  {section.items && (open[section.key] ? <FaChevronDown /> : <FaChevronRight />)}
                </button>
                {section.items && (
                  <ul className={`${open[section.key] ? "block" : "hidden"} pl-4`}>
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <button
                          onClick={() => router.push(item.route)}
                          className="block w-full text-left px-4 py-2 hover:bg-[#15803d] transition-colors"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main
        className={`flex-1 p-6 mt-16 transition-all duration-300 ${
          isSidebarOpen ? "ml-60" : "ml-0"
        } md:ml-60 flex justify-start`}
      >
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
}