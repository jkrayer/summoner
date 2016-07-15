'use strict';

import React from 'react';
import MonsterTrackControl from './monstertrackcontrol.jsx';
import MonsterControl from './monstercontrol.jsx';

const MonsterTrack = React.createClass({
  getInitialState () {
    return {
      numberOfMonsters: null,
      hpOfMonsters: null
    };
  },
  render () {
    let { dispatch, usedMonsters, visibleStatBlockId } = this.props;

    if (usedMonsters.length < 1) {
      return null;
    }

    return(
      <div id="monster-track">
        {
          usedMonsters.map( (monster) => {
            return (
              <article className="monster-used" key={monster.id}>
                <MonsterTrackControl
                  dispatch={dispatch}
                  monster={monster}
                  visibleStatBlockId={visibleStatBlockId}
                />
                <header>
                  <h1>{monster.name}</h1>
                </header>
                <MonsterControl monster={monster} />
              </article>
            );
          })
        }
      </div>
    );

  }
});

export default MonsterTrack;
