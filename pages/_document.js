import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Mobile & Responsive */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Attestation Services" />
        
        {/* Charset & Lang */}
        <meta charSet="utf-8" />
        
        {/* Google Font Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Attestation Services UAE",
              description: "Professional attestation and document verification services in UAE",
              url: "https://yourdomain.com",
              telephone: "+971-XXXXXXXXX",
              areaServed: "AE",
              serviceType: [
                "Attestation Services",
                "Document Verification",
                "Embassy Attestation",
                "Certificate Attestation",
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
