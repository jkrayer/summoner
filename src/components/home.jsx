import React from 'react';
import TocContainer from './c_toc';
import MonsterContainer from './c_monster';
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
    const { closeSlidePane, modalIsVisible, slidePanelVisable } = this.props;
    const modal = (modalIsVisible) ? this.setModal() : null;
    return (
      <div>
        <TocContainer />
        <MonsterContainer />
        {modal}
        <SlidePanel
          closeEvent={closeSlidePane}
          show={slidePanelVisable}
          timer={3000}
        >
        </SlidePanel>
      </div>
    );
  }
}

Home.propTypes = {
  closeSlidePane: React.PropTypes.func.isRequired,
  modalIsVisible: React.PropTypes.bool.isRequired,
  slidePanelVisable: React.PropTypes.bool.isRequired
};

/*
<RecentMonster monsters={monsters} />
*/
