import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joel Regi Abraham | Software Developer & IT Professional",
  description:
    "Portfolio of Joel Regi Abraham — Software Developer & IT Professional building enterprise tools across Android, SPFx, Azure microservices, and ML applications.",
  keywords: [
    "Joel Regi Abraham",
    "Software Developer",
    "IT Professional",
    "Android Developer",
    "SPFx",
    "Azure",
    "Next.js",
    "TypeScript",
    "Machine Learning",
    "Conestoga College",
    "Waterloo",
  ],
  authors: [{ name: "Joel Regi Abraham", url: "https://github.com/joelregiabraham" }],
  creator: "Joel Regi Abraham",
  openGraph: {
    type: "website",
    locale: "en_CA",
    title: "Joel Regi Abraham | Software Developer & IT Professional",
    description:
      "Portfolio of Joel Regi Abraham — building enterprise tools across Android, SPFx, Azure microservices, and ML applications.",
    siteName: "Joel Regi Abraham Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel Regi Abraham | Software Developer & IT Professional",
    description: "Portfolio of Joel Regi Abraham — Software Developer & IT Professional.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
