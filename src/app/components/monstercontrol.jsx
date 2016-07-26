import React from 'react';
import HPBlock from './hpblock.jsx';

export default class MonsterControl extends React.Component {
  constructor() {
    super();
    this.state = { hpBlocks: [], hpOfMonsters: null, numberOfMonsters: null };
    this.setPoints = this.setPoints.bind(this);
    this.handleHpUpdate = this.handleHpUpdate.bind(this);
  }
  setPoints() {
    const numberOfMonsters = parseInt(this.refs.numberOfMonsters.value, 10);
    const hpOfMonsters = parseInt(this.refs.hpOfMonsters.value, 10);
    const { dispatch, monster } = this.props;
    const arr = [];

    for (let i = 0; i < numberOfMonsters; i++) {
      arr.push(hpOfMonsters);
    }

    monster.hpBlocks = {
      maxHitpoints: hpOfMonsters,
      blocks: arr
    };

    dispatch({
      type: 'UPDATE_MONSTER',
      monster
    });
  }
  handleHpUpdate(index) {
    const { dispatch, monster } = this.props;
    return function hpUpdate(newTotal) {
      monster.hpBlocks.blocks[index] = newTotal;
      dispatch({
        type: 'UPDATE_MONSTER',
        monster
      });
    };
  }
  render() {
    const { monster } = this.props;

    if (monster.hpBlocks && monster.hpBlocks.blocks && monster.hpBlocks.blocks.length) {
      return (
        <form className="monster-hp-control">
          {
            monster.hpBlocks.blocks.map((hp, index) =>
              (
              <HPBlock
                hitpoints={hp}
                hpupdate={this.handleHpUpdate(index)}
                key={index}
                maxhitpoints={monster.hpBlocks.maxHitpoints}
              />
              )
            )
          }
        </form>
      );
    }

    return (
      <form className="monster-control">
        <input
          placeholder="#"
          ref="numberOfMonsters"
          type="number"
        />
        <span> @ </span>
        <input
          placeholder={[monster.hitpoints, '-', monster.maxHitpoints].join('')}
          ref="hpOfMonsters"
          type="number"
        />
        <button
          onClick={this.setPoints}
          type="button"
        >{'Set'}</button>
      </form>
    );
  }
}

MonsterControl.propTypes = {
  dispatch: React.PropTypes.func,
  monster: React.PropTypes.shape({})
};
