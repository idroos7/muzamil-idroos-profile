import "./globals.css";

// Fonts are loaded at runtime via the <link> tags in <head> below rather than
// next/font/google, so `npm run build` never depends on network access to
// fonts.googleapis.com. Family names are wired up as CSS variables in
// globals.css (--font-display / --font-body / --font-mono).

export const metadata = {
  title: "Muzamil Idroos — QA and EMV Certification Manager",
  description:
    "QA and EMV Certification Manager specialized in POS and Payment Switch Testing and EMV Level 3 Acquirer Integration. 7+ years across TSYS, Fiserv, Worldpay, Elavon, and EPX.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Muzamil Idroos — QA and EMV Certification Manager",
    description:
      "Specialized in POS and Payment Switch Testing and EMV Level 3 Acquirer Integration.",
    type: "profile",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
