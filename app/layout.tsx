import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      var root = document.documentElement;
      if (theme === 'light') {
        root.style.setProperty('--background', '#FFFFFF');
        root.style.setProperty('--foreground', '#18181B');
        root.style.setProperty('--surface', '#F4F4F5');
        root.style.setProperty('--border', '#E4E4E7');
        root.style.setProperty('--text', '#09090B');
        root.style.setProperty('--muted', '#71717A');
        root.style.setProperty('--primary', '#8B5CF6');
        root.style.setProperty('--primary-hover', '#7C3AED');
        root.style.setProperty('--blue', '#3B82F6');
        root.style.setProperty('--success', '#22C55E');
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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
