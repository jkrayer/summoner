import React from 'react';
import Radio from './radio';
import style from '../style/radio.css';

export default function RadioContainer(props) {
  const { checked, event, legend, name, radios } = props;
  const radioButtons = radios.map((r, index) =>
    <Radio
      checked={checked === r.val}
      event={event}
      key={index}
      label={r.label}
      name={name}
      val={r.val}
    />
  );
  return (
    <div
      className={style['radio-container']}
      title={legend}
    >
      {radioButtons}
    </div>
  );
}

RadioContainer.propTypes = {
  checked: React.PropTypes.string,
  event: React.PropTypes.func.isRequired,
  legend: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  radios: React.PropTypes.arrayOf({}).isRequired
};

RadioContainer.defaultProps = {
  checked: null,
  legend: null
};
