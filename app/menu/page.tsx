import type { Metadata } from "next";
import Container from "@/components/Container";
import menu from "@/content/menu.json";

export const metadata: Metadata = {
  title: "Menu | Café O Cortiço",
  description: "Explore coffee, pastries, and light bites served daily."
};

export default function MenuPage() {
  return (
    <main className="pb-20 pt-12">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            Menu
          </p>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold">
            Comforting classics, made daily
          </h1>
          <p className="mt-4 text-base text-muted">
            Ask the team for the day’s specials and seasonal additions.
          </p>
        </div>
        <div className="mt-12 grid gap-10">
          {menu.categories.map((category) => (
            <section
              key={category.title}
              className="rounded-3xl border border-outline bg-card p-6"
            >
              <h2 className="text-2xl font-semibold">{category.title}</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-outline bg-white/70 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="mt-2 text-sm text-muted">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                        {item.priceNote}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
