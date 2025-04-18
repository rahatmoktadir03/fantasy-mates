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
        <img
          src="https://upload.wikimedia.org/wikipedia/en/5/52/Daenerys_Targaryen-Mother_of_Dragons.jpg"
          alt="Daenerys"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/en/1/16/Jon_Snow-Kit_Harington.jpg"
          alt="Jon Snow"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/en/e/e9/Arya_Stark-Maisie_Williams.jpg"
          alt="Arya Stark"
        />
      </div>
    </div>
  );
}
