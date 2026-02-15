interface DataStat {
  value: string;
  label: string;
}

interface DataGridProps {
  items: DataStat[];
}

export function DataGrid({ items }: DataGridProps) {
  return (
    <div className="data-grid">
      {items.map((item, i) => (
        <div key={i} className="data-stat">
          <span className="data-stat-value">{item.value}</span>
          <span className="data-stat-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
