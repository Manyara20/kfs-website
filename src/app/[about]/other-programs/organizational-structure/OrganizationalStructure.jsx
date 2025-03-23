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
  overflowX: "auto",
  display: "flex",
  justifyContent: "center",
});

const Node = styled(Box)(({ color }) => ({
  padding: "1rem",
  background: color || "#6A961F",
  color: color === "#FFFFFF" ? "#333" : "white",
  borderRadius: "8px",
  textAlign: "center",
  fontFamily: "'Roboto', sans-serif",
  fontSize: "0.9rem",
  fontWeight: 500,
  minWidth: "150px",
  border: "2px solid #6A961F",
  "&:hover": {
    opacity: 0.9,
    cursor: "pointer",
  },
}));

const Connector = styled(Box)({
  borderLeft: "2px solid #6A961F",
  marginLeft: "auto",
  marginRight: "auto",
  width: "2px",
  height: "20px",
});

const LevelContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem",
  marginTop: "1rem",
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

  // Organizational structure data with updated colors and expanded levels
  const orgStructure = {
    name: "Board of Directors",
    color: "#C62828", // Deep red from KFS logo
    level: "Board of Directors",
    children: [
      {
        name: "Chief Conservator of Forests (CCF)",
        color: "#FFB300", // Golden yellow from KFS logo
        level: "CCF",
        children: [
          {
            name: "Directorate of Forest Protection and Security",
            color: "#6A961F", // KFS Green
            level: "Directorate",
            children: [
              {
                name: "Forest Protection, Fire and Disaster Operations",
                color: "#A5D6A7",
                level: "Division",
                children: [
                  {
                    name: "Fire Management Section",
                    color: "#4CAF50",
                    level: "Section",
                    children: [
                      { name: "Fire Response Unit", color: "#2E7D32", level: "Unit" },
                      { name: "Fire Prevention Unit", color: "#2E7D32", level: "Unit" },
                    ],
                  },
                  {
                    name: "Disaster Response Section",
                    color: "#4CAF50",
                    level: "Section",
                    children: [
                      { name: "Flood Response Unit", color: "#2E7D32", level: "Unit" },
                      { name: "Landslide Response Unit", color: "#2E7D32", level: "Unit" },
                    ],
                  },
                ],
              },
              {
                name: "Investigation, Prosecution & Inspection",
                color: "#A5D6A7",
                level: "Division",
                children: [
                  {
                    name: "Legal Enforcement Section",
                    color: "#4CAF50",
                    level: "Section",
                    children: [
                      { name: "Prosecution Unit", color: "#2E7D32", level: "Unit" },
                      { name: "Inspection Unit", color: "#2E7D32", level: "Unit" },
                    ],
                  },
                ],
              },
              { name: "Forest Law Enforcement Academy - FoLEA", color: "#A5D6A7", level: "Division" },
              { name: "Forest Security Intelligence", color: "#A5D6A7", level: "Division" },
              { name: "Kenya Forestry College - KFC", color: "#A5D6A7", level: "Division" },
              { name: "Forestry Advisory & County Liaison", color: "#A5D6A7", level: "Division" },
              { name: "Dry-land & Private Forest Development Coordination", color: "#A5D6A7", level: "Division" },
            ],
          },
          {
            name: "Directorate of Forest Conservation & Management",
            color: "#6A961F",
            level: "Directorate",
            children: [
              {
                name: "Natural Forest Conservation & Information Management",
                color: "#A5D6A7",
                level: "Division",
                children: [
                  {
                    name: "Biodiversity Section",
                    color: "#4CAF50",
                    level: "Section",
                    children: [
                      { name: "Wildlife Monitoring Unit", color: "#2E7D32", level: "Unit" },
                      { name: "Flora Preservation Unit", color: "#2E7D32", level: "Unit" },
                    ],
                  },
                ],
              },
              { name: "Forest Plantation Management", color: "#A5D6A7", level: "Division" },
              { name: "Conservancy Coordination", color: "#A5D6A7", level: "Division" },
            ],
          },
          {
            name: "Directorate of Strategy, Partnerships & Resource Mobilization",
            color: "#6A961F",
            level: "Directorate",
            children: [
              { name: "Partnerships & Resource Mobilization", color: "#A5D6A7", level: "Division" },
              { name: "Enterprise and Marketing", color: "#A5D6A7", level: "Division" },
              { name: "Planning, M&E and Performance Management", color: "#A5D6A7", level: "Division" },
              { name: "Quality Assurance & Risk Management", color: "#A5D6A7", level: "Division" },
            ],
          },
          {
            name: "Directorate of Corporate Services",
            color: "#6A961F",
            level: "Directorate",
            children: [
              {
                name: "Finance & Accounts",
                color: "#FFFFFF",
                level: "Sub-Division",
                children: [
                  {
                    name: "Budgeting Section",
                    color: "#4CAF50",
                    level: "Section",
                    children: [
                      { name: "Expenditure Unit", color: "#2E7D32", level: "Unit" },
                      { name: "Revenue Unit", color: "#2E7D32", level: "Unit" },
                    ],
                  },
                ],
              },
              { name: "Human Resource Management", color: "#FFFFFF", level: "Sub-Division" },
              { name: "Administration & Infrastructure Development", color: "#FFFFFF", level: "Sub-Division" },
              { name: "Information Communication Technology - ICT", color: "#FFFFFF", level: "Sub-Division" },
              { name: "Corporate Communications", color: "#FFFFFF", level: "Sub-Division" },
            ],
          },
          { name: "Directorate of Internal Audit", color: "#6A961F", level: "Directorate" },
          { name: "Directorate of Corporation Secretary", color: "#6A961F", level: "Directorate" },
          { name: "Supply Chain Management", color: "#A5D6A7", level: "Department" },
          { name: "Air-Wing", color: "#A5D6A7", level: "Department" },
          { name: "Inspectorate and Internal Affairs", color: "#A5D6A7", level: "Department" },
          {
            name: "Nairobi Conservancy",
            color: "#689F38",
            level: "Conservancy",
            children: [
              {
                name: "Nairobi County",
                color: "#8BC34A",
                level: "County",
                children: [
                  { name: "Karura Forest Station", color: "#43A047", level: "Station" },
                  { name: "Ngong Road Forest Station", color: "#43A047", level: "Station" },
                ],
              },
              {
                name: "Kiambu County",
                color: "#8BC34A",
                level: "County",
                children: [
                  { name: "Kereita Forest Station", color: "#43A047", level: "Station" },
                ],
              },
            ],
          },
          {
            name: "Central Highlands Conservancy",
            color: "#689F38",
            level: "Conservancy",
            children: [
              {
                name: "Nyeri County",
                color: "#8BC34A",
                level: "County",
                children: [
                  { name: "Aberdare Forest Station", color: "#43A047", level: "Station" },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  // Updated key data for the legend with new colors and levels
  const keyData = [
    { level: "Board of Directors", color: "#C62828", description: "Highest governing body" },
    { level: "CCF", color: "#FFB300", description: "Chief Conservator of Forests (CEO)" },
    { level: "Directorate", color: "#6A961F", description: "Strategic leadership units" },
    { level: "Department/Division", color: "#A5D6A7", description: "Operational units" },
    { level: "Sub-Division", color: "#FFFFFF", borderColor: "#6A961F", description: "Support and specialized roles" },
    { level: "Section", color: "#4CAF50", description: "Operational sections within divisions" },
    { level: "Unit", color: "#2E7D32", description: "Specialized units within sections" },
    { level: "Conservancy", color: "#689F38", description: "Regional management units" },
    { level: "County", color: "#8BC34A", description: "County-level management" },
    { level: "Station", color: "#43A047", description: "Local forest stations" },
  ];

  // Recursive component to render the org chart
  const renderNode = (node) => (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Node color={node.color}>{node.name}</Node>
      {node.children && (
        <>
          <Connector />
          <LevelContainer>
            {node.children.map((child, index) => (
              <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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