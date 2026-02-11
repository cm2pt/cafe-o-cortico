import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";
import { site } from "@/lib/data";

const icons: Record<string, string> = {
  takeaway: "T",
  esplanada: "E",
  parking: "P",
  accessibility: "A",
  catering: "C"
};

export default function ServicesGrid({ lang }: { lang: Lang }) {
  return (
    <div className="rounded-3xl border border-[#e4d8cc] bg-white/90 p-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7768]">
          {t(ui.labels.servicesTitle, lang)}
        </p>
        <h3 className="text-2xl font-semibold text-[#2d1d14]">
          {t(ui.labels.servicesCopy, lang)}
        </h3>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {site.services.map((service) => (
          <div
            key={service.key}
            className="flex items-center gap-3 rounded-2xl border border-[#efe2d5] bg-white p-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e2d5c9] bg-[#f6ede4] text-sm font-semibold text-[#2d1d14]">
              {icons[service.key] ?? "•"}
            </div>
            <p className="text-sm font-semibold text-[#2d1d14]">
              {t(service.label, lang)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
