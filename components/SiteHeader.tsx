import Link from "next/link";
import site from "@/content/site.json";
import Container from "@/components/Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-outline bg-[#fdf9f4]/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-[var(--font-display)] text-xl font-semibold tracking-tight">
            {site.name}
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            {site.city}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-muted md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="rounded-full border border-outline px-4 py-2 text-sm font-semibold transition hover:border-transparent hover:bg-foreground hover:text-white"
          >
            Plan a visit
          </Link>
        </div>
      </Container>
    </header>
  );
}
