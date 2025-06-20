import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/app/ui/display/Navigation";
import Footer from "@/app/ui/display/Footer";
import { SidebarProvider } from "@/app/context/SidebarContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"], // customize as needed
});

export const metadata: Metadata = {
  title: "Equiply",
  description:
    "Equiply is a platform that connects farmers to nearby peers who own idle agricultural tools. It enables hyper-local, short-term peer-to-peer rentals of farm equipment—saving farmers time, labor, and money.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.className} antialiased`}
      >
        <SidebarProvider>
          <Navigation />
          {children}
          <Footer />
        </SidebarProvider>
      </body>
    </html>
  );
}
