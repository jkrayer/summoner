import React from 'react';
import TocContainer from '../container/toc';
import MonsterContainer from '../container/monster';
import AddMonsterContainer from '../container/add-monster';
import Modal from './modal';
import SlidePanel from './slide-panel';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.setModal = this.setModal.bind(this);
  }
  setModal() {
    const { closeModal } = this.props;
    return (
      <Modal closeEvent={closeModal}>
        <AddMonsterContainer />
      </Modal>
    );
  }
  render() {
    const { closeSlidePane, encounter, modalIsVisible, slidePanelVisable } = this.props;
    const modal = (modalIsVisible) ? this.setModal() : null;
    const name = (encounter.length) ? encounter[encounter.length - 1].monster.name : null;
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
          <p>{['Added:', name].join(' ')}</p>
        </SlidePanel>
      </div>
    );
  }
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
