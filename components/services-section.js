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

const servicesData = [
    {
        id: 1,
        title: "Educational Certificate Attestation",
        description: "We handle degree certificate, diploma, SSLC and HSC certificate attestation in Tirunelveli for UAE, Qatar, Saudi Arabia, Kuwait and other countries.",
        icon: BuildIcon,
        color: "#1e40af",
        bgColor: "rgba(30, 64, 175, 0.1)",
        keywords: ["UAE Embassy", "Attestation", "Document Verification"],
    },
    {
        id: 2,
        title: "Birth Certificate Attestation in Tirunelveli",
        description: "Get birth certificate attestation and apostille services in Tirunelveli for immigration,visa processing and family visa purposes.",
        icon: VerifiedIcon,
        color: "#1e3a8a",
        bgColor: "rgba(30, 58, 138, 0.1)",
        keywords: ["MOFA", "Document Authentication", "Foreign Affairs"],
    },
    {
        id: 3,
        title: "Marriage Certificate Attestation",
        description: "We provide marriage certificate attestation in Tirunelveli for spouse visa and family residency applications.",
        icon: SecurityIcon,
        color: "#16a34a",
        bgColor: "rgba(22, 163, 74, 0.1)",
        keywords: ["Apostille", "Hague Convention", "International Documents"],
    },
    {
        id: 4,
        title: "PCC / Police Clearance Certificate Attestation",
        description: "Fast PCC attestation services in Tirunelveli for UAE, Qatar and Saudi Arabia with MEA and embassy attestation support.",
        icon: DocumentScannerIcon,
        color: "#059669",
        bgColor: "rgba(5, 150, 105, 0.1)",
        keywords: ["Police Clearance", "Certificate", "Verification"],
    },
    {
        id: 5,
        title: "Visa Services in Tirunelveli",
        description: "Complete visa services in Tirunelveli including document verification,embassy attestation and stamping assistance.",
        icon: AssignmentIcon,
        color: "#7c3aed",
        bgColor: "rgba(124, 58, 237, 0.1)",
        keywords: ["Certificate Attestation", "Education", "Professional"],
    },
    {
        id: 6,
        title: "Degree Certificate Attestation",
        description: "Specialized attestation services for university and college degrees",
        icon: SchoolIcon,
        color: "#db2777",
        bgColor: "rgba(219, 39, 119, 0.1)",
        keywords: ["Degree Attestation", "University", "College"],
    },
    {
        id: 7,
        title: "Birth Certificate Attestation",
        description: "Official attestation of birth certificates for legal and immigration purposes",
        icon: CardGiftcardIcon,
        color: "#ea580c",
        bgColor: "rgba(234, 88, 12, 0.1)",
        keywords: ["Birth Certificate", "Attestation", "Legal"],
    },
    {
        id: 8,
        title: "Marriage Certificate Attestation",
        description: "Certified attestation of marriage certificates for international recognition",
        icon: FavoriteBorderIcon,
        color: "#be123c",
        bgColor: "rgba(190, 18, 60, 0.1)",
        keywords: ["Marriage Certificate", "Attestation", "International"],
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

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.6,
        },
    },
    hover: {
        y: -15,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
        },
    },
};

const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: "easeInOut" },
    },
};

