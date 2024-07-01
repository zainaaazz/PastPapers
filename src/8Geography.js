import React from 'react';
import myPDF from './papers/8P1.pdf';

function Geography() {
  return (
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
      </ul>
    </div>
  );
}

export default Geography;
