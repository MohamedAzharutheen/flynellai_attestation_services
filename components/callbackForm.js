import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Stack,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";

const MotionPaper = motion(Paper);

const CallbackForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};

    if (!name.trim()) {
      temp.name = "Name is required";
    } else if (name.length < 3) {
      temp.name = "Minimum 3 characters";
    }

    if (!contact.trim()) {
      temp.contact = "Contact number is required";
    } else if (!/^[0-9]{8,15}$/.test(contact)) {
      temp.contact = "Enter valid contact number";
    }

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = { name, contact };
    console.log("Form Data:", payload);

    alert("Callback request submitted!");

    setName("");
    setContact("");
  };

  return (
    <MotionPaper
      elevation={8}
      initial={{ opacity: 0, x: 80, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 80, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      sx={{
        maxWidth: 420,
        width: "100%",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 24px 60px rgba(15,23,42,0.25)",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          background: "linear-gradient(90deg, #0a1f44, #132f63)",
          color: "#fff",
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "0 0 50px 50px",
        }}
      >
        <Typography fontWeight={600} pl={3}>
          Request a Call Back Now!!
        </Typography>
        <IconButton onClick={onClose} sx={{ color: "#fff" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Form Body */}
      <Box p={3}>
        <form onSubmit={handleSubmit} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />

            <TextField
              label="Contact"
              fullWidth
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              error={Boolean(errors.contact)}
              helperText={errors.contact}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                borderRadius: 2,
                py: 1.2,
                fontWeight: 600,
              }}
            >
              Submit
            </Button>
          </Stack>
        </form>

        {/* Extra Actions */}
        <Stack spacing={1.5} mt={3}>
          <Button
            fullWidth
            startIcon={<WhatsAppIcon />}
            sx={{
              backgroundColor: "#0b2b50",
              color: "#fff",
              borderRadius: 2,
              "&:hover": { backgroundColor: "#0a2444" },
            }}
            href="https://wa.me/971588732300"
            target="_blank"
          >
            WhatsApp Us for Instant Quote
          </Button>

          <Button
            fullWidth
            sx={{
              backgroundColor: "#0b2b50",
              color: "#fff",
              borderRadius: 2,
              "&:hover": { backgroundColor: "#0a2444" },
            }}
            href="tel:+971588732300"
          >
            CALL US : +971 58 873 2300
          </Button>

          <Typography
            textAlign="center"
            variant="body2"
            color="primary"
          >
            Send us Email : info@attestationuae.com
          </Typography>
        </Stack>
      </Box>
    </MotionPaper>
  );
};

export default CallbackForm;
