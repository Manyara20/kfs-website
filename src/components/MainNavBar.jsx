"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  MenuItem,
  IconButton,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Collapse,
  useMediaQuery,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  ArrowDropDown,
  Menu as MenuIcon,
  Search as SearchIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

const MainNavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItems, setExpandedItems] = useState({});
  const [isSticky, setIsSticky] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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

  const handleToggle = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { label: "Home", link: "/" },
    {
      label: "About",
      subItems: [
        { label: "KFS Board", link: "/about/kfs-board" },
        { label: "Senior Management", link: "/about/senior-management" },
        {
          label: "Core Programs",
          link: "/about/core-programs",
          subItems: [
            { label: "Forest Conservation and Management", link: "/about/core-programs/forest-conservation-management" },
            { label: "Forest Plantation and Management", link: "/about/core-programs/forest-plantation-management" },
            { label: "Forest Protection and Security", link: "/about/core-programs/forest-protection-security" },
            {
              label: "Dryland & private Forestry Development",
              link: "/about/core-programs/dryland-private-forestry",
              subItems: [
                { label: "Conservation Coordination", link: "/about/core-programs/dryland-private-forestry/conservation-coordination" },
                { label: "Forestry Advisory & County Liaison", link: "/about/core-programs/dryland-private-forestry/forestry-advisory-county-liaison" },
              ],
            },
          ],
        },
        {
          label: "Other Programs",
          link: "/about/other-programs",
          subItems: [
            { label: "Organizational Structure", link: "/about/other-programs/organizational-structure" },
            { label: "Strategy, Patnerships & Resorce Mobilizations", link: "/about/other-programs/strategy-patnerships-resources" },
            { label: "Corprate Services", link: "/about/other-programs/corporate-services" },
          ],
        },
        {
          label: "Projects",
          link: "/about/projects",
          subItems: [
            { label: "GZDSP II", link: "/about/projects/GZDSP-II" },
            { label: "NTPC", link: "/about/projects/NTPC" },
            { label: "IC-FRA Documents", link: "/about/projects/IC-FRA-Documents" },
          ],
        },
      ],
    },
    {
      label: "Media Center",
      subItems: [
        { label: "News & Events", link: "/mediacenter/news-events" },
        { label: "Photo Gallery", link: "/mediacenter/photo-gallery" },
        { label: "Events Calendar", link: "/mediacenter/events-calendar" },
        { label: "The Forester Magazine", link: "/mediacenter/forester-magazine" },
        { label: "Press Releases", link: "/mediacenter/press-releases" },
      ],
    },
    {
      label: "Quick Links",
      subItems: [
        { label: "Tree Planting", link: "/quick-links/tree-planting" },
        { 
          label: "Participatory Forest Management",
          link: "/quick-links/participatory-forest-management",
          subItems: [
            { label: "Background", link: "/quick-links/participatory-forest-management/background" },
            { label: "Forest Management Agreements", link: "/quick-links/participatory-forest-management/forest-agreements" },
            { label: "Forest Management Plans", link: "/quick-links/participatory-forest-management/forest-plans" },
          ],
        },
        { 
          label: "EcoTourism",
          link: "/quick-links/ecotourism",
          subItems: [
            { label: "Background", link: "/quick-links/participatory-forest-management/background" },
            { label: "Fees & Charges", link: "/quick-links/participatory-forest-management/background" },
            { label: "Investement Opportunities", link: "/quick-links/participatory-forest-management/background" },
            { 
              label: "Attractions", 
              link: "/quick-links/participatory-forest-management/background",
              subItems: [
                { label: "Background", link: "/quick-links/participatory-forest-management/background" },
              ],
            },
            { label: "Background", link: "/quick-links/participatory-forest-management/background" },
            { label: "Background", link: "/quick-links/participatory-forest-management/background" },
          ],
        },
        { 
          label: "Online Systems",
          link: "/quick-links/online-systems",
          subItems: [
            { label: "Staff Mail", link: "/quick-links/online-systems/staff-mail" },
            { label: "E-Registration", link: "/quick-links/online-systems/e-registration" },
            { label: "E-Nursery", link: "/quick-links/online-systems/e-nursery" },
            { label: "Research Lisence", link: "/quick-links/online-systems/research-lisence" },
            { label: "Monitoring and Evaluation", link: "/quick-links/online-systems/monitoring-evaluation" },
          ],
        },
      ],
    },
    { 
      label: "Contact Us", 
      link: "/ContactUsPage" },
    {
      label: "E-Documents",
      subItems: [
        { label: "Public Documents", link: "/e-documents/public" },
        { label: "Legal Documents", link: "/e-documents/legal" },
        { label: "Policy Documents", link: "/e-documents/policy" },
        { label: "Video Documentation", link: "/e-documents/video" },
        { label: "Documents Archive", link: "/e-documents/archive" },
      ],
    },
    { 
      label: "Tenders", 
      link: "/TendersPage" },
    { label: "Jobs", link: "/jobs" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: isSticky ? "#0D3C00" : "white",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        transition: "background-color 0.3s ease",
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
        <Box sx={{ flexShrink: 0, paddingTop: "0.2rem", paddingBottom: "0.2rem" }}>
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              gap: { md: 1, lg: 2 },
            }}
          >
            {navigationItems.map((item, index) =>
              item.subItems ? (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    "&:hover > .MuiBox-root": {
                      visibility: "visible",
                      opacity: 1,
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: isSticky ? "white" : "#6A961F",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      fontSize: { md: "0.85rem", lg: "0.95rem" },
                      fontWeight: 500,
                      padding: { md: "6px 8px", lg: "8px 12px" },
                      "&:hover": { backgroundColor: isSticky ? "rgba(255,255,255,0.1)" : "rgba(106,150,31,0.1)" },
                      borderRadius: "4px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.label}
                    <ArrowDropDown sx={{ color: isSticky ? "white" : "#6A961F", fontSize: "1.2rem" }} />
                  </Typography>
                  <Box
                    sx={{
                      visibility: "hidden",
                      opacity: 0,
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      backgroundColor: "white",
                      minWidth: "200px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                      borderRadius: "4px",
                      zIndex: 1000,
                      transition: "opacity 0.2s ease-in-out",
                    }}
                  >
                    {item.subItems.map((subItem, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          position: "relative",
                          "&:hover > .MuiBox-root": {
                            visibility: "visible",
                            opacity: 1,
                          },
                        }}
                      >
                        <MenuItem
                          sx={{
                            fontSize: "0.9rem",
                            color: "black",
                            "&:hover": { backgroundColor: "rgba(106,150,31,0.1)" },
                            padding: "8px 16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Link
                            href={subItem.link || "#"}
                            style={{ textDecoration: "none", color: "inherit", display: "block" }}
                          >
                            {subItem.label}
                          </Link>
                          {subItem.subItems && subItem.subItems.length > 0 && (
                            <ArrowDropDown sx={{ color: "black", fontSize: "1.2rem" }} />
                          )}
                        </MenuItem>
                        {subItem.subItems && subItem.subItems.length > 0 && (
                          <Box
                            sx={{
                              visibility: "hidden",
                              opacity: 0,
                              position: "absolute",
                              top: 0,
                              left: "100%",
                              backgroundColor: "white",
                              minWidth: "200px",
                              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                              borderRadius: "4px",
                              zIndex: 1000,
                              transition: "opacity 0.2s ease-in-out",
                            }}
                          >
                            {subItem.subItems.map((nestedItem, nestedIdx) => (
                              <MenuItem
                                key={nestedIdx}
                                sx={{
                                  fontSize: "0.9rem",
                                  color: "black",
                                  "&:hover": { backgroundColor: "rgba(106,150,31,0.1)" },
                                  padding: "8px 16px",
                                }}
                              >
                                <Link
                                  href={nestedItem.link || "#"}
                                  style={{ textDecoration: "none", color: "inherit", width: "100%", display: "block" }}
                                >
                                  {nestedItem.label}
                                </Link>
                              </MenuItem>
                            ))}
                          </Box>
                        )}
                      </Box>
                    ))}
                  </Box>
                </Box>
              ) : (
                <Link
                  key={index}
                  href={item.link}
                  sx={{
                    color: isSticky ? "white" : "#6A961F",
                    textDecoration: "none",
                    padding: { md: "6px 8px", lg: "8px 12px" },
                    "&:hover": { backgroundColor: isSticky ? "rgba(255,255,255,0.1)" : "rgba(106,150,31,0.1)" },
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    transition: "color 0.3s ease",
                  }}
                >
                  <Typography sx={{ fontSize: { md: "0.85rem", lg: "0.95rem" }, fontWeight: 500 }}>
                    {item.label}
                  </Typography>
                </Link>
              )
            )}
          </Box>
        )}

        {/* Desktop Search Icon */}
        {!isMobile && (
          <Box sx={{ flexShrink: 0 }}>
            <IconButton
              sx={{
                color: isSticky ? "white" : "black",
                fontWeight: "bold",
                padding: { md: "6px", lg: "8px" },
                "&:hover": { backgroundColor: isSticky ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" },
                borderRadius: "4px",
                transition: "color 0.3s ease",
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
              sx={{ color: isSticky ? "white" : "#6A961F", padding: "6px", transition: "color 0.3s ease" }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              sx={{
                color: isSticky ? "white" : "black",
                fontWeight: "bold",
                padding: "6px",
                "&:hover": { backgroundColor: isSticky ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" },
                borderRadius: "4px",
                transition: "color 0.3s ease",
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
          "& .MuiDrawer-paper": {
            width: { xs: "80%", sm: "60%" },
            maxWidth: "300px",
            backgroundColor: "#fff",
            padding: "1rem",
          },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ position: "absolute", top: "1rem", right: "1rem", color: "#6A961F" }}
          >
            <MenuIcon />
          </IconButton>
          <List sx={{ paddingTop: "3rem" }}>
            {navigationItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.link ? (
                  <ListItem disablePadding>
                    <ListItemButton
                      component={Link}
                      href={item.link}
                      sx={{ color: "#6A961F", padding: "8px 16px" }}
                    >
                      <ListItemText primary={item.label} sx={{ fontSize: "1rem" }} />
                    </ListItemButton>
                  </ListItem>
                ) : (
                  <>
                    <ListItemButton
                      onClick={() => handleToggle(index)}
                      sx={{ color: "#6A961F", padding: "8px 16px" }}
                    >
                      <ListItemText primary={item.label} sx={{ fontSize: "1rem" }} />
                      {expandedItems[index] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={expandedItems[index]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{ pl: 3 }}>
                        {item.subItems.map((subItem, idx) => (
                          <ListItem key={idx} disablePadding>
                            <ListItemButton
                              component={Link}
                              href={subItem.link || "#"}
                              sx={{ color: "#6A961F", padding: "6px 16px" }}
                            >
                              <ListItemText primary={subItem.label} sx={{ fontSize: "0.9rem" }} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </>
                )}
              </React.Fragment>
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
            backgroundColor: "rgba(0, 0, 0, 0.85)",
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