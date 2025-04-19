import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";
import AttributeSelector from "../components/AttributeSelector";
import { FaUserPlus } from "react-icons/fa";

export default function CreateCrewmate() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    setErrorMsg("");
    if (!name.trim() || !category || attributes.length === 0) {
      setErrorMsg(
        "⚠️ Please enter a name, pick a class, and select at least one attribute."
      );
      return;
    }

    // Attempt insert
    const { data, error } = await supabase
      .from("crewmates")
      .insert({ name: name.trim(), category, attributes })
      .select(); // <— .select() returns the new row on success

    if (error) {
      console.error("Supabase insert error:", error);
      setErrorMsg(`🚫 Failed to create: ${error.message}`);
    } else {
      console.log("Insert succeeded:", data);
      navigate("/summary");
    }
  };

  return (
    <div className="create-page">
      <h2>
        <FaUserPlus /> Create Your Crewmate
      </h2>

      <label>
        Name:
        <input
          type="text"
          placeholder="Eddard Stark"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <AttributeSelector
        category={category}
        setCategory={setCategory}
        attributes={attributes}
        setAttributes={setAttributes}
      />

      {attributes.length > 0 && (
        <p className="preview">Selected: {attributes.join(", ")}</p>
      )}

      {errorMsg && <p className="form-error">{errorMsg}</p>}

      <button className="btn create-btn" onClick={handleCreate}>
        Create
      </button>
    </div>
  );
}
