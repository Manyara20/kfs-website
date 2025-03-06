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
  const [anchorEl, setAnchorEl] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Switch to mobile view below 900px

  const handleMenuOpen = (event, index) => {
    setAnchorEl((prev) => ({ ...prev, [index]: event.currentTarget }));
  };

  const handleMenuClose = (index) => {
    setAnchorEl((prev) => ({ ...prev, [index]: null }));
  };

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleSubMenuToggle = (index) => {
    setOpenSubMenu((prev) => ({ ...prev, [index]: !prev[index] }));
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

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              gap: { md: 1, lg: 2 },
              alignItems: "center",
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            {menuItems.map((item, index) =>
              item.subItems ? (
                <Box key={index} sx={{ position: "relative", whiteSpace: "nowrap" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#6A961F",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      fontSize: { md: "0.85rem", lg: "0.95rem" },
                      fontWeight: 500,
                      padding: { md: "6px 8px", lg: "8px 12px" },
                      "&:hover": { backgroundColor: "rgba(106,150,31,0.1)" },
                      borderRadius: "4px",
                    }}
                    onClick={(event) => handleMenuOpen(event, index)}
                  >
                    {item.label}
                    <ArrowDropDown sx={{ color: "#6A961F", fontSize: "1.2rem" }} />
                  </Typography>
                  <Menu
                    anchorEl={anchorEl[index]}
                    open={Boolean(anchorEl[index])}
                    onClose={() => handleMenuClose(index)}
                    sx={{ mt: 1 }}
                    PaperProps={{
                      sx: {
                        minWidth: "200px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    {item.subItems.map((subItem, idx) => (
                      <MenuItem
                        key={idx}
                        onClick={() => handleMenuClose(index)}
                        sx={{
                          fontSize: "0.9rem",
                          "&:hover": { backgroundColor: "rgba(106,150,31,0.1)" },
                        }}
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
                    padding: { md: "6px 8px", lg: "8px 12px" },
                    "&:hover": { backgroundColor: "rgba(106,150,31,0.1)" },
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { md: "0.85rem", lg: "0.95rem" },
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              )
            )}
          </Box>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton
            edge="end"
            sx={{ color: "#6A961F", padding: "6px" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer Navigation */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "80%", sm: "60%", md: "40%" },
            maxWidth: "300px",
            backgroundColor: "#fff",
          },
        }}
      >
        <Box sx={{ width: "100%", p: 2 }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ mb: 2 }}>
            <ExpandLess />
          </IconButton>
          <List>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem
                  onClick={() => item.subItems && handleSubMenuToggle(index)}
                  sx={{ cursor: "pointer" }}
                >
                  {item.link ? (
                    <Link href={item.link} sx={{ textDecoration: "none", color: "#6A961F" }}>
                      <ListItemText primary={item.label} />
                    </Link>
                  ) : (
                    <ListItemText primary={item.label} sx={{ color: "#6A961F" }} />
                  )}
                  {item.subItems &&
                    (openSubMenu[index] ? (
                      <ExpandLess sx={{ color: "#6A961F" }} />
                    ) : (
                      <ExpandMore sx={{ color: "#6A961F" }} />
                    ))}
                </ListItem>
                {item.subItems && (
                  <Collapse in={openSubMenu[index]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.subItems.map((subItem, idx) => (
                        <ListItem key={idx} sx={{ pl: 4 }}>
                          <ListItemText primary={subItem} sx={{ color: "#6A961F" }} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default MainNavBar;