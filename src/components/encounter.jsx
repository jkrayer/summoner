import React from 'react';
import Button from './button';
import Monster from './monster';
import Input from './input';
import helpers from '../utilities/helpers';
import style from '../style/toc.css';

function partialApply(func, monsterIndex, hpIndex) {
  return function part(val) {
    func(monsterIndex, hpIndex, val);
  };
}

export default class Encounter extends React.Component {
  constructor() {
    super();
    this.renderMonsterBlock = this.renderMonsterBlock.bind(this);
    this.renderHpBlocks = this.renderHpBlocks.bind(this);
  }
  renderMonsterBlock(monster, index) {
    const { setSelectedMonster } = this.props;
    const blocks = this.renderHpBlocks(monster, index);
    return (
      <section key={monster.arrayIndex}>
        <h2>
          <Button
            className={style.btn}
            event={helpers.partialApply(setSelectedMonster, monster.arrayIndex)}
          >
            {monster.name}
          </Button>
        </h2>
        {blocks}
      </section>
    );
  }
  renderHpBlocks(monster, monsterIndex) {
    const { calculateHp } = this.props;
    const lis = monster.hpPerMonster.map((hp, index) =>
      (
      <li key={index}>
        <span>{hp}</span>
        <Input blurEvent={partialApply(calculateHp, monsterIndex, index)} />
      </li>
      )
    );
    return (
      <ol>
        {lis}
      </ol>
    );
  }
  render() {
    const { selectedMonster } = this.props;
    const blocks = this.props.monsters.map(this.renderMonsterBlock);
    return (
      <div>
        {blocks}
        <Monster
          data={selectedMonster}
          handleAddWindow={null}
        />
      </div>
    );
  }
}

Encounter.propTypes = {
  calculateHp: React.PropTypes.func,
  monsters: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedMonster: React.PropTypes.shape(),
  setSelectedMonster: React.PropTypes.func
};
