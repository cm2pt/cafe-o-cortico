import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/lib/data";
import { resolveLang } from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cafeocortico.local";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.seo.title.pt,
  description: site.seo.description.pt,
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    title: site.seo.title.pt,
    description: site.seo.description.pt,
    type: "website",
    images: [
      {
        url: site.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title.pt,
    description: site.seo.description.pt,
    images: [site.seo.ogImage]
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = resolveLang((await cookies()).get("lang")?.value);

  return (
    <html lang={lang === "pt" ? "pt-PT" : "en"}>
      <body className="antialiased">
        <div className="min-h-screen">
          <SiteHeader lang={lang} />
          {children}
          <SiteFooter lang={lang} />
        </div>
      </body>
    </html>
  );
}
