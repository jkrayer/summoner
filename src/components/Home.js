import React from 'react';
import Search from './Search';

const Home = () => {
  return (
    <div>
      <h1>Summoner</h1>
      <Search />
      <p>Search the <a href="http://www.dnd5eapi.co/">D&D 5e API
</a> for monsters.</p>
    </div>
  );
}

export default Home;
