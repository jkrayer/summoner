'use strict';

import React from 'react';
import MonsterListControl from './monsterlistcontrol.jsx';

const MonsterListItem = React.createClass({
  getInitialState () {
    return {
      showControls: false
    };
  },
  render() {
    return (
      <li onMouseEnter={this._hoverHandler} onMouseLeave={this._hoverHandler}>
        <div className="control-wrapper">
          <MonsterListControl
            dispatch={this.props.dispatch}
            monsterID={this.props.monster.id}
            showControls={this.state.showControls}
            visibleId={this.props.visibleId}
          />
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
