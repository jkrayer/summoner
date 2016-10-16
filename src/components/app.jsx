import React from 'react';
import { Link } from 'react-router';
import data from '../data/5e-SRD-Monsters';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      selectedMonster: null,
      showAddWindow: false,
      showConfirmWindow: false
    };
    this.setSelectedMonster = this.setSelectedMonster.bind(this);
    this.toggleAny = this.toggleAny.bind(this);
    this.addMonster = this.addMonster.bind(this);
  }
  setSelectedMonster(key) {
    this.setState({
      selectedMonster: data[key] || null
    });
  }
  addMonster(newMonster) {
    this.setState({
      monsters: this.state.monsters.concat(newMonster),
      showAddWindow: false,
      showConfirmWindow: true
    });
  }
  toggleAny(key) {
    const obj = {};
    obj[key] = !this.state[key];
    this.setState(obj);
  }
  render() {
    const { monsters, selectedMonster, showAddWindow, showConfirmWindow } = this.state;
    const link = monsters.length ? <Link to="/encounter">Encounter</Link> : null;
    const propsToPass = {
      monsters
    };

    switch (this.props.location.pathname) {
      case '/':
        propsToPass.addMonster = this.addMonster;
        propsToPass.data = data;
        propsToPass.selectedMonster = selectedMonster;
        propsToPass.setSelectedMonster = this.setSelectedMonster;
        propsToPass.showAddWindow = showAddWindow;
        propsToPass.showConfirmWindow = showConfirmWindow;
        propsToPass.toggleAddWindow = () => this.toggleAny('showAddWindow');
        propsToPass.toggleShowWindow = () => this.toggleAny('showConfirmWindow');
        break;
      case '/encounter':
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
  }).isRequired
};

// IndexLink, <IndexLink to="/">Home</IndexLink>
