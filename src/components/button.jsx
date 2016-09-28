import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { children, className, event, type } = this.props;
    return (
      <button
        className={className}
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
  className: React.PropTypes.string,
  event: React.PropTypes.func,
  type: React.PropTypes.oneOf(['button', 'submit', 'reset'])
};

Button.defaultProps = {
  className: null,
  event: function() {},
  type: 'button'
};
