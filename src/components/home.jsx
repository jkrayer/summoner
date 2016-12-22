import React from 'react';
import TocContainer from './c_toc';
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
    return (
      <div>
        <TocContainer />
        <MonsterContainer />
        {modal}
      </div>
    );
  }
}

Home.propTypes = {
  addMonster: React.PropTypes.func,
  monsters: React.PropTypes.arrayOf(
    React.PropTypes.shape()
  ),
  showAddWindow: React.PropTypes.bool,
  showConfirmWindow: React.PropTypes.bool,
  toggleShowWindow: React.PropTypes.func
};

/*
const { monsters,
        showAddWindow,
        showConfirmWindow,
        toggleShowWindow } = this.props;
const modal = showAddWindow ? this.setModal() : null; // Needs Access To state.modalIsVisible
<SlidePanel
  closeEvent={toggleShowWindow}
  show={showConfirmWindow}
  timer={3000}
>
  <RecentMonster monsters={monsters} />
</SlidePanel>
*/
