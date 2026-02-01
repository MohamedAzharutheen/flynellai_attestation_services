"use client";

import {
    Box,
    Container,
    Typography,
    Link,
    Stack,
    Divider,
    TextField,
    Button,
} from "@mui/material";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";

const footerVariants = {
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
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const FooterSection = ({ title, children }) => (
    <motion.div variants={itemVariants}>
        <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    mb: 2,
                    color: "#ffffff",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                }}
            >
                {title}
            </Typography>
            {children}
        </Box>
    </motion.div>
);

const FooterLink = ({ href, label }) => (
    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
        <Link
            href={href}
            sx={{
                color: "rgba(255, 255, 255, 0.7)",
                textDecoration: "none",
                fontSize: "0.9rem",
                display: "block",
                mb: 1,
                transition: "all 0.3s ease",
                "&:hover": {
                    color: "#3b82f6",
                    textDecoration: "underline",
                },
            }}
        >
            {label}
        </Link>
    </motion.div>
);

const SocialIcon = ({ Icon, href, label }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, y: -3 }}
        whileTap={{ scale: 0.95 }}
        aria-label={label}
        style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            background: "rgba(59, 130, 246, 0.1)",
            color: "#3b82f6",
            transition: "all 0.3s ease",
            cursor: "pointer",
            marginRight: "12px",
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.background = "#3b82f6";
            e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
            e.currentTarget.style.color = "#3b82f6";
        }}
    >
        <Icon sx={{ fontSize: "20px" }} />
    </motion.a>
);

