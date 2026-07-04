import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      var root = document.documentElement;
      if (theme === 'light') {
        root.style.setProperty('--background', '#FFFFFF');
        root.style.setProperty('--foreground', '#0F172A');
        root.style.setProperty('--surface', '#F0F2F5');
        root.style.setProperty('--border', '#D1D5DB');
        root.style.setProperty('--text', '#0F172A');
        root.style.setProperty('--muted', '#6B7280');
        root.style.setProperty('--primary', '#7C3AED');
        root.style.setProperty('--primary-hover', '#6D28D9');
        root.style.setProperty('--blue', '#3B82F6');
        root.style.setProperty('--success', '#10B981');
      }
    } catch (e) {}
  })();
`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghelonico Maligaya",
  description: "Online portfolio of Ghelonico Maligaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
