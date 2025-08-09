import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
  icons: {
    icon: [
      // Light mode favicon uses dark mark
      {
        url: "/brand/viberise-mark-dark.png",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      // Dark mode favicon uses light mark
      {
        url: "/brand/viberise-mark-light.png",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    // Apple touch icon (homescreen on iOS)
    apple: [
      {
        url: "/brand/viberise-mark-dark.png",
      },
    ],
    // Optional legacy shortcut icon
    shortcut: ["/brand/viberise-mark-dark.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
