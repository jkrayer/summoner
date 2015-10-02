'use strict';

let App = React.createClass ({
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
        <MonsterList allMonsters={this.state.allMonsters} onToggleMonster={this.toggleMonster} />
        <MonsterStage allMonsters={this.state.allMonsters} />
      </div>
    );
  },
  toggleMonster (arrayKey) {
    let allMonsters = this.state.allMonsters;
    if (this.state.allMonsters[arrayKey].hasOwnProperty('selected')) {
      this.state.allMonsters[arrayKey].selected = !this.state.allMonsters[arrayKey].selected;
    } else {
      this.state.allMonsters[arrayKey].selected = true;
    }
    this.setState({
      allMonsters: allMonsters
    });
  },
  clearSlected () {
    this.setState({
      selectedMonsters: []
    });
  }
});
