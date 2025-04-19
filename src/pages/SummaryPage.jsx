import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import CrewmateCard from "../components/CrewmateCard";
import StatsPanel from "../components/StatsPanel";
import { calculateStats } from "../utils/calculateStats";

export default function SummaryPage() {
  const [crewmates, setCrewmates] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCrewmates() {
      setLoading(true);
      const { data, error } = await supabase
        .from("crewmates")
        .select("*")
        .order("created_at", { ascending: false });

      console.log("🔍 summary fetch:", { data, error }); // 🔍 check this in DevTools

      if (error) {
        setError(error.message);
      } else {
        setCrewmates(data || []);
        setStats(calculateStats(data || []));
      }
      setLoading(false);
    }
    fetchCrewmates();
  }, []);

  if (loading) return <p className="info">Loading your party…</p>;
  if (error) return <p className="error">Error: {error}</p>;
  if (crewmates.length === 0) {
    return (
      <p className="info">
        No crewmates yet! <Link to="/create">Create one now</Link>.
      </p>
    );
  }

  return (
    <div className="summary-page">
      <h2>Your Party</h2>
      <div className="crewmate-grid">
        {crewmates.map((c) => (
          <CrewmateCard key={c.id} crewmate={c} />
        ))}
      </div>
      <StatsPanel stats={stats} />
    </div>
  );
}
