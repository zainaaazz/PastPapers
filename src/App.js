import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Grade8 from './Grade8';
import Geography from './8Geography';

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to Past Papers App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/grade8">Grade 8</Link>
            </li>
            {/* Add links for other grades as needed */}
          </ul>
        </nav>
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
