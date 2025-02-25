import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import GoalIcon from '@mui/icons-material/TrackChanges';
import MissionIcon from '@mui/icons-material/EmojiObjects';
import VisionIcon from '@mui/icons-material/Visibility';

const StrategicSection = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#e6f5e6' }}>
      <Grid container spacing={4}>
        {/* Our Mission */}
        <Grid item xs={12} md={4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <MissionIcon sx={{ fontSize: 60, color: '#6A961F' }} />
            <CardContent>
              <Typography variant="h5" gutterBottom>Our Mission</Typography>
              <Typography variant="body1" align="center">
              Conservation, management, development and sustainable utilization of forests and allied resources for current and future generation. 
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Our Vision */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <VisionIcon sx={{ fontSize: 60, color: '#6A961F' }} />
            <CardContent>
              <Typography variant="h5" gutterBottom>Our Vision</Typography>
              <Typography variant="body1" align="center">
              To be an internationally recognized organization of excellence in knowledge based sustainable forest resources development, conservation and management. 
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Strategic Goal */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <GoalIcon sx={{ fontSize: 60, color: '#6A961F' }} />
            <CardContent>
              <Typography variant="h5" gutterBottom>Strategic Goal</Typography>
              <Typography variant="body1" align="center">
              Sustainably manage all forests and build resilient forest ecosystems.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StrategicSection;
