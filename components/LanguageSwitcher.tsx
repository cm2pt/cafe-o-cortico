"use client";

import { useTransition } from "react";
import type { Lang } from "@/lib/i18n";

const ONE_YEAR = 60 * 60 * 24 * 365;

type LanguageSwitcherProps = {
  lang: Lang;
};

export default function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const [, startTransition] = useTransition();
  const nextLang = lang === "pt" ? "en" : "pt";

  const handleSwitch = () => {
    startTransition(() => {
      document.cookie = `lang=${nextLang}; path=/; max-age=${ONE_YEAR}`;
      window.location.reload();
    });
  };

  return (
    <button
      type="button"
      onClick={handleSwitch}
      className="rounded-full border border-[#e2d5c9] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#6f5a4d] transition hover:border-transparent hover:bg-[#efe2d5]"
      aria-label={`Switch language to ${nextLang === "pt" ? "Português" : "English"}`}
    >
      {lang === "pt" ? "EN" : "PT"}
    </button>
  );
}
