import type { Metadata } from "next";
import "./globals.css";
import { Preloader } from "@/components/portfolio/preloader";

export const metadata: Metadata = {
  title: "Asif — Web Developer",
  description:
    "Freelance web development by Asif — WordPress, Shopify, custom web apps, high-converting landing pages, and SEO-ready websites.",
};

// The site is a single dark (orange) theme — force the dark class before paint,
// overriding any stale light-theme value a visitor may still have in localStorage.
const themeScript = `document.documentElement.classList.add('dark');`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full antialiased">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
