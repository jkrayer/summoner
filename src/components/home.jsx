import React from 'react';
import TocContainer from './toc-container';
import MonsterContainer from './monster-container';
import Modal from './modal';
import AddMonsterContainer from './c_add-monster';
import SlidePanel from './slide-panel';
import RecentMonster from './recent-monster';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.setModal = this.setModal.bind(this);
  }
  setModal() {
    const { toggleAddWindow } = this.props;
    return (
      <Modal closeEvent={toggleAddWindow}>
        <AddMonsterContainer />
      </Modal>
    );
  }
  render() {
    const { data,
            monsterPaneIsVisable,
            monsters,
            selectedMonster,
            setMonsterPaneVisability,
            setSelectedMonster,
            showAddWindow,
            showConfirmWindow,
            toggleAddWindow,
            toggleShowWindow } = this.props;
    const modal = showAddWindow ? this.setModal() : null;
    return (
      <div>
        <TocContainer
          buttonEvent={setSelectedMonster}
          data={data}
        />
        <MonsterContainer />
        {modal}
        <SlidePanel
          closeEvent={toggleShowWindow}
          show={showConfirmWindow}
          timer={3000}
        >
          <RecentMonster monsters={monsters} />
        </SlidePanel>
      </div>
    );
  }
}

Home.propTypes = {
  addMonster: React.PropTypes.func,
  data: React.PropTypes.arrayOf(React.PropTypes.object),
  monsters: React.PropTypes.arrayOf(
    React.PropTypes.shape()
  ),
  selectedMonster: React.PropTypes.shape(),
  setSelectedMonster: React.PropTypes.func,
  showAddWindow: React.PropTypes.bool,
  showConfirmWindow: React.PropTypes.bool,
  toggleAddWindow: React.PropTypes.func,
  toggleShowWindow: React.PropTypes.func
};
