import React from 'react';

const HPBlock = React.createClass({
  proptypes: {
    hitpoints: React.PropTypes.number.isRequired
  },
  getInitialState () {
    return {
      hitpoints: this.props.hitpoints,
      value: ''
    };
  },
  render () {
    return (
      <div>
        <span>{this.state.hitpoints}</span>
        <input type="text" ref="pointcounter" value={this.state.value} onChange={this._changeHandler} />
        <button type="button" onClick={this._handlePlus}>+</button>
        <button type="button" onClick={this._handleMinus}>-</button>
      </div>
    );
  },
  _changeHandler (event) {
    this.setState({
      value: parseInt(event.target.value, 10)
    });
  },
  _handleMinus (event) {
    let newValue = this.state.hitpoints - this.state.value;
    this.setState({
      hitpoints: newValue,
      value: ''
    });
  },
  _handlePlus (event) {
    let newValue = this.state.hitpoints + this.state.value;
    newValue = (newValue > this.props.hitpoints) ? this.props.hitpoints : newValue;
    this.setState({
      hitpoints: newValue,
      value: ''
    });
  }
});

export default HPBlock;
