import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michelle Taylor — Product Designer",
  description:
    "Portfolio of Michelle Taylor, a product designer with 10+ years of experience in e-commerce, fintech, and logistics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
