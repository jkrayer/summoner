'use strict';

import React from 'react';
import MonsterListItem from './monsterlistitem.jsx';

const MonsterList = React.createClass({
  render () {
    let { dispatch, monsters, visibleStatBlockId } = this.props;
    return (
      <div id="monster-list">
        <ul className="list-reset">
        {
          monsters.map( monster => {
            <MonsterListItem
              dispatch={dispatch}
              key={monster.id}
              monster={monster}
              visibleStatBlockId={visibleStatBlockId}
            />
          })
        }
        </ul>
      </div>
    );
  }
});

export default MonsterList;
