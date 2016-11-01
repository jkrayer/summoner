import React from 'react';
import style from '../style/add-monster.css';
import utilities from '../utilities/helpers';

export default class AddMonster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numMonsters: '',
      hpPerMonster: ''
    };
    this.setHpRange = this.setHpRange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  setHpRange() {
    const { monster } = this.props;
    const hd = monster.hit_dice.split('d');
    const factors = {
      num: parseInt(hd[0], 10),
      die: parseInt(hd[1], 10),
      con: Math.floor((monster.scores.constitution / 2) - 5)
    };
    const hp = {
      min: factors.num + (factors.num * factors.con),
      max: (factors.num * factors.die) + (factors.num * factors.con)
    };
    return [hp.min, '/', monster.hit_points, '/', hp.max].join('');
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.numMonsters && this.state.hpPerMonster) {
      this.props.submitEvent(
        {
          arrayIndex: this.props.monster.arrayIndex,
          hpPerMonster: new Array(this.state.numMonsters).fill(this.state.hpPerMonster),
          name: this.props.monster.name,
          xp: utilities.getXp(this.props.monster.challenge_rating)
        }
      );
    }
    return false;
  }
  handleChange(event) {
    const obj = {};
    obj[event.target.id] = parseInt(event.target.value, 10);
    this.setState(obj);
  }
  render() {
    const { monster } = this.props;
    const hpRange = this.setHpRange();
    return (
      <form className={style.form}>
        <fieldset>
          <legend>{monster.name}</legend>
          <div className={style.wrapper}>
            <lable
              className={style.label}
              htmlFor="numMonsters"
            >{'Number of Monsters'}
            </lable>
            <input
              className={style.input}
              id="numMonsters"
              onChange={this.handleChange}
              placeholder="Number of Monsters"
              type="number"
              value={this.state.numMonsters}
            />
          </div>
          <div className={style.wrapper}>
            <lable
              className={style.label}
              htmlFor="hpPerMonster"
            >{'HP Per Monster'}
            </lable>
            <input
              className={style.input}
              id="hpPerMonster"
              onChange={this.handleChange}
              placeholder={hpRange}
              type="text"
              value={this.state.hpPerMonster}
            />
          </div>
          <button
            className={style.btn}
            onClick={this.handleSubmit}
            type="submit"
          >{'Save'}
          </button>
        </fieldset>
      </form>
    );
  }
}

AddMonster.propTypes = {
  monster: React.PropTypes.shape({
    arrayIndex: React.PropTypes.number,
    challenge_rating: React.PropTypes.string,
    name: React.PropTypes.string
  }),
  submitEvent: React.PropTypes.func.isRequired
};
