import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SearchPage from "./pages/HomePage";
import ResultPageContent from "./pages/ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />

        <Route path="/:description" element={<ResultPageContent />} />
      </Routes>
    </Router>
  );
}

export default App;
