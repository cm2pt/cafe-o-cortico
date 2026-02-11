import Link from "next/link";
import Container from "@/components/Container";
import CtaButtons from "@/components/CtaButtons";
import { site } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e4d8cc] bg-[#fbf7f2]/95 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-lg font-semibold tracking-tight text-[#2d1d14]">
            {site.name}
          </span>
          <span className="hidden text-xs uppercase tracking-[0.3em] text-[#8b7768] sm:inline">
            {site.address.line1}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-[#6f5a4d] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[#2d1d14]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <CtaButtons size="sm" showInstagram={false} />
        </div>
      </Container>
    </header>
  );
}
