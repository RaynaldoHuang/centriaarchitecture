import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import NavBar from "@/components/layout/NavigationBar";

const myCustomFont = localFont({
  src: [
    {
      path: "../public/fonts/Helvetica-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvetica.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvetica-Bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--helvetica", // Opsional, untuk Tailwind
});

export const metadata: Metadata = {
  metadataBase: new URL("https://centriaarchitecture.com/"), // ganti dengan domain asli kamu

  title: {
    default: "Centria Architecture | Architectural Design Studio",
    template: "%s | Centria Architecture",
  },

  description:
    "Delivering thoughtfully designed residential and commercial architecture through a seamless blend of creativity, technical precision, and sustainable innovation to create spaces that inspire, function beautifully, and stand the test of time.",

  keywords: [
    "interior medan",
    "jasa interio",
    "arsitek medan",
    "Centria Architecture",
    "arsitek",
    "jasa arsitek profesional",
    "jasa arsitek rumah",
    "jasa desain interior",
    "konsultan arsitektur",
    "desain rumah modern",
    "arsitek minimalis",
    "jasa desain villa",
    "desain bangunan komersial",
    "arsitek indonesia",
    "studio arsitektur",
    "desain interior modern",
    "perencanaan bangunan",
    "arsitek dan interior",
    "jasa renovasi rumah",
    "desain fasad bangunan",
  ],

  authors: [{ name: "Centria Architecture" }],
  creator: "Centria Architecture",
  publisher: "Centria Architecture",

  openGraph: {
    title: "Centria Architecture | Architectural Design Studio",
    description:
      "Delivering thoughtfully designed residential and commercial architecture through a seamless blend of creativity, technical precision, and sustainable innovation to create spaces that inspire, function beautifully, and stand the test of time.",
    url: "https://centriaarchitecture.com/",
    siteName: "Centria Architecture",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Centria Architecture | Architectural Design Studio",
    description:
      "Delivering thoughtfully designed residential and commercial architecture through a seamless blend of creativity, technical precision, and sustainable innovation to create spaces that inspire, function beautifully, and stand the test of time.",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://centriaarchitecture.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myCustomFont.variable} ${myCustomFont.className} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
