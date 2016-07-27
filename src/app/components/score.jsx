import React from 'react';

export default class Score extends React.Component {
  setModifier() {
    const val = Math.floor(this.props.value / 2 - 5);
    let operator = val > 0 ? '+' : '';

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
