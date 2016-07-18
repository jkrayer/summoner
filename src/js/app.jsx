import React from 'react';
import { connect } from 'react-redux';
import MonsterList from './monsterlist';
import Monster from './monster';
import MonsterTrack from './monstertrack';

const App = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired,
    visibleStatBlock: React.PropTypes.object,
    usedMonsters: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  render () {
    let monster = this.props.visibleStatBlock ? <Monster monster={this.props.visibleStatBlock} /> : null;
    let visibleId = (this.props.visibleStatBlock) ? this.props.visibleStatBlock.id : -1;
    let usedMonster = this.props.usedMonsters.length ? <MonsterTrack monsters={this.props.usedMonsters} dispatch={this.props.dispatch} visibleId={visibleId} /> : null;
    return (
      <div>
        <MonsterList allMonsters={this.props.allMonsters} dispatch={this.props.dispatch} visibleId={visibleId} />
        {usedMonster}
        {monster}
      </div>
    );
  }
});

function select(state) {
  return state;
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
