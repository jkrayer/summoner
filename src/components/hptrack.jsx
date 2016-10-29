import React from 'react';
import HpBlock from './hpblock';
import Button from './button';
import helpers from '../utilities/helpers';
// import style from '../style/hptrack.css';

export default function HpTrack(props) {
  const { calculateHp, setSelectedMonster } = props;
  const blocks = props.monsters.map((monster, index) =>
    <section key={monster.arrayIndex}>
      <h2>
        <Button event={() => {}}>Clear Monster</Button>
        <Button
          className="{style.btn}"
          event={helpers.partialApply(setSelectedMonster, monster.arrayIndex)}
        >
          {monster.name}
        </Button>
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
      {blocks}
    </div>
  );
}

HpTrack.propTypes = {
  calculateHp: React.PropTypes.func,
  monsters: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  ),
  setSelectedMonster: React.PropTypes.func
};
