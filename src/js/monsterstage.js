var MonsterStage = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired
  },
  render: function () {
    var theMonsters = this.props.allMonsters.map(function (monster, index) {
      return (<MonsterStat monster={monster} />);
    });
    return (
      <div id="monster-stage">
        {theMonsters}
      </div>
    );
  }
});