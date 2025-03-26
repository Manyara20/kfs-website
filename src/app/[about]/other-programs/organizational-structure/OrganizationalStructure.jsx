"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { IoMdHelpCircle } from "react-icons/io";

// Styled Components
const PageContainer = styled(Box)({
  minHeight: "100vh",
  backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  padding: "2rem",
  position: "relative",
  overflow: "hidden",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
    opacity: 0.05,
    zIndex: 0,
  },
});

const ContentCard = styled(motion.div)({
  background: "rgba(255, 255, 255, 0.95)",
  padding: "3rem",
  maxWidth: "1200px",
  width: "100%",
  margin: "0 auto",
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
});

const Title = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  color: "#0f5a28",
  marginBottom: "1.5rem",
  fontSize: "2.5rem",
  lineHeight: 1.2,
  letterSpacing: "0.5px",
  textAlign: "center",
});

const Description = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#333",
  lineHeight: 1.6,
  fontSize: "1.1rem",
  marginBottom: "1.5rem",
  textAlign: "left",
});

const ListContainer = styled(Box)({
  marginBottom: "1.5rem",
  "& ul": {
    margin: "0.5rem 0",
    paddingLeft: "2rem",
  },
  "& li": {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "1.1rem",
    color: "#333",
    lineHeight: 1.6,
  },
});

const OrgChartContainer = styled(Box)({
  margin: "2rem 0",
  padding: "1rem",
  background: "#f9f9f9",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  overflowX: "auto",
});

const Node = styled(Box)(({ color }) => ({
  padding: "0.75rem",
  background: color || "#0E5827",
  color: color === "#FFF" ? "#000000" : "white", // Black text for white background
  borderRadius: "8px",
  textAlign: "center",
  fontFamily: "'Roboto', sans-serif",
  fontSize: "0.85rem",
  fontWeight: 500,
  minWidth: "120px",
  maxWidth: "150px",
  border: "2px solid #0E5827",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    opacity: 0.9,
    cursor: "pointer",
  },
}));

const ConnectorVertical = styled(Box)({
  borderLeft: "2px solid #0E5827",
  marginLeft: "auto",
  marginRight: "auto",
  width: "2px",
  height: "20px",
});

const ConnectorHorizontal = styled(Box)({
  borderTop: "2px solid #0E5827",
  height: "2px",
  width: "100%",
  position: "absolute",
  top: "-10px",
});

const LevelContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem",
  marginTop: "1rem",
  position: "relative",
});

const KeyContainer = styled(Box)({
  marginTop: "2rem",
  background: "#f0f4e8",
  borderRadius: "8px",
  padding: "1rem",
});

const CTAButton = styled(Button)({
  backgroundColor: "#6A961F",
  color: "white",
  padding: "0.75rem 2rem",
  marginTop: "2rem",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "#5a7f1a",
  },
});

