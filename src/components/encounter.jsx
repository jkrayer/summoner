import React from 'react';
import HpTrackContainer from '../container/hptrack';
import MonsterContainer from '../container/monster';


export default function Encounter(props) {
  return (
    <div>
      <HpTrackContainer />
      <MonsterContainer showAddButton={false} />
    </div>
  );
}
