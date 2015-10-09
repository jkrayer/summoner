import React from 'react';
import Monster from './monster';

const MonsterStage = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired
  },
  render () {
    let theMonsters = this.props.allMonsters.map(function (monster, index) {
      if (monster.selected) {
        return (<Monster monster={monster} key={index} />);
      }
      return null;
    });
    return (
      <div id="monster-stage">
        {theMonsters}
      </div>
    );
  }
});

export default MonsterStage;