import CtaButtons from "@/components/CtaButtons";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#e4d8cc] bg-[#fbf7f2] px-4 py-3 md:hidden">
      <div className="mx-auto flex max-w-md flex-col gap-2">
        <CtaButtons layout="row" size="sm" showInstagram={false} />
        <span className="text-center text-[11px] uppercase tracking-[0.2em] text-[#8b7768]">
          Tap for directions or call
        </span>
      </div>
    </div>
  );
}
