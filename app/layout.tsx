import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../lib/theme-provider";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdullah Shibib | Portfolio",
  description: "Abdullah Shibib's personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body className={`${inter.className} w-full overflow-x-hidden m-0 p-0`} style={{ width: '100vw', maxWidth: '100%', overflowX: 'hidden' }}>
        <ThemeProvider>
          <main className="w-full" style={{ width: '100vw', maxWidth: '100%', overflowX: 'hidden' }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
} 