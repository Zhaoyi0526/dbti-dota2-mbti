type Faction = "radiant" | "dire";

const DIMENSION_PAIRS: { label: string; faction: Faction }[] = [
  { label: "Silent ↔ Vocal", faction: "radiant" },
  { label: "Egoistic ↔ Altruistic", faction: "dire" },
  { label: "Calculated ↔ Instinctive", faction: "radiant" },
  { label: "Tenacious ↔ Resigned", faction: "dire" },
];

const pillBase =
  "inline-block whitespace-nowrap rounded-full px-4 py-2 font-mono text-[13px] tracking-wide text-zinc-400 backdrop-blur-sm transition-colors";

const factionClass: Record<Faction, string> = {
  radiant:
    "border border-emerald-500/10 bg-emerald-950/10 hover:border-emerald-400/40",
  dire: "border border-red-500/10 bg-red-950/10 hover:border-red-400/40",
};

export function DimensionPills() {
  return (
    <div className="mx-auto my-8 grid max-w-xl grid-cols-1 justify-items-center gap-3 px-4 sm:grid-cols-2">
      {DIMENSION_PAIRS.map(({ label, faction }) => (
        <span key={label} className={`${pillBase} ${factionClass[faction]}`}>
          {label}
        </span>
      ))}
    </div>
  );
}
