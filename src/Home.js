import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <a className="link"><Link to="/grade8">Grade 8</Link></a>
      <a className="link"><Link to="/Grade9">Grade 9</Link></a>
      <a className="link"><Link to="/Grade10">Grade 10</Link></a>
      <a className="link"><Link to="/Grade11">Grade 11</Link></a>
    </div>
  );
}

export default Home;
