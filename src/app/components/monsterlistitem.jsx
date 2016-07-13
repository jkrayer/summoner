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
    let { monster } = this.props;
    return (
      <li onMouseEnter={this._hoverHandler} onMouseLeave={this._hoverHandler}>
        <div className="control-wrapper">
          <MonsterListControl
            {...this.props}
            showControls={this.state.showControls}
          />
          {monster.name}
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
