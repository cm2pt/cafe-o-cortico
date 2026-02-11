import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import site from "@/content/site.json";
import menu from "@/content/menu.json";
import promos from "@/content/promos.json";

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.map.query
)}`;

const callHref = site.contact.phone ? `tel:${site.contact.phone}` : "/contact";

export default function Home() {
  return (
    <main className="pb-24">
      <section className="border-b border-outline">
        <Container className="grid gap-10 py-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-outline bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {promos.strip.title}
            </div>
            <h1 className="font-[var(--font-display)] text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              {site.tagline}
            </h1>
            <p className="text-base text-muted md:text-lg">
              Espresso, pastries, and a calm corner for the people of {site.city}.
              Drop in for a quick recharge or stay for the conversation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={callHref}
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-[#3a261b]"
              >
                Call
              </Link>
              <Link
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-outline px-6 py-3 text-sm font-semibold text-foreground transition hover:border-transparent hover:bg-accent hover:text-[#2d1d14]"
              >
                Directions
              </Link>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              {site.city}, {site.country}
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-accent/40 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-outline bg-card shadow-xl">
              <Image
                src="/hero.svg"
                alt="Café O Cortiço interior"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </Container>
        <div className="bg-accent/20 py-3 text-center text-sm font-semibold text-foreground">
          {promos.strip.description}
        </div>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                Featured
              </p>
              <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold">
                Crowd favorites
              </h2>
            </div>
            <Link
              href="/menu"
              className="text-sm font-semibold text-muted transition hover:text-foreground"
            >
              Explore full menu →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {menu.featured.map((item) => (
              <div
                key={item.name}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-outline bg-card shadow-sm"
              >
                <div className="h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-[var(--font-display)] text-xl font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted">{item.description}</p>
                  <span className="mt-auto text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    {item.priceNote}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-outline bg-[#fdf9f4] py-16">
        <Container className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              Why visit
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold">
              A space built for everyday rituals
            </h2>
            <div className="mt-8 grid gap-6">
              <div className="rounded-2xl border border-outline bg-card p-6">
                <h3 className="text-lg font-semibold">Warm, welcoming service</h3>
                <p className="mt-2 text-sm text-muted">
                  Familiar faces, friendly baristas, and a calm atmosphere.
                </p>
              </div>
              <div className="rounded-2xl border border-outline bg-card p-6">
                <h3 className="text-lg font-semibold">Comforting menu</h3>
                <p className="mt-2 text-sm text-muted">
                  Espresso, baked sweets, and light bites that hit the spot.
                </p>
              </div>
              <div className="rounded-2xl border border-outline bg-card p-6">
                <h3 className="text-lg font-semibold">A local gathering point</h3>
                <p className="mt-2 text-sm text-muted">
                  A relaxed table for conversations, study, or a short break.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-outline bg-card p-6">
              <h3 className="text-lg font-semibold">Opening hours</h3>
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
                Hours are updated weekly on Instagram and Facebook.
              </p>
            </div>
            <div className="rounded-2xl border border-outline bg-card p-6">
              <h3 className="text-lg font-semibold">Social proof</h3>
              <p className="mt-3 text-sm text-muted">
                Locals stop in for the calm vibe, consistent espresso, and the
                friendly hello that makes the day feel lighter.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              Promos
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold">
              Reasons to return this week
            </h2>
            <div className="mt-8 grid gap-4">
              {promos.promos.map((promo) => (
                <div
                  key={promo.title}
                  className="rounded-2xl border border-outline bg-card p-5"
                >
                  <h3 className="text-lg font-semibold">{promo.title}</h3>
                  <p className="mt-2 text-sm text-muted">{promo.description}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    {promo.cta}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-outline bg-card p-6 shadow-lg">
            <h3 className="text-lg font-semibold">Find us in {site.city}</h3>
            <p className="mt-2 text-sm text-muted">
              Take a quick break and settle in. We’re easy to reach and ready to
              welcome you.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-outline">
              <iframe
                title="Café O Cortiço map"
                src={site.map.embedUrl}
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
              >
                Get directions
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-outline px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-outline bg-[#fdf9f4] px-4 py-3 md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between gap-3">
          <Link
            href={callHref}
            className="flex-1 rounded-full bg-foreground px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Call
          </Link>
          <Link
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full border border-outline px-4 py-3 text-center text-sm font-semibold"
          >
            Directions
          </Link>
        </div>
      </div>
    </main>
  );
}
