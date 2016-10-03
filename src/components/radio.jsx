import React from 'react';
import style from '../style/radio.css';

export default function Radio(props) {
  return (
    <div className={style.wrapper}>
      <input
        checked={props.checked ? true : false}
        className={style.input}
        id={props.val}
        name={props.name}
        onChange={props.event}
        tabIndex={-1}
        type="radio"
        value={props.val}
      />
      <label
        className={style.label}
        htmlFor={props.val}
        tabIndex={1}
      >{props.label}
      </label>
    </div>
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
