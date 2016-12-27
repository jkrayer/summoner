import React from 'react';
import HpBlock from './hpblock';
import Button from './button';
import ButtonClose from './button-close';
import XpCalculator from './xp-calculator';
import helpers from '../utilities/helpers';
import style from '../style/hptrack.css';

export default function HpTrack(props) {
  const { calculateHp, deleteMonster, encounter, setSelectedMonster } = props;
  const blocks = encounter.map((monster, index) =>
    <section key={monster.arrayIndex}>
      <h2>
        <Button
          className={style.btn}
          event={helpers.partialApply(setSelectedMonster, monster.monster)}
        >
          {monster.name}
        </Button>
        <ButtonClose event={() => deleteMonster(monster)} />
      </h2>
      <HpBlock
        monster={monster}
        monsterIndex={index}
        calculate={calculateHp}
      />
    </section>
  );

  return (
    <div>
      <XpCalculator monsters={encounter} />
      {blocks}
    </div>
  );
}

HpTrack.propTypes = {
  calculateHp: React.PropTypes.func,
  deleteMonster: React.PropTypes.func,
  encounter: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  ),
  setSelectedMonster: React.PropTypes.func.isRequired
};


HpTrack.defaultProps = {
  calculateHp: () => {},
  deleteMonster: () => {},
  encounter: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  ),
  setSelectedMonster: React.PropTypes.func.isRequired
};












/*
function deleteMonster(monster) {
  const { encounter } = this.state;
  const newMonsters = monsters.filter(m => m.arrayIndex !== monster.arrayIndex);
  this.setState({
    monsters: newMonsters
  });
}

function calculateHp(monsterIndex, hpIndex, newVal) {
  const operator = (newVal[0] === '+') ? '+' : '-';
  const val = parseInt(newVal, 10);
  const monster = Object.assign({}, this.state.monsters[monsterIndex]);
  if (isNaN(val)) { return false; }
  monster.hpPerMonster[hpIndex] += (operator === '+') ? val : -val;
  return this.setState({
    monsters: this.state.monsters.map((m, i) => {
      const r = (i === monsterIndex) ? monster : m;
      return r;
    })
  });
}
----------------------------------------------------------
const {
  calculateHp,
  deleteMonster,
  monsters,
  selectedMonster,
  setSelectedMonster
} = props;
<HpTrack
  calculateHp={calculateHp}
  deleteMonster={deleteMonster}
  monsters={monsters}
  setSelectedMonster={setSelectedMonster}
/>
Encounter.propTypes = {
  calculateHp: React.PropTypes.func,
  deleteMonster: React.PropTypes.func,
  monsters: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedMonster: React.PropTypes.shape(),
  setSelectedMonster: React.PropTypes.func
};
*/
