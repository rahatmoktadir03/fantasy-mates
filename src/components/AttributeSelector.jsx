import React from "react";
import { attributeOptions, categories } from "../utils/attributeOptions";

export default function AttributeSelector({
  category,
  setCategory,
  attributes,
  setAttributes,
}) {
  // toggle attr button
  const toggle = (a) =>
    setAttributes((attrs) =>
      attrs.includes(a) ? attrs.filter((x) => x !== a) : [...attrs, a]
    );

  return (
    <div className="attribute-selector">
      <label>
        Class:
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setAttributes([]);
          }}
        >
          <option value="">– choose –</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      {category && (
        <div className="attribute-options">
          {attributeOptions[category].map((a) => (
            <button
              key={a}
              type="button"
              className={`attr-btn ${attributes.includes(a) ? "selected" : ""}`}
              onClick={() => toggle(a)}
            >
              {a}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
