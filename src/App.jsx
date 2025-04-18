import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateCrewmate from "./pages/CreateCrewmate";
import SummaryPage from "./pages/SummaryPage";
import DetailPage from "./pages/DetailPage";
import EditCrewmate from "./pages/EditCrewmate";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateCrewmate />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/edit/:id" element={<EditCrewmate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
