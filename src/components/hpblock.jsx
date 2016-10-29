import React from 'react';
import Input from './input';

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
      <span className="{style.hp}">{hp}</span>
      <Input blurEvent={partialApply(calculateHp, monsterIndex, index)} />
    </li>
    )
  );
  return (
    <ol className="{style.ll}">
      {lis}
    </ol>
  );
}

HpBlock.propTypes = {
  monster: React.PropTypes.shape({}).isRequired,
  monsterIndex: React.PropTypes.number.isRequired
};
