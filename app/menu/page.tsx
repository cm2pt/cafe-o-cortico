import type { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";
import Container from "@/components/Container";
import MenuCategory from "@/components/MenuCategory";
import { menu } from "@/lib/data";
import { resolveLang, t, ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Menu | Café O Cortiço",
  description: "Explore coffee, pastries, and light bites served daily."
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
              {t(ui.labels.simpleMenu, lang)}
            </h1>
            <p className="mt-4 text-base text-[#6f5a4d]">
              {t(ui.labels.menuIntro, lang)}
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#e4d8cc] bg-white/90">
            <Image
              src="/menu/menu.jpg"
              alt={t(ui.labels.menuImageAlt, lang)}
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-10">
          {menu.categories.map((category) => (
            <MenuCategory
              key={t(category.title, lang)}
              category={category}
              lang={lang}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
