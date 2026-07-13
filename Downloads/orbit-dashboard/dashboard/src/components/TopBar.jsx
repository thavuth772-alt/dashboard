export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-heading">
        <h1>Overview</h1>
        <p>Monday, July 13 — here's how things are trending.</p>
      </div>

      <div className="pulse-strip">
        <span className="pulse-dot" />
        <span className="pulse-label">LIVE · 24 req/s</span>
      </div>
    </header>
  );
}
