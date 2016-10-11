import React from 'react';
import TocContainer from './toc-container';
import Monster from './monster';
import Modal from './modal';
import AddMonster from './add-monster';
import SlidePanel from './slide-panel';

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
      selectedMonster: this.props.data[key] || null
    });
  }
  addMonster(newMonster) {
    this.setState({
      monsters: this.state.monsters.concat(newMonster)
    });
    this.toggleAny('showAddWindow');
  }
  toggleAny(key) {
    const obj = {};
    obj[key] = !this.state[key];
    this.setState(obj);
  }
  render() {
    const { data } = this.props;
    const { selectedMonster, showAddWindow, showConfirmWindow } = this.state;
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
          <div />
        </SlidePanel>
      </div>
    );
  }
}

App.propTypes = {
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  )
};
