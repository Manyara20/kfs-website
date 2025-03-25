import Link from 'next/link';
import { Container, Typography, Box, Paper, Button, List, ListItem, ListItemText } from '@mui/material';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

export default function JobVacancies() {
  return (
    <Box sx={{ bgcolor: '#f4f4f4', minHeight: '100vh' }}>
      <TopNavBar />
      <MainNavBar />

      {/* Header Section */}
      <Box sx={{ bgcolor: '#0d5602', py: 4, textAlign: 'center', color: 'white' }}>
        <Typography variant="h3" fontWeight={600}>Job Vacancies</Typography>
      </Box>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Introduction Section */}
        <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 2, bgcolor: '#e6f5e6' }}>
          <Typography variant="h5" color="#0d5602" fontWeight={600} gutterBottom>
            Join the Kenya Forest Service
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Kenya Forest Service (KFS) is a State Corporation established under the Forest Conservation & Management Act (FCMA), 2016. The mandate of KFS is to protect, conserve, develop and sustainably manage forests and allied resources for environmental stability and socio-economic benefits for the present and future generations...
          </Typography>
        </Paper>

        {/* Job Listing Section */}
        <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom color="#0d5602">Available Positions</Typography>
          <Box sx={{ p: 3, bgcolor: '#f9f9f9', borderRadius: 2 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom color="#0d5602">
              COMMUNICATION EXPERT KFS GRADE 6 (REF KFS/CE/2025)
            </Typography>
            <Typography variant="subtitle1" fontWeight={600} color="#228B22">
              Job Specification
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The Communication Expert shall report directly to the Project Manager...
            </Typography>

            <Typography variant="subtitle1" fontWeight={600} color="#228B22" sx={{ mt: 2 }}>
              Duties and Responsibilities
            </Typography>
            <List>
              <ListItem><ListItemText primary="Implement relevant communication strategies." /></ListItem>
              <ListItem><ListItemText primary="Facilitate communication training programs..." /></ListItem>
              <ListItem><ListItemText primary="Spearhead effective exchange of information..." /></ListItem>
            </List>

            <Typography variant="subtitle1" fontWeight={600} color="#228B22" sx={{ mt: 2 }}>
              Person Specification
            </Typography>
            <List>
              <ListItem><ListItemText primary="Bachelor’s degree in Communication, Social Sciences..." /></ListItem>
              <ListItem><ListItemText primary="Member of a professional body such as PRSK." /></ListItem>
              <ListItem><ListItemText primary="Proficiency in Computer applications." /></ListItem>
            </List>
          </Box>
        </Paper>

        {/* How to Apply Section */}
        <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 2, textAlign: 'center', bgcolor: '#e6f5e6' }}>
          <Typography variant="h5" fontWeight={600} gutterBottom color="#0d5602">How to Apply</Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>Step 1:</strong> Visit the official Kenya Forest Service website:
            <Link href="https://www.kenyaforestservice.org" passHref>
              <Button variant="contained" sx={{ ml: 1, bgcolor: '#0d5602', '&:hover': { bgcolor: '#0a4201' } }}>Apply Online</Button>
            </Link>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <strong>Step 2:</strong> Submit a hard copy application with relevant documents.
          </Typography>
        </Paper>

        {/* Additional Notes */}
        <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom color="#0d5602">Note</Typography>
          <List>
            <ListItem><ListItemText primary="The application process includes both online and hard copy submissions." /></ListItem>
            <ListItem><ListItemText primary="Shortlisted candidates must provide original documents." /></ListItem>
            <ListItem><ListItemText primary="KFS is an equal opportunity employer." /></ListItem>
          </List>
        </Paper>
      </Container>
      <FooterBottom />
    </Box>
  );
}
