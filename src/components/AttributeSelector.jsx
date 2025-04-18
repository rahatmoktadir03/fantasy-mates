import React from "react";
import { attributeOptions, categories } from "../data/attributeOptions";

export default function AttributeSelector({
  category,
  attributes,
  setCategory,
  setAttributes,
}) {
  const handleAttrClick = (attr) => {
    if (attributes.includes(attr)) {
      setAttributes(attributes.filter((a) => a !== attr));
    } else {
      setAttributes([...attributes, attr]);
    }
  };

  return (
    <div className="attribute-selector">
      <label htmlFor="category">Category:</label>
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setAttributes([]); // reset attributes on category change
        }}
      >
        <option value="">Select a category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {category && (
        <div className="attribute-options">
          {attributeOptions[category].map((attr) => (
            <button
              key={attr}
              className={`attr-btn ${
                attributes.includes(attr) ? "selected" : ""
              }`}
              onClick={() => handleAttrClick(attr)}
            >
              {attr}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
