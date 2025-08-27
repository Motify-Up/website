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
  title: "MotifyUp - Family Goal Tracking App | Motivate to Achieve Goals",
  description: "Transform your family's motivation with MotifyUp. Track daily progress, complete journeys, and stay focused on achieving goals together. Free family goal tracking app for iOS and iPad.",
  keywords: [
    "family goal tracking app",
    "motivation app",
    "goal setting app",
    "family productivity",
    "daily progress tracker",
    "habit tracker app",
    "family motivation",
    "goal achievement app",
    "iOS productivity app",
    "family goal setting",
    "motivation tracker",
    "goal completion app",
    "family habit building",
    "daily task tracker",
    "motivation to achieve goals"
  ],
  authors: [{ name: "MetaLeap LLC" }],
  creator: "MetaLeap LLC",
  publisher: "MetaLeap LLC",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://motifyup.metaleap.so",
    siteName: "MotifyUp",
    title: "MotifyUp - Family Goal Tracking App | Motivate to Achieve Goals",
    description: "Transform your family's motivation with MotifyUp. Track daily progress, complete journeys, and stay focused on achieving goals together.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MotifyUp - Family Goal Tracking App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MotifyUp - Family Goal Tracking App",
    description: "Transform your family's motivation with MotifyUp. Track daily progress and achieve goals together.",
    images: ["/og-image.jpg"],
    creator: "@MetaLeapLLC",
  },
  alternates: {
    canonical: "https://motifyup.metaleap.so",
  },
  category: "Productivity",
  classification: "Mobile App",
  other: {
    "apple-mobile-web-app-title": "MotifyUp",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    "theme-color": "#10B981",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://motifyup.metaleap.so" />
        <meta name="theme-color" content="#10B981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MotifyUp" />
        
        {/* Structured Data for App */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "MotifyUp",
              "description": "Family goal tracking and motivation app",
              "operatingSystem": "iOS",
              "applicationCategory": "ProductivityApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "ratingCount": "2"
              },
              "author": {
                "@type": "Organization",
                "name": "MetaLeap LLC"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
