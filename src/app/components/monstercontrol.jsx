'use strict';

import React from 'react';
import HPBlock from './hpblock.jsx';

const MonsterControl = React.createClass({
  getInitialState () {
    return {
      numberOfMonsters: null,
      hpOfMonsters: null
    };
  },
  render () {
    let { monster } = this.props;
    let { numberOfMonsters, hpOfMonsters } = this.state;

    if (numberOfMonsters) {
      let modules = [];
      let i = 0;
      while (i < numberOfMonsters) {
        modules.push((<HPBlock hitpoints={hpOfMonsters} key={i}/>));
        i++;
      }
      return(
        <form className="monster-hp-control">
          {modules}
        </form>
      );
    } else {
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
            placeholder={monster.hitpoints + '-' + monster.maxHitpoints}
            ref="hpOfMonsters"
            type="number"
            value={hpOfMonsters}
          />
          <button
            onClick={this._setPoints}
            type="button">
            {"Set"}
          </button>
        </form>
      );
    }
  },
  _setPoints () {
    let { hpOfMonsters, numberOfMonsters } = this.refs;

    this.setState({
      numberOfMonsters: parseInt(numberOfMonsters.value, 10),
      hpOfMonsters: parseInt(hpOfMonsters.value, 10)
    });
  }
});

export default MonsterControl;
