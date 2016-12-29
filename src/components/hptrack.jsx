import React from 'react';
import HpBlock from './hpblock';
import Button from './button';
import ButtonClose from './button-close';
import XpCalculator from './xp-calculator';
import helpers from '../utilities/helpers';
import style from '../style/hptrack.css';

export default class HpTrack extends React.Component {
  constructor(){
    super();
    this.calculateHp = this.calculateHp.bind(this);
  }
  calculateHp(monsterIndex, hpIndex, newVal) {
    const operator = (newVal[0] === '+') ? '+' : '-';
    const val = parseInt(newVal, 10);
    let monster;
    let newEncounter;

    if (isNaN(val)) { return false; }

    monster = Object.assign({}, this.props.encounter[monsterIndex]);
    monster.hpPerMonster[hpIndex] += (operator === '+') ? val : -val;
    newEncounter = this.props.encounter.map((enc, index) => {
      return (index === monsterIndex) ? monster : enc;
    })

    this.props.updateEncounter(newEncounter);
  }
  render() {
    const { deleteMonster, encounter, setSelectedMonster } = this.props;
    const blocks = encounter.map((enc, index) =>
      <section key={enc.monster.arrayIndex}>
        <h2>
          <Button
            className={style.btn}
            event={helpers.partialApply(setSelectedMonster, enc.monster)}
          >
            {enc.monster.name}
          </Button>
          <ButtonClose event={() => deleteMonster(enc)} />
        </h2>
        <HpBlock
          monster={enc}
          calculate={helpers.partialApply(this.calculateHp, index)}
        />
      </section>
    );

    return (
      <div>
        <XpCalculator encounter={encounter} />
        {blocks}
      </div>
    );
  }
}

HpTrack.propTypes = {
  deleteMonster: React.PropTypes.func,
  encounter: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  ),
  setSelectedMonster: React.PropTypes.func.isRequired,
  updateEncounter: React.PropTypes.func
};

HpTrack.defaultProps = {
  deleteMonster: () => {},
  encounter: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  ),
  setSelectedMonster: React.PropTypes.func.isRequired,
  updateEncounter: () => {}
};
