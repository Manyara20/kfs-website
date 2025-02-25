import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Menu, MenuItem, IconButton, Link, Drawer, List, ListItem, ListItemText, Collapse } from '@mui/material';
import { ArrowDropDown, Menu as MenuIcon, ExpandLess, ExpandMore } from '@mui/icons-material';

const MainNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({});

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const toggleDrawer = (open) => () => setDrawerOpen(open);
  const handleSubMenuToggle = (index) => {
    setOpenSubMenu((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'About', subItems: ['KFS Board', 'Senior Management', 'Core Programs', 'Other Programs', 'Projects'] },
    { label: 'Media Center', subItems: ['News & Events', 'Photo Gallery', 'Events Calendar', 'The Forester Magazine', 'Press Releases'] },
    { label: 'Quick Links', subItems: ['Tree Planting', 'Participatory Forest Management', 'EcoTourism', 'Online Systems'] },
    { label: 'Contact Us', link: '/contact' },
    { label: 'E-Documents', subItems: ['Public Documents', 'Legal Documents', 'Policy Documents', 'Video Documentation', 'Documents Archive'] },
    { label: 'Tenders', link: '/tenders' },
    { label:  'Jobs', link: '/jobs'}
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '85%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://whatthelogo.com/storage/logos/kenya-forest-service-96842.png" alt="KFS Logo" style={{ height: '50px', marginRight: '20px' }} />
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2.5 }}>
          {menuItems.map((item, index) => (
            item.subItems ? (
              <Box key={index}>
                <IconButton onClick={handleMenuOpen} sx={{ color: '#6A961F' }}>
                  <Typography variant="body1">{item.label}</Typography>
                  <ArrowDropDown sx={{ color: '#6A961F' }} />
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                  {item.subItems.map((subItem, idx) => (
                    <MenuItem key={idx} onClick={handleMenuClose}>{subItem}</MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Link key={index} href={item.link} sx={{ color: '#6A961F', textDecoration: 'none' }}>
                <Typography variant="body1">{item.label}</Typography>
              </Link>
            )
          ))}
        </Box>

        <IconButton edge="end" sx={{ display: { xs: 'block', md: 'none' } }} onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 500 }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem button onClick={() => handleSubMenuToggle(index)}>
                <ListItemText primary={item.label} />
                {item.subItems ? (openSubMenu[index] ? <ExpandLess /> : <ExpandMore />) : null}
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