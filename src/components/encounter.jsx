import React from 'react';
import HpTrack from './hptrack';
import Monster from './monster';

export default function Encounter(props) {
  const {
    calculateHp,
    deleteMonster,
    monsters,
    selectedMonster,
    setSelectedMonster
  } = props;
  return (
    <div>
      <HpTrack
        calculateHp={calculateHp}
        deleteMonster={deleteMonster}
        monsters={monsters}
        setSelectedMonster={setSelectedMonster}
      />
      <Monster
        data={selectedMonster}
        handleAddWindow={null}
      />
    </div>
  );
}

Encounter.propTypes = {
  calculateHp: React.PropTypes.func,
  deleteMonster: React.PropTypes.func,
  monsters: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedMonster: React.PropTypes.shape(),
  setSelectedMonster: React.PropTypes.func
};
