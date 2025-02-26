"use client";

import React, { useState } from "react";
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({});

  const handleMenuOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleSubMenuToggle = (index) => {
    setOpenSubMenu((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const menuItems = [
    { label: "Home", link: "/" },
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
    { label: "Tenders", link: "/tenders" },
    { label: "Jobs", link: "/jobs" },
  ];

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
    >
      <Toolbar
        sx={{
          maxWidth: "85%",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Ensures logo stays left, rest adjusts
          width: "100%",
        }}
      >
        {/* Logo on the Left */}
        <Box sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <img
            src="https://whatthelogo.com/storage/logos/kenya-forest-service-96842.png"
            alt="KFS Logo"
            style={{ height: "50px", marginRight: "20px" }}
          />
        </Box>

        {/* Centered Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, // Hidden on mobile
            flexGrow: 1, // Takes up available space
            justifyContent: "center", // Centers the nav items
            gap: 2.5, // Spacing between items
          }}
        >
          {menuItems.map((item, index) =>
            item.subItems ? (
              <Box key={index}>
                <IconButton
                  onClick={(e) => handleMenuOpen(e, index)}
                  sx={{
                    color: "#6A961F",
                    "&:hover": { backgroundColor: "rgba(106,150,31,0.1)" },
                  }}
                >
                  <Typography variant="body1">{item.label}</Typography>
                  <ArrowDropDown sx={{ color: "#6A961F" }} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && activeMenu === index}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                  sx={{ "& .MuiPaper-root": { minWidth: "200px" } }}
                >
                  {item.subItems.map((subItem, idx) => (
                    <MenuItem
                      key={idx}
                      onClick={handleMenuClose}
                      sx={{ color: "#333" }}
                    >
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
                  "&:hover": { color: "#4a6b15" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1">{item.label}</Typography>
              </Link>
            )
          )}
        </Box>

        {/* Mobile Menu Button on the Right */}
        <IconButton
          edge="end"
          sx={{ display: { xs: "block", md: "none" }, color: "#6A961F" }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ "& .MuiDrawer-paper": { width: { xs: "75%", sm: 300 } } }}
      >
        <List>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                button
                onClick={
                  item.subItems
                    ? () => handleSubMenuToggle(index)
                    : toggleDrawer(false)
                }
                component={item.link && !item.subItems ? Link : "div"}
                href={item.link}
                sx={{ color: "#6A961F" }}
              >
                <ListItemText primary={item.label} />
                {item.subItems &&
                  (openSubMenu[index] ? <ExpandLess /> : <ExpandMore />)}
              </ListItem>
              {item.subItems && (
                <Collapse in={openSubMenu[index]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem, idx) => (
                      <ListItem
                        button
                        key={idx}
                        sx={{ pl: 4, color: "#333" }}
                        onClick={toggleDrawer(false)}
                      >
                        <ListItemText primary={subItem} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default MainNavBar;