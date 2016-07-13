'use strict';

import React from 'react';

const MonsterListControl = React.createClass({
  render () {
    let classes = (this.props.showControls) ? 'button-tray active' : 'button-tray';
    let copy = (this.props.monsterID === this.props.visibleId) ? 'Hide' : 'Show';
    return (
      <div className={classes}>
        <button type="button" className="button-reset" onClick={this._showHandler}>{copy}</button>
        <button type="button" className="button-reset" onClick={this._useHandler}>Use</button>
      </div>
    );
  },
  _showHandler () {
    if (this.props.monsterID === this.props.visibleId) {
      this.props.dispatch({type:'HIDE_MONSTER'});
    } else {
      this.props.dispatch({type:'SHOW_MONSTER', id:this.props.monsterID});
    }
  },
  _useHandler () {
    this.props.dispatch({type:'USE_MONSTER', id:this.props.monsterID});
  }
});

export default MonsterListControl;
