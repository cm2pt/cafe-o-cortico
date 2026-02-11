import { promos } from "@/lib/data";

export default function PromoStrip() {
  return (
    <div className="border-y border-[#e4d8cc] bg-[#f4ece4]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-6 py-3 text-sm text-[#6f5a4d]">
        {promos.promoStrip.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className="rounded-full border border-[#e2d5c9] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2d1d14]">
              {item.label}
            </span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
