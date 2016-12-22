import React from 'react';
import TocContainer from './toc-container';
import MonsterContainer from './monster-container';
import ModalContainer from './c_modal';
import AddMonsterContainer from './c_add-monster';
import SlidePanel from './slide-panel';
import RecentMonster from './recent-monster';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.setModal = this.setModal.bind(this);
  }
  setModal() {
    return (
      <ModalContainer>
        <AddMonsterContainer />
      </ModalContainer>
    );
  }
  render() {
    const { data,
            monsters,
            setMonsterPaneVisability,
            setSelectedMonster,
            showAddWindow,
            showConfirmWindow,
            toggleShowWindow } = this.props;
    const modal = showAddWindow ? this.setModal() : null; // Needs Access To state.modalIsVisible
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
  setSelectedMonster: React.PropTypes.func,
  showAddWindow: React.PropTypes.bool,
  showConfirmWindow: React.PropTypes.bool,
  toggleShowWindow: React.PropTypes.func
};
