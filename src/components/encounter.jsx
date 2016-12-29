import React from 'react';
import HpTrackContainer from './c_hptrack';
import MonsterContainer from './c_monster';


export default function Encounter(props) {
  return (
    <div>
      <HpTrackContainer />
      <MonsterContainer showAddButton={false} />
    </div>
  );
}
