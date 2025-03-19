// src/app/dashboard/layout.jsx
"use client"; // Mark as client component

import { useState, useEffect } from "react";
import { useSession, signOut, SessionProvider } from "next-auth/react"; // Import SessionProvider
import { useRouter } from "next/navigation";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import { FaUser, FaChevronDown, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function DashboardLayout({ children }) {
  return (
    <SessionProvider> {/* Wrap the entire content */}
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

  if (status === "loading") return <div>Loading...</div>;

  return (
    <Box sx={{ display: "flex" }}>
      {/* Top Navigation */}
      <AppBar position="fixed"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#0D3C00" }}>
        <Toolbar>
          <Image src="/images/t_logo.png" alt="Logo" width={40} height={40} />
          <Typography variant="h6" sx={{ flexGrow: 1, ml: 2 }}>
            Dashboard
          </Typography>
          {session && (
            <>
              <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: session.user.status === "online" ? "green" : "red",
                    mr: 1,
                  }}
                />
                <Typography variant="body2">
                  {session.user.status === "online"
                    ? `Online (Logged in: ${new Date(session.user.last_login).toLocaleString()})`
                    : "Offline"}
                </Typography>
              </Box>
              <IconButton color="inherit" onClick={handleMenu}>
                <FaUser />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={() => router.push("/dashboard/profile")}>Profile</MenuItem>
                <MenuItem onClick={() => router.push("/dashboard/profile/view")}>View</MenuItem>
                <MenuItem onClick={() => router.push("/dashboard/profile/edit")}>Edit</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box", mt: "64px" },
        }}
      >
        <List>
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
            { name: "Users", key: "users" },
            { name: "Mailing", key: "mailing" },
          ].map((section) => (
            <div key={section.name}>
              <ListItem button onClick={() => section.items && toggleDropdown(section.key)}>
                <ListItemText primary={section.name} />
                {section.items && (open[section.key] ? <FaChevronDown /> : <FaChevronRight />)}
              </ListItem>
              {section.items && (
                <Collapse in={open[section.key]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {section.items.map((item) =>
                      typeof item === "string" ? (
                        <ListItem
                          button
                          key={item}
                          sx={{ pl: 4 }}
                          onClick={() =>
                            router.push(
                              `/dashboard/${section.key}/${item.toLowerCase().replace(" ", "-")}`
                            )
                          }
                        >
                          <ListItemText primary={item} />
                        </ListItem>
                      ) : (
                        <div key={item.name}>
                          <ListItem
                            button
                            onClick={() => toggleDropdown(item.name.toLowerCase())}
                          >
                            <ListItemText primary={item.name} sx={{ pl: 4 }} />
                            {open[item.name.toLowerCase()] ? <FaChevronDown /> : <FaChevronRight />}
                          </ListItem>
                          <Collapse
                            in={open[item.name.toLowerCase()]}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List component="div" disablePadding>
                              {item.items.map((subItem) => (
                                <ListItem
                                  button
                                  key={subItem}
                                  sx={{ pl: 8 }}
                                  onClick={() =>
                                    router.push(
                                      `/dashboard/documents/${item.name.toLowerCase()}/${subItem
                                        .toLowerCase()
                                        .replace(" ", "-")}`
                                    )
                                  }
                                >
                                  <ListItemText primary={subItem} />
                                </ListItem>
                              ))}
                            </List>
                          </Collapse>
                        </div>
                      )
                    )}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "64px" }}>
        {children}
      </Box>
    </Box>
  );
}