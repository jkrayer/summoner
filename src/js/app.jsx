import React from 'react';
import MonsterList from './monsterlist';
import MonsterStage from './monsterstage';

const App = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired
  },
  getInitialState () {
    return {
      allMonsters: this.props.allMonsters
    };
  },
  render () {
    return (
      <div>
        <MonsterList allMonsters={this.state.allMonsters} onToggleMonster={this._toggleMonster} />
        <MonsterStage allMonsters={this.state.allMonsters} />
      </div>
    );
  },
  _toggleMonster (arrayKey) {
    let allMonsters = this.state.allMonsters;
    if (this.state.allMonsters[arrayKey].hasOwnProperty('selected')) {
      this.state.allMonsters[arrayKey].selected = !this.state.allMonsters[arrayKey].selected;
    } else {
      this.state.allMonsters[arrayKey].selected = true;
    }
    this.setState({
      allMonsters: allMonsters
    });
  }
});

export default App;


