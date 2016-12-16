import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      showAddWindow: false,
      showConfirmWindow: false
    };
    this.setSelectedMonster = this.setSelectedMonster.bind(this);
    this.toggleAny = this.toggleAny.bind(this);
    this.addMonster = this.addMonster.bind(this);
    this.calculateHp = this.calculateHp.bind(this);
    this.deleteMonster = this.deleteMonster.bind(this);
  }
  setSelectedMonster(key) {
    const { dispatch, monsters } = this.props;
    dispatch({
      type: 'MONSTER_TOGGLE_PANE',
      monster: monsters[key] || null
    });
  }
  addMonster(newMonster) {
    this.setState({
      monsters: this.state.monsters.concat(newMonster),
      showAddWindow: false,
      showConfirmWindow: true
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
    const { monsters, showAddWindow, showConfirmWindow } = this.state;
    const { monsterInPane } = this.props;
    const propsToPass = {
      monsters,
      selectedMonster: monsterInPane,
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
        propsToPass.addMonster = this.addMonster;
        propsToPass.data = this.props.monsters;
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
