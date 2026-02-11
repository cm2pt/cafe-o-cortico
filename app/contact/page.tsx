import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import site from "@/content/site.json";

export const metadata: Metadata = {
  title: "Contact | Café O Cortiço",
  description: "Plan your visit to Café O Cortiço in Torres Novas."
};

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.map.query
)}`;

export default function ContactPage() {
  return (
    <main className="pb-20 pt-12">
      <Container className="grid gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            Contact
          </p>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold">
            We’d love to see you
          </h1>
          <p className="mt-4 text-base text-muted">
            Drop by for a coffee break or message us on social for updates.
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-outline bg-card p-5">
              <p className="text-sm font-semibold text-foreground">Address</p>
              <p className="mt-2 text-sm text-muted">{site.address.line1}</p>
              <p className="text-sm text-muted">{site.address.line2}</p>
              <Link
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-foreground underline-offset-4 hover:underline"
              >
                Get directions
              </Link>
            </div>
            <div className="rounded-2xl border border-outline bg-card p-5">
              <p className="text-sm font-semibold text-foreground">Phone</p>
              <p className="mt-2 text-sm text-muted">
                Phone number available on request.
              </p>
            </div>
            <div className="rounded-2xl border border-outline bg-card p-5">
              <p className="text-sm font-semibold text-foreground">Email</p>
              <p className="mt-2 text-sm text-muted">
                Email address available on request.
              </p>
            </div>
            <div className="rounded-2xl border border-outline bg-card p-5">
              <p className="text-sm font-semibold text-foreground">Social</p>
              <div className="mt-3 flex gap-4 text-sm font-semibold text-muted">
                <Link href={site.social.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </Link>
                <Link href={site.social.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-outline bg-card p-5">
            <h2 className="text-lg font-semibold">Opening hours</h2>
            <div className="mt-4 grid gap-3 text-sm text-muted">
              {site.hours.map((entry) => (
                <div
                  key={entry.label}
                  className="flex items-center justify-between border-b border-outline pb-2 last:border-b-0"
                >
                  <span>{entry.label}</span>
                  <span className="font-semibold text-foreground">
                    {entry.hours}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted">
              Hours are updated weekly on social channels.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-outline bg-card">
            <iframe
              title="Café O Cortiço map"
              src={site.map.embedUrl}
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
