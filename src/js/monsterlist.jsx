import React from 'react';
import MonsterListItem from './monsterlistitem';

const MonsterList = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    visibleId: React.PropTypes.number.isRequired
  },
  render () {
    //=> elimintae self
    let self = this;
    return (
      <div id="monster-list">
        <ul className="list-reset">
        {
          this.props.allMonsters.map(function (monster, index) {
            return (<MonsterListItem key={index} monster={monster} dispatch={self.props.dispatch} visibleId={self.props.visibleId} />);
          })
        }
        </ul>
      </div>
    );
  }
});

export default MonsterList;
