'use strict';

import React from 'react';

const Score = React.createClass({
  render () {
    return (
      <span>
        {this.props.value + this._setModifier()}
      </span>
    );
  },
  _setModifier () {
    let val = Math.floor(this.props.value/2 - 5);
    let operator = val === 0 ? '' : val > 0 ? '+' : '-';
    return ' (' + operator + val + ')';
  }
});

export default Score;
