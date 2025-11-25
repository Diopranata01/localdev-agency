import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProgressPage from "./pages/ProgressPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/overcrank_media" element={<ProgressPage />} />
    </Routes>
  );
};

export default App;
