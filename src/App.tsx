import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StrategyCallPage from './pages/StrategyCallPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/strategy-call" element={<StrategyCallPage />} />
      </Routes>
    </Router>
  );
}

export default App;