import React from 'react';
import Button from './button';
import Monster from './monster';
import helpers from '../utilities/helpers';
import style from '../style/toc.css';

function renderHpBlocks(monster) {
  const lis = monster.hpPerMonster.map((hp, index) =>
    (
    <li key={index}>
      <span>{hp}</span>
      <input type="text" />
    </li>
    )
  );
  return (
    <ol>
      {lis}
    </ol>
  );
}

export default class Encounter extends React.Component {
  constructor() {
    super();
    this.renderMonsterBlock = this.renderMonsterBlock.bind(this);
  }
  renderMonsterBlock(monster) {
    const { setSelectedMonster } = this.props;
    const blocks = renderHpBlocks(monster);
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
  monsters: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedMonster: React.PropTypes.shape(),
  setSelectedMonster: React.PropTypes.func
};
