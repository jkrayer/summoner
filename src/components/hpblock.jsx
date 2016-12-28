import React from 'react';
import Input from './input';
import helpers from '../utilities/helpers';
import style from '../style/hpblock.css';

export default function HpBlock(props) {
  const { calculate, monster } = props;
  const lis = monster.hpPerMonster.map((hp, index) =>
    (
    <li key={index}>
      <span className={style.hp}>{hp}</span>
      <Input blurEvent={helpers.partialApply(calculate, index)} />
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
  calculate: React.PropTypes.func,
  monster: React.PropTypes.shape({}).isRequired
};
