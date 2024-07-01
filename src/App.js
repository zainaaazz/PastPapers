import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Grade8 from './Grade8';
import Geography from './8Geography';
import './index.css';

function App() {
  return (
    <Router>
      <div className="navbar"><Link to="/">Grades</Link></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grade8" element={<Grade8 />} />
        <Route path="/8Geography" element={<Geography />} />
        {/* Add routes for other subjects and grades as needed */}
      </Routes>
    </Router>
  );
}

export default App;
