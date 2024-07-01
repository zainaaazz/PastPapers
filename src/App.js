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
        <a><Link to="/grade8">Grade 8</Link></a>
        <a><Link to="/Grade9">Grade 9</Link></a>
        <a><Link to="/Grade10">Grade 10</Link></a>
        <a><Link to="/Grade11">Grade 11</Link></a>

        <Routes>
          <Route path="/grade8" element={<Grade8 />} />
          <Route path="/8Geography" element={<Geography />} />
          {/* Add routes for other subjects and grades as needed */}
        </Routes>
      </div>

      <div>
        <h1>Welcome to Past Papers App</h1>
      
       
      </div>
    </Router>
  );
}




export default App;
