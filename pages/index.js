import { useEffect, useState } from "react";
import Head from "next/head";
import Seo from "@/components/Seo";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import CallbackForm from "@/components/callbackForm";
import AttestationProcess from "@/components/attestation-process";
import FaqSection from "@/components/faq-section";
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
        <Seo
          title="Certificate Attestation Services in Tirunelveli"
          description="Professional attestation, apostille and embassy services in Tirunelveli — educational, personal and commercial document attestation with fast processing."
          canonical="https://yourdomain.com"
          keywords={[
            "attestation service in tirunelveli",
            "visa service in tirunelveli",
            "service",
            "certificate attestation",
            "educational certificate",
            "degree",
            "diploma",
            "SSLC",
            "HSC",
            "non educational certificate",
            "experience certificate",
            "birth certificate",
            "marriage certificate",
            "death certificate",
            "medical certificate",
            "MEA attestation",
            "PCC",
            "apostille",
            "power of attorney",
            "police clearance",
          ]}
        />

        <HeroSection />
        <ServicesSection />
        <AttestationProcess />
        <FaqSection />

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
