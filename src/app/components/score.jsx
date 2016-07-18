import React from 'react';

export default class Score extends React.Component {
  setModifier() {
    const val = Math.floor(this.props.value / 2 - 5);
    let operator = '';

    if (val !== 0) {
      if (val > 0) {
        operator = '+';
      } else {
        operator = '-';
      }
    }

    return [' (', operator, val, ')'].join('');
  }
  render() {
    return (
      <span>
        {this.props.value + this.setModifier()}
      </span>
    );
  }
}

Score.propTypes = {
  value: React.PropTypes.number
};
