import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home">
      <h1 className="logo">🛡️ Thrones & Blades: Assemble Your Party</h1>
      <p className="intro">
        Welcome, noble adventurer. Craft your legendary Game of Thrones party
        and lead them to glory.
      </p>

      <div className="home-buttons">
        <Link to="/create" className="btn">
          Create Crewmate
        </Link>
        <Link to="/summary" className="btn">
          View Summary
        </Link>
      </div>

      <div className="got-gallery">
        <img src="daenerys_targaryen.jpg" alt="Daenerys" />
        <img src="jon_snow.jpg" alt="Jon Snow" />
        <img src="tyrion_lannister.jpg" alt="Tyrion Lannister" />
      </div>
    </div>
  );
}
