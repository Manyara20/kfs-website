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
  useMediaQuery,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  ArrowDropDown,
  Menu as MenuIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

const MainNavBar = () => {
  const [anchorEl, setAnchorEl] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event, index) => {
    setAnchorEl((prev) => ({ ...prev, [index]: event.currentTarget }));
  };

  const handleMenuClose = (index) => {
    setAnchorEl((prev) => ({ ...prev, [index]: null }));
  };

  const toggleDrawer = (open) => () => setDrawerOpen(open);
  const toggleSearchDrawer = () => setSearchDrawerOpen((prev) => !prev);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      console.log("Search query:", searchQuery);
      setSearchDrawerOpen(false);
      setSearchQuery("");
    }
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
    <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
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
              width={50}
              height={35}
              style={{ marginRight: { xs: "8px", md: "15px" } }}
            />
          </Link>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, justifyContent: "flex-end" }}>
            {menuItems.map((item, index) =>
              item.subItems ? (
                <Box key={index}>
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
                    PaperProps={{ sx: { minWidth: "200px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" } }}
                  >
                    {item.subItems.map((subItem, idx) => (
                      <MenuItem
                        key={idx}
                        onClick={() => handleMenuClose(index)}
                        sx={{ fontSize: "0.9rem", "&:hover": { backgroundColor: "rgba(106,150,31,0.1)" } }}
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
                  <Typography sx={{ fontSize: { md: "0.85rem", lg: "0.95rem" }, fontWeight: 500 }}>
                    {item.label}
                  </Typography>
                </Link>
              )
            )}
            {/* Search Icon */}
            <IconButton
              sx={{
                color: "black",
                fontWeight: "bold",
                padding: { md: "6px", lg: "8px" },
                "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" },
                borderRadius: "4px",
              }}
              onClick={toggleSearchDrawer}
            >
              <SearchIcon sx={{ fontSize: { xs: "1.5rem", md: "1.75rem" }, fontWeight: "bold" }} />
            </IconButton>
          </Box>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              sx={{ color: "#6A961F", padding: "6px" }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "black",
                fontWeight: "bold",
                padding: "6px",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" },
                borderRadius: "4px",
              }}
              onClick={toggleSearchDrawer}
            >
              <SearchIcon sx={{ fontSize: "1.5rem", fontWeight: "bold" }} />
            </IconButton>
          </Box>
        )}
      </Toolbar>

      {/* Mobile Drawer Navigation */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": { width: { xs: "80%", sm: "60%" }, maxWidth: "300px", backgroundColor: "#fff" },
        }}
      >
        <Box sx={{ width: "100%", p: 2 }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ mb: 2 }}>
            <MenuIcon sx={{ color: "#6A961F" }} />
          </IconButton>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index}>
                {item.link ? (
                  <Link href={item.link} sx={{ textDecoration: "none", color: "#6A961F" }}>
                    <ListItemText primary={item.label} />
                  </Link>
                ) : (
                  <ListItemText primary={item.label} sx={{ color: "#6A961F" }} />
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Search Drawer */}
      <Drawer
        anchor="top"
        open={searchDrawerOpen}
        onClose={toggleSearchDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "rgba(0, 0, 0, 0.85)", // Black translucent background
            color: "white",
            height: "auto",
            width: "100%",
            maxHeight: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 4,
          },
        }}
      >
        <Box
          component="form"
          onSubmit={handleSearchSubmit}
          sx={{
            width: { xs: "90%", sm: "70%", md: "50%" },
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontSize: { xs: "1rem", sm: "1.25rem" },
              color: "white",
            }}
          >
            Search the Website
          </Typography>
          <TextField
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter keywords..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
              "& .MuiInputBase-input": {
                color: "white",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              },
            }}
          />
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default MainNavBar;