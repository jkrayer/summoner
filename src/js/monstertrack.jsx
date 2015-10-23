import React from 'react';
import MonsterTrackControl from './monstertrackcontrol';
import MonsterControl from './monstercontrol';

const MonsterTrack = React.createClass({
  propTypes: {
    monsters: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  getInitialState () {
    return {
      numberOfMonsters: null,
      hpOfMonsters: null
    };
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
        <MonsterControl monster={monster} />
      </article>
    );
  },
  _setPoints (event) {
    let numberOfMonsters = parseInt(this.refs.numOfMonsters.value, 10);
    let hpOfMonsters = parseInt(this.refs.hpOfMonsters.value, 10);

    this.setState({
      numberOfMonsters: numberOfMonsters,
      hpOfMonsters: hpOfMonsters
    });
  }
});

export default MonsterTrack;
