import React from 'react';
import { connect } from 'react-redux';
import { showMonster } from '../redux/actions';
import MonsterList from './monsterlist';
import Monster from './monster'

const App = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired
  },
  render () {
    let monster = this.props.visibleStatBlock ? <Monster monster={this.props.visibleStatBlock} /> : null;
    return (
      <div>
        <MonsterList allMonsters={this.props.allMonsters} onToggleMonster={this._toggleMonster} />
        {monster}
      </div>
    );
  },
  _toggleMonster (arrayKey) {
    this.props.dispatch({type:'SHOW_MONSTER', key:arrayKey});
  }
});

function select(state) {
  return {
    allMonsters: state.allMonsters,
    visibleStatBlock: state.visibleStatBlock
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
