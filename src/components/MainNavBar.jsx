"use client";
import React, { useState } from "react";
<<<<<<< HEAD
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  ArrowDropDown,
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";

const MainNavBar = () => {
  const [anchorEl, setAnchorEl] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({});

  const handleMenuOpen = (event, index) => {
    setAnchorEl((prev) => ({ ...prev, [index]: event.currentTarget }));
  };

  const handleMenuClose = (index) => {
    setAnchorEl((prev) => ({ ...prev, [index]: null }));
  };

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleSubMenuToggle = (index) => {
    setOpenSubMenu((prev) => ({ ...prev, [index]: !prev[index] }));
=======
import { AppBar, Toolbar, Typography, Box, Menu, MenuItem, IconButton, Link } from "@mui/material";
import { ArrowDropDown, Menu as MenuIcon } from "@mui/icons-material";

const MainNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const handleMenuOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenuIndex(null);
>>>>>>> e21d1b7f5c8632831ad019485619c603fc1493c1
  };

  const menuItems = [
    { label: "Home", link: "/" },
<<<<<<< HEAD
    {
      label: "About",
      subItems: [
        "KFS Board",
        "Senior Management",
        "Core Programs",
        "Other Programs",
        "Projects",
      ],
    },
    {
      label: "Media Center",
      subItems: [
        "News & Events",
        "Photo Gallery",
        "Events Calendar",
        "The Forester Magazine",
        "Press Releases",
      ],
    },
    {
      label: "Quick Links",
      subItems: [
        "Tree Planting",
        "Participatory Forest Management",
        "EcoTourism",
        "Online Systems",
      ],
    },
    { label: "Contact Us", link: "/contact" },
    {
      label: "E-Documents",
      subItems: [
        "Public Documents",
        "Legal Documents",
        "Policy Documents",
        "Video Documentation",
        "Documents Archive",
      ],
    },
=======
    { label: "About", subItems: ["KFS Board", "Senior Management", "Core Programs", "Other Programs", "Projects"] },
    { label: "Media Center", subItems: ["News & Events", "Photo Gallery", "Events Calendar", "The Forester Magazine", "Press Releases"] },
    { label: "Quick Links", subItems: ["Tree Planting", "Participatory Forest Management", "EcoTourism", "Online Systems"] },
    { label: "Contact Us", link: "/contact" },
    { label: "E-Documents", subItems: ["Public Documents", "Legal Documents", "Policy Documents", "Video Documentation", "Documents Archive"] },
>>>>>>> e21d1b7f5c8632831ad019485619c603fc1493c1
    { label: "Tenders", link: "/tenders" },
    { label: "Jobs", link: "/jobs" },
  ];

  return (
<<<<<<< HEAD
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "85%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://whatthelogo.com/storage/logos/kenya-forest-service-96842.png"
            alt="KFS Logo"
            style={{ height: "50px", marginRight: "20px" }}
          />
        </Box>

        {/* Desktop Navigation - Items in a Straight Line */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
            alignItems: "center",
          }}
        >
          {menuItems.map((item, index) =>
            item.subItems ? (
              <Box key={index} sx={{ position: "relative" }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#6A961F",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={(event) => handleMenuOpen(event, index)}
                >
                  {item.label}
                  <ArrowDropDown sx={{ color: "#6A961F" }} />
                </Typography>
                <Menu
                  anchorEl={anchorEl[index]}
                  open={Boolean(anchorEl[index])}
                  onClose={() => handleMenuClose(index)}
                  sx={{ mt: 1 }}
                >
                  {item.subItems.map((subItem, idx) => (
                    <MenuItem key={idx} onClick={() => handleMenuClose(index)}>
                      {subItem}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Link
                key={index}
                href={item.link}
                sx={{
                  color: "#6A961F",
                  textDecoration: "none",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                <Typography variant="body1">{item.label}</Typography>
              </Link>
            )
          )}
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="end"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer Navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 500 }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem button onClick={() => handleSubMenuToggle(index)}>
                <ListItemText primary={item.label} />
                {item.subItems ? (
                  openSubMenu[index] ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : null}
              </ListItem>
              {item.subItems && (
                <Collapse in={openSubMenu[index]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
=======
    <AppBar position="static" sx={{ backgroundColor: "white", padding: "10px 0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "90%", margin: "auto" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src="https://whatthelogo.com/storage/logos/kenya-forest-service-96842.png" alt="KFS Logo" style={{ height: "50px", marginRight: "20px" }} />
        </Box>

        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          {menuItems.map((item, index) => (
            <Box key={index} sx={{ position: "relative" }}>
              {item.subItems ? (
                <>
                  <IconButton onClick={(e) => handleMenuOpen(e, index)} sx={{ color: "#6A961F" }}>
                    <Typography variant="body1">{item.label}</Typography>
                    <ArrowDropDown sx={{ color: "#6A961F" }} />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={openMenuIndex === index}
                    onClose={handleMenuClose}
                    MenuListProps={{ onMouseLeave: handleMenuClose }}
                  >
>>>>>>> e21d1b7f5c8632831ad019485619c603fc1493c1
                    {item.subItems.map((subItem, idx) => (
                      <MenuItem key={idx} onClick={handleMenuClose}>{subItem}</MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <Link href={item.link} sx={{ color: "#6A961F", textDecoration: "none", padding: "10px 15px" }}>
                  <Typography variant="body1">{item.label}</Typography>
                </Link>
              )}
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavBar;
