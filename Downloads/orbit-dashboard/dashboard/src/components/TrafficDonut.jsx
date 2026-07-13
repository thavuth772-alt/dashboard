import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { trafficBySource } from "../data/mockData.js";

export default function TrafficDonut() {
  const total = trafficBySource.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="panel">
      <h3 className="panel-title">Traffic by source</h3>
      <p className="panel-subtitle">{total.toLocaleString()} sessions this month</p>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={trafficBySource}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
            stroke="none"
          >
            {trafficBySource.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "#1b212b",
              border: "1px solid #262c36",
              borderRadius: 8,
              fontSize: 12,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="legend-row">
        {trafficBySource.map((d) => (
          <span className="legend-chip" key={d.name}>
            <span className="legend-swatch" style={{ background: d.color }} />
            {d.name}
          </span>
        ))}
      </div>
    </div>
  );
}
