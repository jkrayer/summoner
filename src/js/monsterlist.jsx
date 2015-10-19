import React from 'react';
import MonsterListItem from './monsterlistitem';

const MonsterList = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired,
    toggleStatBlock: React.PropTypes.func.isRequired
  },
  render () {
    //=> elimintae self
    let self = this;
    return (
      <div id="monster-list">
        <ul className="list-reset">
        {
          this.props.allMonsters.map(function (monster, index) {
            return (<MonsterListItem key={index} monster={monster} toggleStatBlock={self.props.toggleStatBlock} />);
          })
        }
        </ul>
      </div>
    );
  }
});

export default MonsterList;
