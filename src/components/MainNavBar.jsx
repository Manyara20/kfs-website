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
  useMediaQuery,
} from "@mui/material";
import {
  ArrowDropDown,
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image"; // Import Next.js Image component

const MainNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Switch to mobile view below 900px

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const toggleDrawer = (open) => () => setDrawerOpen(open);
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
      sx={{
        backgroundColor: "white",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        padding: { xs: "5px 0", md: "8px 0" },
      }}
    >
      <Toolbar
        sx={{
          width: { xs: "95%", sm: "90%", lg: "85%" },
          margin: "auto",
          minHeight: "auto !important",
          padding: "0 !important",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "85%",
        }}
      >
        {/* Logo */}
        <Box sx={{ flexShrink: 0 }}>
          <Link href="/">
            <Image
              src="https://whatthelogo.com/storage/logos/kenya-forest-service-96842.png"
              alt="KFS Logo"
              width={50} // Fixed width
              height={35} // Fixed height
              style={{ marginRight: { xs: "8px", md: "15px" } }}
            />
          </Link>
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
                    {item.subItems.map((subItem, idx) => (
                      <ListItem button key={idx} sx={{ pl: 4 }}>
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