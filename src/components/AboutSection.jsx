import React from 'react';
import { Box, Typography, Button, Card, CardContent, Grid } from '@mui/material';

const AboutSection = () => {
  return (
    <Box p={4} bgcolor="#e6f5e6">
      <Grid container spacing={4} alignItems="center">
        {/* Right side content with dynamic style */}
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: '#f9fdf9', boxShadow: '0 6px 20px rgba(0,0,0,0.15)', borderRadius: '16px', p: 3 }}>
            <CardContent>
              <Typography variant="h3" gutterBottom color="#4A7C12" fontWeight="bold" sx={{ textTransform: 'uppercase' }}>
                About Kenya Forest Service
              </Typography>
              <Typography variant="body1" paragraph>
                Kenya Forest Service (KFS) is dedicated to the sustainable management and protection of our forests for future generations.
              </Typography>
              <Typography variant="body1" paragraph>
                KFS empowers communities, promotes biodiversity, and drives eco-conscious initiatives to safeguard our natural heritage.
              </Typography>
              <Button variant="outlined" sx={{ color: '#4A7C12', borderColor: '#4A7C12', '&:hover': { backgroundColor: '#4A7C12', color: 'white' }, mt: 2 }}>
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Left side image with a modern overlay */}
        <Grid item xs={12} md={6}>
          <Box position="relative" display="flex" justifyContent="center" alignItems="center">
            <img src="https://miro.medium.com/v2/resize:fit:1200/1*hofwQ-V85gLwAGACkFINBQ.jpeg" alt="About KFS" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }} />
            <Box position="absolute" bgcolor="rgba(74,124,18,0.7)" color="white" p={2} borderRadius="16px">
              <Typography variant="h5" fontWeight="bold">Committed to a Greener Future</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
