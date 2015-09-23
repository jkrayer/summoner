var MonsterList = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired,
    onToggleMonster: React.PropTypes.func.isRequired
  },
  render: function () {
    var self = this;
    var theMonsters = this.props.allMonsters.map(function (monster, i){
      var icon = monster.selected ? '-' : '+';
      return (
        <li key={i}>{monster.name}<button type="button" onClick={self.props.onToggleMonster.bind(null, i)}>{icon}</button></li>
      );
    });
    return (
      <div id="monster-list">
        <ul>
          {theMonsters}
        </ul>
      </div>
    );
  }
});
