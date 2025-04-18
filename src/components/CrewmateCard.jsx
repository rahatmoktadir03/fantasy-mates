import React from "react";
import { Link } from "react-router-dom";
import { FaCrown, FaMagic, FaSkull } from "react-icons/fa";

export default function CrewmateCard({ crewmate }) {
  return (
    <div className="crewmate-card">
      <h2>
        <FaCrown /> {crewmate.name}
      </h2>
      <p className="category">Class: {crewmate.category}</p>
      <ul>
        {crewmate.attributes.map((attr, i) => (
          <li key={i}>
            <FaMagic /> {attr}
          </li>
        ))}
      </ul>
      <div className="card-links">
        <Link to={`/detail/${crewmate.id}`}>Details</Link>
        <Link to={`/edit/${crewmate.id}`} className="edit-link">
          Edit
        </Link>
      </div>
    </div>
  );
}
