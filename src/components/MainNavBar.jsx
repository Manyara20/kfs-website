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
  Button,
} from "@mui/material";
import {
  ArrowDropDown,
  Menu as MenuIcon,
  Search as SearchIcon,
  ExpandLess,
  ExpandMore,
  Twitter,
  Facebook,
  Instagram, // Using Instagram icon as a placeholder for TikTok
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import navigationItems from "./navigationItems";

const MainNavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});
  const [isSticky, setIsSticky] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => setDrawerOpen(open);
  const toggleSearchDrawer = () => setSearchDrawerOpen((prev) => !prev);

  const handleToggle = (key) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const flattenItems = (items, parentPath = []) => {
    let flatItems = [];
    items.forEach((item) => {
      const currentPath = [...parentPath, item.label];
      if (item.link) {
        flatItems.push({ label: currentPath.join(" > "), link: item.link, isExternal: item.isExternal });
      }
      if (item.subItems?.length > 0) {
        flatItems = flatItems.concat(flattenItems(item.subItems, currentPath));
      }
    });
    return flatItems;
  };

  const flatNavigationItems = flattenItems(navigationItems);

  useEffect(() => {
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase().trim();
      const filtered = flatNavigationItems.filter((item) =>
        item.label.toLowerCase().includes(lowerQuery)
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      const topNavHeight = 28;
      setIsSticky(window.scrollY > topNavHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            color: isSticky ? "white" : "#6A961F",
            "&:hover": { backgroundColor: isSticky ? "rgba(255,255,255,0.1)" : "rgba(106,150,31,0.1)" },
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
          {item.subItems?.length > 0 && (
            <ArrowDropDown
              sx={{
                color: isSticky ? "rgba(0,0,0,0.3)" : "#6A961F",
                fontSize: "1.1rem",
                marginLeft: level % 2 === 0 ? "auto" : "0",
              }}
            />
          )}
        </MenuItem>
        {item.subItems?.length > 0 && (
          <Box
            sx={{
              visibility: "hidden",
              opacity: 0,
              position: "absolute",
              top: "100%",
              left: "100%",
              backgroundColor: isSticky ? "rgba(13,60,0,0.9)" : "0,0,0,0.1",
              minWidth: "180px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
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

  const renderMobileMenu = (items, parentIdx = "", level = 0) => {
    return items.map((item, idx) => {
      const key = parentIdx ? `${parentIdx}-${idx}` : `${idx}`;
      const hasSubItems = item.subItems?.length > 0;

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
                color: isSticky ? "rgba(0,0,0,0.1)" : "#6A961F",
                padding: "8px 16px",
                display: "flex",
                justifyContent: " esthenticate",
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
                  <ExpandLess sx={{ color: isSticky ? "white" : "#6A961F" }} />
                ) : (
                  <ExpandMore
                    sx={{
                      color: isSticky ? "white" : "#6A961F",
                      marginLeft: level % 2 === 0 ? "auto" : "0",
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

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: isSticky ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.1)",
        backdropFilter: "blur(8px)",
        boxShadow: isSticky ? "0 2px 5px rgba(0,0,0,0.1)" : "none",
        top: { xs: 0, md: 48 },
        zIndex: 20,
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", sm: "90%", lg: "85%", xl: "80%" },
          maxWidth: "1600px",
          margin: "auto",
          backgroundColor: isSticky ? "rgba(0,0,0,0)" : "rgba(0,0,0,0)",
          borderRadius: "8px",
          padding: "0.5rem 1rem",
          boxShadow: "0 2px 4px rgba(0,0,0,0)",
        }}
      >
        <Toolbar
          sx={{
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
                src="/images/kfs_logo.png"
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
                        color: isSticky ? "white" : "white", //text
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        fontSize: { md: "0.75rem", lg: "0.75rem", xl: "1.05rem" },
                        fontFamily: "'Peugeot', Helvetica, sans-serif",
                        fontWeight: 500,
                        padding: { md: "5px 7px", lg: "7px 10px" },
                        "&:hover": { backgroundColor: isSticky ? "rgba(255,255,255,0.1)" : "rgba(106,150,31,0.1)" },
                        textTransform: "capitalize",
                      }}
                    >
                      {item.label}
                      <ArrowDropDown sx={{ color: isSticky ? "white" : "white", fontSize: "1.1rem" }} />
                    </Typography>
                    <Box
                      sx={{
                        visibility: "hidden",
                        opacity: 0,
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        backgroundColor: isSticky ? "rgba(13,60,0,0.9)" : "white",
                        minWidth: "180px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
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
                      color: isSticky ? "white" : "white",
                      textDecoration: "none",
                      padding: { md: "5px 7px", lg: "7px 10px" },
                      "&:hover": { backgroundColor: isSticky ? "rgba(255,255,255,0.1)" : "rgba(106,150,31,0.1)" },
                      display: "flex",
                      alignItems: "center",
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

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {!isMobile && (
              <IconButton
                sx={{
                  color: isSticky ? "white" : "black",
                  fontWeight: "bold",
                  padding: { md: "5px", lg: "7px" },
                  "&:hover": { backgroundColor: isSticky ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" },
                }}
                onClick={toggleSearchDrawer}
              >
                <SearchIcon sx={{ fontSize: { xs: "1.4rem", md: "1.6rem", xl: "2rem" } }} />
              </IconButton>
            )}

            <Button
              variant="contained"
              sx={{
                backgroundColor: isSticky ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.3)",
                color: isSticky ? "white" : "white",
                borderRadius: "20px",
                padding: { xs: "6px 12px", md: "8px 16px" },
                display: "flex",
                gap: 1,
                "&:hover": {
                  backgroundColor: isSticky ? "rgba(255,255,255,0.3)" : "#5A851A",
                },
              }}
            >
              <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
                <Twitter sx={{ color: "white", fontSize: { xs: "1.2rem", xl: "1.68rem" } }} />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook sx={{ color: "white", fontSize: { xs: "1.2rem", xl: "1.68rem" } }} />
              </Link>
              <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <Instagram sx={{ color: "white", fontSize: { xs: "1.2rem", xl: "1.68rem" } }} /> {/* Placeholder for TikTok */}
              </Link>
            </Button>

            {isMobile && (
              <>
                <IconButton
                  sx={{ color: isSticky ? "white" : "black", padding: "5px" }}
                  onClick={toggleSearchDrawer}
                >
                  <SearchIcon sx={{ fontSize: "1.4rem" }} />
                </IconButton>
                <IconButton
                  sx={{ color: isSticky ? "white" : "#6A961F", padding: "5px" }}
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              </>
            )}
          </Box>
        </Toolbar>
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "80%", sm: "60%" },
            maxWidth: "300px",
            backgroundColor: isSticky ? "rgba(13,60,0,0.9)" : "white",
            color: isSticky ? "white" : "#6A961F",
            padding: "1rem",
          },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ position: "absolute", top: "1rem", right: "1rem", color: isSticky ? "white" : "#6A961F" }}
          >
            <MenuIcon />
          </IconButton>
          <List sx={{ paddingTop: "3rem" }}>{renderMobileMenu(navigationItems)}</List>
        </Box>
      </Drawer>

      <Drawer
        anchor="top"
        open={searchDrawerOpen}
        onClose={toggleSearchDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: isSticky ? "rgba(13,60,0,0.9)" : "rgba(0, 0, 0, 0.85)",
            color: "white",
            height: "auto",
            width: "100%",
            maxHeight: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 3,
            overflowY: "auto",
          },
        }}
      >
        <Box
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
          {filteredItems.length > 0 && (
            <List sx={{ mt: 2, bgcolor: isSticky ? "rgba(13,60,0,0.9)" : "white", maxHeight: "50vh", overflowY: "auto" }}>
              {filteredItems.map((item, idx) => (
                <ListItem key={idx} disablePadding>
                  <ListItemButton
                    component={Link}
                    href={item.link}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    sx={{
                      color: isSticky ? "white" : "#6A961F",
                      padding: "8px 16px",
                      "&:hover": { bgcolor: isSticky ? "rgba(255,255,255,0.1)" : "rgba(106,150,31,0.1)" },
                    }}
                    onClick={() => {
                      setSearchDrawerOpen(false);
                      setSearchQuery("");
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
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
          {searchQuery.trim() && filteredItems.length === 0 && (
            <Typography
              sx={{
                color: "white",
                textAlign: "center",
                mt: 2,
                fontSize: { xs: "0.85rem", sm: "1rem" },
                fontFamily: "'Peugeot', Helvetica, sans-serif",
              }}
            >
              No results found.
            </Typography>
          )}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default MainNavBar;