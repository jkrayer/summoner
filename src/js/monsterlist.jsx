import React from 'react';
import MonsterListItem from './monsterlistitem';

const MonsterList = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired,
    onToggleMonster: React.PropTypes.func.isRequired
  },
  render () {
    let self = this;
    return (
      <div id="monster-list">
        <ul className="list-reset">
        {
          this.props.allMonsters.map(function (monster, index) {
            return (<MonsterListItem monster={monster} key={index} toggleView={self.props.onToggleMonster.bind(null, index)} />);
          })
        }
        </ul>
      </div>
    );
  }
});

export default MonsterList;
