import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdullah Shibib - Portfolio",
  description: "Personal portfolio website showcasing my work and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0a192f]">
      <body className={`${inter.className} min-h-screen w-full bg-[#0a192f]`}>
        <div className="page-container">
          <div className="container">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
