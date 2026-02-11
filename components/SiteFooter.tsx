import Link from "next/link";
import site from "@/content/site.json";
import Container from "@/components/Container";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-outline bg-[#fdf9f4]">
      <Container className="grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-[var(--font-display)] text-xl font-semibold">
            {site.name}
          </p>
          <p className="mt-2 text-sm text-muted">{site.tagline}</p>
          <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-muted">
            <Link href={site.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </Link>
            <span aria-hidden="true">•</span>
            <Link href={site.social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </Link>
          </div>
        </div>
        <div className="text-sm text-muted">
          <p className="font-semibold text-foreground">Visit</p>
          <p className="mt-2">{site.address.line1}</p>
          <p>{site.address.line2}</p>
        </div>
        <div className="text-sm text-muted">
          <p className="font-semibold text-foreground">Hours</p>
          <p className="mt-2">Updated weekly on social channels.</p>
        </div>
      </Container>
    </footer>
  );
}
