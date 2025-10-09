import type { Metadata } from "next";
import { Geist, Geist_Mono, Bad_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const badScript = Bad_Script({
  variable: "--font-bad-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Rathgeber - Software Engineer & Musician",
  description: "John Rathgeber is a junior at Brown University studying Mathematics-Computer Science and Music. Passionate about algorithmic problem solving, backend engineering, and piano performance.",
  keywords: ["John Rathgeber", "software engineer", "Brown University", "computer science", "mathematics", "music", "piano", "backend engineering"],
  authors: [{ name: "John Rathgeber" }],
  openGraph: {
    title: "John Rathgeber - Software Engineer & Musician",
    description: "Junior at Brown University studying Mathematics-Computer Science and Music. Passionate about algorithmic problem solving, backend engineering, and piano performance.",
    url: "https://johnrathgeber.com",
    siteName: "John Rathgeber",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Rathgeber - Software Engineer & Musician",
    description: "Junior at Brown University studying Mathematics-Computer Science and Music. Passionate about algorithmic problem solving, backend engineering, and piano performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${badScript.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
