import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Email, Call, AccountBox, Assignment, AccessTime } from '@mui/icons-material';

const TopNavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#0D3C00' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 12px',
          flexWrap: 'nowrap',
          overflow: 'hidden',
          alignItems: 'stretch',
        }}
      >
        {/* Left side: Various details */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'nowrap' }}>
          {/* Staff Email */}
          <Box sx={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            <IconButton sx={{ color: 'white', padding: '4px' }}>
              <Email fontSize="small" />
            </IconButton>
            <Typography variant="body2" sx={{ color: 'white', fontSize: '0.75rem' }}>Email</Typography>
          </Box>
  
          <Typography variant="body2" sx={{ color: 'white', fontSize: '0.75rem' }}>||</Typography>

          {/* E-registration */}
          <Box sx={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            <IconButton sx={{ color: 'white', padding: '4px' }}>
              <Assignment fontSize="small" />
            </IconButton>
            <Typography variant="body2" sx={{ color: 'white', fontSize: '0.75rem' }}>E-Registration</Typography>
          </Box>

          <Typography variant="body2" sx={{ color: 'white', fontSize: '0.75rem' }}>||</Typography>

          {/* Research License */}
          <Box sx={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            <IconButton sx={{ color: 'white', padding: '4px' }}>
              <AccountBox fontSize="small" />
            </IconButton>
            <Typography variant="body2" sx={{ color: 'white', fontSize: '0.75rem' }}>Research License</Typography>
          </Box>
        </Box>

        {/* Right side: Contact and operation hours */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'nowrap' }}>
          

          {/* Toll-free call */}
          <Box sx={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            <IconButton sx={{ color: 'white', padding: '4px' }}>
              <Call fontSize="small" />
            </IconButton>
            <Typography variant="body2" sx={{ color: 'white', fontSize: '0.75rem' }}>
              0800 123 456 - Toll Free
            </Typography>
          </Box>
          <Box sx={{ width: '1px', height: '100%', backgroundColor: 'white' }} />
        

          {/* Working Hours */}
          <Box sx={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            <IconButton sx={{ color: 'white', padding: '4px' }}>
              <AccessTime fontSize="small" />
            </IconButton>
            <Typography variant="body2" sx={{ color: 'white', fontSize: '0.75rem' }}>
              Mon-Fri (8am - 5pm) Sat & Sun CLOSED
            </Typography>
          </Box>
          <Box sx={{ width: '1px', height: '100%', backgroundColor: 'white' }} />


         


          {/* Public Email */}
          <Box sx={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            <IconButton sx={{ color: 'white', padding: '4px' }}>
              <Email fontSize="small" />
            </IconButton>
            <Typography variant="body2" sx={{ color: 'white', fontSize: '0.75rem' }}>
              info@kenyaforestservice.org
            </Typography>
          </Box>
          
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
