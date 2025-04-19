import React from "react";

export default function StatsPanel({ stats }) {
  const { countByCat, attrCounts, power } = stats;
  return (
    <div className="stats-panel">
      <h4>Party Overview</h4>
      <div className="stats-section">
        <strong>By Class:</strong>
        <ul>
          {Object.entries(countByCat).map(([c, n]) => (
            <li key={c}>
              {c}: {n}
            </li>
          ))}
        </ul>
      </div>
      <div className="stats-section">
        <strong>Attr Frequencies:</strong>
        <ul>
          {Object.entries(attrCounts).map(([a, n]) => (
            <li key={a}>
              {a}: {n}
            </li>
          ))}
        </ul>
      </div>
      <p className="power">
        <strong>Power Score:</strong> {power}/100
      </p>
    </div>
  );
}
