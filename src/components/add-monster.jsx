import React from 'react';
import style from '../style/add-monster.css';

export default class AddMonster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numMonsters: null,
      hpPerMonster: null
    };
    this.setHpRange = this.setHpRange.bind(this);
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
  render() {
    const { monster, submitEvent } = this.props;
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
              placeholder={hpRange}
              type="text"
              value={this.state.hpPerMonster}
            />
          </div>
          <button
            className={style.btn}
            onClick={submitEvent}
            type="submit"
          >{'Save'}
          </button>
        </fieldset>
      </form>
    );
  }
}

AddMonster.propTypes = {
  monster: React.PropTypes.shape({}),
  submitEvent: React.PropTypes.func.isRequired
};
