import React from 'react';
import myPDF from './papers/8P1.pdf';
import Grade8 from './Grade8';
import Grades from './index';


function Geography() {
  return (

    
    <div>
      <div class="navbar">
        <Link to="/index">Grades</Link> &gt;
        <Link to="/grade8">Geade 8</Link> &gt; Geography 
      </div>

      <div>
        <h2>Geography Past Papers</h2>
        <ul>
          <li>  
            <a href={myPDF ? myPDF : '/papers/8P1.pdf'} target="_blank" rel="noreferrer">
            Click here to view the PDF - June 2018 Memo
          </a>
          </li>
        
          <li>June 2019 QP</li>
          <li>June 2019 Memo</li>
          <li>Nov 2018 QP</li>
          <li>Nov 2018 Memo</li>
          <li>Nov 2019 Memo</li>
        </ul> </div>
        
    </div>

    
  );
}

export default Geography;
