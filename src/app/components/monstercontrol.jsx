import React from 'react';
import HPBlock from './hpblock.jsx';

export default class MonsterControl extends React.Component {
  constructor() {
    super();
    this.state = { hpBlocks: [], hpOfMonsters: null, numberOfMonsters: null };
    this.setPoints = this.setPoints.bind(this);
    this.func = this.func.bind(this);
  }
  setPoints() {
    let numberOfMonsters = parseInt(this.refs.numberOfMonsters.value, 10);
    let hpOfMonsters = parseInt(this.refs.hpOfMonsters.value, 10);
    let { dispatch, monster } = this.props;
    let arr = [];

    for (let i = 0; i < numberOfMonsters; i++) {
      arr.push(hpOfMonsters);
    }

    monster.hpBlocks = arr;

    dispatch({
      type: 'UPDATE_MONSTER',
      monster
    });
  }
  func (index) {
    const { dispatch, monster } = this.props;
    return function (newTotal)  {
      monster.hpBlocks[index] = newTotal;
      dispatch({
        type: 'UPDATE_MONSTER',
        monster
      });
    }
  }
  render() {
    const { dispatch, monster } = this.props;
    const { hpBlocks, hpOfMonsters, numberOfMonsters } = this.state;

    if (monster.hpBlocks && monster.hpBlocks.length) {
      return (
        <form className="monster-hp-control">
          {
            monster.hpBlocks.map((hp, index) => {
              return (
                <HPBlock
                  hitpoints={hp}
                  key={index}
                  hpupdate={this.func(index)}
                />
              );
            })
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
