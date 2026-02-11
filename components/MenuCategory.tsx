import Image from "next/image";
import type { MenuCategory as MenuCategoryType } from "@/lib/types";

type MenuCategoryProps = {
  category: MenuCategoryType;
};

export default function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <section className="rounded-3xl border border-[#e4d8cc] bg-white/90 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-[#2d1d14]">
            {category.title}
          </h2>
          {category.description ? (
            <p className="mt-2 text-sm text-[#6f5a4d]">
              {category.description}
            </p>
          ) : null}
        </div>
        {category.image ? (
          <div className="h-24 w-full overflow-hidden rounded-2xl border border-[#e4d8cc] bg-white md:h-20 md:w-40">
            <Image
              src={category.image}
              alt={category.title}
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
            key={item.name}
            className="rounded-2xl border border-[#efe2d5] bg-white px-4 py-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-[#2d1d14]">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-[#6f5a4d]">
                  {item.description}
                </p>
                {item.badges && item.badges.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full bg-[#f0e1d3] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2d1d14]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
              {item.price ? (
                <span className="text-sm font-semibold text-[#2d1d14]">
                  {item.price}
                </span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
