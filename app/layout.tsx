import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import site from "@/content/site.json";

export const metadata: Metadata = {
  title: `${site.name} | Torres Novas Café`,
  description:
    "A calm, modern café in Torres Novas serving espresso, pastries, and warm conversation.",
  openGraph: {
    title: `${site.name} | Torres Novas Café`,
    description:
      "Coffee, pastries, and a welcoming space in Torres Novas. Drop in for a relaxed break.",
    type: "website",
    images: [
      {
        url: "/hero.svg",
        width: 1600,
        height: 1000,
        alt: "Café O Cortiço hero"
      }
    ]
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
