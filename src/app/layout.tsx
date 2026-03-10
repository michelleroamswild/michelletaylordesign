import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: {
    default: "Michelle Taylor — Product Designer",
    template: "%s | Michelle Taylor",
  },
  description:
    "Portfolio of Michelle Taylor, a product designer with 10+ years of experience solving complex problems and delivering impactful results in e-commerce, fintech, logistics, and enterprise SaaS.",
  keywords: [
    "product designer",
    "UX designer",
    "UI designer",
    "portfolio",
    "Michelle Taylor",
    "e-commerce design",
    "fintech design",
    "SaaS design",
    "enterprise design",
    "logistics design",
    "B2B design",
    "user experience",
    "interaction design",
    "design strategy",
  ],
  authors: [{ name: "Michelle Taylor" }],
  creator: "Michelle Taylor",
  metadataBase: new URL("https://michelletaylordesign.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Michelle Taylor — Product Designer",
    description:
      "Product designer with 10+ years of experience in e-commerce, fintech, and enterprise SaaS. Designing products that turn complexity into clarity.",
    siteName: "Michelle Taylor Design",
    images: [
      {
        url: "/images/logos/LogoMark.png",
        width: 512,
        height: 512,
        alt: "Michelle Taylor Design",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Michelle Taylor — Product Designer",
    description:
      "Product designer with 10+ years of experience in e-commerce, fintech, and enterprise SaaS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${spaceGrotesk.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
