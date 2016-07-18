import React from 'react';
import HPBlock from './hpblock.jsx';

export default class MonsterControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberOfMonsters: null, hpOfMonsters: null };
    this.setPoints = this.setPoints.bind(this);
  }
  setPoints() {
    const { hpOfMonsters, numberOfMonsters } = this.refs;

    this.setState({
      numberOfMonsters: parseInt(numberOfMonsters.value, 10),
      hpOfMonsters: parseInt(hpOfMonsters.value, 10)
    });
  }
  render() {
    const { monster } = this.props;
    const { numberOfMonsters, hpOfMonsters } = this.state;

    if (numberOfMonsters) {
      let modules = [];
      let i = 0;
      while (i < numberOfMonsters) {
        modules.push((<HPBlock hitpoints={hpOfMonsters} key={i} />));
        i++;
      }
      return (
        <form className="monster-hp-control">
          {modules}
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
  monster: React.PropTypes.shape({})
};
