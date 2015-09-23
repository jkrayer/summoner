var App = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired
  },
  getInitialState: function () {
    return {
      selectedMonsters: []
    };
  },
  render: function () {
    return (
      <div>
        <MonsterList allMonsters={this.props.allMonsters} onToggleMonster={this.toggleMonster} />
        <MonsterStage allMonsters={this.state.selectedMonsters} />
      </div>
    );
  },
  toggleMonster: function (arrayKey) {
    var allMonsters = this.props.allMonsters;
    var selectedMonsters = this.state.selectedMonsters.concat([allMonsters[arrayKey]]);

    this.setState({
      selectedMonsters: selectedMonsters
    });
  },
  clearSlected: function () {
    this.setState({
      selectedMonsters: []
    });
  }
});
