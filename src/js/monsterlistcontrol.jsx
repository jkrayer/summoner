import React from 'react';

const MonsterListControl = React.createClass({
  proptTypes: {
    showControls: React.PropTypes.bool.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    monsterID: React.PropTypes.number.isRequired,
    visibleId: React.PropTypes.number.isRequired
  },
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
    let theId = (this.props.monsterID === this.props.visibleId) ? -1 : this.props.monsterID;
    this.props.dispatch({type:'SHOW_MONSTER', id:theId});
  },
  _useHandler () {
    this.props.dispatch({type:'USE_MONSTER', id:this.props.monsterID});
  }
});

export default MonsterListControl;
