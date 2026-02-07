import Head from "next/head";

const defaultKeywords = [
  "attestation service",
  "visa service",
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
];

export default function Seo({
  title = "Attestation Services Tirunelveli",
  description =
    "Professional attestation, apostille and embassy services in Tirunelveli. Fast, reliable document attestation for educational, personal and commercial documents.",
  keywords = [],
  canonical = undefined,
  extra = null,
  // Local business defaults (override via `local` prop)
  local = {
    name: "Flynellai Attestation Services",
    streetAddress: "Tirunelveli, Tamil Nadu, India",
    telephone: "+91 99940 34441",
    email: "info@attestationuae.com",
    url: "https://yourdomain.com",
    geo: { latitude: "8.728", longitude: "77.692" },
  },
  // Aggregate rating defaults (visible in search rich result when used by search engines)
  ratingValue = 5,
  reviewCount = 10000,
  serviceType = "Certificate Attestation",
}) {
  // merge provided keywords with defaults and add location variants
  const location = "Tirunelveli";
  const mergedKeywords = Array.from(
    new Set([
      ...defaultKeywords,
      ...keywords,
      ...defaultKeywords.map((k) => `${k} in ${location}`),
    ])
  );

  const keywordsContent = mergedKeywords.slice(0, 40).join(", ");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: local.name,
    image: `${local.url}/flynella-attestation.png`,
    telephone: local.telephone,
    email: local.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: local.streetAddress,
      addressLocality: "Tirunelveli",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    url: local.url,
    geo: {
      "@type": "GeoCoordinates",
      latitude: local.geo.latitude,
      longitude: local.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    description,
    keywords: keywordsContent,
    // Add a Service/Product snippet with aggregate rating for rich results
    potentialAction: {
      "@type": "SearchAction",
      target: `${local.url}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    mainEntityOfPage: {
      "@type": "Service",
      name: serviceType,
      description,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: Number(ratingValue),
        reviewCount: Number(reviewCount),
      },
    },
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsContent} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={local.name} />
      <meta property="og:url" content={canonical || local.url} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {canonical && <link rel="canonical" href={canonical} />}

      {/* JSON-LD for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {extra}
    </Head>
  );
}

// PropTypes intentionally omitted to avoid adding extra dependency
