'use strict';

import React from 'react';
import MonsterListItem from './monsterlistitem.jsx';

const MonsterList = React.createClass({
  render () {
    return (
      <div id="monster-list">
        <ul className="list-reset">
        {
          this.props.monsters.map( (monster, index) => {
            return (
              <MonsterListItem
                dispatch={this.props.dispatch}
                key={monster.id}
                monster={monster}
                visibleId={this.props.visibleId}
              />
            );
          })
        }
        </ul>
      </div>
    );
  }
});

export default MonsterList;
