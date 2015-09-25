var MonsterStage = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired
  },
  render: function () {
    var theMonsters = this.props.allMonsters.map(function (monster, index) {
      if (monster.selected) {
        return (<MonsterStat monster={monster} key={index} />);
      }
      return null;
    });
    return (
      <div id="monster-stage">
        {theMonsters}
      </div>
    );
  }
});