import React from 'react';
import TocContainer from '../container/toc';
import MonsterContainer from '../container/monster';
import AddMonsterContainer from '../container/add-monster';
import Modal from './modal';
import SlidePanel from './slide-panel';

export default function Home(props) {
  const {
    closeModal,
    closeSlidePane,
    encounter,
    modalIsVisible,
    slidePanelVisable
  } = props;
  const name = (encounter.length) ? encounter[encounter.length - 1].monster.name : null;

  return (
    <div>
      <TocContainer />
      <MonsterContainer />
      <Modal
        closeEvent={closeModal}
        show={modalIsVisible}
      >
        <AddMonsterContainer />
      </Modal>
      <SlidePanel
        closeEvent={closeSlidePane}
        show={slidePanelVisable}
        timer={3000}
      >
        <p>{['Added:', name].join(' ')}</p>
      </SlidePanel>
    </div>
  );
}

Home.propTypes = {
  closeModal: React.PropTypes.func.isRequired,
  closeSlidePane: React.PropTypes.func.isRequired,
  encounter: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  ),
  modalIsVisible: React.PropTypes.bool.isRequired,
  slidePanelVisable: React.PropTypes.bool.isRequired
};