export default function Footer() {
    const [email, setEmail] = useState("");
    const [subscribeLoading, setSubscribeLoading] = useState(false);

    const handleSubscribe = () => {
        if (email) {
            setSubscribeLoading(true);
            setTimeout(() => {
                setSubscribeLoading(false);
                setEmail("");
                alert("Thank you for subscribing!");
            }, 1500);
        }
    };

    return (
        <Box
            component="footer"
            sx={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                color: "#ffffff",
                pt: { xs: 6, md: 8 },
                pb: { xs: 4, md: 6 },
                position: "relative",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-50%",
                    right: "-20%",
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    background: "rgba(59, 130, 246, 0.05)",
                    filter: "blur(40px)",
                    zIndex: 0,
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                {/* Main Footer Content */}
                <motion.div
                    variants={footerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2, 1fr)",
                                md: "repeat(4, 1fr)",
                            },
                            gap: { xs: 3, md: 4 },
                            mb: 4,
                        }}
                    >
                        {/* About */}
                        <FooterSection title="About Us">
                            <Typography
                                sx={{
                                    color: "rgba(255, 255, 255, 0.6)",
                                    fontSize: "0.9rem",
                                    lineHeight: 1.6,
                                    mb: 2,
                                }}
                            >
                                Professional attestation and document verification services in UAE. We provide fast, reliable, and affordable solutions for all your documentation needs.
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <SocialIcon Icon={FacebookIcon} href="#" label="Facebook" />
                                <SocialIcon Icon={TwitterIcon} href="#" label="Twitter" />
                                <SocialIcon Icon={LinkedInIcon} href="#" label="LinkedIn" />
                                <SocialIcon Icon={InstagramIcon} href="#" label="Instagram" />
                            </Stack>
                        </FooterSection>

                        {/* Services */}
                        <FooterSection title="Services">
                            <FooterLink href="#" label="Embassy Attestation" />
                            <FooterLink href="#" label="MOFA Attestation" />
                            <FooterLink href="#" label="Apostille Services" />
                            <FooterLink href="#" label="Police Clearance" />
                            <FooterLink href="#" label="Certificate Attestation" />
                            <FooterLink href="#" label="Degree Attestation" />
                        </FooterSection>

                        {/* Quick Links */}
                        <FooterSection title="Quick Links">
                            <FooterLink href="#" label="Home" />
                            <FooterLink href="#" label="About Us" />
                            <FooterLink href="#" label="Services" />
                            <FooterLink href="#" label="Blog" />
                            <FooterLink href="#" label="Contact" />
                            <FooterLink href="#" label="FAQ" />
                        </FooterSection>

                        {/* Contact & Newsletter */}
                        <FooterSection title="Get in Touch">
                            <Stack spacing={2}>
                                <motion.div whileHover={{ x: 5 }}>
                                    <Link
                                        href="tel:+97143456789"
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            color: "rgba(255, 255, 255, 0.7)",
                                            textDecoration: "none",
                                            fontSize: "0.9rem",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                color: "#3b82f6",
                                            },
                                        }}
                                    >
                                        <PhoneIcon sx={{ mr: 1, fontSize: "18px" }} />
                                        +971 4 345 6789
                                    </Link>
                                </motion.div>

                                <motion.div whileHover={{ x: 5 }}>
                                    <Link
                                        href="mailto:info@attestation.ae"
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            color: "rgba(255, 255, 255, 0.7)",
                                            textDecoration: "none",
                                            fontSize: "0.9rem",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                color: "#3b82f6",
                                            },
                                        }}
                                    >
                                        <EmailIcon sx={{ mr: 1, fontSize: "18px" }} />
                                        info@attestation.ae
                                    </Link>
                                </motion.div>

                                <motion.div whileHover={{ x: 5 }}>
                                    <Link
                                        href="#"
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            color: "rgba(255, 255, 255, 0.7)",
                                            textDecoration: "none",
                                            fontSize: "0.9rem",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                color: "#3b82f6",
                                            },
                                        }}
                                    >
                                        <LocationOnIcon sx={{ mr: 1, fontSize: "18px", mt: 0.5, flexShrink: 0 }} />
                                        Dubai, UAE
                                    </Link>
                                </motion.div>
                            </Stack>
                        </FooterSection>
                    </Box>
                </motion.div>

                {/* Newsletter Subscription */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Box
                        sx={{
                            background: "rgba(59, 130, 246, 0.1)",
                            border: "1px solid rgba(59, 130, 246, 0.2)",
                            borderRadius: "12px",
                            p: { xs: 2.5, sm: 3 },
                            mb: 4,
                        }}
                    >
                        <Stack
                            spacing={1.5}
                            sx={{
                                flexDirection: { xs: "column", sm: "row" },
                            }}
                        >
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        mb: 0.5,
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    Subscribe to Our Newsletter
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "rgba(255, 255, 255, 0.6)",
                                        fontSize: "0.85rem",
                                    }}
                                >
                                    Get latest updates on attestation services and tips
                                </Typography>
                            </Box>
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={1}
                                sx={{
                                    minWidth: { xs: "100%", sm: "auto" },
                                }}
                            >
                                <TextField
                                    placeholder="Enter your email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    size="small"
                                    sx={{
                                        flex: 1,
                                        "& .MuiOutlinedInput-root": {
                                            color: "white",
                                            background: "rgba(255, 255, 255, 0.05)",
                                            "& fieldset": {
                                                borderColor: "rgba(59, 130, 246, 0.3)",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "rgba(59, 130, 246, 0.5)",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#3b82f6",
                                            },
                                        },
                                        "& .MuiOutlinedInput-input::placeholder": {
                                            color: "rgba(255, 255, 255, 0.4)",
                                            opacity: 1,
                                        },
                                    }}
                                />
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        variant="contained"
                                        onClick={handleSubscribe}
                                        disabled={!email || subscribeLoading}
                                        sx={{
                                            background: "#3b82f6",
                                            color: "white",
                                            fontWeight: 600,
                                            px: 3,
                                            "&:hover": {
                                                background: "#2563eb",
                                            },
                                            textTransform: "none",
                                        }}
                                    >
                                        {subscribeLoading ? "Subscribing..." : "Subscribe"}
                                    </Button>
                                </motion.div>
                            </Stack>
                        </Stack>
                    </Box>
                </motion.div>

                <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.1)" }} />

                {/* Bottom Footer */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                            gap: 2,
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "rgba(255, 255, 255, 0.5)",
                                fontSize: "0.85rem",
                                textAlign: { xs: "center", sm: "left" },
                            }}
                        >
                            &copy; 2026 Attestation Services UAE. All rights reserved.
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{
                                justifyContent: { xs: "center", sm: "flex-end" },
                                flexWrap: "wrap",
                            }}
                        >
                            <FooterLink href="#" label="Privacy Policy" />
                            <FooterLink href="#" label="Terms of Service" />
                            <FooterLink href="#" label="Sitemap" />
                        </Stack>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}
