import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nadeem-portfolio-kappa.vercel.app"),

  title: {
    default: "Mohammed Nadeem S | Senior Full Stack Engineer",
    template: "%s | Mohammed Nadeem S",
  },

  description:
    "Senior Full Stack Engineer with 8+ years of experience building scalable, production-ready web and mobile systems. Specialized in React, Next.js, Node.js, and backend architectures.",

  keywords: [
    "Senior Full Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Engineer",
    "Web Developer",
    "Mobile App Developer",
    "Production Systems",
  ],

  authors: [{ name: "Mohammed Nadeem S" }],
  creator: "Mohammed Nadeem S",

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },

  openGraph: {
    title: "Mohammed Nadeem S | Senior Full Stack Engineer",
    description: "I design and build scalable production systems for web and mobile.",
    url: "https://nadeem-portfolio-kappa.vercel.app",
    siteName: "Mohammed Nadeem Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Nadeem S – Senior Full Stack Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohammed Nadeem S | Senior Full Stack Engineer",
    description: "Building scalable production-ready systems.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
