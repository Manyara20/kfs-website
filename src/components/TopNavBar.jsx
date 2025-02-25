import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Email, Call, AccountBox, Assignment, AccessTime } from '@mui/icons-material';

const TopNavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#0D3C00' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px' }}>
        
        {/* Left side: Various details */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Staff Email */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: 'white' }}>
              <Email />
            </IconButton>
            <Typography variant="body2" sx={{ color: 'white' }}>Email</Typography>
          </Box>
          
          {/* Pipe separator */}
          <Typography variant="body2" sx={{ color: 'white' }}>||</Typography>
          
          {/* E-registration */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: 'white' }}>
              <Assignment />
            </IconButton>
            <Typography variant="body2" sx={{ color: 'white' }}>E-Registration</Typography>
          </Box>

          {/* Pipe separator */}
          <Typography variant="body2" sx={{ color: 'white' }}>||</Typography>

          {/* Research License */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: 'white' }}>
              <AccountBox />
            </IconButton>
            <Typography variant="body2" sx={{ color: 'white' }}>Research License</Typography>
          </Box>
        </Box>

        {/* Right side: Contact and operation hours */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Pipe separator */}
          <Typography variant="body2" sx={{ color: 'white' }}>||</Typography>
          
          {/* Toll-free call */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: 'white' }}>
              <Call />
            </IconButton>
            <Typography variant="body2" sx={{ color: 'white' }}>0800 123 456 - Toll Free</Typography>
          </Box>

          {/* Pipe separator */}
          <Typography variant="body2" sx={{ color: 'white' }}>||</Typography>

          {/* Working Hours */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: 'white' }}>
              <AccessTime />
            </IconButton>
            <Typography variant="body2" sx={{ color: 'white' }}>Mon-Fri(8am - 5pm) Sat & Sun CLOSED</Typography>
          </Box>

          {/* Pipe separator */}
          <Typography variant="body2" sx={{ color: 'white' }}>||</Typography>

          {/* Public Email */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: 'white' }}>
              <Email />
            </IconButton>
            <Typography variant="body2" sx={{ color: 'white' }}>info@kenyaforestservice.org</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
