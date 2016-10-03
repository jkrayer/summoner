import React from 'react';

export default function Radio(props) {
  return (
    <label>
      <input
        checked={props.checked ? true : false}
        name={props.name}
        onChange={props.event}
        type="radio"
        value={props.val}
      />{props.label}
    </label>
  );
}

Radio.propTypes = {
  checked: React.PropTypes.bool,
  event: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
  val: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired
};

Radio.defaultProps = {
  checked: false
};
