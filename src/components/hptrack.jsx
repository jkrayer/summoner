import React from 'react';
import HpBlock from './hpblock';
import Button from './button';
import ButtonClose from './button-close';
import XpCalculator from './xp-calculator';
import helpers from '../utilities/helpers';
import style from '../style/hptrack.css';

export default function HpTrack(props) {
  const { calculateHp, deleteMonster, monsters, setSelectedMonster } = props;
  const blocks = monsters.map((monster, index) =>
    <section key={monster.arrayIndex}>
      <h2>
        <Button
          className={style.btn}
          event={helpers.partialApply(setSelectedMonster, monster.arrayIndex)}
        >
          {monster.name}
        </Button>
        <ButtonClose event={() => deleteMonster(monster)} />
      </h2>
      <HpBlock
        monster={monster}
        monsterIndex={index}
        calculateHp={calculateHp}
      />
    </section>
  );

  return (
    <div>
      <XpCalculator monsters={monsters} />
      {blocks}
    </div>
  );
}

HpTrack.propTypes = {
  calculateHp: React.PropTypes.func,
  deleteMonster: React.PropTypes.func,
  monsters: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  ),
  setSelectedMonster: React.PropTypes.func
};
