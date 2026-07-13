import { stats } from "../data/mockData.js";

export default function StatGrid() {
  return (
    <div className="stat-grid">
      {stats.map((s) => (
        <div className="stat-card" key={s.id}>
          <span className="stat-label">{s.label}</span>
          <span className="stat-value">{s.value}</span>
          <span className={`stat-delta ${s.trend}`}>{s.delta}</span>
        </div>
      ))}
    </div>
  );
}
