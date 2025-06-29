import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MyBlog - Modern Blog Application",
    template: "%s | MyBlog"
  },
  description: "A modern, responsive blog application built with Next.js 14, TypeScript, and Tailwind CSS. Features dynamic routing, server-side rendering, and beautiful UI optimized for all devices.",
  keywords: ["blog", "next.js", "typescript", "tailwind css", "react", "modern web", "responsive design", "blog application"],
  authors: [{ name: "Abbass Khalid" }],
  creator: "Abbass Khalid",
  publisher: "MyBlog",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://myblog.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://myblog.vercel.app',
    title: 'MyBlog - Modern Blog Application',
    description: 'A modern, responsive blog application with beautiful UI and excellent user experience.',
    siteName: 'MyBlog',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MyBlog - Modern Blog Application',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyBlog - Modern Blog Application',
    description: 'A modern, responsive blog application with beautiful UI and excellent user experience.',
    images: ['/og-image.jpg'],
    creator: '@abbasskhalid',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
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
        className={` container mx-auto ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
