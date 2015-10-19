import React from 'react';
import MonsterBlock from './monsterblock';
import Score from './score';
import MonsterControl from './monstercontrol';

const Monster = React.createClass({
  proptypes: {
    monster: React.PropTypes.object.isRequired
  },
  render () {
    let monster = this.props.monster;
    let actions = monster.actions ? <MonsterBlock className="monster-actions" stats={monster.actions} title="Actions" /> : null;
    let reactions = monster.reactions ? <MonsterBlock className="monster-reactions" stats={monster.reactions} title="Reactions" /> : null;
    return (
      <div id="monster-stage">
        <article className="monster">
          <header>
            <h1 className="monster-name">{monster.name}</h1>
            <p className="monster-tag">{monster.tag}</p>
          </header>
          <MonsterBlock className="monster-tactical" stats={monster.tactical} />
          <table className="table score-table">
            <thead>
              <tr>
                <th><abbr title="Strength">Str</abbr></th>
                <th><abbr title="Dexterity">Dex</abbr></th>
                <th><abbr title="Constitution">Con</abbr></th>
                <th><abbr title="Intelligence">Int</abbr></th>
                <th><abbr title="Wisdom">Wis</abbr></th>
                <th><abbr title="Charisma">Cha</abbr></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Score value={monster.scores.STR} /></td>
                <td><Score value={monster.scores.DEX} /></td>
                <td><Score value={monster.scores.CON} /></td>
                <td><Score value={monster.scores.INT} /></td>
                <td><Score value={monster.scores.WIS} /></td>
                <td><Score value={monster.scores.CHA} /></td>
              </tr>
            </tbody>
          </table>
          <MonsterBlock className="monster-skills" stats={monster.skills} />
          <MonsterBlock className="monster-features" stats={monster.features} />
          {actions}
          {reactions}
          <MonsterControl monster={this.props.monster} />
        </article>
      </div>
    );
  }
});

export default Monster;
