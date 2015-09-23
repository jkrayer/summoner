var Score = React.createClass({
  proptypes: {
    value: React.PropTypes.number.isRequired
  },
  render () {
    return (
      <span>
        {this.props.value + this.setModifier()}
      </span>
    );
  },
  setModifier () {
    var val = Math.floor(this.props.value/2 - 5);
    var operator = val === 0 ? '' : val > 0 ? '+' : '-';
    return ' (' + operator + val + ')';
  }
});
