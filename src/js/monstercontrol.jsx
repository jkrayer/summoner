import React from 'react';
import HPBlock from './hpblock';

const MonsterControl = React.createClass({
  proptypes: {
    monster: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      numberOfMonsters: null,
      hpOfMonsters: null
    };
  },
  render () {
    let monster = this.props.monster;
    if (this.state.numberOfMonsters) {
      let modules = [];
      let i = 0;
      while (i < this.state.numberOfMonsters) {
        modules.push((<HPBlock hitpoints={this.state.hpOfMonsters} key={i}/>));
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
          <input type="number" value={this.state.numberOfMonsters} placeholder="#" ref="numberOfMonsters" /><span> @ </span>
          <input type="number" value={this.state.hpOfMonsters} placeholder={monster.hitpoints + '-' + monster.maxHitpoints} ref="hpOfMonsters" />
          <button type="button" onClick={this._setPoints}>Set</button>
        </form>
      );
    }
  },
  _setPoints () {
    this.setState({
      numberOfMonsters: parseInt(this.refs.numberOfMonsters.value, 10),
      hpOfMonsters: parseInt(this.refs.hpOfMonsters.value, 10)
    });
  }
});

export default MonsterControl;
