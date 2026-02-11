import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cafeocortico.local";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.name} | Torres Novas` ,
  description: site.shortDescription,
  openGraph: {
    title: `${site.name} | Torres Novas`,
    description: site.shortDescription,
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Torres Novas`,
    description: site.shortDescription,
    images: ["/og.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="antialiased">
        <div className="min-h-screen">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
