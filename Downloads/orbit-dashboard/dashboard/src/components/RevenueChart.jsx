import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { revenueSeries } from "../data/mockData.js";

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{
        background: "#1b212b",
        border: "1px solid #262c36",
        borderRadius: 8,
        padding: "8px 12px",
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 12,
      }}
    >
      <div style={{ color: "#8b92a3", marginBottom: 4 }}>{label}</div>
      {payload.map((p) => (
        <div key={p.dataKey} style={{ color: p.color }}>
          {p.dataKey}: ${p.value.toLocaleString()}
        </div>
      ))}
    </div>
  );
}

export default function RevenueChart() {
  return (
    <div className="panel">
      <h3 className="panel-title">Revenue vs. target</h3>
      <p className="panel-subtitle">Last 12 months, in USD</p>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={revenueSeries} margin={{ left: -12, right: 8 }}>
          <defs>
            <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f2b84b" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#f2b84b" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#262c36" vertical={false} />
          <XAxis
            dataKey="month"
            stroke="#8b92a3"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#8b92a3"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `$${v / 1000}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="target"
            stroke="#8b92a3"
            strokeDasharray="4 4"
            fill="transparent"
            strokeWidth={1.5}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#f2b84b"
            fill="url(#revFill)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="legend-row">
        <span className="legend-chip">
          <span className="legend-swatch" style={{ background: "#f2b84b" }} />
          Revenue
        </span>
        <span className="legend-chip">
          <span className="legend-swatch" style={{ background: "#8b92a3" }} />
          Target
        </span>
      </div>
    </div>
  );
}
