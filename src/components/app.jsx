import React from 'react';
import TocContainer from './toc-container';
import Monster from './monster';
import Modal from './modal';
import AddMonster from './add-monster';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      selectedMonster: null,
      showAddWindow: false
    };
    this.setSelectedMonster = this.setSelectedMonster.bind(this);
    this.toggleAddWindow = this.toggleAddWindow.bind(this);
    this.addMonster = this.addMonster.bind(this);
  }
  setModal() {
    return (
      <Modal closeEvent={this.toggleAddWindow}>
        <AddMonster
          monster={this.state.selectedMonster}
          submitEvent={this.addMonster}
        />
      </Modal>
    );
  }
  addMonster(newMonster) {
    this.setState({
      monsters: this.state.monsters.concat(newMonster)
    });
    this.toggleAddWindow();
  }
  setSelectedMonster(key) {
    this.setState({
      selectedMonster: this.props.data[key] || null
    });
  }
  toggleAddWindow() {
    this.setState({
      showAddWindow: !this.state.showAddWindow
    });
  }
  render() {
    const { data } = this.props;
    const { selectedMonster, showAddWindow } = this.state;
    const modal = showAddWindow ? this.setModal() : null;
    return (
      <div>
        <TocContainer
          buttonEvent={this.setSelectedMonster}
          data={data}
        />
        <Monster
          data={selectedMonster}
          handleAddWindow={this.toggleAddWindow}
        />
        {modal}
      </div>
    );
  }
}

App.propTypes = {
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  )
};
