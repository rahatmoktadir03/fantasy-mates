import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import AttributeSelector from "../components/AttributeSelector";

export default function EditCrewmate() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [attributes, setAttributes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data } = await supabase
        .from("crewmates")
        .select("*")
        .eq("id", id)
        .single();

      setName(data.name);
      setCategory(data.category);
      setAttributes(data.attributes);
    };

    fetchCrewmate();
  }, [id]);

  const handleUpdate = async () => {
    await supabase
      .from("crewmates")
      .update({ name, category, attributes })
      .eq("id", id);
    navigate("/summary");
  };

  const handleDelete = async () => {
    await supabase.from("crewmates").delete().eq("id", id);
    navigate("/summary");
  };

  return (
    <div className="edit-page">
      <h2>Edit Crewmate</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <AttributeSelector
        category={category}
        attributes={attributes}
        setCategory={setCategory}
        setAttributes={setAttributes}
      />

      <div className="edit-actions">
        <button onClick={handleUpdate} className="btn">
          Update
        </button>
        <button onClick={handleDelete} className="btn danger">
          Delete
        </button>
      </div>
    </div>
  );
}
