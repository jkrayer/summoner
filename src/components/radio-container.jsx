import React from 'react';
import Radio from './radio';

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
        ley={index}
        label={r.label}
        name={name}
        val={r.val}
      />
    );
    return (
      <fieldset>
        <legend>{legend}</legend>
        {radioButtons}
      </fieldset>
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
