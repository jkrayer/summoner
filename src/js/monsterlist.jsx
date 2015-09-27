var MonsterList = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired,
    onToggleMonster: React.PropTypes.func.isRequired
  },
  render: function () {
    var self = this;
    var theMonsters = this.props.allMonsters.map(function (monster, i){
      var icon = monster.selected ? '-' : '+';
      var classNames = monster.selected ?  'button-reset active' : 'button-reset';
      return (
        <li key={i} onClick={self.props.onToggleMonster.bind(null, i)}><button type="button" className={classNames}><span className="ctrl-icon">{icon}</span>{monster.name}</button></li>
      );
    });
    return (
      <div id="monster-list">
        <ul className="list-reset">
          {theMonsters}
        </ul>
      </div>
    );
  }
});
