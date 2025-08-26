import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/your-fontkit.css" // OR other CDN
        />
      </head>
      <body style={{ fontFamily: 'Geist, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}

