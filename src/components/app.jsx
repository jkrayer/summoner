import React from 'react';
import data from '../data/5e-SRD-Monsters';
import TocContainer from './toc-container';
import Monster from './monster';
import Modal from './modal';
import AddMonster from './add-monster';
import SlidePanel from './slide-panel';
import RecentMonster from './recent-monster';

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
  setModal() {
    return (
      <Modal closeEvent={() => this.toggleAny('showAddWindow')}>
        <AddMonster
          monster={this.state.selectedMonster}
          submitEvent={this.addMonster}
        />
      </Modal>
    );
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
    const modal = showAddWindow ? this.setModal() : null;
    return (
      <div>
        <TocContainer
          buttonEvent={this.setSelectedMonster}
          data={data}
        />
        <Monster
          data={selectedMonster}
          handleAddWindow={() => this.toggleAny('showAddWindow')}
        />
        {modal}
        <SlidePanel
          closeEvent={() => this.toggleAny('showConfirmWindow')}
          show={showConfirmWindow}
          timer={3000}
        >
          <RecentMonster monsters={monsters} />
        </SlidePanel>
      </div>
    );
  }
}
