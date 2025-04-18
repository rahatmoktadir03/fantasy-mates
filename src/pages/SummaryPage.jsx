import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import CrewmateCard from "../components/CrewmateCard";
import StatsPanel from "../components/StatsPanel";
import { calculateStats } from "../utils/calculateStats";

export default function SummaryPage() {
  const [crewmates, setCrewmates] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data } = await supabase
        .from("crewmates")
        .select("*")
        .order("created_at", { ascending: false });

      setCrewmates(data);
      setStats(calculateStats(data));
    };

    fetchCrewmates();
  }, []);

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
