import React from 'react';
import { Link } from 'react-router-dom';

function Grade8() {
  return (
    <div>
      <h2>Grade 8 Subjects</h2>
      <ul>
        <li>
          <Link to="/8Geography">Geography</Link>
        </li>
        <li>Mathematics</li>
        <li>English HL</li>
        <li>Afrikaans</li>
        <li>History</li>
        <li>EMS</li>
        <li>Technology</li>
        {/* Add links for other subjects as needed */}
      </ul>
    </div>
  );
}

export default Grade8;
