import React from 'react';
import Radio from './radio';
import style from '../style/radio.css';

export default class RadioContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { checked, event, legend, name, radios } = this.props;
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
}

RadioContainer.propTypes = {
  checked: React.PropTypes.string,
  event: React.PropTypes.func.isRequired,
  legend: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  radios: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      val: React.PropTypes.string,
      label: React.PropTypes.string
    })
  ).isRequired
}

RadioContainer.defaultProps = {
  checked: null,
  legend: null
};
