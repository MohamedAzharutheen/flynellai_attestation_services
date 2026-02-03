import { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Stack,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionBox = motion(Box);

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleServicesOpen = (event) =>
    setServicesAnchorEl(event.currentTarget);
  const handleServicesClose = () => setServicesAnchorEl(null);

  const toggleMobileDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#efebe5",
        color: "#1f2937",
        borderBottom: "1px solid #e5e7eb",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 80 }}>
          {/* Logo */}
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            sx={{ flexGrow: 1 }}
          >
            <Button
              component={Link}
              href="/"
              sx={{
                p: 0,
                textTransform: "none",
                color: "inherit",
                "&:hover": { backgroundColor: "transparent", opacity: 0.8 },
              }}
            >
            <Image src="/flynella-attestation.png" alt="Attestation Services" width={150} height={150} />
            </Button>
          </MotionBox>

          {/* Desktop Menu */}
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Button component={Link} href="/" sx={navStyle}>
              Home
            </Button>
            <Button component={Link} href="/about" sx={navStyle}>
              About
            </Button>

            {/* Services Hover Dropdown */}
            <Box
              onMouseEnter={handleServicesOpen}
              onMouseLeave={handleServicesClose}
            >
              <Button
                component={Link}
                href="/#services"
                sx={navStyle}
                aria-haspopup="true"
                aria-expanded={Boolean(servicesAnchorEl) ? "true" : undefined}
              >
                Services
              </Button>
              <Menu
                anchorEl={servicesAnchorEl}
                open={Boolean(servicesAnchorEl)}
                onClose={handleServicesClose}
                MenuListProps={{ onMouseLeave: handleServicesClose }}
                elevation={3}
              >
                <MenuItem onClick={handleServicesClose}>
                  Degree Certificate
                </MenuItem>
                <MenuItem onClick={handleServicesClose}>
                  Diploma Certificate
                </MenuItem>
                <MenuItem onClick={handleServicesClose}>
                  Marriage Certificate
                </MenuItem>
                <MenuItem onClick={handleServicesClose}>
                  Birth Certificate
                </MenuItem>
                <MenuItem onClick={handleServicesClose}>Divorce Certificate</MenuItem>
                <MenuItem onClick={handleServicesClose}>Death Certificate</MenuItem>
                <MenuItem onClick={handleServicesClose}>
                  Transfer Certificate
                </MenuItem>
                <MenuItem onClick={handleServicesClose}>
                  Experience Certificate
                </MenuItem>
                <MenuItem onClick={handleServicesClose}>
                  Commercial Documents
                </MenuItem>
              </Menu>
            </Box>

            <Button component={Link} href="/contact" sx={navStyle}>
              Contact
            </Button>

            {/* Contact Details */}
            <Stack spacing={0.5}>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon sx={{ fontSize: 16 }} />
                <Typography variant="body2">+91 99940 34441</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon sx={{ fontSize: 16 }} />
                <Typography variant="body2">info@attestationpro.com</Typography>
              </Stack>
            </Stack>

            <MotionBox whileHover={{ scale: 1.05 }}>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                sx={{
                  backgroundColor: "#1f2937",
                  color: "#fff",
                  borderRadius: 999,
                  px: 3,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#111827" },
                }}
              >
                Get Started
              </Button>
            </MotionBox>
          </Stack>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="open navigation menu"
            onClick={toggleMobileDrawer}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={toggleMobileDrawer}
            ModalProps={{ keepMounted: true }}
            PaperProps={{
              sx: {
                width: "80%",
                maxWidth: 320,
                backgroundColor: "#f9fafb",
                borderRadius: "16px 0 0 16px",
              },
            }}
          >
            <Box
              role="presentation"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2,
                  py: 2,
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <Typography variant="subtitle1" fontWeight={700}>
                  Menu
                </Typography>
                <IconButton
                  onClick={toggleMobileDrawer}
                  aria-label="close navigation menu"
                  size="small"
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <List>
                  {navItems.map((item) => (
                    <ListItemButton
                      key={item.href}
                      component={Link}
                      href={item.href}
                      onClick={toggleMobileDrawer}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontWeight: 600,
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </motion.div>

              <Divider sx={{ mt: "auto" }} />

              <Box sx={{ p: 2 }}>
                <Stack spacing={1.5}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <PhoneIcon fontSize="small" />
                    <Typography variant="body2">+91 99940 34441</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <EmailIcon fontSize="small" />
                    <Typography variant="body2">
                      info@attestationpro.com
                    </Typography>
                  </Stack>
                  <Button
                    component={Link}
                    href="/contact"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 1,
                      borderRadius: 999,
                      textTransform: "none",
                      backgroundColor: "#1f2937",
                      "&:hover": { backgroundColor: "#111827" },
                    }}
                    onClick={toggleMobileDrawer}
                  >
                    Get a Free Consultation
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const navStyle = {
  color: "#1f2937",
  fontWeight: 500,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#000",
  },
};
