export default function SocialProof() {
  const notes = [
    "Friendly service and a calm atmosphere.",
    "Espresso that’s consistent and well-balanced.",
    "A cozy place to catch up or take a quiet break."
  ];

  return (
    <div className="rounded-3xl border border-[#e4d8cc] bg-white/90 p-6">
      <h3 className="text-lg font-semibold text-[#2d1d14]">
        What customers mention
      </h3>
      <ul className="mt-4 grid gap-3 text-sm text-[#6f5a4d]">
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
