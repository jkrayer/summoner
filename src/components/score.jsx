import React from 'react';

const Score = function Score(props) {
  const val = Math.floor((props.score / 2) - 5);
  const operator = val > 0 ? '+' : '';
  const modifier = [' (', operator, val, ')'].join('');

  return (
    <span>
      {[props.score, modifier].join('')}
    </span>
  );
};

Score.propTypes = {
  score: React.PropTypes.number.isRequired
};

export default Score;
