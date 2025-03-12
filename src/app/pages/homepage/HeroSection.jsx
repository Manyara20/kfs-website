import React from 'react';
import { Box, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '80vh',
        backgroundImage: 'url(https://th.bing.com/th/id/R.ac067b59d49524eb63f49efceee9d4a5?rik=P2w2V4X9HHSCyw&pid=ImgRaw&r=0)', // Ensure the URL is correctly wrapped with url() and quotes
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'flex-start',  
        alignItems: 'flex-start',      
        color: 'white',
        padding: '20px', 
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: '4rem',  
            fontWeight: 'bold', 
            marginBottom: '20px',
            letterSpacing: '2px', // Add some letter spacing if needed
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', 
          }}
        >
          Kenya Forest Service
        </Typography>
        <Typography
          variant="h2"
          sx={{// Adjust font size
            fontSize: '2.5rem',
            marginBottom: '20px',
            fontStyle: 'italic', // Make the description italic if desired
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', 
          }}
        >
          Kenya Forest Service is a state corporation that was created through the Forest Act (2005)
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
