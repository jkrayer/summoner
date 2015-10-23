import React from 'react';

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
        (Remove)(Show)(Add)
        <header>
          <h1>{monster.name}</h1>
        </header>
      </article>
    );
  }
});

export default MonsterTrack;
