import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

function Grade8() {
  return (   
      <div>
          
          {/* NAVBAR DUPLICATES AND DOES NOT REPLACE */}
          <div class="navbar"><Link to="/">Grades</Link> &gt; Grade 8 </div>
        
          <div class="container">
            <h2>Grade 8 Subjects</h2>
            
              <a class="link"> <Link to="/8Geography">Geography</Link></a>
              
              <a class="link">Mathematics</a>
              <a class="link">English HL</a>
              <a class="link">Afrikaans FAL</a>
              <a class="link">EMS</a>
              <a class="link">History</a>
              <a class="link">Technology</a>
              {/* Add links for other subjects as needed */}
           
          </div>


      </div>
  );
}

export default Grade8;
