import Image from "next/image";
import type { MenuCategory as MenuCategoryType } from "@/lib/types";
import { site } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

type MenuCategoryProps = {
  category: MenuCategoryType;
  lang: Lang;
};

export default function MenuCategory({ category, lang }: MenuCategoryProps) {
  return (
    <section className="rounded-3xl border border-[var(--line)] bg-white/90 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          {site.logo ? (
            <Image
              src={site.logo}
              alt="Logo Café O Cortiço – bee and honeycomb"
              width={96}
              height={40}
              className="mb-2 h-8 w-auto object-contain opacity-70"
            />
          ) : null}
          <h2 className="text-2xl font-semibold text-[var(--accent)]">
            {t(category.title, lang)}
          </h2>
          {category.description ? (
            <p className="mt-2 text-sm text-[var(--muted)]">
              {t(category.description, lang)}
            </p>
          ) : null}
        </div>
        {category.image ? (
          <div className="h-20 w-full overflow-hidden rounded-2xl border border-[var(--line)] bg-white md:w-40">
            <Image
              src={category.image}
              alt={t(category.title, lang)}
              width={320}
              height={240}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {category.items.map((item) => (
          <div
            key={t(item.name, lang)}
            className="rounded-2xl border border-[var(--line)] bg-white px-4 py-4"
          >
            <div className="flex items-start justify-between gap-3">
              {item.image ? (
                <div className="hidden h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-[var(--line)] sm:block">
                  <Image
                    src={item.image}
                    alt={t(item.name, lang)}
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : null}
              <div>
                <h3 className="text-base font-semibold text-[var(--accent)]">
                  {t(item.name, lang)}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {t(item.description, lang)}
                </p>
                {item.tags && item.tags.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={t(tag, lang)}
                        className="rounded-full bg-[var(--secondary)] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]"
                      >
                        {t(tag, lang)}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                {t(item.price, lang)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
