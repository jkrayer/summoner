import React from 'react';

const HPBlock = React.createClass({
  proptypes: {
    hitpoints: React.PropTypes.number.isRequired
  },
  getInitialState () {
    return {
      hitpoints: this.props.hitpoints
    };
  },
  render () {
    return (
      <div className="hp-block">
        <span>{this.state.hitpoints}</span>
        <input type="text" ref="pointcounter" />
        <button type="button" onClick={this._handlePlus}>+</button>
        <button type="button" onClick={this._handleMinus}>-</button>
      </div>
    );
  },
  _handleMinus() {
   this._math('-');
  },
  _handlePlus () {
    this._math('+');
  },
  _math (operator) {
    let newValue = parseInt(this.refs.pointcounter.value, 10);
    let newHP = (operator === '+') ? this.state.hitpoints + newValue : this.state.hitpoints - newValue;
    if (isNaN(newValue)) {
      return;
    }
    newHP = (newHP > this.props.hitpoints) ? this.props.hitpoints : newHP;
    this.setState({
      hitpoints: newHP
    });
    this.refs.pointcounter.value = '';
  }
});

export default HPBlock;
