type ChipVariant = "emerald" | "scarlet" | "volcanic" | "teak";

interface ConceitoChipProps {
  label: string;
  title: string;
  desc: string;
  variant: ChipVariant;
}

export function ConceitoChip({ label, title, desc, variant }: ConceitoChipProps) {
  return (
    <div className={`conceito-chip ${variant} interactive-zone`}>
      <div className="chip-label">{label}</div>
      <div className="chip-title">{title}</div>
      <div className="chip-desc">{desc}</div>
    </div>
  );
}
