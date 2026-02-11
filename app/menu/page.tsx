import type { Metadata } from "next";
import Container from "@/components/Container";
import MenuCategory from "@/components/MenuCategory";
import { menu } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu | Café O Cortiço",
  description: "Explore coffee, pastries, and light bites served daily."
};

export default function MenuPage() {
  return (
    <main className="pb-20 pt-12">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7768]">
            Menu
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#2d1d14]">
            Comforting classics, made daily
          </h1>
          <p className="mt-4 text-base text-[#6f5a4d]">
            Ask the team for specials and seasonal additions.
          </p>
        </div>
        <div className="mt-12 grid gap-10">
          {menu.categories.map((category) => (
            <MenuCategory key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </main>
  );
}
