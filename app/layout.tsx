import { Geist, Geist_Mono, Noto_Serif } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import Script from 'next/script';

export default function Chatbot() {
  return (
    <Script
      src="http://localhost:3000/api/widget"
      data-bot-id="4f647aa8-ceb2-4f7b-b947-e0852a92186f"
      strategy="afterInteractive"
    />
  );
}
const notoSerif = Noto_Serif({subsets:['latin'],variable:'--font-serif'});

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})



export const metadata:Metadata = {
  title: "MeetingMind - AI Meeting Notes for Productive Teams",
  description:
    "MeetingMind is an AI-powered meeting assistant that automatically generates accurate, actionable summaries of your meetings. Stay organized, aligned, and never miss a follow-up again.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, fontMono.variable, "font-serif", notoSerif.variable)}
    >
      <body className="bg-accent">
          <Navbar/>
          {children}
      </body>
    </html>
  )
}
