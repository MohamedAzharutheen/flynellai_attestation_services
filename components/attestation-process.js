import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import { useTheme } from "@mui/material/styles";

const steps = [
  {
    icon: <VerifiedOutlinedIcon />,
    title: "Document Verification",
    desc: "We verify your certificates and documents carefully.",
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Attestation Process",
    desc: "MEA, Embassy, HRD & Apostille handled end-to-end.",
  },
  {
    icon: <TrackChangesOutlinedIcon />,
    title: "Tracking & Delivery",
    desc: "Real-time tracking and safe doorstep delivery.",
  },
];

export default function AttestationProcess() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#efebe5",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          component="h2"
          align="center"
          sx={{
            fontSize: { xs: "2rem", md: "2.8rem" },
            fontWeight: 800,
            mb: 8,
          }}
        >
          Certificate Attestation Process
        </Typography>

        {/* Steps */}
        <Grid container spacing={12} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box textAlign="center">
                {/* ICON */}
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    mx: "auto",
                    mb: 2,
                    borderRadius: "12px",
                    backgroundColor:
                      "var(--token-ade1bce3-3902-4c4c-9fc0-b5696fee36e0, rgb(247, 242, 234))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 30,
                  }}
                >
                  {step.icon}
                </Box>

                <Typography
                  component="h3"
                  variant="h6"
                  fontWeight={700}
                  mb={1}
                >
                  {step.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ maxWidth: 260, mx: "auto" }}
                >
                  {step.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
