import React from 'react';

// (Remove)(Show)(Add)
const MonsterTrackControl = React.createClass({
  propTypes: {
    monsterId: React.PropTypes.number.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    visibleId: React.PropTypes.number.isRequired
  },
  render () {
    let viewIcon = (this.props.monsterId === this.props.visibleId) ? "fa fa-eye-slash" : "fa fa-eye";
    return(
      <div className="monster-track-control">
        <button type="button" className="button-reset" onClick={this._showHandler}><i className={viewIcon}></i></button>
        <button type="button" className="button-reset" onClick={this._removeHandler}><i className="fa fa-close"></i></button>
      </div>
    );
  },
  _showHandler () {
    if (this.props.monsterId === this.props.visibleId) {
      this.props.dispatch({type:'HIDE_MONSTER'});
    } else {
      this.props.dispatch({type:'SHOW_MONSTER', id:this.props.monsterId});
    }
  },
  _removeHandler () {
    this.props.dispatch({type:'REMOVE_MONSTER', id:this.props.monsterId});
    this.props.dispatch({type:'HIDE_MONSTER'});
  }
});

export default MonsterTrackControl;
