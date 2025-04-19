import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabase/client";
import { FaInfoCircle } from "react-icons/fa";

export default function DetailPage() {
  const { id } = useParams();
  const [c, setC] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("crewmates")
        .select("*")
        .eq("id", id)
        .single();
      setC(data);
    })();
  }, [id]);

  if (!c) return <p>Loading…</p>;
  return (
    <div className="detail-page">
      <h2>
        <FaInfoCircle /> {c.name}
      </h2>
      <p>
        <strong>Class:</strong> {c.category}
      </p>
      <p>
        <strong>Attributes:</strong> {c.attributes.join(", ")}
      </p>
      <Link to={`/edit/${c.id}`} className="btn edit-link">
        Edit
      </Link>
    </div>
  );
}
