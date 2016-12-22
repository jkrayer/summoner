import React from 'react';
import { IndexLink, Link } from 'react-router';
import { SET_SELECTED_MONSTER, SET_MONSTER_PANE_VISABILITY } from '../redux/actions/action-constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddWindow: false,
      showConfirmWindow: false
    };
    this.setSelectedMonster = this.setSelectedMonster.bind(this);
    this.toggleAny = this.toggleAny.bind(this);
    this.calculateHp = this.calculateHp.bind(this);
    this.deleteMonster = this.deleteMonster.bind(this);
  }
  setSelectedMonster(key) {
    const { dispatch, monsters } = this.props;
    dispatch({
      type: SET_SELECTED_MONSTER,
      data: monsters[key] || null
    });
    dispatch({
      type: SET_MONSTER_PANE_VISABILITY,
      data: true
    });
  }
  deleteMonster(monster) {
    const { monsters } = this.state;
    const newMonsters = monsters.filter(m => m.arrayIndex !== monster.arrayIndex);
    this.setState({
      monsters: newMonsters
    });
  }
  toggleAny(key) {
    const obj = {};
    obj[key] = !this.state[key];
    this.setState(obj);
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
    const { showAddWindow, showConfirmWindow } = this.state;
    const { monsters } = this.props;
    const propsToPass = {
      monsters,
      setSelectedMonster: this.setSelectedMonster
    };
    let link = null;

    if (this.props.location.pathname !== '/') {
      link = <IndexLink to="/">Home</IndexLink>;
    } else if (monsters.length) {
      link = <Link to="/encounter">Encounter</Link>;
    }

    switch (this.props.location.pathname) {
      case '/':
        propsToPass.data = monsters;
        propsToPass.showAddWindow = showAddWindow;
        propsToPass.showConfirmWindow = showConfirmWindow;
        propsToPass.toggleAddWindow = () => this.toggleAny('showAddWindow');
        propsToPass.toggleShowWindow = () => this.toggleAny('showConfirmWindow');
        break;
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
  monsters: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  )
};
