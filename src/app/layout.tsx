import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, DisclaimerBanner } from "@/components/layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "e-MAS Portal | Healthcare Claims Management Demo",
  description: "Modern healthcare claims administration portal. Streamlined medical claims processing, provider network management, and real-time analytics for corporate healthcare.",
  keywords: "healthcare, claims management, TPA, medical administration, Malaysia",
  authors: [{ name: "Daniel Hakim" }],
  openGraph: {
    title: "e-MAS Portal | Healthcare Claims Management Demo",
    description: "Modern healthcare claims administration portal demo showcasing Next.js, TypeScript, and Tailwind CSS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        <DisclaimerBanner />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
