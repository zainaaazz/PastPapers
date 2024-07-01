import React from 'react';
import { Link } from 'react-router-dom';

function Grade8() {
  return (
    <div>
      <h2>Grade 8 Subjects</h2>
      <ul>
        <li>
          <Link to="/geography">Geography</Link>
        </li>
        {/* Add links for other subjects as needed */}
      </ul>
    </div>
  );
}

export default Grade8;
