# Orbit — Analytics Dashboard

A React + Vite dashboard with charts (Recharts) and plain CSS — no Tailwind or UI kit.

## What's inside

- Sidebar navigation
- Top bar with a live-style "pulse" indicator
- Stat cards (revenue, active users, churn, latency)
- Revenue vs. target area chart
- Traffic-by-source donut chart
- Weekly active users bar chart
- Recent orders table

All data lives in `src/data/mockData.js` — swap it for a real API call whenever you're ready.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    Sidebar.jsx
    TopBar.jsx
    StatGrid.jsx
    RevenueChart.jsx
    TrafficDonut.jsx
    WeeklyActiveChart.jsx
    OrdersTable.jsx
  data/
    mockData.js
  App.jsx
  App.css       <- layout & component styles
  index.css     <- design tokens (colors, fonts) & resets
  main.jsx
```

## Customizing

- Colors and fonts are defined as CSS variables at the top of `src/index.css` (`:root`) — change them once and they cascade everywhere.
- Each chart is its own component under `src/components/`, built on Recharts, so you can swap chart types independently.
