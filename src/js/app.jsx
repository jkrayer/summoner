import React from 'react';
import { connect } from 'react-redux';
import { showMonster } from '../redux/actions';
import MonsterList from './monsterlist';
import MonsterStage from './monsterstage';

const App = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired
  },
  render () {
//<MonsterStage allMonsters={this.props.visibleStatBlock} />
    return (
      <div>
        <MonsterList allMonsters={this.props.allMonsters} onToggleMonster={this._toggleMonster} />
      </div>
    );
  },
  _toggleMonster (arrayKey) {
    this.props.dispatch({type:'SHOW_MONSTER', key:arrayKey});
  }
});

function select(state) {
  return {
    allMonsters: state.monsters,
    visibleStatBlock: state.visibleStatBlock
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
