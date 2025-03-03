"use client";
import React, { useState } from "react";
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
  };

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", subItems: ["KFS Board", "Senior Management", "Core Programs", "Other Programs", "Projects"] },
    { label: "Media Center", subItems: ["News & Events", "Photo Gallery", "Events Calendar", "The Forester Magazine", "Press Releases"] },
    { label: "Quick Links", subItems: ["Tree Planting", "Participatory Forest Management", "EcoTourism", "Online Systems"] },
    { label: "Contact Us", link: "/contact" },
    { label: "E-Documents", subItems: ["Public Documents", "Legal Documents", "Policy Documents", "Video Documentation", "Documents Archive"] },
    { label: "Tenders", link: "/tenders" },
    { label: "Jobs", link: "/jobs" },
  ];

  return (
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
