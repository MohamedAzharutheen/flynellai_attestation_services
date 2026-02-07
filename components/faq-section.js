"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Paper,
  IconButton,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
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
const MotionPaper = motion(Paper);

const faqData = [
  {
    id: 1,
    question: "Do you provide certificate attestation services in Tirunelveli?",
    answer:
      "Yes, we provide complete certificate attestation services in Tirunelveli for educational, personal and commercial documents.",
  },
  {
    id: 2,
    question: "Do you handle birth certificate attestation in Tirunelveli?",
    answer:
      "Yes, we offer birth certificate attestation and apostille services in Tirunelveli for UAE, Qatar and other countries.",
  },
  {
    id: 3,
    question: "Is PCC attestation available in Tirunelveli?",
    answer:
      "Yes, we provide PCC attestation services in Tirunelveli including MEA and embassy attestation.",
  },
  {
    id: 4,
    question: "Do you provide visa services in Tirunelveli?",
    answer:
      "Yes, we provide end-to-end visa services in Tirunelveli including document verification and embassy support.",
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

export default function FaqSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleFaq = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#ffffff",
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-40%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(102,126,234,0.08), transparent)",
          borderRadius: "50%",
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-20%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(118,75,162,0.06), transparent)",
          borderRadius: "50%",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: sourceSerif.style.fontFamily,
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.8rem" },
              mb: 2,
              color: "#1f2937",
            }}
          >
            Frequently Asked Questions
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
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "#666",
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Find answers to common questions about our attestation and visa services in
            Tirunelveli
          </Typography>
        </MotionBox>

        {/* FAQ Items */}
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          sx={{
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          <Stack spacing={3}>
            {faqData.map((item) => (
              <MotionBox
                key={item.id}
                variants={itemVariants}
                sx={{
                  perspective: "1000px",
                }}
              >
                <MotionPaper
                  whileHover={{
                    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.08)",
                    y: -2,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  elevation={expandedId === item.id ? 4 : 1}
                  sx={{
                    borderRadius: 3,
                    border: `2px solid ${
                      expandedId === item.id
                        ? "rgba(102, 126, 234, 0.2)"
                        : "rgba(0, 0, 0, 0.08)"
                    }`,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    background:
                      expandedId === item.id
                        ? "linear-gradient(135deg, rgba(102,126,234,0.04) 0%, rgba(118,75,162,0.02) 100%)"
                        : "#ffffff",
                  }}
                >
                  {/* Question Button */}
                  <Box
                    onClick={() => toggleFaq(item.id)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      p: { xs: 2.5, md: 3 },
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: sourceSerif.style.fontFamily,
                        fontWeight: 600,
                        fontSize: { xs: "1rem", md: "1.15rem" },
                        color: expandedId === item.id ? "#667eea" : "#1f2937",
                        transition: "color 0.3s ease",
                        pr: 2,
                      }}
                    >
                      {item.question}
                    </Typography>

                    {/* Icon */}
                    <motion.div
                      animate={{
                        rotate: expandedId === item.id ? 45 : 0,
                        backgroundColor:
                          expandedId === item.id
                            ? "rgba(102, 126, 234, 0.1)"
                            : "rgba(0, 0, 0, 0.04)",
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "8px",
                        padding: "8px",
                        minWidth: "40px",
                        minHeight: "40px",
                      }}
                    >
                      <AddIcon
                        sx={{
                          color: expandedId === item.id ? "#667eea" : "#999",
                          transition: "color 0.3s ease",
                        }}
                      />
                    </motion.div>
                  </Box>

                  {/* Answer - Animated */}
                  <AnimatePresence>
                    {expandedId === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                        }}
                      >
                        <Box
                          sx={{
                            px: { xs: 2.5, md: 3 },
                            pb: { xs: 2.5, md: 3 },
                            pt: 0,
                            borderTop: "1px solid rgba(102, 126, 234, 0.1)",
                          }}
                        >
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.1,
                              ease: "easeOut",
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize: { xs: "0.95rem", md: "1rem" },
                                color: "#555",
                                lineHeight: 1.8,
                                fontFamily: inter.style.fontFamily,
                              }}
                            >
                              {item.answer}
                            </Typography>
                          </motion.div>
                        </Box>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </MotionPaper>
              </MotionBox>
            ))}
          </Stack>
        </MotionBox>

        {/* CTA Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          sx={{
            textAlign: "center",
            mt: { xs: 8, md: 12 },
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            background: "linear-gradient(135deg, rgba(102,126,234,0.08) 0%, rgba(118,75,162,0.04) 100%)",
            border: "1px solid rgba(102, 126, 234, 0.15)",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "#555",
              mb: 2,
            }}
          >
            Have more questions? 
          </Typography>
          <Typography
            component="a"
            href="/contact"
            sx={{
              fontSize: { xs: "0.95rem", md: "1rem" },
              fontWeight: 600,
              color: "#667eea",
              textDecoration: "none",
              transition: "all 0.3s ease",
              display: "inline-block",
              "&:hover": {
                color: "#764ba2",
                transform: "translateX(4px)",
              },
            }}
          >
            Get in touch with our team →
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  );
}
