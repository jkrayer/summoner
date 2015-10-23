import React from 'react';
import MonsterTrackControl from './monstertrackcontrol';

const MonsterTrack = React.createClass({
  propTypes: {
    monsters: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  render () {
    let monsterBlocks = this.props.monsters.map(this._renderMonsterBlocks);
    return(
      <div id="monster-track">
        {monsterBlocks}
      </div>
    );
  },
  _renderMonsterBlocks (monster, index) {
    return (
      <article key={index}>
        <MonsterTrackControl dispatch={this.props.dispatch} monsterId={monster.id}/>
        <header>
          <h1>{monster.name}</h1>
        </header>
      </article>
    );
  }
});

export default MonsterTrack;
