import React from 'react';
import { IndexLink, Link } from 'react-router';
import { SET_SELECTED_MONSTER, SET_MONSTER_PANE_VISABILITY } from '../redux/actions/action-constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.calculateHp = this.calculateHp.bind(this);
    this.deleteMonster = this.deleteMonster.bind(this);
  }
  deleteMonster(monster) {
    const { encounter } = this.state;
    const newMonsters = monsters.filter(m => m.arrayIndex !== monster.arrayIndex);
    this.setState({
      monsters: newMonsters
    });
  }
  calculateHp(monsterIndex, hpIndex, newVal) {
    const operator = (newVal[0] === '+') ? '+' : '-';
    const val = parseInt(newVal, 10);
    const monster = Object.assign({}, this.state.monsters[monsterIndex]);
    if (isNaN(val)) { return false; }
    monster.hpPerMonster[hpIndex] += (operator === '+') ? val : -val;
    return this.setState({
      monsters: this.state.monsters.map((m, i) => {
        const r = (i === monsterIndex) ? monster : m;
        return r;
      })
    });
  }
  render() {
    const { encounter } = this.props;
    const propsToPass = {};
    let link = null;

    if (this.props.location.pathname !== '/') {
      link = <IndexLink to="/">Home</IndexLink>;
    } else if (encounter.length) {
      link = <Link to="/encounter">Encounter</Link>;
    }

    switch (this.props.location.pathname) {
      case '/encounter':
        propsToPass.calculateHp = this.calculateHp;
        propsToPass.deleteMonster = this.deleteMonster;
        break;
      default:
        break;
    }

    return (
      <div>
        {link}
        {React.cloneElement(this.props.children, propsToPass)}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string.isRequired
  }).isRequired,
  encounter: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  )
};