// Organization and Grading Structure Page Component
export default function OrganizationGradingStructurePage() {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFontSizeChange = (increase) => {
    setFontSize((prev) => {
      const newSize = increase ? prev + 1 : prev - 1;
      return Math.max(12, Math.min(20, newSize));
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: "0.8", ease: "easeOut" } },
  };

  // Organizational structure data with updated KFS colors
  const orgStructure = {
    name: "Board of Directors",
    color: "#0E5827", // Dark green for top level
    level: "Board of Directors",
    children: [
      {
        name: "Chief Conservator of Forests (CCF)",
        color: "#0F5A26", // Slightly different dark green for CCF
        level: "CCF",
        children: [
          {
            name: "Directorate of Forest Protection and Security",
            color: "#226436", // Medium-dark green for Directorates
            level: "Directorate",
            children: [
              {
                name: "Forest Protection, Fire and Disaster Operations",
                color: "#245B3C", // Slightly lighter green for Divisions
                level: "Division",
                children: [
                  {
                    name: "Fire Management Section",
                    color: "#2E5B37", // Muted green for Sections
                    level: "Section",
                    children: [
                      { name: "Fire Response Unit", color: "#78A783", level: "Unit" }, // Light green for Units
                      { name: "Fire Prevention Unit", color: "#78A783", level: "Unit" },
                    ],
                  },
                  {
                    name: "Disaster Response Section",
                    color: "#2E5B37",
                    level: "Section",
                    children: [
                      { name: "Flood Response Unit", color: "#78A783", level: "Unit" },
                      { name: "Landslide Response Unit", color: "#78A783", level: "Unit" },
                    ],
                  },
                ],
              },
              {
                name: "Investigation, Prosecution & Inspection",
                color: "#245B3C",
                level: "Division",
                children: [
                  {
                    name: "Legal Enforcement Section",
                    color: "#2E5B37",
                    level: "Section",
                    children: [
                      { name: "Prosecution Unit", color: "#78A783", level: "Unit" },
                      { name: "Inspection Unit", color: "#78A783", level: "Unit" },
                    ],
                  },
                ],
              },
              { name: "Forest Law Enforcement Academy - FoLEA", color: "#245B3C", level: "Division" },
              { name: "Forest Security Intelligence", color: "#245B3C", level: "Division" },
              { name: "Kenya Forestry College - KFC", color: "#245B3C", level: "Division" },
              { name: "Forestry Advisory & County Liaison", color: "#245B3C", level: "Division" },
              { name: "Dry-land & Private Forest Development Coordination", color: "#245B3C", level: "Division" },
            ],
          },
          {
            name: "Directorate of Forest Conservation & Management",
            color: "#226436",
            level: "Directorate",
            children: [
              {
                name: "Natural Forest Conservation & Information Management",
                color: "#245B3C",
                level: "Division",
                children: [
                  {
                    name: "Biodiversity Section",
                    color: "#2E5B37",
                    level: "Section",
                    children: [
                      { name: "Wildlife Monitoring Unit", color: "#78A783", level: "Unit" },
                      { name: "Flora Preservation Unit", color: "#78A783", level: "Unit" },
                    ],
                  },
                ],
              },
              { name: "Forest Plantation Management", color: "#245B3C", level: "Division" },
              { name: "Conservancy Coordination", color: "#245B3C", level: "Division" },
            ],
          },
          {
            name: "Directorate of Strategy, Partnerships & Resource Mobilization",
            color: "#226436",
            level: "Directorate",
            children: [
              { name: "Partnerships & Resource Mobilization", color: "#245B3C", level: "Division" },
              { name: "Enterprise and Marketing", color: "#245B3C", level: "Division" },
              { name: "Planning, M&E and Performance Management", color: "#245B3C", level: "Division" },
              { name: "Quality Assurance & Risk Management", color: "#245B3C", level: "Division" },
            ],
          },
          {
            name: "Directorate of Corporate Services",
            color: "#226436",
            level: "Directorate",
            children: [
              {
                name: "Finance & Accounts",
                color: "#FFF", // White with black text
                level: "Sub-Division",
                children: [
                  {
                    name: "Budgeting Section",
                    color: "#2E5B37",
                    level: "Section",
                    children: [
                      { name: "Expenditure Unit", color: "#78A783", level: "Unit" },
                      { name: "Revenue Unit", color: "#78A783", level: "Unit" },
                    ],
                  },
                ],
              },
              { name: "Human Resource Management", color: "#FFF", level: "Sub-Division" },
              { name: "Administration & Infrastructure Development", color: "#FFF", level: "Sub-Division" },
              { name: "Information Communication Technology - ICT", color: "#FFF", level: "Sub-Division" },
              { name: "Corporate Communications", color: "#FFF", level: "Sub-Division" },
            ],
          },
          { name: "Directorate of Internal Audit", color: "#226436", level: "Directorate" },
          { name: "Directorate of Corporation Secretary", color: "#226436", level: "Directorate" },
          { name: "Supply Chain Management", color: "#245B3C", level: "Department" },
          { name: "Air-Wing", color: "#245B3C", level: "Department" },
          { name: "Inspectorate and Internal Affairs", color: "#245B3C", level: "Department" },
          {
            name: "Nairobi Conservancy",
            color: "#6F6F50", // Neutral greenish-brown for Conservancies
            level: "Conservancy",
            children: [
              {
                name: "Nairobi County",
                color: "#8B6A53", // Earthy brown for Counties
                level: "County",
                children: [
                  { name: "Karura Forest Station", color: "#78A783", level: "Station" }, // Light green for Stations
                  { name: "Ngong Road Forest Station", color: "#78A783", level: "Station" },
                ],
              },
              {
                name: "Kiambu County",
                color: "#8B6A53",
                level: "County",
                children: [
                  { name: "Kereita Forest Station", color: "#78A783", level: "Station" },
                ],
              },
            ],
          },
          {
            name: "Central Highlands Conservancy",
            color: "#6F6F50",
            level: "Conservancy",
            children: [
              {
                name: "Nyeri County",
                color: "#8B6A53",
                level: "County",
                children: [
                  { name: "Aberdare Forest Station", color: "#78A783", level: "Station" },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  // Updated key data with new KFS colors
  const keyData = [
    { level: "Board of Directors", color: "#0E5827", description: "Highest governing body" },
    { level: "CCF", color: "#0F5A26", description: "Chief Conservator of Forests (CEO)" },
    { level: "Directorate", color: "#226436", description: "Strategic leadership units" },
    { level: "Department/Division", color: "#245B3C", description: "Operational units" },
    { level: "Sub-Division", color: "#FFF", borderColor: "#0E5827", description: "Support and specialized roles" },
    { level: "Section", color: "#2E5B37", description: "Operational sections within divisions" },
    { level: "Unit", color: "#78A783", description: "Specialized units within sections" },
    { level: "Conservancy", color: "#6F6F50", description: "Regional management units" },
    { level: "County", color: "#8B6A53", description: "County-level management" },
    { level: "Station", color: "#78A783", description: "Local forest stations" },
  ];

  // Recursive component to render the org chart
  const renderNode = (node) => (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Node color={node.color}>{node.name}</Node>
      {node.children && (
        <>
          <ConnectorVertical />
          <LevelContainer>
            {node.children.map((child, index) => (
              <Box key={index} sx={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                {index > 0 && <ConnectorHorizontal sx={{ left: "0", width: `calc(50% + ${index * 75}px)` }} />}
                {index < node.children.length - 1 && <ConnectorHorizontal sx={{ right: "0", width: `calc(50% + ${(node.children.length - 1 - index) * 75}px)` }} />}
                {renderNode(child)}
              </Box>
            ))}
          </LevelContainer>
        </>
      )}
    </Box>
  );

  return (
    <PageContainer>
      <ContentCard
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={cardVariants}
      >
        <Title variant="h1">Organization Structure</Title>

        {/* Organizational Chart */}
        <OrgChartContainer>{renderNode(orgStructure)}</OrgChartContainer>

        {/* Key (Legend) */}
        <KeyContainer>
          <Typography variant="h6" sx={{ fontFamily: "'Poppins', sans-serif", color: "#0f5a28", marginBottom: "1rem" }}>
            Legend
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Level</TableCell>
                <TableCell>Color</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {keyData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.level}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: item.color,
                        border: item.borderColor ? `2px solid ${item.borderColor}` : "none",
                        display: "inline-block",
                        marginRight: "0.5rem",
                      }}
                    />
                    {item.color}
                  </TableCell>
                  <TableCell>{item.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KeyContainer>

        {/* Updated Description */}
        <Description component="div">
          The Service now has an Organization Structure that borrows its functionality from the Forest Conservation and Management Act, 2016 and provides for a lean span of control. The Chief Conservator of the Forests reports to the Board of Directors. To effectively carry out its functions and fulfill its strategic objectives and mandate, KFS is structured into six (6) Directorates and three (3) Departments whose heads report directly to the Chief Conservator of Forests (CEO) as follows;
        </Description>
        <ListContainer>
          <Typography component="div" sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, color: "#333", marginBottom: "0.5rem" }}>
            Six (6) Directorates namely:
          </Typography>
          <ul>
            <li>Forest Conservation and Management</li>
            <li>Forest Protection and Security</li>
            <li>Strategy, Partnerships & Resource Mobilization</li>
            <li>Corporate Services</li>
            <li>Internal Audit</li>
            <li>Corporation Secretary</li>
          </ul>
        </ListContainer>
        <ListContainer>
          <Typography component="div" sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, color: "#333", marginBottom: "0.5rem" }}>
            There are three (3) stand-alone Departments namely:
          </Typography>
          <ul>
            <li>Supply Chain Management</li>
            <li>Air-Wing</li>
            <li>Inspectorate and Internal Affairs</li>
          </ul>
        </ListContainer>
        <Description component="div">
          For better span of control, the approved organization structure helps the Service to implement her mandate through these functional levels as follows; through Departments, Divisions, Sections, Units, Conservancies, Counties, Stations the functional areas have been provided for as follows; Directorates; Departments; Divisions; Sections; Units; Conservancies; Counties and Stations.
        </Description>

        {/* Call to Action */}
        <Box sx={{ textAlign: "center" }}>
          <CTAButton href="https://recruitment.kenyaforestservice.org" target="_blank">
            Explore KFS Careers
          </CTAButton>
        </Box>
      </ContentCard>

      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
        <button
          onClick={() => handleFontSizeChange(true)}
          className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
          aria-label="Increase font size"
        >
          <IoMdHelpCircle className="text-white" />
        </button>
        <button
          onClick={() => handleFontSizeChange(false)}
          className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
          aria-label="Decrease font size"
        >
          <IoMdHelpCircle className="text-white" />
        </button>
      </div>
    </PageContainer>
  );
}