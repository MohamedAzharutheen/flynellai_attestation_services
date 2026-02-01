import React from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  Rating,
  Divider,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const RatingCTASection = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 2, md: 3 },
        px: { xs: 2, md: 4 },
        borderRadius: 2,
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* CTA Button */}
        <Stack direction="row" spacing={2} mt={5}>
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: "30px",
              px: 5,
              py: 1.5,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 600,
              backgroundColor: "#000",
              color: "#fff",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#1a1a1a",
                transform: "translateY(-2px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              },
            }}
            href="/contact"
          >
            Get in Touch
          </Button>
        </Stack>

        {/* Divider (desktop only) */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{ display: { xs: "none", sm: "block" } }}
        />

        {/* Rating Section */}
        <Stack
          spacing={1.2}

        >
          <Rating
            value={4.9}
            precision={0.1}
            readOnly
            icon={<StarIcon fontSize="inherit" />}
            emptyIcon={<StarIcon fontSize="inherit" />}
            sx={{
              color: "#f4c150",
              fontSize: "1.6rem",
            }}
          />

          <Typography
            variant="body2"
            sx={{
              color: "#333",
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            Rated <strong>4.9 / 5</strong> from{" "}
            <strong>4,516</strong> verified reviews
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default RatingCTASection;
