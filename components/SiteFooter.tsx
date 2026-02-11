import Link from "next/link";
import Container from "@/components/Container";
import { site } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[#e4d8cc] bg-[#fbf7f2]">
      <Container className="grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-xl font-semibold text-[#2d1d14]">{site.name}</p>
          <p className="mt-2 text-sm text-[#6f5a4d]">{site.tagline}</p>
          <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-[#6f5a4d]">
            <Link href={site.instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </Link>
            <span aria-hidden="true">•</span>
            <Link href={site.facebookUrl} target="_blank" rel="noreferrer">
              Facebook
            </Link>
          </div>
        </div>
        <div className="text-sm text-[#6f5a4d]">
          <p className="font-semibold text-[#2d1d14]">Visit</p>
          <p className="mt-2">{site.address.line1}</p>
          <p>{site.address.line2}</p>
          {site.address.line3 ? <p>{site.address.line3}</p> : null}
        </div>
        <div className="text-sm text-[#6f5a4d]">
          <p className="font-semibold text-[#2d1d14]">Hours</p>
          <p className="mt-2">{site.hours.hoursNote}</p>
        </div>
      </Container>
    </footer>
  );
}
