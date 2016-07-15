'use strict';

import React from 'react';

const MonsterTrackControl = React.createClass({
  render () {
    let { monster, visibleStatBlockId } = this.props;
    let viewIcon = (monster.id === visibleStatBlockId) ? "fa fa-eye-slash" : "fa fa-eye";

    return(
      <div className="monster-track-control">
        <button
          className="button-reset"
          onClick={this._showHandler}
          type="button"
        >
          <i className={viewIcon}></i>
        </button>
        <button
          className="button-reset"
          onClick={this._removeHandler}
          type="button"
        >
          <i className="fa fa-close"></i>
        </button>
      </div>
    );
  },
  _showHandler (hide) {
    let { dispatch, monster, visibleStatBlockId } = this.props;
    let visibleStatBlock = null;
    let nextVisibleStatBlockId = -1;

    if (monster.id !== visibleStatBlockId && !hide) {
        visibleStatBlock = monster;
        nextVisibleStatBlockId = monster.id;
    }

    dispatch({
      type: 'SHOW_MONSTER',
      visibleStatBlock,
      visibleStatBlockId: nextVisibleStatBlockId
    });
  },
  _removeHandler () {
    let { dispatch, monster } = this.props;
    dispatch({
      type: 'REMOVE_MONSTER',
      id: monster.id
    });
    this._showHandler(true);
  }
});

export default MonsterTrackControl;
