import React from 'react';

const MonsterListControl = React.createClass({
  proptTypes: {
    showControls: React.PropTypes.bool.isRequired,
    toggleStatBlock: React.PropTypes.func.isRequired,
    monsterID: React.PropTypes.number.isRequired
  },
  getInitialState () {
    return {
      copy: 'Show'
    };
  },
  render () {
    let classes = (this.props.showControls) ? 'button-tray active' : 'button-tray';
    return (
      <div className={classes}>
        <button type="button" className="button-reset" onClick={this._clickHandler}>{this.state.copy}</button>
      </div>
    );
  },
  _clickHandler () {
    this.props.toggleStatBlock(this.props.monsterID);
    this.setState({
      copy: (this.state.copy === 'Show') ? 'Hide' : 'Show'
    });
  }
});

export default MonsterListControl;
