import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { children, event, type } = this.props;
    return (
      <button
        onClick={event}
        type={type}
      >
      {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  event: React.PropTypes.func,
  type: React.PropTypes.oneOf(['button', 'submit', 'reset'])
};

Button.defaultProps = {
  event: function() {},
  type: 'button'
};
