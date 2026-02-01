import Head from "next/head";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Chip,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import PublicIcon from "@mui/icons-material/Public";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShieldIcon from "@mui/icons-material/Shield";
import Layout from "@/components/layout";

const MotionPaper = motion(Paper);

const featureCards = [
  {
    icon: VerifiedIcon,
    title: "Government-Approved Attestation",
    description:
      "End-to-end handling of embassy, MOFA, HRD and notary attestation with complete transparency.",
  },
  {
    icon: PublicIcon,
    title: "Global Reach from Tirunelveli",
    description:
      "Attestation support for UAE, Saudi Arabia, Qatar, Kuwait and all major destinations.",
  },
  {
    icon: AccessTimeIcon,
    title: "Fast Turnaround Time",
    description:
      "Optimised process flow and live status updates so your documents are ready when you are.",
  },
  {
    icon: ShieldIcon,
    title: "Secure Document Handling",
    description:
      "Strict data privacy and secure document tracking to keep your originals safe.",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>
          About Attestation Services Tirunelveli | Trusted Certificate
          Attestation
        </title>
        <meta
          name="description"
          content="Learn about our professional attestation services in Tirunelveli. We specialise in educational, personal and commercial certificate attestation for UAE and worldwide."
        />
        <meta
          name="keywords"
          content="about attestation tirunelveli, certificate attestation experts, document attestation company"
        />
        <meta
          property="og:title"
          content="About Attestation Services Tirunelveli"
        />
        <meta
          property="og:description"
          content="Trusted certificate attestation and document verification partner in Tirunelveli."
        />
        <meta property="og:type" content="website" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Head>

      <Box
        component="section"
        sx={{
          background:
            "radial-gradient(circle at top left, #e0f2fe 0, transparent 45%), #f5f1eb",
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.2rem", md: "3rem" },
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    mb: 2,
                  }}
                >
                  About{" "}
                  <Box
                    component="span"
                    sx={{ fontFamily: "var(--font-source-serif)" }}
                  >
                    Attestation Services Tirunelveli
                  </Box>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(0,0,0,0.6)",
                    fontSize: { xs: "1rem", md: "1.05rem" },
                    mb: 2.5,
                    maxWidth: 520,
                  }}
                >
                  We are a specialised attestation and document verification
                  company helping professionals, families and businesses from
                  Tirunelveli to complete their international documentation
                  smoothly.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(0,0,0,0.6)",
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    mb: 3,
                    maxWidth: 520,
                  }}
                >
                  From educational and personal certificates to commercial
                  documents, our team manages each step with precision, making
                  sure your papers are accepted without delay in UAE and across
                  the globe.
                </Typography>

                <Stack
                  direction="row"
                  flexWrap="wrap"
                  spacing={1}
                  sx={{ mt: 1 }}
                >
                  <Chip
                    icon={<VerifiedIcon />}
                    label="10,000+ Documents Processed"
                    color="primary"
                    sx={{ borderRadius: 999 }}
                  />
                  <Chip
                    label="End-to-End Support"
                    variant="outlined"
                    sx={{ borderRadius: 999 }}
                  />
                </Stack>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    maxWidth: 420,
                    mx: { xs: "auto", md: "unset" },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: -16,
                      borderRadius: 6,
                      background:
                        "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(16,185,129,0.15))",
                      filter: "blur(18px)",
                      zIndex: 0,
                    }}
                  />

                  <Paper
                    elevation={6}
                    sx={{
                      position: "relative",
                      borderRadius: 4,
                      p: 3,
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "#6b7280",
                        mb: 1.5,
                      }}
                    >
                      Why Clients Trust Us
                    </Typography>

                    <Stack spacing={2}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <VerifiedIcon color="primary" />
                        <Box>
                          <Typography fontWeight={600}>
                            Transparent process
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Clear timelines, status updates and no hidden
                            charges.
                          </Typography>
                        </Box>
                      </Stack>

                      <Stack direction="row" spacing={2} alignItems="center">
                        <ShieldIcon color="success" />
                        <Box>
                          <Typography fontWeight={600}>
                            Secure handling
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Your originals are tracked and handled with strict
                            care.
                          </Typography>
                        </Box>
                      </Stack>

                      <Stack direction="row" spacing={2} alignItems="center">
                        <AccessTimeIcon color="secondary" />
                        <Box>
                          <Typography fontWeight={600}>
                            Priority support
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Dedicated guidance on WhatsApp and phone for every
                            step.
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </Paper>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: "#f9fafb",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h2"
            align="center"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.3rem" },
              fontWeight: 800,
              mb: 5,
            }}
          >
            Our Core Values
          </Typography>

          <Grid container spacing={3}>
            {featureCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <Grid item xs={12} sm={6} md={3} key={item.title}>
                  <MotionPaper
                    whileHover={{
                      y: -6,
                      boxShadow: "0 18px 40px rgba(15,23,42,0.12)",
                    }}
                    transition={{ duration: 0.25 }}
                    elevation={3}
                    sx={{
                      height: "100%",
                    width: "250px",
                      borderRadius: 3,
                      p: 2.5,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(59,130,246,0.08)",
                        mb: 0.5,
                      }}
                    >
                      <Icon color="primary" />
                    </Box>
                    <Typography fontWeight={700} fontSize="0.98rem">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ flexGrow: 1 }}
                    >
                      {item.description}
                    </Typography>
                  </MotionPaper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}


