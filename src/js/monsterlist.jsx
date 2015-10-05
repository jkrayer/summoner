'use strict';

let MonsterList = React.createClass({
  propTypes: {
    allMonsters: React.PropTypes.array.isRequired,
    onToggleMonster: React.PropTypes.func.isRequired
  },
  render () {
    let self = this;
    return (
      <div id="monster-list">
        <ul className="list-reset">
          {this.props.allMonsters.map((monster, index) => {
            return (<MonsterListItem monster={monster} key={index} toggleView={self.props.onToggleMonster.bind(null, index)} />);
          })}
        </ul>
      </div>
    );
  }
});
