import { recentOrders } from "../data/mockData.js";

export default function OrdersTable() {
  return (
    <div className="panel">
      <h3 className="panel-title">Recent orders</h3>
      <p className="panel-subtitle">Last 6 transactions</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td style={{ fontFamily: "Inter, sans-serif" }}>{o.customer}</td>
                <td>{o.amount}</td>
                <td>
                  <span className={`status-pill ${o.status}`}>{o.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
