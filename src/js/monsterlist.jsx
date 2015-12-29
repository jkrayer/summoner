import React from 'react';
import MonsterListItem from './monsterlistitem';

const MonsterList = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    visibleId: React.PropTypes.number.isRequired
  },
  render () {
    return (
      <div id="monster-list">
        <div className="inner-scroll">
          <ul className="list-reset">
          {
            this.props.allMonsters.map( (monster, index) => {
              return (<MonsterListItem key={index} monster={monster} dispatch={this.props.dispatch} visibleId={this.props.visibleId} />);
            })
          }
          </ul>
        </div>
      </div>
    );
  }
});

export default MonsterList;
