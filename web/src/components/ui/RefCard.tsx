interface RefCardProps {
  icon: string;
  title: string;
  desc: string;
  mood?: string;
  location?: string;
  detail?: string;
}

export function RefCard({
  icon,
  title,
  desc,
  mood,
  location,
  detail,
}: RefCardProps) {
  return (
    <div className="ref-card">
      <div className="ref-card-header">
        <span className="ref-icon">{icon}</span>
        {location && <span className="ref-location">{location}</span>}
      </div>
      <h4>{title}</h4>
      <p className="ref-desc">{desc}</p>
      {mood && <p className="ref-mood">{mood}</p>}
      {detail && <p className="ref-detail">{detail}</p>}
    </div>
  );
}
