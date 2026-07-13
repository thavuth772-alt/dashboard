import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { weeklyActive } from "../data/mockData.js";

export default function WeeklyActiveChart() {
  return (
    <div className="panel">
      <h3 className="panel-title">Weekly active users</h3>
      <p className="panel-subtitle">Mon–Sun, current week</p>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={weeklyActive} margin={{ left: -12, right: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#262c36" vertical={false} />
          <XAxis
            dataKey="day"
            stroke="#8b92a3"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis stroke="#8b92a3" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            cursor={{ fill: "rgba(79,209,197,0.06)" }}
            contentStyle={{
              background: "#1b212b",
              border: "1px solid #262c36",
              borderRadius: 8,
              fontSize: 12,
            }}
          />
          <Bar dataKey="users" fill="#4fd1c5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
