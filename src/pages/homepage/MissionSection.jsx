import Image from 'next/image';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const data = [
  {
    title: 'Mission',
    image: '/images/OIP.jpg',
    description:
      'Conservation, management, development and sustainable utilization of forests and allied resources for current and future generation.',
  },
  {
    title: 'Vision',
    image: '/images/20210614_kenya-Kanaan-Mataathia_0312.webp',
    description:
      'To be an internationally recognized organization of excellence in knowledge-based sustainable forest resources development, conservation, and management.',
  },
  {
    title: 'Strategic Goal',
    image: '/images/kenyas_goal_of_ac5f8973a9d77a1.jpg',
    description:
      'Sustainably manage all forests and build resilient forest ecosystems.',
  },
];

export default function MissionVisionGoal() {
  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 3 }}>
      <Grid container spacing={3} justifyContent="center">
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 0,
                boxShadow: 3,
                position: 'relative',
                height: 400, 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ position: 'relative', height: 250, overflow: 'hidden' }}>
                <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    textAlign: 'center',
                    py: 1,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" color="text.secondary" textAlign="center">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
