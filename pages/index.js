import { useEffect, useState } from "react";
import Head from "next/head";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import CallbackForm from "@/components/callbackForm";
import AttestationProcess from "@/components/attestation-process";
import Layout from "@/components/layout";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [showCallback, setShowCallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCallback(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>
            Attestation Services UAE | Professional Document Verification
          </title>
          <meta
            name="description"
            content="Best attestation services in UAE. Professional document verification including embassy attestation, MOFA attestation, apostille services, and certificate verification."
          />
          <meta
            name="keywords"
            content="attestation services UAE, document verification, embassy attestation, MOFA attestation, apostille, certificate attestation"
          />
          <meta
            property="og:title"
            content="Best Attestation Services in UAE"
          />
          <meta
            property="og:description"
            content="Professional attestation and document verification services in UAE"
          />
          <meta property="og:type" content="website" />
          <meta
            name="robots"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <link rel="canonical" href="https://yourdomain.com" />
        </Head>

        <HeroSection />
        <ServicesSection />
        <AttestationProcess />

        {/* Timed callback form overlay */}
        <AnimatePresence>
          {showCallback && (
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              sx={{
                position: "fixed",
                inset: 0,
                zIndex: 1300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(15,23,42,0.45)",
                backdropFilter: "blur(4px)",
              }}
              onClick={() => setShowCallback(false)}
            >
              <Box
                sx={{ px: 2, width: "100%", maxWidth: 440 }}
                onClick={(e) => e.stopPropagation()}
              >
                <CallbackForm onClose={() => setShowCallback(false)} />
              </Box>
            </Box>
          )}
        </AnimatePresence>
      </Layout>
    </>
  );
}
