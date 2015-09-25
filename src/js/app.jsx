var App = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired
  },
  getInitialState: function () {
    return {
      allMonsters: this.props.allMonsters
    };
  },
  render: function () {
    return (
      <div>
        <MonsterList allMonsters={this.state.allMonsters} onToggleMonster={this.toggleMonster} />
        <MonsterStage allMonsters={this.state.allMonsters} />
      </div>
    );
  },
  toggleMonster: function (arrayKey) {
    var allMonsters = this.state.allMonsters;

    if (this.state.allMonsters[arrayKey].hasOwnProperty('selected')) {
      this.state.allMonsters[arrayKey].selected = !this.state.allMonsters[arrayKey].selected;
    } else {
      this.state.allMonsters[arrayKey].selected = true;
    }

    this.setState({
      allMonsters: allMonsters
    });
  },
  clearSlected: function () {
    this.setState({
      selectedMonsters: []
    });
  }
});
