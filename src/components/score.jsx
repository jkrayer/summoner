import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  setModifier() {
    const val = Math.floor(this.props.score / 2 - 5);
    const operator = val > 0 ? '+' : '';

    return [' (', operator, val, ')'].join('');
  }
  render() {
    return (
      <span>
        {this.props.score + this.setModifier()}
      </span>
    );
  }
}

Score.propTypes = {
  score: React.PropTypes.number.isRequired
};
