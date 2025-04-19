import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../supabase/client";
import AttributeSelector from "../components/AttributeSelector";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function EditCrewmate() {
  const { id } = useParams();
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("crewmates")
        .select("*")
        .eq("id", id)
        .single();
      if (data) {
        setName(data.name);
        setCategory(data.category);
        setAttributes(data.attributes);
      }
    })();
  }, [id]);

  const update = async () => {
    await supabase
      .from("crewmates")
      .update({ name, category, attributes })
      .eq("id", id);
    nav("/summary");
  };
  const remove = async () => {
    await supabase.from("crewmates").delete().eq("id", id);
    nav("/summary");
  };

  return (
    <div className="edit-page">
      <h2>
        <FaEdit /> Edit Crewmate
      </h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <AttributeSelector
        category={category}
        setCategory={setCategory}
        attributes={attributes}
        setAttributes={setAttributes}
      />
      <div className="edit-actions">
        <button className="btn" onClick={update}>
          Update
        </button>
        <button className="btn danger" onClick={remove}>
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}
