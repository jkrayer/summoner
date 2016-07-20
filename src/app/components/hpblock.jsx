import React from 'react';

export default class HPBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hitpoints: this.props.hitpoints };
    this.handleMinus = this.handleMinus.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
  }
  handleMinus() {
    this.math('-');
  }
  handlePlus() {
    this.math('+');
  }
  math(operator) {
    const { hpupdate } = this.props;
    const newValue = parseInt(this.refs.pointcounter.value, 10);
    let newHP = (operator === '+')
              ? this.state.hitpoints + newValue
              : this.state.hitpoints - newValue;
    if (isNaN(newValue)) {
      return;
    }
    newHP = (newHP > this.props.hitpoints) ? this.props.hitpoints : newHP;

    //this.setState({
    //  hitpoints: newHP
    //});
    hpupdate(newHP);

    this.refs.pointcounter.value = '';
  }
  render() {
    return (
      <div className="hp-block">
        <span>{this.state.hitpoints}</span>
        <input
          type="text"
          ref="pointcounter"
        />
        <button
          onClick={this.handlePlus}
          type="button"
        >{'+'}</button>
        <button
          onClick={this.handleMinus}
          type="button"
        >{'-'}</button>
      </div>
    );
  }
}

HPBlock.propTypes = {
  hitpoints: React.PropTypes.number.isRequired,
  hpupdate: React.PropTypes.func
};
