import type { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";
import Container from "@/components/Container";
import MenuCategory from "@/components/MenuCategory";
import BestSellers from "@/components/BestSellers";
import { menu } from "@/lib/data";
import { resolveLang, t, ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Menu | Café O Cortiço",
  description: "Crepes, panquecas, café e opções de snack-bar em Torres Novas."
};

export default async function MenuPage() {
  const lang = resolveLang((await cookies()).get("lang")?.value);

  return (
    <main className="pb-20 pt-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7768]">
              {t(ui.nav.menu, lang)}
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-[#2d1d14]">
              {t(menu.hero.title, lang)}
            </h1>
            <p className="mt-4 text-base text-[#6f5a4d]">
              {t(menu.hero.subtitle, lang)}
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#e4d8cc] bg-white/90">
            <Image
              src="/menu/menu.jpg"
              alt={t(ui.labels.dailySpecial, lang)}
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-10">
          <BestSellers lang={lang} />
        </div>

        {menu.dailySpecial.enabled ? (
          <div className="mt-10 rounded-3xl border border-[#e4d8cc] bg-[#f6ede4] p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-[#2d1d14]">
                {t(menu.dailySpecial.name, lang)}
              </h2>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7768]">
                {t(menu.dailySpecial.price, lang)}
              </span>
            </div>
            <p className="mt-3 text-sm text-[#6f5a4d]">
              {t(menu.dailySpecial.description, lang)}
            </p>
          </div>
        ) : null}

        <div className="mt-12 grid gap-10">
          {menu.categories.map((category) => (
            <MenuCategory
              key={t(category.title, lang)}
              category={category}
              lang={lang}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-3 text-sm text-[#6f5a4d]">
          <p>{t(menu.allergenNote, lang)}</p>
          <p className="font-semibold text-[#2d1d14]">
            {t(menu.vegetarianNote, lang)}
          </p>
        </div>
      </Container>
    </main>
  );
}
