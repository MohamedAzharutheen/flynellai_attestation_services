"use client";

import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RatingCTASection from "./rating-section";
import { Inter, Source_Serif_4 } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});
const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    // Array of images to rotate
    const heroImages = [
        "/hero-section/attestation-service.png",
        "/hero-section/best-attestion-in-tirunelveli.png",
        "/hero-section/attestation-service.png",
    ];

    // Combined progress and image rotation
    useEffect(() => {
        // Progress bar fills for 5 seconds
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    return 100; // Stop at 100
                }
                return prev + (100 / 100); // 5000ms / 100 = 100% in 5 seconds
            });
        }, 50);

        // After 5 seconds, change image and reset progress
        const imageTimeout = setTimeout(() => {
            setFadeIn(false);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
                setFadeIn(true);
                setProgress(0); // Reset progress bar for next image
            }, 300);
        }, 5000);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(imageTimeout);
        };
    }, [currentImageIndex, heroImages.length]);

    return (
        <>
            {/* ================= SEO HEAD ================= */}
            {/* <Head>
        <title>Attestation Tirunelveli | Certificate & Embassy Attestation Services</title>
        <meta
          name="description"
          content="Attestation Tirunelveli – Fast and reliable certificate attestation services for UAE, Saudi, Qatar & all countries. Educational, personal & commercial attestation."
        />
        <meta name="keywords" content="Attestation Tirunelveli, Certificate Attestation Tirunelveli, Embassy Attestation Tirunelveli" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.yourdomain.com/" />
      </Head> */}

            {/* ================= HERO SECTION ================= */}
            <Box
                component="section"
                sx={{
                    backgroundColor: "#f5f1eb",
                    py: { xs: 6, md: 10 },
                    overflow: "hidden",
                }}
            >
                <Container maxWidth="lg">
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 4, md: 6 }}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        {/* ========= LEFT CONTENT ========= */}
                        <Box
                            flex={1}
                            sx={{
                                animation: "slideInLeft 0.8s ease-out",
                                "@keyframes slideInLeft": {
                                    from: {
                                        opacity: 0,
                                        transform: "translateX(-50px)",
                                    },
                                    to: {
                                        opacity: 1,
                                        transform: "translateX(0)",
                                    },
                                },
                            }}
                        >
                            <Typography
                                variant="h1"
                                className={inter.className}
                                sx={{
                                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                                    fontWeight: 800,
                                    lineHeight: 1.15,
                                    letterSpacing: "-0.02em",
                                    mb: 1,
                                }}

                            >
                                Best Attestation in
                                <Box
                                    sx={{ fontFamily: "var(--font-source-serif)", }}
                                    component="span"

                                >
                                    Tirunelveli
                                </Box>
                            </Typography>

                            <Typography
                                variant="body1"
                                className={inter.className}
                                sx={{
                                    mt: 3,
                                    color: "rgba(0, 0, 0, 0.48)",
                                    fontSize: { xs: "1rem", md: "1.3rem" },
                                    maxWidth: 500,
                                    fontWeight: 400,
                                }}
                            >
                                We provide fast, secure and government-approved attestation services in Tirunelveli. Educational, personal and commercial certificates attested for UAE, Saudi Arabia, Qatar, Kuwait and all major countries.
                            </Typography>

                            <RatingCTASection />
                        </Box>

                        {/* ========= RIGHT IMAGE WITH ANIMATION ========= */}
                        <Box
                            flex={1}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {/* Outer White Border Frame */}
                            <Box
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                    maxWidth: 420,
                                    aspectRatio: "1/1.3",
                                    padding: "16px",
                                    backgroundColor: "#f5f1eb",
                                    borderRadius: "32px",
                                    animation: "slideInRight 0.8s ease-out",
                                    "@keyframes slideInRight": {
                                        from: {
                                            opacity: 0,
                                            transform: "translateX(50px)",
                                        },
                                        to: {
                                            opacity: 1,
                                            transform: "translateX(0)",
                                        },
                                    },
                                }}
                            >
                                {/* Inner Image Container with White Border */}
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "#fff",
                                        borderRadius: "24px",
                                        overflow: "hidden",
                                        boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                                        border: "1px solid rgba(0,0,0,0.05)",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            boxShadow: "0 25px 70px rgba(0,0,0,0.25)",
                                        },
                                    }}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    {/* Progress Bars Container (Multiple like WhatsApp Stories) */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            display: "flex",
                                            gap: "4px",
                                            padding: "8px 8px 0 8px",
                                            zIndex: 20,
                                            width: "100%",
                                            boxSizing: "border-box",
                                        }}
                                    >
                                        {heroImages.map((_, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    flex: 1,
                                                    height: "2.5px",
                                                    backgroundColor: "rgba(255,255,255,0.4)",
                                                    borderRadius: "2px",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        height: "100%",
                                                        width: index === currentImageIndex ? `${progress}%` : index < currentImageIndex ? "100%" : "0%",
                                                        backgroundColor: "#fff",
                                                        transition: index === currentImageIndex ? "width 0.05s linear" : "width 0.3s ease",
                                                        boxShadow: "0 0 6px rgba(255,255,255,0.8)",
                                                    }}
                                                />
                                            </Box>
                                        ))}
                                    </Box>

                                    {/* User Profile Section */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 16,
                                            left: 16,
                                            right: 16,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            zIndex: 15,
                                        }}
                                    >
                                        {/* Avatar */}
                                        <Box
                                            sx={{
                                                width: 36,
                                                height: 36,
                                                borderRadius: "50%",
                                                backgroundColor: "rgba(0,0,0,0.1)",
                                                border: "2px solid rgba(255,255,255,0.8)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "18px",
                                            }}
                                        >
                                            ✓
                                        </Box>
                                        {/* Username and Time */}
                                        <Box sx={{ flex: 1 }}>
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    fontWeight: 600,
                                                    color: "#fff",
                                                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                                                }}
                                            >
                                                Flynellai  Attestation Services
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "12px",
                                                    color: "rgba(255,255,255,0.8)",
                                                    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                                                }}
                                            >
                                                Now
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Image Container with Fade Animation */}
                                    <Box
                                        sx={{
                                            position: "relative",
                                            width: "100%",
                                            height: "100%",
                                            opacity: fadeIn ? 1 : 0,
                                            transition: "opacity 0.5s ease-in-out",
                                        }}
                                    >
                                        <Image
                                            src={heroImages[currentImageIndex]}
                                            alt="Attestation Services"
                                            fill
                                            priority
                                        // style={{
                                        //     objectFit: "cover",
                                        //     objectPosition: "center",
                                        // }}
                                        />
                                    </Box>

                                    {/* Gradient Overlay */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: "linear-gradient(135deg, rgba(255,192,203,0.2) 0%, rgba(219,112,147,0.1) 100%)",
                                            pointerEvents: "none",
                                        }}
                                    />

                                    {/* Hover Slider Animation Overlay */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.4) 100%)",
                                            opacity: isHovering ? 1 : 0,
                                            transition: "opacity 0.3s ease",
                                            pointerEvents: "none",
                                            zIndex: 12,
                                        }}
                                    />

                                    {/* Hover Shine Effect */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: "-100%",
                                            width: "100%",
                                            height: "100%",
                                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                                            opacity: isHovering ? 1 : 0,
                                            animation: isHovering ? "shimmer 0.8s infinite" : "none",
                                            "@keyframes shimmer": {
                                                "0%": {
                                                    left: "-100%",
                                                },
                                                "100%": {
                                                    left: "100%",
                                                },
                                            },
                                            pointerEvents: "none",
                                            zIndex: 13,
                                        }}
                                    />

                                    {/* Bottom Icon Button */}
                                    {/* <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 52,
                      height: 52,
                      backgroundColor: "#000",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 15,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateX(-50%) scale(1.1)",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "28px",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      ✱
                    </Typography>
                  </Box> */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: 16,
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            width: 46,
                                            height: 46,
                                            borderRadius: "50%",
                                            bgcolor: "#000",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
                                        }}
                                    >
                                        <FlightTakeoffIcon
                                            sx={{
                                                color: "#fff",
                                                fontSize: 24,
                                            }}
                                        />
                                    </Box>

                                    {/* Slider Navigation Arrows - Show on Hover */}
                                    {/* Left Arrow */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            left: 16,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            width: 44,
                                            height: 44,
                                            backgroundColor: "rgba(0,0,0,0.5)",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            cursor: "pointer",
                                            opacity: isHovering ? 1 : 0,
                                            transform: isHovering ? "translateY(-50%)" : "translateY(-50%) translateX(-20px)",
                                            transition: "all 0.3s ease",
                                            zIndex: 14,
                                            "&:hover": {
                                                backgroundColor: "rgba(0,0,0,0.7)",
                                                transform: "translateY(-50%) scale(1.1)",
                                            },
                                        }}
                                        onClick={() => {
                                            setFadeIn(false);
                                            setTimeout(() => {
                                                setCurrentImageIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
                                                setFadeIn(true);
                                                setProgress(0);
                                            }, 300);
                                        }}
                                    >
                                        <ChevronRightIcon
                                            sx={{
                                                color: "#fff",
                                                fontSize: 28,
                                                transform: "rotate(180deg)",
                                            }}
                                        />
                                    </Box>

                                    {/* Right Arrow */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            right: 16,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            width: 44,
                                            height: 44,
                                            backgroundColor: "rgba(0,0,0,0.5)",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            cursor: "pointer",
                                            opacity: isHovering ? 1 : 0,
                                            transform: isHovering ? "translateY(-50%)" : "translateY(-50%) translateX(20px)",
                                            transition: "all 0.3s ease",
                                            zIndex: 14,
                                            "&:hover": {
                                                backgroundColor: "rgba(0,0,0,0.7)",
                                                transform: "translateY(-50%) scale(1.1)",
                                            },
                                        }}
                                        onClick={() => {
                                            setFadeIn(false);
                                            setTimeout(() => {
                                                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
                                                setFadeIn(true);
                                                setProgress(0);
                                            }, 300);
                                        }}
                                    >
                                        <ChevronRightIcon
                                            sx={{
                                                color: "#fff",
                                                fontSize: 28,
                                            }}
                                        />
                                    </Box>


                                    {/* Image Indicator Dots */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: 24,
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            display: "none", // Hidden as we have multiple progress bars now
                                            gap: 1,
                                            zIndex: 10,
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
