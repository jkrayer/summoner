import React from 'react';
import MonsterTrackControl from './monstertrackcontrol.jsx';
import MonsterControl from './monstercontrol.jsx';

export default class MonsterTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberOfMonsters: null, hpOfMonsters: null };
  }
  render() {
    const { dispatch, usedMonsters, visibleStatBlockId } = this.props;

    if (usedMonsters.length < 1) {
      return null;
    }

    return (
      <div id="monster-track">
        {
          usedMonsters.map((monster) =>
            (
            <article className="monster-used" key={monster.id}>
              <MonsterTrackControl
                dispatch={dispatch}
                monster={monster}
                visibleStatBlockId={visibleStatBlockId}
              />
              <header>
                <h1>{monster.name}</h1>
              </header>
              <MonsterControl
                dispatch={dispatch}
                monster={monster}
              />
            </article>
            )
          )
        }
      </div>
    );
  }
}

MonsterTrack.propTypes = {
  dispatch: React.PropTypes.func,
  usedMonsters: React.PropTypes.arrayOf(React.PropTypes.shape({})),
  visibleStatBlockId: React.PropTypes.number
};
