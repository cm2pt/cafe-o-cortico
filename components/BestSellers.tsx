import Image from "next/image";
import { menu } from "@/lib/data";
import { site } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";

const isBestSeller = (tags: { pt: string; en: string }[] | undefined) => {
  if (!tags) return false;
  return tags.some((tag) =>
    [tag.pt, tag.en].some((value) =>
      value.toLowerCase().includes("best") || value.toLowerCase().includes("popular") || value.toLowerCase().includes("best-seller")
    )
  );
};

export default function BestSellers({ lang }: { lang: Lang }) {
  const items = menu.categories
    .flatMap((category) =>
      category.items.map((item) => ({ ...item, image: item.image ?? category.image }))
    )
    .filter((item) => isBestSeller(item.tags));

  return (
    <div className="rounded-3xl border border-[var(--line)] bg-white/90 p-6">
      <div className="flex flex-col gap-2">
        {site.logo ? (
          <Image
            src={site.logo}
            alt="Logo Café O Cortiço – bee and honeycomb"
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
          />
        ) : null}
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
          {t(ui.labels.bestSellers, lang)}
        </p>
        <h2 className="text-2xl font-semibold text-[var(--accent)]">
          {t(ui.labels.bestSellersCopy, lang)}
        </h2>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={t(item.name, lang)}
            className="relative flex gap-4 rounded-2xl border border-[var(--line)] bg-white p-4"
          >
            {site.logo ? (
              <Image
                src={site.logo}
                alt="Logo Café O Cortiço – bee and honeycomb"
                width={44}
                height={20}
                className="absolute right-3 top-3 h-5 w-auto opacity-40"
              />
            ) : null}
            {item.image ? (
              <div className="h-20 w-20 overflow-hidden rounded-xl border border-[var(--line)]">
                <Image
                  src={item.image}
                  alt={t(item.name, lang)}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : null}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-[var(--accent)]">
                  {t(item.name, lang)}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  {t(item.price, lang)}
                </span>
              </div>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {t(item.description, lang)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
