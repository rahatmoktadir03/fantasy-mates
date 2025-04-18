import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function DetailPage() {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data } = await supabase
        .from("crewmates")
        .select("*")
        .eq("id", id)
        .single();

      setCrewmate(data);
    };

    fetchCrewmate();
  }, [id]);

  if (!crewmate) return <p>Loading...</p>;

  return (
    <div className="detail-page">
      <h2>{crewmate.name}</h2>
      <p>
        <strong>Category:</strong> {crewmate.category}
      </p>
      <p>
        <strong>Attributes:</strong> {crewmate.attributes.join(", ")}
      </p>
      <Link to={`/edit/${crewmate.id}`} className="btn edit-link">
        Edit
      </Link>
    </div>
  );
}
