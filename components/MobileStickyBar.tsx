import CtaButtons from "@/components/CtaButtons";
import type { Lang } from "@/lib/i18n";

export default function MobileStickyBar({ lang }: { lang: Lang }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#e4d8cc] bg-[#fbf7f2] px-4 py-3 md:hidden">
      <div className="mx-auto flex max-w-md flex-col gap-2">
        <CtaButtons layout="row" size="sm" lang={lang} />
      </div>
    </div>
  );
}
