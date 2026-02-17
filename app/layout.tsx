import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Habeeb Amoo",
  description: "I'm Habeeb Amoo, a software developer with several years of experience building scalable, real-world web applications, APIs, and systems using modern technologies and architecture.",
  keywords: ["Habeeb Amoo", "Habeeb", "Amoo", "Habeebamoo"],
  openGraph: {
    title: 'Habeeb Amoo',
    description: "I'm Habeeb Amoo, a software developer with several years of experience building scalable, real-world web applications, APIs, and systems using modern technologies and architecture.",
    url: 'https://habeebamoo.vercel.app',
    siteName: "Habeeb Amoo",
    images: [
      {
        url: 'https://habeebamoo.vercel.app/anime.jpeg',
        width: 1000,
        height: "1000",
        alt: 'Habeeb Amoo',
      },
    ],
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Habeeb Amoo',
    description: "I'm Habeeb Amoo, a software developer with several years of experience building scalable, real-world web applications, APIs, and systems using modern technologies and architecture.",
    images: ['https://habeebamoo.vercel.app/anime.jpeg'],
  },
  icons: "/anime.jpeg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
