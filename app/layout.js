import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/ui/Navbar";
import Footer from "./component/ui/Footer";
import Script from "next/script";
import { AOSInit } from "@/lib/page";
import localFont from "next/font/local";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const tropiline = localFont({
  src: [
    {
      path: "../public/fonts/tropiline-font-family/Tropiline-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/tropiline-font-family/Tropiline-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/tropiline-font-family/Tropiline-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-tropiline",
});

const exodus = localFont({
  src: [
    {
      path: "../public/fonts/EudoxusSans-Bold-BF659b6cb1408e5.ttf",
      weight: "700",
      style: "normal",
    },

    {
      path: "../public/fonts/EudoxusSans-Regular-BF659b6cb1d4714.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-exodus",
});

export const metadata = {
  title: "Ndewo",
  description:
    "Ndewo Africa is a curated travel and experience company that helps visitors and locals explore Nigeria with ease. From itineraries to tour guides, accommodation, and cultural experiences, we make sure your journey is seamless, memorable, and stress-free.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${tropiline.variable} ${exodus.variable}`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      <body className={`$${exodus.className}`}>
        <AOSInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
