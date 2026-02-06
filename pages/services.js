"use client";

import Head from "next/head";
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Grid,
  Button,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import BuildIcon from "@mui/icons-material/Build";
import VerifiedIcon from "@mui/icons-material/Verified";
import SecurityIcon from "@mui/icons-material/Security";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SchoolIcon from "@mui/icons-material/School";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Layout from "../components/layout";
import { Inter, Source_Serif_4 } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const servicesData = [
  {
    id: 1,
    title: "UAE Embassy Attestation",
    description:
      "Official attestation from UAE embassies worldwide for document verification and international recognition.",
    icon: BuildIcon,
    color: "#1e40af",
    bgColor: "rgba(30, 64, 175, 0.1)",
    features: [
      "Document Verification",
      "Official Stamps",
      "Embassy Certified",
      "Quick Processing",
    ],
  },
  {
    id: 2,
    title: "MOFA Attestation",
    description:
      "Ministry of Foreign Affairs attestation for international document authentication and legal validity.",
    icon: VerifiedIcon,
    color: "#1e3a8a",
    bgColor: "rgba(30, 58, 138, 0.1)",
    features: ["MOFA Certified", "Legal Authentication", "Fast Processing", "Reliable Service"],
  },
  {
    id: 3,
    title: "Apostille Services",
    description:
      "Apostille certification for documents used in Hague Convention countries and international purposes.",
    icon: SecurityIcon,
    color: "#16a34a",
    bgColor: "rgba(22, 163, 74, 0.1)",
    features: [
      "Hague Convention",
      "International Valid",
      "Multi-country Support",
      "Expert Handling",
    ],
  },
  {
    id: 4,
    title: "Police Clearance Certificate",
    description:
      "Official police clearance verification and attestation services for employment and immigration needs.",
    icon: DocumentScannerIcon,
    color: "#059669",
    bgColor: "rgba(5, 150, 105, 0.1)",
    features: ["Verified Records", "Background Check", "Immigration Ready", "Secure Processing"],
  },
  {
    id: 5,
    title: "Certificate Attestation",
    description:
      "Professional attestation for educational and professional certificates with government approval.",
    icon: AssignmentIcon,
    color: "#7c3aed",
    bgColor: "rgba(124, 58, 237, 0.1)",
    features: [
      "Education Support",
      "Professional Certified",
      "Verified Credentials",
      "Complete Documentation",
    ],
  },
  {
    id: 6,
    title: "Degree Certificate Attestation",
    description:
      "Specialized attestation services for university and college degrees with international validity.",
    icon: SchoolIcon,
    color: "#db2777",
    bgColor: "rgba(219, 39, 119, 0.1)",
    features: [
      "University Degree",
      "Internationally Valid",
      "Fast Certification",
      "Complete Support",
    ],
  },
  {
    id: 7,
    title: "Birth Certificate Attestation",
    description:
      "Official attestation of birth certificates for legal and immigration purposes with authenticity.",
    icon: CardGiftcardIcon,
    color: "#ea580c",
    bgColor: "rgba(234, 88, 12, 0.1)",
    features: [
      "Government Verified",
      "Legal Valid",
      "Immigration Ready",
      "Secure Handling",
    ],
  },
  {
    id: 8,
    title: "Marriage Certificate Attestation",
    description:
      "Certified attestation of marriage certificates for international recognition and legal purposes.",
    icon: FavoriteBorderIcon,
    color: "#be123c",
    bgColor: "rgba(190, 18, 60, 0.1)",
    features: [
      "International Valid",
      "Legal Certified",
      "Quick Processing",
      "Expert Assistance",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardHoverVariants = {
  hover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hover: {
    scale: 1.15,
    rotate: 10,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Layout>
      <Head>
        <title>Our Services | Attestation Expert</title>
        <meta name="description" content="Explore our comprehensive attestation services" />
      </Head>

      {/* Hero Section */}
      <Box
        sx={{
          background: "#f5f1eb",
          color: "white",
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-50%",
            right: "-10%",
            width: "400px",
            height: "400px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "50%",
            animation: "float 6s ease-in-out infinite",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-30%",
            left: "-10%",
            width: "300px",
            height: "300px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "50%",
            animation: "float 8s ease-in-out infinite reverse",
          },
          "@keyframes float": {
            "0%, 100%": {
              transform: "translateY(0px)",
            },
            "50%": {
              transform: "translateY(20px)",
            },
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: "center" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: sourceSerif.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                mb: 2,
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                color: "#1f2937",
              }}
            >
              Our Professional Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: inter.style.fontFamily,
                fontWeight: 400,
                maxWidth: "600px",
                mx: "auto",
                opacity: 0.95,
                mb: 3,
                color: "#4b5563",
              }}
            >
              Comprehensive attestation solutions tailored to your needs with professional expertise
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#667eea",
                px: 4,
                py: 1.5,
                borderRadius: "50px",
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Get Started Today
            </Button>
          </MotionBox>
        </Container>
      </Box>

      {/* Services Grid Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          sx={{ mb: 8 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: sourceSerif.style.fontFamily,
              fontWeight: 700,
              textAlign: "center",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Comprehensive Service Portfolio
          </Typography>
          <Box
            sx={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #667eea, #764ba2)",
              borderRadius: "2px",
              mx: "auto",
              mb: 4,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#666",
              maxWidth: "600px",
              mx: "auto",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            We offer a wide range of professional attestation services to meet all your document
            verification needs
          </Typography>
        </MotionBox>

        {/* Services Cards Grid */}
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          component={Grid}
          container
          spacing={3}
          sx={{ mt: 2, justifyContent: "center" }}
        >
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Grid 
                item 
                xs={12} 
                sm={12} 
                md={6} 
                lg="auto" 
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <MotionCard
                  variants={itemVariants}
                  whileHover="hover"
                  sx={{
                    width: "300px",
                    background: `linear-gradient(135deg, ${service.bgColor} 0%, rgba(255, 255, 255, 0.5) 100%)`,
                    border: `1px solid ${service.color}20`,
                    borderRadius: "16px",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: `linear-gradient(90deg, ${service.color}, transparent)`,
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      background: `radial-gradient(circle at top right, ${service.color}10, transparent)`,
                      pointerEvents: "none",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
                    {/* Icon */}
                    <MotionBox
                      variants={iconVariants}
                      sx={{
                        mb: 2,
                        width: "56px",
                        height: "56px",
                        background: `${service.color}20`,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconComponent
                        sx={{
                          fontSize: "32px",
                          color: service.color,
                        }}
                      />
                    </MotionBox>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: sourceSerif.style.fontFamily,
                        fontWeight: 600,
                        mb: 1.5,
                        fontSize: "1.25rem",
                        color: "#1f2937",
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        mb: 2.5,
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                        flex: 1,
                      }}
                    >
                      {service.description}
                    </Typography>

                    {/* Features */}
                    {hoveredCard === service.id && (
                      <MotionBox
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        sx={{ mb: 2 }}
                      >
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                          {service.features.map((feature, idx) => (
                            <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                              <CheckCircleIcon
                                sx={{
                                  fontSize: "16px",
                                  color: service.color,
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "#555",
                                  fontSize: "0.85rem",
                                }}
                              >
                                {feature}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </MotionBox>
                    )}

                    {/* CTA Button */}
                    <MotionBox
                      initial={{ opacity: 0.8 }}
                      animate={{
                        opacity: hoveredCard === service.id ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          color: service.color,
                          textTransform: "none",
                          fontWeight: 600,
                          p: 0,
                          fontSize: "0.95rem",
                          "&:hover": {
                            backgroundColor: "transparent",
                            transform: "translateX(4px)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Learn More
                      </Button>
                    </MotionBox>
                  </CardContent>
                </MotionCard>
              </Grid>
            );
          })}
        </MotionBox>
      </Container>

      {/* How It Works Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            sx={{ textAlign: "center", mb: 8 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: sourceSerif.style.fontFamily,
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              How Our Process Works
            </Typography>
            <Box
              sx={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #667eea, #764ba2)",
                borderRadius: "2px",
                mx: "auto",
                mb: 4,
              }}
            />
          </MotionBox>

          <Grid container spacing={4}>
            {[
              {
                step: 1,
                title: "Submit Documents",
                description: "Upload or submit your documents through our secure platform",
              },
              {
                step: 2,
                title: "Verification",
                description: "Our experts verify and authenticate your documents",
              },
              {
                step: 3,
                title: "Processing",
                description: "Documents are processed with official certification",
              },
              {
                step: 4,
                title: "Delivery",
                description: "Receive your attested documents safely and securely",
              },
            ].map((item, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  sx={{ textAlign: "center" }}
                >
                  <Paper
                    sx={{
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      borderRadius: "50%",
                    }}
                  >
                    {item.step}
                  </Paper>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: sourceSerif.style.fontFamily,
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.6 }}>
                    {item.description}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          py: { xs: 8, md: 10 },
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: sourceSerif.style.fontFamily,
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2.5rem" },
              }}
            >
              Ready to Get Your Documents Attested?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: "1.1rem",
                opacity: 0.95,
              }}
            >
              Contact us today for professional, reliable attestation services
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#667eea",
                px: 4,
                py: 1.5,
                borderRadius: "50px",
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Contact Us Now
            </Button>
          </MotionBox>
        </Container>
      </Box>
    </Layout>
  );
}
