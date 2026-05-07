import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Vishnu Vuttarkar",
  description: "Offensive Security Consultant - OSCP+ · PNPT · MSc Cyber Security.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#0a0c0f] text-[#cdd9e5] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}