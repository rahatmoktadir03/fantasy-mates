import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaHatWizard, FaSkullCrossbones } from "react-icons/fa";

const icons = {
  Warrior: <FaShieldAlt />,
  Mage: <FaHatWizard />,
  Assassin: <FaSkullCrossbones />,
};

export default function CrewmateCard({ crewmate }) {
  return (
    <div className="crewmate-card">
      <h3>
        {icons[crewmate.category] || "🧝"} {crewmate.name}
      </h3>
      <p>
        <strong>Class:</strong> {crewmate.category}
      </p>
      <p>
        <strong>Attrs:</strong> {crewmate.attributes.join(", ")}
      </p>
      <div className="card-links">
        <Link to={`/detail/${crewmate.id}`}>Details</Link>
        <Link to={`/edit/${crewmate.id}`} className="edit">
          Edit
        </Link>
      </div>
    </div>
  );
}
