import React from 'react';
import { connect } from 'react-redux';
import MonsterList from './monsterlist';
import Monster from './monster';

const App = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired,
    visibleStatBlock: React.PropTypes.object
  },
  render () {
    let monster = this.props.visibleStatBlock ? <Monster monster={this.props.visibleStatBlock} /> : null;
    let visibleId = (this.props.visibleStatBlock) ? this.props.visibleStatBlock.id : -1;
    return (
      <div>
        <MonsterList allMonsters={this.props.allMonsters} toggleStatBlock={this._toggleStatBlock} visibleId={visibleId} />
        {monster}
      </div>
    );
  },
  _toggleStatBlock (id) {
    this.props.dispatch({type:'SHOW_MONSTER', id:id});
  }
});

function select(state) {
  return state;
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
