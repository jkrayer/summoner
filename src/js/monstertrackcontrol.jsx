import React from 'react';

// (Remove)(Show)(Add)
const MonsterTrackControl = React.createClass({
  propTypes: {
    monsterId: React.PropTypes.number.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  render () {
    return(
      <div className="monster-track-control">
        <button type="button" className="button-reset" onClick={this._showHandler}><i className="fa fa-eye"></i></button>
        <button type="button" className="button-reset" onClick={this._removeHandler}><i className="fa fa-close"></i></button>
      </div>
    );
  },
  _showHandler () {
    this.props.dispatch({type:'SHOW_MONSTER', id:this.props.monsterId});
  },
  _removeHandler () {
    this.props.dispatch({type:'REMOVE_MONSTER', id:this.props.monsterId});
  }
});

export default MonsterTrackControl;
