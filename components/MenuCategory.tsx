import Image from "next/image";
import type { MenuCategory as MenuCategoryType } from "@/lib/types";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

type MenuCategoryProps = {
  category: MenuCategoryType;
  lang: Lang;
};

export default function MenuCategory({ category, lang }: MenuCategoryProps) {
  return (
    <section className="rounded-3xl border border-[#e4d8cc] bg-white/90 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-[#2d1d14]">
            {t(category.title, lang)}
          </h2>
          {category.description ? (
            <p className="mt-2 text-sm text-[#6f5a4d]">
              {t(category.description, lang)}
            </p>
          ) : null}
        </div>
        {category.image ? (
          <div className="h-20 w-full overflow-hidden rounded-2xl border border-[#e4d8cc] bg-white md:w-40">
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
            className="rounded-2xl border border-[#efe2d5] bg-white px-4 py-4"
          >
            <div className="flex items-start justify-between gap-3">
              {item.image ? (
                <div className="hidden h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-[#efe2d5] sm:block">
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
                <h3 className="text-base font-semibold text-[#2d1d14]">
                  {t(item.name, lang)}
                </h3>
                <p className="mt-2 text-sm text-[#6f5a4d]">
                  {t(item.description, lang)}
                </p>
                {item.tags && item.tags.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={t(tag, lang)}
                        className="rounded-full bg-[#f0e1d3] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2d1d14]"
                      >
                        {t(tag, lang)}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7768]">
                {t(item.price, lang)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
