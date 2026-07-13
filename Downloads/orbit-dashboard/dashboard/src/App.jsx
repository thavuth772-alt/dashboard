import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import TopBar from "./components/TopBar.jsx";
import StatGrid from "./components/StatGrid.jsx";
import RevenueChart from "./components/RevenueChart.jsx";
import TrafficDonut from "./components/TrafficDonut.jsx";
import WeeklyActiveChart from "./components/WeeklyActiveChart.jsx";
import OrdersTable from "./components/OrdersTable.jsx";
import "./App.css";

export default function App() {
  const [active, setActive] = useState("overview");

  return (
    <div className="app">
      <Sidebar active={active} onSelect={setActive} />

      <div className="main">
        <TopBar />

        <div className="content">
          <StatGrid />

          <div className="chart-grid">
            <RevenueChart />
            <TrafficDonut />
          </div>

          <div className="chart-grid-secondary">
            <WeeklyActiveChart />
            <OrdersTable />
          </div>
        </div>
      </div>
    </div>
  );
}
