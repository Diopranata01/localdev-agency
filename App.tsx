import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProgressPage from "./pages/ProgressPage";
import FormPage from "./pages/FormPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/progress_app/overcrank_media" element={<ProgressPage />} />
      <Route path="/form/overcrank_media" element={<FormPage />} />
    </Routes>
  );
};

export default App;
