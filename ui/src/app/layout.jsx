import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Parallel Image Processing",
  description: "Redefining Image Processing with Parallel Computing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>PDC Project - Parallel Image Processing</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&family=Noto+Sans:wght@400;500;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/favicon.PNG" />

        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-light text-[#181811]`}
      >
        <Toaster position="bottom-right" reverseOrder={false} />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
