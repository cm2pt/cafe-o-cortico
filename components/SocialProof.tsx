import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";

type SocialProofProps = {
  lang: Lang;
};

export default function SocialProof({ lang }: SocialProofProps) {
  const notes = [
    {
      pt: "Atendimento simpático e ambiente calmo.",
      en: "Friendly service and a calm atmosphere."
    },
    {
      pt: "Espresso consistente e bem equilibrado.",
      en: "Consistent, well-balanced espresso."
    },
    {
      pt: "Um espaço acolhedor para uma pausa tranquila.",
      en: "A cozy place for a relaxed break."
    }
  ];

  return (
    <div className="rounded-3xl border border-[#e4d8cc] bg-white/90 p-6">
      <h3 className="text-lg font-semibold text-[#2d1d14]">
        {t(ui.labels.socialProofTitle, lang)}
      </h3>
      <ul className="mt-4 grid gap-3 text-sm text-[#6f5a4d]">
        {notes.map((note) => (
          <li key={t(note, lang)}>{t(note, lang)}</li>
        ))}
      </ul>
    </div>
  );
}
