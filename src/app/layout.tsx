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
    <html lang="en" className="bg-[#0a192f] scroll-smooth">
      <body className={`${inter.className} bg-[#0a192f] min-h-screen w-full overflow-x-hidden`}>
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
