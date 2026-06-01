import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.canonical),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.nome}`,
  },
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],

  authors: [{ name: siteConfig.nome }],
  creator: siteConfig.nome,
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteConfig.seo.canonical,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.nome,
    images: [
      {
        url: siteConfig.seo.og_image,
        width: 1200,
        height: 630,
        alt: siteConfig.nome,
      },
    ],
  },
  alternates: {
    canonical: siteConfig.seo.canonical,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })()
          `
        }} />
      </head>
      <body className="antialiased vintage-grain">
        <CustomCursor />
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

