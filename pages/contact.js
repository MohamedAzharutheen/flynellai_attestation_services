import Head from "next/head";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
  Paper,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Layout from "@/components/layout";

const MotionPaper = motion(Paper);
const contactDetails = [
  {
    title: "Call us",
    value: "+91 99940 34441",
    link: "tel:+919994034441",
    icon: PhoneIcon,
    bg: "rgba(37,99,235,0.08)",
    iconColor: "primary",
  },
  {
    title: "WhatsApp for instant quote",
    value: "+971 58 873 2300",
    link: "https://wa.me/971588732300",
    icon: WhatsAppIcon,
    bg: "rgba(16,185,129,0.08)",
    iconColor: "#16a34a",
  },
  {
    title: "Email support",
    value: "info@attestationuae.com",
    link: "mailto:info@attestationuae.com",
    icon: EmailIcon,
    bg: "rgba(59,130,246,0.08)",
    iconColor: "primary",
  },
  {
    title: "Office location",
    value: "Tirunelveli, Tamil Nadu, India\n(Full address here)",
    icon: LocationOnIcon,
    bg: "rgba(148,163,184,0.12)",
  },
];

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>
          Contact Attestation Services Tirunelveli | Get a Free Consultation
        </title>
        <meta
          name="description"
          content="Contact our attestation experts in Tirunelveli for UAE embassy, MOFA and certificate attestation. Call, WhatsApp or send us a message for a fast response."
        />
        <meta
          name="keywords"
          content="contact attestation tirunelveli, attestation contact, attestation office phone, attestation enquiry"
        />
        <meta
          property="og:title"
          content="Contact Attestation Services Tirunelveli"
        />
        <meta
          property="og:description"
          content="Talk to our certificate attestation experts for UAE and global document verification."
        />
        <meta property="og:type" content="website" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Head>

      <Box
        component="section"
        sx={{
          backgroundColor: "#f5f1eb",
          py: { xs: 6, md: 9 },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.1rem", md: "2.7rem" },
                fontWeight: 800,
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Let&apos;s talk about your{" "}
              <Box
                component="span"
                sx={{ fontFamily: "var(--font-source-serif)" }}
              >
                attestation
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.6)",
                mb: 3,

              }}
            >
              Share your document type and destination country, and our
              team will guide you with a clear, step-by-step attestation
              plan and transparent pricing.
            </Typography>
          </motion.div>

          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            justifyContent="center"
          >
            {/* Left: Intro + Contact blocks */}
            <Grid item xs={12} sm={6}>

              <Stack spacing={2.5}>
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <MotionPaper
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.4 }}
                      whileHover={{
                        y: -4,
                        boxShadow: "0 14px 30px rgba(0,0,0,0.12)",
                      }}
                      elevation={2}
                      sx={{
                        p: 2.5,
                        borderRadius: 3,
                        width: "100%",
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="flex-start">
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: item.bg,
                          }}
                        >
                          <Icon sx={{ color: item.iconColor }} />
                        </Box>

                        <Box>
                          <Typography fontWeight={700} mb={0.5}>
                            {item.title}
                          </Typography>

                          {item.link ? (
                            <Typography
                              component="a"
                              href={item.link}
                              target={item.link.startsWith("http") ? "_blank" : undefined}
                              rel="noopener noreferrer"
                              sx={{
                                display: "block",
                                color: "inherit",
                                textDecoration: "none",
                                fontSize: "0.95rem",
                                whiteSpace: "pre-line",
                              }}
                            >
                              {item.value}
                            </Typography>
                          ) : (
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ whiteSpace: "pre-line" }}
                            >
                              {item.value}
                            </Typography>
                          )}
                        </Box>
                      </Stack>
                    </MotionPaper>
                  );
                })}
              </Stack>

            </Grid>

            {/* Right: Contact form */}
            <Grid item xs={12} sm={6}   >
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Paper
                  id="contact-form"
                  elevation={5}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 4,
                    backgroundColor: "#ffffff",
                  }}
                >
                  <Typography
                    component="h2"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "1.4rem", md: "1.6rem" },
                      mb: 1,
                    }}
                  >
                    Send us your enquiry
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    Fill in the quick form below and we&apos;ll get back to you
                    with the right attestation solution.
                  </Typography>

                  <Box
                    component="form"
                    noValidate
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                      gap: 2,
                    }}
                  >
                    <TextField
                      label="Full name"
                      name="name"
                      autoComplete="name"
                      required
                    />
                    <TextField
                      label="Email address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                    <TextField
                      label="Phone / WhatsApp"
                      name="phone"
                      type="tel"
                      required
                      inputProps={{ inputMode: "tel" }}
                    />
                    <TextField
                      label="Destination country"
                      name="country"
                    />
                    <TextField
                      label="Document type & message"
                      name="message"
                      multiline
                      minRows={4}
                      sx={{
                        gridColumn: { xs: "1 / -1", sm: "1 / -1" },
                      }}
                    />
                    <Box
                      sx={{
                        gridColumn: { xs: "1 / -1", sm: "1 / -1" },
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: 1,
                      }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                          px: 4,
                          borderRadius: 999,
                          textTransform: "none",
                          backgroundColor: "#1f2937",
                          "&:hover": { backgroundColor: "#111827" },
                        }}
                      >
                        Submit enquiry
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}


