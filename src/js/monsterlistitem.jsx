import React from 'react';
import MonsterListControl from './monsterlistcontrol';

const MonsterListItem = React.createClass({
  propTypes: {
    monster: React.PropTypes.object.isRequired,
    toggleStatBlock: React.PropTypes.func.isRequired,
    visibleId: React.PropTypes.number.isRequired
  },
  getInitialState () {
    return {
      showControls: false
    };
  },
  render() {
    return (
      <li onMouseEnter={this._hoverHandler} onMouseLeave={this._hoverHandler}>
        <div className="control-wrapper">
          <MonsterListControl showControls={this.state.showControls} toggleStatBlock={this.props.toggleStatBlock} monsterID={this.props.monster.id} visibleId={this.props.visibleId} />
          {this.props.monster.name}
        </div>
      </li>
    );
  },
  _hoverHandler () {
    this.setState({
      showControls: !this.state.showControls
    });
  }
});

export default MonsterListItem;
