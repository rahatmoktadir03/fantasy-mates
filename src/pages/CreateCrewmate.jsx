import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import AttributeSelector from "../components/AttributeSelector";

export default function CreateCrewmate() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [attributes, setAttributes] = useState([]);
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (!name || !category || attributes.length === 0) return;

    const { error } = await supabase
      .from("crewmates")
      .insert({ name, category, attributes });

    if (!error) navigate("/summary");
  };

  return (
    <div className="create-page">
      <h2>Create Your Crewmate</h2>
      <input
        placeholder="Enter crewmate name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <AttributeSelector
        category={category}
        attributes={attributes}
        setCategory={setCategory}
        setAttributes={setAttributes}
      />

      <button onClick={handleCreate} className="btn create-btn">
        Create
      </button>
    </div>
  );
}
