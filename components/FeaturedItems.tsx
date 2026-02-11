import Image from "next/image";
import { promos } from "@/lib/data";

export default function FeaturedItems() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {promos.featuredItems.map((item) => (
        <article
          key={item.name}
          className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#e4d8cc] bg-white/80 shadow-sm"
        >
          <div className="h-48 overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              width={640}
              height={480}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#2d1d14]">
                {item.name}
              </h3>
              {item.badge ? (
                <span className="rounded-full bg-[#f0e1d3] px-2 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2d1d14]">
                  {item.badge}
                </span>
              ) : null}
            </div>
            <p className="text-sm text-[#6f5a4d]">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
