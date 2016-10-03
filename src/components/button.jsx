import React from 'react';

const Button = function Button(props) {
  const { children, className, event, type } = props;
  return (
    <button
      className={className}
      onClick={event}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  event: React.PropTypes.func,
  type: React.PropTypes.oneOf(['button', 'submit', 'reset'])
};

Button.defaultProps = {
  className: null,
  event: () => {},
  type: 'button'
};

export default Button;
