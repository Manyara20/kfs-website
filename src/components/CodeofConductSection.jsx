import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';

const CodeOfConductSection = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side: Image and Logo */}
        <Grid item xs={12} md={6}>
          <img
            src="https://www.kbc.co.ke/wp-content/uploads/2023/09/KFS.jpeg" // Replace with the URL of the personnel image
            alt="KFS Personnel"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          
          {/* KFS Logo below the image */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: 2 }}>
            <img
              src="https://th.bing.com/th/id/R.e05b02abfe95029c425adbc0ba7b900c?rik=3o4JFkXm2MflHQ&pid=ImgRaw&r=0" // Replace with the URL of the KFS logo
              alt="KFS Logo"
              style={{ width: '150px', marginBottom: '10px' }} // Adjust size and margin as needed
            />
            <Typography variant="caption" color="textSecondary">
              THE CODE OF CONDUCT AND ETHICS 2021
            </Typography>
          </Box>
        </Grid>

        {/* Right Side: Text Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Strategic Objectives
          </Typography>
          <Typography variant="body1" paragraph>
            The Strategic Objectives serve as a roadmap to achieve the Kenya Forest Service’s mission and vision. The service will therefore focus on the following strategic objectives;
          </Typography>

          {/* List of Strategic Objectives */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              'To rehabilitate degraded natural forest areas, develop and conserve all public natural forests.',
              'To restock and sustainably manage all public forest plantations.',
              'To increase forest cover outside public forest areas.',
              'To protect and secure public forests and other corporate assets.',
              'To strengthen capacity for efficient utilization of resources and effective service delivery.'
            ].map((objective, index) => (
              <Button
                key={index}
                variant="contained"
                sx={{
                  backgroundColor: '#4caf50', // Green background color for the button
                  color: 'white', // Text color
                  padding: '15px', // Padding to make the button look like a bar
                  textAlign: 'left', // Align text to the left
                  borderRadius: '8px', // Rounded corners
                  '&:hover': {
                    backgroundColor: '#388e3c', // Darker green on hover
                  },
                }}
              >
                {objective}
              </Button>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CodeOfConductSection;
