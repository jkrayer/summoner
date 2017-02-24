import React from 'react';
import { IndexLink, Link } from 'react-router';

export default function GlobalHeader({children}) {
  return (
    <header>
      <nav>
        <ul>
          <li><IndexLink to="/">Home</IndexLink></li>
          <li><Link to="/encounters">Encounters</Link></li>
        </ul>
      </nav>
    </header>
  );
}
