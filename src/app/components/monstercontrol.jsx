import React from 'react';
import HPBlock from './hpblock.jsx';

export default class MonsterControl extends React.Component {
  constructor() {
    super();
    this.state = { hpBlocks: [], hpOfMonsters: null, numberOfMonsters: null };
    this.setPoints = this.setPoints.bind(this);
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
  render() {
    const { monster } = this.props;
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
          value={numberOfMonsters}
        />
        <span> @ </span>
        <input
          placeholder={[monster.hitpoints, '-', monster.maxHitpoints].join('')}
          ref="hpOfMonsters"
          type="number"
          value={hpOfMonsters}
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
