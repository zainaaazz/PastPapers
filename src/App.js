import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Grade8 from './Grade8';
import Geography from './8Geography';
import "./index.css";

function App() {
  return (
    <Router>

      <div class="navbar">Grades</div>
        
      {/* CONTAINER DOES NOT WORK?? */}

      <div class="container">
        <Link to="/grade8">Grade 8</Link>
        <Link to="/Grade9">Grade 9</Link>
        <Link to="/Grade10">Grade 10</Link>
        <Link to="/Grade11">Grade 11</Link>
      </div>

      <div>
        <h1>Welcome to Past Papers App</h1>
      
        <Routes>
          <Route path="/grade8" element={<Grade8 />} />
          <Route path="/8Geography" element={<Geography />} />
          {/* Add routes for other subjects and grades as needed */}
        </Routes>
      </div>
    </Router>
  );
}




export default App;
