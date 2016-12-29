import React from 'react';
import Input from './input';
import style from '../style/xp-calculator.css';

export default class XpCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      split: null,
      total: 0
    };
    this.calculateXpReward = this.calculateXpReward.bind(this);
  }
  componentWillMount() {
    const { encounter } = this.props;
    let total = 0;
    encounter.forEach((monster) => {
      total += monster.xp * monster.hpPerMonster.length;
    });
    this.setState({
      total
    });
  }
  calculateXpReward(val) {
    const divisor = parseInt(val, 10);
    let split = 0;
    if (isNaN(divisor)) {
      split = null;
    } else {
      split = ['=', Math.round(this.state.total / divisor), 'per player'].join(' ');
    }
    this.setState({
      split
    });
  }
  render() {
    const { split, total } = this.state;
    return (
      <div className={style.calc}>
        Encounter XP: {total} /
        <Input
          blurEvent={this.calculateXpReward}
          placeholder="# of Players"
        />
        {split}
      </div>
    );
  }
}

XpCalculator.propTypes = {
  encounter: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  )
};
