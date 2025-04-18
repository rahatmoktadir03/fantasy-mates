import React from "react";

export default function StatsPanel({ stats }) {
  const total = Object.values(stats.classCounts).reduce((a, b) => a + b, 0);

  return (
    <div className="stats-panel">
      <h3>Party Overview</h3>
      <ul>
        {Object.entries(stats.classCounts).map(([category, count]) => (
          <li key={category}>
            {category}: {count} ({((count / total) * 100).toFixed(1)}%)
          </li>
        ))}
      </ul>
      <p>
        <strong>Party Strength:</strong> {stats.successScore}/100
      </p>
    </div>
  );
}
