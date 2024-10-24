import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Thank You, Vitor Alencar!",
  description:
    "A heartfelt thank you page for Vitor Alencar where friends and colleagues can leave goodbye notes and express their gratitude.",
  keywords:
    "Thank you, Goodbye, Vitor Alencar, farewell messages, appreciation",
  authors: [{ name: "vitormalencar", url: "https://thanks-vitor.vercel.app/" }],
  openGraph: {
    title: "Thank You, Vitor Alencar!",
    description:
      "A heartfelt thank you page for Vitor Alencar where friends and colleagues can leave goodbye notes and express their gratitude.",
    url: "https://thanks-vitor.vercel.app/",
    siteName: "Vitor Alencar's Farewell Page",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You, Vitor Alencar!",
    description:
      "A heartfelt thank you page for Vitor Alencar where friends and colleagues can leave goodbye notes and express their gratitude.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
