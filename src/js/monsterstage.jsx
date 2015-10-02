'use strict';

let MonsterStage = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired
  },
  render: function () {
    let theMonsters = this.props.allMonsters.map(function (monster, index) {
      if (monster.selected) {
        return (<Monster monster={monster} key={index} />);
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
