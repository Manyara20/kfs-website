"use client";
import Link from 'next/link';
import { Container, Typography, Box, Paper, Button, List, ListItem, ListItemText, IconButton, Collapse, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import { useState } from 'react';


const MainCard = styled(Paper)({
  background: 'linear-gradient(145deg, #ffffff 0%, #f9f9f9 100%)',
  boxShadow: '10 10px 30px rgba(0, 0, 0, 0.08)',
  overflow: 'hidden',
  border: '1px solid #e8ecef',
  marginBottom: '40px',
});

const HeroSection = styled(Box)({
  position: 'relative',
  height: '250px',
  backgroundImage: `linear-gradient(rgba(13, 86, 2, 0.85), rgba(13, 86, 2, 0.85)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'white',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'inherit',
    filter: 'blur(3px)',
    zIndex: -1,
  },
});

const IntroCard = styled(Paper)({
  padding: '20px 30px',
  textAlign: 'center',
  background: '#f5f7fa',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e8ecef',
  margin: '20px 30px',
});

const JobSection = styled(Box)({
  padding: '30px',
  textAlign: 'center',
});

const JobHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mb: 2,
  padding: '15px',
  background: '#245b3c',
  borderRadius: '8px',
  border: '1px solid #e8ecef',
  maxWidth: '1000px', // Increased width
  margin: '0 auto',
});

const JobDetails = styled(Paper)({
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
  gap: '20px',
  padding: '20px',
  background: '#ffffff',
  borderRadius: '8px',
  border: '1px solid #e8ecef',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Added shadow
  maxWidth: '1000px', // Increased width
  margin: '0 auto',
});

const ApplyNoteWrapper = styled(Box)({
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  gap: '20px',
  padding: '30px',
  justifyContent: 'center',
  alignItems: 'stretch',
});

const StickyNote = styled(Box)({
  background: '#FFFFE0',
  padding: '20px',
  width: '100%',
  maxWidth: '400px',
  textAlign: 'center',
  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  border: '1px solid #d4d4d4',
  position: 'relative',
  fontFamily: "'Indie Flower', 'Comic Sans MS', 'Chalkboard SE', sans-serif", // Handwritten font
});

const Clip = styled(Box)({
  position: 'absolute',
  top: '-15px',
  width: '30px',
  height: '30px',
  background: '#1a1a1a',
  borderRadius: '4px',
  border: '2px solid #333',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
  transform: 'rotate(45deg)',
  zIndex: 10,
});

const ClipLeft = styled(Clip)({
  left: '20px',
});

const ClipRight = styled(Clip)({
  right: '20px',
});

const StyledButton = styled(Button)({
  background: 'linear-gradient(45deg, #0D5602 30%, #1a6b1a 90%)',
  color: 'white',
  padding: '10px 30px',
  fontFamily: "'Indie Flower', 'Comic Sans MS', 'Chalkboard SE', sans-serif", // Handwritten font for button
  fontWeight: 600,
  fontSize: '0.9rem',
  borderRadius: '8px',
  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #0A4201 30%, #145214 90%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  },
});

export default function JobVacancies() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ bgcolor: '#e8f5e9', minHeight: '100vh' }}>
      <TopNavBar />
      <MainNavBar />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Main Card Containing All Sections */}
        <MainCard elevation={3}>
          {/* Hero Section */}
          <HeroSection>
            <Typography
              variant="h3"
              fontWeight={800}
              fontFamily="'Poppins', sans-serif"
              fontSize={{ xs: '1.8rem', md: '2.5rem' }}
              sx={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}
            >
              Join the Kenya Forest Service
            </Typography>
            <Typography
              variant="body1"
              fontFamily="'Roboto', sans-serif"
              fontSize={{ xs: '0.9rem', md: '1.1rem' }}
              mt={1}
              maxWidth="600px"
              sx={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)' }}
            >
              Be part of a legacy in conserving Kenya’s forests for a sustainable future.
            </Typography>
          </HeroSection>

          {/* Single Line Space */}
          <Divider sx={{ borderColor: '#e8ecef', mx: '30px', my: 1 }} />

          {/* Introduction Section (About KFS) */}
          <IntroCard elevation={3}>
            <Typography
              variant="h5"
              fontWeight={600}
              color="#0D5602"
              fontFamily="'Poppins', sans-serif"
              fontSize={{ xs: '1.25rem', md: '1.5rem' }}
              mb={2}
            >
              About Kenya Forest Service
            </Typography>
            <Typography
              variant="body1"
              color="#333"
              fontFamily="'Roboto', sans-serif"
              fontSize={{ xs: '0.9rem', md: '1rem' }}
              lineHeight={1.6}
              maxWidth="800px"
              mx="auto"
            >
              Kenya Forest Service (KFS) is a State Corporation established under the Forest Conservation & Management Act (FCMA), 2016. The Mandate of KFS is to protect, conserve, develop and sustainably manage forests and allied resources for environmental stability and social-economic benefits for the present and future generations. KFS has partnered with the Global Environment Facility (GEF-7) through Food and Agricultural Organization of the United Nation (FAO) to support implementation of the Integrated Landscape Management for Conservation and Restoration of Mt. Elgon Ecosystem Project in Western Kenya. The Service wishes to recruit qualified personnel for a one-year renewable temporary contract.
            </Typography>
          </IntroCard>

          {/* Single Line Space */}
          <Divider sx={{ borderColor: '#e8ecef', mx: '30px', my: 1 }} />

          {/* Job Listings Section */}
          <JobSection>
            <Typography
              variant="h5"
              fontWeight={600}
              color="#0D5602"
              fontFamily="'Poppins', sans-serif"
              fontSize={{ xs: '1.25rem', md: '1.5rem' }}
              mb={3}
            >
              Available Positions
            </Typography>

            <JobHeader>
              <Typography
                variant="h6"
                fontWeight={600}
                color="#fff"
                fontFamily="'Poppins', sans-serif"
                fontSize={{ xs: '1rem', md: '1.1rem' }}
              >
                Communication Expert KFS Grade 6 (REF KFS/CE/2025) - One (1) Post
              </Typography>
              <IconButton
                onClick={handleExpandClick}
                sx={{
                  color: '#fff', // Green color for the arrow
                  '&:hover': { color: '#fff' }, // Darker green on hover
                }}
              >
                {expanded ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </JobHeader>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <JobDetails elevation={3}>
                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    color="#0D5602"
                    fontFamily="'Roboto', sans-serif"
                    fontSize={{ xs: '0.95rem', md: '1rem' }}
                    mb={1}
                  >
                    Job Specification
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#444"
                    fontFamily="'Roboto', sans-serif"
                    fontSize={{ xs: '0.85rem', md: '0.9rem' }}
                    lineHeight={1.5}
                    mb={2}
                  >
                    The Communication Expert shall report directly to the Project Manager and work in liaison with the Service’s corporate communication department and in collaboration with other Project staff and partners.
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    color="#0D5602"
                    fontFamily="'Roboto', sans-serif"
                    fontSize={{ xs: '0.95rem', md: '1rem' }}
                    mb={1}
                  >
                    Duties and Responsibilities
                  </Typography>
                  <List sx={{ mb: 2, pl: 2 }}>
                    {[
                      "Implement relevant communication strategies.",
                      "Facilitate all communication training programs targeting staff, KALRO, FAO, external staff, and other stakeholders within the project area.",
                      "Participate and contribute in interdepartmental planning and monitoring project activities.",
                      "Spearhead effective exchange of information between the project and its publics.",
                      "Undertake communication research activities and dissemination of research findings to relevant audience within the project area.",
                      "Mentoring and coaching.",
                    ].map((duty, index) => (
                      <ListItem key={index} sx={{ display: 'list-item', listStyleType: 'disc', pl: 0, py: 0.5 }}>
                        <ListItemText
                          primary={duty}
                          primaryTypographyProps={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: { xs: '0.85rem', md: '0.9rem' },
                            color: '#444',
                            lineHeight: 1.5,
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    color="#0D5602"
                    fontFamily="'Roboto', sans-serif"
                    fontSize={{ xs: '0.95rem', md: '1rem' }}
                    mb={1}
                  >
                    Person Specification
                  </Typography>
                  <List sx={{ mb: 2, pl: 2 }}>
                    {[
                      "Bachelor’s degree in Communication, Social Sciences, Journalism, International Relations or other related fields of study.",
                      "Served for at least six (6) years in a relevant position.",
                      "Member of a professional body such as PRSK.",
                      "Proficiency in Computer applications.",
                      "Fulfil the requirements of Chapter Six of the Constitution.",
                    ].map((spec, index) => (
                      <ListItem key={index} sx={{ display: 'list-item', listStyleType: 'disc', pl: 0, py: 0.5 }}>
                        <ListItemText
                          primary={spec}
                          primaryTypographyProps={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: { xs: '0.85rem', md: '0.9rem' },
                            color: '#444',
                            lineHeight: 1.5,
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    color="#0D5602"
                    fontFamily="'Roboto', sans-serif"
                    fontSize={{ xs: '0.95rem', md: '1rem' }}
                    mb={1}
                  >
                    Skills and Attributes
                  </Typography>
                  <List sx={{ pl: 2 }}>
                    {[
                      "Good oral and written communication skills in Kiswahili and English.",
                      "Time management and proper planning.",
                      "Good analytical skills.",
                      "Team player.",
                    ].map((skill, index) => (
                      <ListItem key={index} sx={{ display: 'list-item', listStyleType: 'disc', pl: 0, py: 0.5 }}>
                        <ListItemText
                          primary={skill}
                          primaryTypographyProps={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: { xs: '0.85rem', md: '0.9rem' },
                            color: '#444',
                            lineHeight: 1.5,
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </JobDetails>
            </Collapse>
          </JobSection>

          <Divider sx={{ borderColor: '#e8ecef', mx: '30px', my: 1 }} />

          {/* How to Apply and Note Sections as Sticky Notes */}
          <ApplyNoteWrapper>
            <StickyNote>
              <ClipLeft />
              <ClipRight />
              <Typography
                variant="h5"
                fontWeight={600}
                color="#333"
                mb={2}
                fontFamily="'Indie Flower', 'Comic Sans MS', 'Chalkboard SE', sans-serif"
                fontSize={{ xs: '1.1rem', md: '1.25rem' }}
              >
                How to Apply
              </Typography>
              <Typography
                variant="body1"
                color="#333"
                mb={2}
                fontFamily="'Indie Flower', 'Comic Sans MS', 'Chalkboard SE', sans-serif"
                fontSize={{ xs: '0.85rem', md: '0.9rem' }}
                lineHeight={1.5}
              >
                <strong>Step 1:</strong> Visit the official Kenya Forest Service website:
              </Typography>
              <Link href="https://www.kenyaforestservice.org" passHref>
                <StyledButton>Apply Online</StyledButton>
              </Link>
              <Typography
                variant="body1"
                color="#333"
                mt={2}
                fontFamily="'Indie Flower', 'Comic Sans MS', 'Chalkboard SE', sans-serif"
                fontSize={{ xs: '0.85rem', md: '0.9rem' }}
                lineHeight={1.5}
              >
                <strong>Step 2:</strong> Submit a hard copy application with relevant documents.
              </Typography>
            </StickyNote>

            <StickyNote>
              <ClipLeft />
              <ClipRight />
              <Typography
                variant="h6"
                fontWeight={600}
                color="#333"
                mb={2}
                fontFamily="'Indie Flower', 'Comic Sans MS', 'Chalkboard SE', sans-serif"
                fontSize={{ xs: '1.1rem', md: '1.25rem' }}
              >
                Note
              </Typography>
              <List>
                {[
                  "The application process includes both online and hard copy submissions.",
                  "Shortlisted candidates must provide original documents.",
                  "KFS is an equal opportunity employer.",
                ].map((note, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemText
                      primary={note}
                      primaryTypographyProps={{
                        fontFamily: "'Indie Flower', 'Comic Sans MS', 'Chalkboard SE', sans-serif",
                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                        color: '#444',
                        textAlign: 'center',
                        lineHeight: 1.5,
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </StickyNote>
          </ApplyNoteWrapper>
        </MainCard>
      </Container>

      <FooterBottom />
    </Box>
  );
}