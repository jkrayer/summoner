'use strict';

import React from 'react';

const MonsterListControl = React.createClass({
  render () {
    let { monster, showControls, visibleStatBlockId } = this.props;
    let classes = (showControls) ? 'button-tray active' : 'button-tray';
    let copy = (monster.id === visibleStatBlockId) ? 'Hide' : 'Show';
    return (
      <div className={classes}>
        <button type="button" className="button-reset" onClick={this._showHandler}>{copy}</button>
        <button type="button" className="button-reset" onClick={this._useHandler}>{"Use"}</button>
      </div>
    );
  },
  _showHandler () {
    let { monster, visibleId } = this.props;
    let visibleStatBlock = null;
    let visibleStatBlockId = -1;

    if (monster.id !== visibleId) {
        visibleStatBlock = monster;
        visibleStatBlockId = monster.id;
    }

    this.props.dispatch({
      type: 'SHOW_MONSTER',
      visibleStatBlock,
      visibleStatBlockId
    });
  },
  _useHandler () {
    this.props.dispatch({type:'USE_MONSTER', id:this.props.monsterID});
  }
});

export default MonsterListControl;
