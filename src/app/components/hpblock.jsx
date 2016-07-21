import React from 'react';

export default class HPBlock extends React.Component {
  constructor() {
    super();
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
    const { hitpoints, hpupdate, maxhitpoints } = this.props;
    const { pointcounter } = this.refs;
    const newValue = parseInt(pointcounter.value, 10);
    let newHP = (operator === '+') ? hitpoints + newValue : hitpoints - newValue;

    if (isNaN(newValue)) {
      return;
    }

    newHP = (newHP > maxhitpoints) ? maxhitpoints : newHP;

    hpupdate(newHP);

    pointcounter.value = '';
  }
  render() {
    let { hitpoints } = this.props;
    return (
      <div className="hp-block">
        <span>{hitpoints}</span>
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
  hpupdate: React.PropTypes.func,
  maxhitpoints: React.PropTypes.number.isRequired
};
