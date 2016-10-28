import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleBlur(event) {
    this.props.blurEvent(event.target.value);
    this.setState({
      val: ''
    });
  }
  handleChange(event) {
    this.setState({
      val: event.target.value
    });
  }
  render() {
    const { val } = this.state;
    return (
      <input
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        type="text"
        value={val}
      />
    );
  }
}

Input.propTypes = {
  blurEvent: React.PropTypes.func
};
