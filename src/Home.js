import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
        <Link className="link" to="/grade8">Grade 8</Link>
        <Link className="link" to="/grade9">Grade 9</Link>
        <Link className="link" to="/grade10">Grade 10</Link>
        <Link className="link" to="/grade11">Grade 11</Link>
    </div>
  );
}

export default Home;
