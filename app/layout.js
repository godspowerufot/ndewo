import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./component/ui/Navbar";
import Footer from "./component/ui/Footer";
import Script from "next/script";
import { AOSInit } from "@/lib/page";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata = {
  title: "Ndewo",
  description:
    "Ndewo Africa is a curated travel and experience company that helps visitors and locals explore Nigeria with ease. From itineraries to tour guides, accommodation, and cultural experiences, we make sure your journey is seamless, memorable, and stress-free.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      <body className="font-exodus">
        <AOSInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
