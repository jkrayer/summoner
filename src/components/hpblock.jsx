import React from 'react';
import Input from './input';
import style from '../style/hpblock.css';

// Make helpers partial apply better
function partialApply(func, monsterIndex, hpIndex) {
  return function part(val) {
    func(monsterIndex, hpIndex, val);
  };
}

export default function HpBlock(props) {
  const { calculateHp, monster, monsterIndex } = props;
  const lis = monster.hpPerMonster.map((hp, index) =>
    (
    <li key={index}>
      <span className={style.hp}>{hp}</span>
      <Input blurEvent={partialApply(calculateHp, monsterIndex, index)} />
    </li>
    )
  );
  return (
    <ol className={style.ol}>
      {lis}
    </ol>
  );
}

HpBlock.propTypes = {
  calculateHp: React.PropTypes.func,
  monster: React.PropTypes.shape({}).isRequired,
  monsterIndex: React.PropTypes.number.isRequired
};
