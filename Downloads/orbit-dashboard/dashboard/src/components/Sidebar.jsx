const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "revenue", label: "Revenue" },
  { id: "customers", label: "Customers" },
  { id: "orders", label: "Orders" },
  { id: "settings", label: "Settings" },
];

export default function Sidebar({ active, onSelect }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark" />
        <span className="brand-name">Orbit</span>
      </div>

      <nav className="nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${active === item.id ? "active" : ""}`}
            onClick={() => onSelect(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        Data refreshes every 5 minutes. Last sync 2 minutes ago.
      </div>
    </aside>
  );
}