const ServiceCard = ({ service, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const IconComponent = service.icon;

    return (
        <motion.div
            key={service.id}
            variants={cardVariants}
            whileHover="hover"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ height: "100%" }}
        >
            <Card
                elevation={isHovered ? 12 : 3}
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "16px",
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
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
                        background: service.color,
                        transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "left",
                        transition: "transform 0.3s ease",
                    },
                }}
            >
                <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                    {/* Icon Container */}
                    <motion.div
                        animate={{
                            scale: isHovered ? 1.1 : 1,
                            rotate: isHovered ? 5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <Box
                            sx={{
                                width: "64px",
                                height: "64px",
                                borderRadius: "12px",
                                background: service.bgColor,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2,
                                transition: "all 0.3s ease",
                            }}
                        >
                            <IconComponent
                                sx={{
                                    fontSize: "32px",
                                    color: service.color,
                                    transition: "all 0.3s ease",
                                }}
                            />
                        </Box>
                    </motion.div>

                    {/* Title */}
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                            fontWeight: 700,
                            mb: 1.5,
                            fontSize: { xs: "1rem", sm: "1.1rem" },
                            color: "#1f2937",
                            lineHeight: 1.4,
                        }}
                    >
                        {service.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#6b7280",
                            mb: 2,
                            fontSize: "0.9rem",
                            lineHeight: 1.6,
                            minHeight: "50px",
                        }}
                    >
                        {service.description}
                    </Typography>

                    {/* Keywords/Tags */}
                    <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mt: 2 }}>
                        {service.keywords.map((keyword, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.9 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Chip
                                    label={keyword}
                                    size="small"
                                    sx={{
                                        height: "24px",
                                        fontSize: "0.75rem",
                                        background: service.bgColor,
                                        color: service.color,
                                        fontWeight: 500,
                                    }}
                                />
                            </motion.div>
                        ))}
                    </Box>
                </CardContent>

                {/* Action Button */}
                <motion.div
                    animate={{
                        y: isHovered ? 0 : 10,
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <Box
                        sx={{
                            px: 2,
                            pb: 2,
                            pt: 0,
                        }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                width: "100%",
                                padding: "10px 16px",
                                border: "none",
                                borderRadius: "8px",
                                background: service.color,
                                color: "white",
                                fontSize: "0.875rem",
                                fontWeight: 600,
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                            }}
                        >
                            Learn More
                        </motion.button>
                    </Box>
                </motion.div>
            </Card>
        </motion.div>
    );
};

export default function ServicesSection() {
    return (
        <>
            <Box
                component="section"
                id="services"
                sx={{
                    py: { xs: 6, sm: 8, md: 10 },
                    background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: "-50%",
                        right: "-10%",
                        width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        background: "rgba(59, 130, 246, 0.1)",
                        filter: "blur(40px)",
                        zIndex: 0,
                    },
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-20%",
                        left: "-5%",
                        width: "300px",
                        height: "300px",
                        borderRadius: "50%",
                        background: "rgba(168, 85, 247, 0.1)",
                        filter: "blur(40px)",
                        zIndex: 0,
                    },
                }}
            >
                <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                    {/* Section Header */}
                    <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 5, md: 8 } }}>
                        <motion.div variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <Typography
                                variant="h3"
                                 component="h2"
                                sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.875rem" },
                                    background: "linear-gradient(135deg, #1f2937 0%, #3b82f6 100%)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    mb: 2,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Our Attestation Services in Tirunelveli
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "#6b7280",
                                    fontWeight: 500,
                                    fontSize: { xs: "0.95rem", sm: "1.1rem" },
                                    maxWidth: "700px",
                                    mx: "auto",
                                    lineHeight: 1.6,
                                }}
                            >
                                Comprehensive attestation and document verification services for all your needs.
                                Fast, reliable, and affordable solutions.
                            </Typography>
                        </motion.div>
                    </Box>

                    {/* Services Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                gap: 3,
                            }}
                        >
                            {servicesData.map((service, index) => (
                                <Box
                                    key={service.id}
                                    sx={{
                                        width: "300px",
                                        flexShrink: 0,
                                    }}
                                >
                                    <ServiceCard service={service} index={index} />
                                </Box>
                            ))}
                        </Box>
                    </motion.div>


                    {/* Bottom CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Box
                            sx={{
                                mt: { xs: 6, md: 8 },
                                p: { xs: 3, sm: 4, md: 5 },
                                background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                                borderRadius: "20px",
                                textAlign: "center",
                                color: "white",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    mb: 1.5,
                                    fontSize: { xs: "1.25rem", sm: "1.5rem" },
                                }}
                            >
                                Need Professional Attestation Services?
                            </Typography>
                            <Typography sx={{ mb: 3, opacity: 0.95, fontSize: "0.95rem" }}>
                                Contact us today for fast, reliable, and affordable attestation solutions
                            </Typography>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: "12px 32px",
                                    background: "white",
                                    color: "#3b82f6",
                                    border: "none",
                                    borderRadius: "8px",
                                    fontWeight: 700,
                                    cursor: "pointer",
                                    fontSize: "0.95rem",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                Get Started
                            </motion.button>
                        </Box>
                    </motion.div>
                </Container>
            </Box>
        </>
    );
}
