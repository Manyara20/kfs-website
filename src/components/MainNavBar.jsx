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

  const handleToggle = (key) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Recursive function for desktop submenus
  const renderSubMenu = (items, level = 0) => {
    return items.map((item, idx) => (
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
            fontSize: { md: "0.65rem", lg: "0.65rem", xl: "0.91rem" },
            fontFamily: "'Peugeot', Helvetica, sans-serif",
            color: "black",
            "&:hover": { backgroundColor: "rgba(106,150,31,0.1)" },
            padding: "0.5rem 0.6rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textTransform: "capitalize",
          }}
        >
          <Link
            href={item.link || "#"}
            target={item.isExternal ? "_blank" : "_self"}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            {item.label}
          </Link>
          {item.subItems && item.subItems.length > 0 && (
            <ArrowDropDown
              sx={{
                color: "black",
                fontSize: "1.1rem",
                marginLeft: level % 2 === 0 ? "auto" : "0", // Right for even levels, left for odd
              }}
            />
          )}
        </MenuItem>
        {item.subItems && item.subItems.length > 0 && (
          <Box
            sx={{
              visibility: "hidden",
              opacity: 0,
              position: "absolute",
              top: "100%",
              left: "100%",
              backgroundColor: "white",
              minWidth: "180px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              borderRadius: "4px",
              zIndex: 1000 + level,
              transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out",
            }}
          >
            {renderSubMenu(item.subItems, level + 1)}
          </Box>
        )}
      </Box>
    ));
  };

  // Recursive function for mobile drawer
  const renderMobileMenu = (items, parentIdx = "", level = 0) => {
    return items.map((item, idx) => {
      const key = parentIdx ? `${parentIdx}-${idx}` : `${idx}`;
      const hasSubItems = item.subItems && item.subItems.length > 0;

      return (
        <React.Fragment key={key}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={hasSubItems ? () => handleToggle(key) : null}
              component={hasSubItems ? "button" : Link}
              href={hasSubItems ? undefined : item.link || "#"}
              target={item.isExternal ? "_blank" : "_self"}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              sx={{
                color: "#6A961F",
                padding: "8px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: { xs: "0.85rem", xl: "1.19rem" },
                    fontFamily: "'Peugeot', Helvetica, sans-serif",
                    textTransform: "capitalize",
                  },
                }}
              />
              {hasSubItems && (
                expandedItems[key] ? (
                  <ExpandLess sx={{ color: "#6A961F" }} />
                ) : (
                  <ExpandMore
                    sx={{
                      color: "#6A961F",
                      marginLeft: level % 2 === 0 ? "auto" : "0", // Right for even levels, left for odd
                    }}
                  />
                )
              )}
            </ListItemButton>
          </ListItem>
          {hasSubItems && (
            <Collapse in={expandedItems[key]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 3 }}>
                {renderMobileMenu(item.subItems, key, level + 1)}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      );
    });
  };

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
          ],
        },
        {
          label: "Other Programs",
          link: "/about/other-programs",
          subItems: [
            { label: "Organizational Structure", link: "/about/other-programs/organizational-structure" },
            { label: "Strategy Patnerships Resource Mobilizations", link: "/about/other-programs/strategy-patnerships" },
            { label: "Corporate Services", link: "/about/other-programs/corporate-services" },
          ],
        },
        {
          label: "Projects",
          link: "about/projects",
          subItems: [
            { label: "GZDSP II", link: "/about/projects/GZDSP-II" },
            { label: "NTPC", link: "/about/projects/NTPC" },
            { label: "IC-FRA Documents", link: "/about/projects/ICFRADocs" },
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
            { label: "Forest Management Plans", link: "/quick-links/participatory-forest-management/ForestPlans" },
          ],
        },
        { label: "Customer Feedback", link: "/quick-links/CustomerFeedback" },
        {
          label: "Eco-tourism",
          link: "/quick-links/eco-tourism",
          subItems: [
            { label: "Background", link: "/quick-links/eco-tourism/background" },
            { label: "Fees & Charges", link: "/quick-links/eco-tourism/fees-charges" },
            { label: "Investment Opportunities", link: "/quick-links/eco-tourism/investment-opportunities" },
            {
              label: "Attractions",
              link: "/quick-links/eco-tourism/attractions",
              subItems: [
                { label: "Menengai Forest", link: "/quick-links/eco-tourism/attractions/menengai-forest" },
                { label: "Arabuko Sokoke Forest", link: "/quick-links/eco-tourism/attractions/arabuko-sokoke-forest" },
                { label: "Karura Forest", link: "/quick-links/eco-tourism/attractions/karura-forest" },
                { label: "Ngong Hills Forest", link: "/quick-links/eco-tourism/attractions/ngong-hills-forest" },
                { label: "Ngare Ndare Forest", link: "/quick-links/eco-tourism/attractions/ngare-ndare-forest" },
                { label: "Mt Kenya Forest Reserve", link: "/quick-links/eco-tourism/attractions/mt-kenya-forest-reserve" },
                { label: "Hombe Forest Guesthouse", link: "/quick-links/eco-tourism/attractions/hombe-forest-guesthouse" },
                { label: "Ndaragwa Nature Trail", link: "/quick-links/eco-tourism/attractions/ndaragwa-nature-trail" },
                { label: "Nairobi Arboretum", link: "/quick-links/eco-tourism/attractions/nairobi-arboretum" },
                { label: "Community Eco-tourism Facilities", link: "/quick-links/eco-tourism/attractions/community-eco-tourism-facilities" },
                { label: "KFC Guesthouse & Conference Centre", link: "/quick-links/eco-tourism/attractions/kfc-guesthouse-conference-centre" },
              ],
            },
            {
              label: "Guidelines & Code of Conduct",
              link: "/quick-links/eco-tourism/guidelines",
              subItems: [
                { label: "Code of Conduct for Forest Adjacent Communities", link: "/quick-links/eco-tourism/guidelines/forest-adjacent-communities" },
                { label: "Code of Conduct for Private Investors in Eco-tourism & Recreation Facilities", link: "/quick-links/eco-tourism/guidelines/private-investors" },
                { label: "Code of Conduct for Tour Leaders", link: "/quick-links/eco-tourism/guidelines/tour-leaders" },
                { label: "Code of Conduct for Visitors to Eco-tourism", link: "/quick-links/eco-tourism/guidelines/visitors" },
                { label: "Guidelines for Constructing Eco-tourism & Recreational Facilities", link: "/quick-links/eco-tourism/guidelines/construction" },
                { label: "Guidelines for Decommissioning Eco-tourism Facilities", link: "/quick-links/eco-tourism/guidelines/decommissioning" },
              ],
            },
            { label: "Why You Should Keep Visiting Public Forests in Kenya", link: "/quick-links/eco-tourism/why-visit" },
          ],
        },
        {
          label: "Online Systems",
          link: "/quick-links/online-systems",
          subItems: [
            { label: "Staff Mail", link: "https://mail.kenyaforestservice.org/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.kenyaforestservice.org%2fowa%2f", isExternal: true },
            { label: "E-Registration", link: "https://sawmillers.kenyaforestservice.org/", isExternal: true },
            { label: "E-Nursery", link: "https://enursery.kenyaforestservice.org/", isExternal: true },
            { label: "Research License", link: "/quick-links/online-systems/research-license", isExternal: false },
            { label: "Monitoring and Evaluation", link: "http://monitoring.kenyaforestservice.org/#/home", isExternal: true },
          ],
        },
      ],
    },
    { label: "Contact Us", link: "/ContactUsPage" },
    {
      label: "E-Documents",
      subItems: [
        { label: "Public Documents", link: "/e-documents/public" },
        { label: "Legal Documents", link: "/e-documents/legal" },
        { label: "Policy Documents", link: "/e-documents/policy" },
        {
          label: "Video Documentation",
          subItems: [
            { label: "Sign Language Service Charter", link: "/e-documents/video/Sign-Language" },
            { label: "Audio Service Charter", link: "/e-documents/video/Audio-Service" },
          ],
        },
        { label: "Documents Archive", link: "/e-documents/archive" },
      ],
    },
    { label: "Tenders", link: "/TendersPage" },
    { label: "Jobs", link: "/Jobs" },
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
        <Box sx={{ flexShrink: 0, paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
          <Link href="/">
            <Image
              src="https://whatthelogo.com/storage/logos/kenya-forest-service-96842.png"
              alt="KFS Logo"
              width={50}
              height={35}
            />
          </Link>
        </Box>

        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              gap: { md: 1, lg: 2 },
              flexWrap: "nowrap",
              alignItems: "center",
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
                      fontSize: { md: "0.75rem", lg: "0.75rem", xl: "1.05rem" },
                      fontFamily: "'Peugeot', Helvetica, sans-serif",
                      fontWeight: 500,
                      padding: { md: "5px 7px", lg: "7px 10px" },
                      "&:hover": { backgroundColor: isSticky ? "rgba(255,255,255,0.1)" : "rgba(106,150,31,0.1)" },
                      borderRadius: "4px",
                      transition: "color 0.3s ease",
                      textTransform: "capitalize",
                    }}
                  >
                    {item.label}
                    <ArrowDropDown sx={{ color: isSticky ? "white" : "#6A961F", fontSize: "1.1rem" }} />
                  </Typography>
                  <Box
                    sx={{
                      visibility: "hidden",
                      opacity: 0,
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      backgroundColor: "white",
                      minWidth: "180px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                      borderRadius: "4px",
                      zIndex: 1000,
                      transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out",
                    }}
                  >
                    {renderSubMenu(item.subItems)}
                  </Box>
                </Box>
              ) : (
                <Link
                  key={index}
                  href={item.link}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  sx={{
                    color: isSticky ? "white" : "#6A961F",
                    textDecoration: "none",
                    padding: { md: "5px 7px", lg: "7px 10px" },
                    "&:hover": { backgroundColor: isSticky ? "rgba(255,255,255,0.1)" : "rgba(106,150,31,0.1)" },
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    transition: "color 0.3s ease",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { md: "0.75rem", lg: "0.75rem", xl: "1.05rem" },
                      fontFamily: "'Peugeot', Helvetica, sans-serif",
                      fontWeight: 500,
                      textTransform: "capitalize",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              )
            )}
          </Box>
        )}

        {!isMobile && (
          <Box sx={{ flexShrink: 0 }}>
            <IconButton
              sx={{
                color: isSticky ? "white" : "black",
                fontWeight: "bold",
                padding: { md: "5px", lg: "7px" },
                "&:hover": { backgroundColor: isSticky ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" },
                borderRadius: "4px",
                transition: "color 0.3s ease",
              }}
              onClick={toggleSearchDrawer}
            >
              <SearchIcon sx={{ fontSize: { xs: "1.4rem", md: "1.6rem", xl: "2rem" } }} />
            </IconButton>
          </Box>
        )}

        {isMobile && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              sx={{ color: isSticky ? "white" : "#6A961F", padding: "5px", transition: "color 0.3s ease" }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              sx={{
                color: isSticky ? "white" : "black",
                fontWeight: "bold",
                padding: "5px",
                "&:hover": { backgroundColor: isSticky ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" },
                borderRadius: "4px",
                transition: "color 0.3s ease",
              }}
              onClick={toggleSearchDrawer}
            >
              <SearchIcon sx={{ fontSize: "1.4rem" }} />
            </IconButton>
          </Box>
        )}
      </Toolbar>

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
            {renderMobileMenu(navigationItems)}
          </List>
        </Box>
      </Drawer>

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
            maxHeight: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 3,
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
            gap: 1.5,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontSize: { xs: "0.85rem", sm: "1rem", xl: "1.4rem" },
              fontFamily: "'Peugeot', Helvetica, sans-serif",
              color: "white",
              textTransform: "capitalize",
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
                  <SearchIcon sx={{ color: "white", fontSize: { xs: "1.1rem", xl: "1.54rem" } }} />
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
                fontSize: { xs: "0.8rem", sm: "0.9rem", xl: "1.26rem" },
                fontFamily: "'Peugeot', Helvetica, sans-serif",
                textTransform: "none",
              },
            }}
          />
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default MainNavBar;